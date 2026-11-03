import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight, CalendarDays, CircleCheck, Clock3, Plus } from "lucide-react";

export default async function EmployeeDashboard() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const user = await prisma.user.findUnique({ where: { clerkId: userId }, select: { id: true, firstName: true, availableDays: true } });
  if (!user) redirect("/onboarding");
  const requests = await prisma.timeOffRequest.findMany({ where: { employeeId: user.id }, orderBy: { createdAt: "desc" }, take: 5 });
  const pending = requests.filter((request)=>request.status === "PENDING").length;
  const approved = requests.filter((request)=>request.status === "APPROVED").length;
  return <div className="workspace-page">
    <div className="employee-welcome"><div><div className="eyebrow">YOUR TIME, AT A GLANCE</div><h1>Good to see you, {user.firstName}.</h1><p>Make a little room for the things that matter.</p></div><Link href="/employee/new-request" className="button button-dark"><Plus size={16}/> Request time off</Link></div>
    <div className="employee-balance"><div><span className="balance-caption">YOUR AVAILABLE TIME</span><div className="balance-number">{user.availableDays}<small> days</small></div><span className="balance-note">Available to plan and request</span></div><div className="balance-art"><CalendarDays size={48}/><span>Make it count.</span></div></div>
    <div className="employee-stats"><div><Clock3 size={16}/><span><b>{pending}</b> awaiting a decision</span></div><div><CircleCheck size={16}/><span><b>{approved}</b> approved requests</span></div></div>
    <section className="overview-panel employee-requests"><div className="panel-heading"><div><h2>Your recent requests</h2><p>Stay up to date on your plans</p></div><Link href="/employee/my-requests">See all <ArrowRight size={13}/></Link></div>{requests.length ? <div className="upcoming-list">{requests.map((item)=><div className="upcoming-item" key={item.id}><span className={`request-status-icon ${item.status.toLowerCase()}`}>{item.status === "APPROVED"?<CircleCheck size={15}/>:<Clock3 size={15}/>}</span><div><b>{item.type.toLowerCase().replace(/^./,(c)=>c.toUpperCase())}</b><small>{item.startDate.toLocaleDateString("en",{month:"short",day:"numeric",timeZone:"UTC"})} – {item.endDate.toLocaleDateString("en",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})} · {item.workingDaysCount} days</small></div><span className={`request-status-label ${item.status.toLowerCase()}`}>{item.status.toLowerCase().replace(/^./,(c)=>c.toUpperCase())}</span></div>)}</div>:<div className="overview-empty"><CalendarDays size={20}/><span>Your next chapter can start with a little time off.</span><Link href="/employee/new-request">Create a request <ArrowRight size={13}/></Link></div>}</section>
  </div>;
}
