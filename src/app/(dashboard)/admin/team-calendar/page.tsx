import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CalendarDays, Users } from "lucide-react";
import Link from "next/link";

const dateFormat = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export default async function TeamCalendarPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const currentUser = await prisma.user.findUnique({ where: { clerkId: userId }, select: { companyId: true } });
  if (!currentUser) redirect("/onboarding");
  const today = new Date(); today.setUTCHours(0, 0, 0, 0);
  const upcoming = await prisma.timeOffRequest.findMany({
    where: { employee: { companyId: currentUser.companyId }, status: "APPROVED", endDate: { gte: today } },
    include: { employee: { select: { firstName: true, lastName: true, department: true } } },
    orderBy: { startDate: "asc" }, take: 40,
  });
  return <div className="workspace-page">
    <div className="workspace-heading"><div><div className="eyebrow">PEOPLE &amp; TIME</div><h1>Team calendar</h1><p>A shared view of approved time away, so the team can plan ahead.</p></div><div className="workspace-heading-icon"><CalendarDays size={19}/></div></div>
    <div className="calendar-summary"><span><Users size={17}/></span><div><b>{upcoming.length} upcoming {upcoming.length === 1 ? "absence" : "absences"}</b><small>Approved requests from today onward</small></div></div>
    <div className="calendar-list">{upcoming.length ? upcoming.map((request)=><article className="absence-row" key={request.id}><div className="absence-date"><span>{dateFormat.format(request.startDate)}</span><i>→</i><span>{dateFormat.format(request.endDate)}</span></div><div className="absence-person"><span className="absence-avatar">{request.employee.firstName.charAt(0)}{request.employee.lastName.charAt(0)}</span><div><b>{request.employee.firstName} {request.employee.lastName}</b><small>{request.employee.department || "Team member"}</small></div></div><span className="absence-type">{request.type.toLowerCase().replace(/^./, (c)=>c.toUpperCase())}</span></article>) : <div className="calendar-empty"><CalendarDays size={24}/><b>Nothing scheduled yet</b><span>Approved time off will show here as your team makes plans.</span><Link href="/admin/time-off-requests">Review requests</Link></div>}</div>
    <p className="calendar-privacy">Only approved requests appear here. Private request notes are never shown on the team calendar.</p>
  </div>;
}
