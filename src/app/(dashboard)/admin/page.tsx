import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight, CalendarDays, CircleCheck, Clock3, KeyRound, Users } from "lucide-react";

export default async function AdminDashboard() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const admin = await prisma.user.findUnique({ where: { clerkId: userId }, select: { companyId: true, company: { select: { name: true } } } });
  if (!admin) redirect("/onboarding");
  const [pending, approved, people, activeInvitations, upcoming] = await Promise.all([
    prisma.timeOffRequest.count({ where: { employee: { companyId: admin.companyId }, status: "PENDING" } }),
    prisma.timeOffRequest.count({ where: { employee: { companyId: admin.companyId }, status: "APPROVED" } }),
    prisma.user.count({ where: { companyId: admin.companyId, role: { in: ["EMPLOYEE", "ADMIN"] } } }),
    prisma.code.count({ where: { companyId: admin.companyId, used: false } }),
    prisma.timeOffRequest.findMany({ where: { employee: { companyId: admin.companyId }, status: "APPROVED", endDate: { gte: new Date() } }, include: { employee: { select: { firstName: true, lastName: true } } }, orderBy: { startDate: "asc" }, take: 4 }),
  ]);
  const stats = [{label:"Awaiting review",value:pending,icon:Clock3,tone:"gold"},{label:"Approved requests",value:approved,icon:CircleCheck,tone:"green"},{label:"People in your team",value:people,icon:Users,tone:"blue"},{label:"Active invitation codes",value:activeInvitations,icon:KeyRound,tone:"blue"}];
  return <div className="workspace-page">
    <div className="workspace-heading"><div><div className="eyebrow">YOUR WORKSPACE</div><h1>{admin.company?.name || "Team overview"}</h1><p>A clear view of what your people need and what’s coming up.</p></div><Link href="/admin/time-off-requests" className="button button-dark">Review requests <ArrowRight size={15}/></Link></div>
    <div className="overview-stats">{stats.map(({label,value,icon:Icon,tone})=><div className="overview-stat" key={label}><span className={`stat-icon ${tone}`}><Icon size={17}/></span><span className="stat-label">{label}</span><b>{value}</b></div>)}</div>
    <div className="overview-columns"><section className="overview-panel"><div className="panel-heading"><div><h2>Coming up</h2><p>Approved time away on the horizon</p></div><Link href="/admin/team-calendar">Team calendar <ArrowRight size={13}/></Link></div>{upcoming.length ? <div className="upcoming-list">{upcoming.map((item)=><div className="upcoming-item" key={item.id}><span className="upcoming-avatar">{item.employee.firstName.charAt(0)}{item.employee.lastName.charAt(0)}</span><div><b>{item.employee.firstName} {item.employee.lastName}</b><small>{item.type.toLowerCase()} · {item.workingDaysCount} working days</small></div><span className="upcoming-date">{item.startDate.toLocaleDateString("en",{month:"short",day:"numeric",timeZone:"UTC"})}</span></div>)}</div>:<div className="overview-empty"><CalendarDays size={20}/><span>No approved leave coming up yet.</span></div>}</section>
      <section className="overview-panel shortcuts-panel"><div className="panel-heading"><div><h2>Team management</h2><p>Manage your people and invitations</p></div></div><Link href="/admin/employees" className="shortcut-row"><span className="shortcut-symbol"><Users size={16}/></span><span><b>View Employees</b><small>Manage your team and balances</small></span><ArrowRight size={15}/></Link><Link href="/admin/invitation-codes" className="shortcut-row"><span className="shortcut-symbol"><KeyRound size={16}/></span><span><b>Invitation Codes</b><small>{activeInvitations} active code{activeInvitations === 1 ? "" : "s"} available</small></span><ArrowRight size={15}/></Link><Link href="/admin/company-settings" className="shortcut-row"><span className="shortcut-symbol"><CalendarDays size={16}/></span><span><b>Company settings</b><small>Working days, holidays, and profile</small></span><ArrowRight size={15}/></Link></section></div>
  </div>;
}
