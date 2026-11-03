import Link from "next/link";
import { ArrowRight, CalendarDays, CircleCheck, Users, WalletCards } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const steps = [
  { icon: Users, n: "01", title: "Set up your workspace", text: "Create your company space, choose working days, add holidays, and invite the people you work with." },
  { icon: CalendarDays, n: "02", title: "Make a request", text: "Choose a time off type and dates. Daymark shows the working day count before the request is sent." },
  { icon: CircleCheck, n: "03", title: "Review with context", text: "Managers can review the request, check approved team absences, and record their decision." },
  { icon: WalletCards, n: "04", title: "Keep plans in view", text: "Employees can follow request status and remaining days. Teams can see upcoming approved leave." },
];

export default function HowItWorks() {
  return <main className="marketing-shell">
    <header className="marketing-nav"><Link href="/" className="brand-lockup"><span className="daymark-mark"><span/><span/><span/><span/></span><span>daymark</span></Link><nav className="marketing-links"><Link href="/features">Product</Link><Link href="/HowItWorks">How it works</Link><Link href="/#principles">Our approach</Link></nav><div className="nav-actions"><SignedOut><SignInButton forceRedirectUrl="/onboarding"><button className="text-link-button">Sign in</button></SignInButton><SignUpButton mode="modal" forceRedirectUrl="/onboarding"><button className="button button-dark button-small">Get started <ArrowRight size={15}/></button></SignUpButton></SignedOut><SignedIn><UserButton/></SignedIn></div></header>
    <section className="feature-page-hero"><div className="eyebrow">A LITTLE MORE CLARITY, STEP BY STEP</div><h1>From “I need a day”<br/>to <em>all set.</em></h1><p>One shared place for the small steps that make time off easier for people and the teams around them.</p></section>
    <section className="how-steps">{steps.map(({icon:Icon,n,title,text})=><article className="how-step" key={n}><div className="how-step-count">{n}</div><div className="how-step-icon"><Icon size={22}/></div><div><h2>{title}</h2><p>{text}</p></div><ArrowRight className="how-step-arrow" size={17}/></article>)}</section>
    <section className="feature-page-cta"><div><div className="eyebrow">TIME AWAY, WELL TAKEN</div><h2>Make room for a better<br/>way to plan leave.</h2></div><SignUpButton mode="modal" forceRedirectUrl="/onboarding"><button className="button button-dark">Get started <ArrowRight size={15}/></button></SignUpButton></section>
    <footer className="site-footer"><Link href="/" className="brand-lockup"><span className="daymark-mark"><span/><span/><span/><span/></span><span>daymark</span></Link><span>More life in every workday.</span><div><Link href="/features">Product</Link><Link href="/HowItWorks">How it works</Link><span>© {new Date().getFullYear()} Daymark</span></div></footer>
  </main>;
}
