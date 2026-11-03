import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { CalendarDays, ClipboardList, Cog, LayoutDashboard, Users } from "lucide-react";

function Mark() { return <span className="daymark-mark" aria-hidden="true"><span/><span/><span/><span/></span>; }

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { sessionClaims } = await auth();
  const role = sessionClaims?.metadata?.role;
  const isAdmin = role === "ADMIN";
  const links = isAdmin ? [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/time-off-requests", label: "Requests", icon: ClipboardList },
    { href: "/admin/team-calendar", label: "Team calendar", icon: CalendarDays },
    { href: "/admin/employees", label: "People", icon: Users },
    { href: "/admin/company-settings", label: "Workspace", icon: Cog },
  ] : [
    { href: "/employee", label: "Overview", icon: LayoutDashboard },
    { href: "/employee/new-request", label: "Request time off", icon: CalendarDays },
    { href: "/employee/my-requests", label: "My requests", icon: ClipboardList },
  ];
  return <div className="app-frame">
    <aside className="app-sidebar">
      <Link href="/" className="brand-lockup"><Mark/><span>daymark</span></Link>
      <div className="sidebar-label">WORKSPACE</div>
      <nav className="sidebar-nav">{links.map(({href,label,icon:Icon})=><Link href={href} key={href}><Icon size={17}/>{label}</Link>)}</nav>
      <div className="sidebar-bottom"><div className="sidebar-status"><span/> All caught up</div><div className="sidebar-help">A little more room<br/>to breathe.</div><span className="sidebar-version">DAYMARK · TIME OFF, MADE CLEAR</span></div>
    </aside>
    <div className="app-main"><header className="app-topbar"><div className="mobile-brand"><Mark/> daymark</div><span className="topbar-context">{isAdmin ? "People & time" : "Your time"}</span><UserButton afterSignOutUrl="/"/></header><main className="app-content">{children}</main></div>
  </div>;
}
