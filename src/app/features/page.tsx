import Link from "next/link";
import { ArrowRight, CalendarDays, Check, CircleCheck, Settings2, Users, WalletCards } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Features() {
  const features = [
    { icon: CalendarDays, title: "Requests that make sense", text: "Pick dates, choose a leave type, and see how working days are counted before you submit." },
    { icon: CircleCheck, title: "A clear review process", text: "Managers can review requests, make a decision, and leave a record the employee can find later." },
    { icon: Users, title: "Shared team availability", text: "See upcoming approved leave across your workspace and plan coverage with more context." },
    { icon: WalletCards, title: "Balances in view", text: "Employees can see their available days and request history in one place." },
    { icon: Settings2, title: "Your working calendar", text: "Set working days and company holidays to make leave calculations fit your team." },
    { icon: Check, title: "A tidy workspace", text: "Bring team members in with invitations and keep company details and people together." },
  ];
  return <main className="marketing-shell">
    <header className="marketing-nav"><Link href="/" className="brand-lockup"><span className="daymark-mark"><span/><span/><span/><span/></span><span>daymark</span></Link><nav className="marketing-links"><Link href="/features">Product</Link><Link href="/HowItWorks">How it works</Link><Link href="/#principles">Our approach</Link></nav><div className="nav-actions"><SignedOut><SignInButton forceRedirectUrl="/onboarding"><button className="text-link-button">Sign in</button></SignInButton><SignUpButton mode="modal" forceRedirectUrl="/onboarding"><button className="button button-dark button-small">Get started <ArrowRight size={15}/></button></SignUpButton></SignedOut><SignedIn><UserButton/></SignedIn></div></header>
    <section className="feature-page-hero"><div className="eyebrow">THE DAYMARK WORKSPACE</div><h1>Everything in its<br/><em>right place.</em></h1><p>Small, thoughtful tools to help your team request time away, make decisions, and plan together.</p></section>
    <section className="feature-page-grid">{features.map(({icon:Icon,title,text},i)=><article className="feature-page-card" key={title}><span className="feature-icon icon-sage"><Icon size={20}/></span><span className="feature-index">0{i+1} / DAYMARK</span><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="feature-page-cta"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Give your team a clearer way<br/>to take time away.</h2></div><SignUpButton mode="modal" forceRedirectUrl="/onboarding"><button className="button button-dark">Get started <ArrowRight size={15}/></button></SignUpButton></section>
    <footer className="site-footer"><Link href="/" className="brand-lockup"><span className="daymark-mark"><span/><span/><span/><span/></span><span>daymark</span></Link><span>More life in every workday.</span><div><Link href="/features">Product</Link><Link href="/HowItWorks">How it works</Link><span>© {new Date().getFullYear()} Daymark</span></div></footer>
  </main>;
}
