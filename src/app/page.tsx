import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ArrowRight, CalendarDays, Check, ChevronRight, CircleCheck, Compass, Globe2, Leaf, ShieldCheck, Sparkles, Users, WalletCards } from "lucide-react";

function Mark() {
  return <span className="daymark-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

export default async function Home() {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata?.role === "ADMIN") redirect("/admin");
  if (sessionClaims?.metadata?.role === "EMPLOYEE") redirect("/employee");

  return <main className="marketing-shell">
    <header className="marketing-nav">
      <Link href="/" className="brand-lockup"><Mark /><span>daymark</span></Link>
      <nav className="marketing-links"><Link href="/features">Product</Link><Link href="/HowItWorks">How it works</Link><a href="#principles">Our approach</a></nav>
      <div className="nav-actions"><SignedOut><SignInButton forceRedirectUrl="/onboarding"><button className="text-link-button">Sign in</button></SignInButton><SignUpButton mode="modal" forceRedirectUrl="/onboarding"><button className="button button-dark button-small">Get started <ArrowRight size={15}/></button></SignUpButton></SignedOut><SignedIn><UserButton /></SignedIn></div>
    </header>

    <section className="hero-section">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot"/> PEOPLE-FIRST TIME OFF, MADE CLEAR</div>
        <h1>Time away,<br/><em>well taken.</em></h1>
        <p className="hero-description">A calmer way to request leave, plan around your team, and keep every balance in view.</p>
        <div className="hero-actions"><SignUpButton mode="modal" forceRedirectUrl="/onboarding"><button className="button button-dark">Bring clarity to your team <ArrowRight size={17}/></button></SignUpButton><Link href="/HowItWorks" className="button button-light">See how it works <ChevronRight size={17}/></Link></div>
        <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>A</span><span>+</span></div><span>Designed for teams across time zones</span></div>
      </div>
      <div className="hero-art" aria-label="Illustration of a team leave calendar">
        <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
        <div className="calendar-preview">
          <div className="preview-top"><div><span className="preview-overline">TEAM CALENDAR</span><strong>November 2026</strong></div><span className="preview-icon"><CalendarDays size={17}/></span></div>
          <div className="calendar-week"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div>
          <div className="calendar-grid">{[2,3,4,5,6,9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,1,2,3,4].map((d,i)=><span key={i} className={`${i===1?'today ':''}${[7,8,9].includes(i)?'leave-green ':''}${[17,18].includes(i)?'leave-yellow':''}`}>{d}</span>)}</div>
          <div className="preview-divider"/><div className="preview-out"><span className="avatar avatar-green">AM</span><span><b>Amara is away</b><small>Annual leave · Nov 10–12</small></span><span className="status-pill">Approved</span></div>
          <div className="preview-out"><span className="avatar avatar-orange">JL</span><span><b>Jordan is away</b><small>Personal · Nov 20–23</small></span><span className="status-pill">Approved</span></div>
        </div>
        <div className="float-note"><span className="float-check"><Check size={14}/></span><span><b>Request approved</b><small>Your plans are all set.</small></span></div>
        <div className="art-caption"><span>01</span> GOOD PLANS START WITH GOOD VISIBILITY</div>
      </div>
      <div className="hero-decoration">✳</div>
    </section>

    <section className="trust-strip"><span>THE SMALL THING THAT MAKES A BIG DIFFERENCE</span><div><span><Globe2 size={16}/> Clear across locations</span><i/><span><ShieldCheck size={16}/> Thoughtful by design</span><i/><span><Users size={16}/> Better for everyone</span></div></section>

    <section className="feature-section" id="principles"><div className="section-heading"><div><div className="eyebrow">MORE SPACE FOR THE GOOD WORK</div><h2>Leave should feel<br/><em>simple for everyone.</em></h2></div><p>Daymark brings the everyday pieces together, so people can focus on their work and their well-earned time away.</p></div>
      <div className="feature-grid">
        <article className="feature-card feature-card-large"><span className="feature-icon icon-sage"><CalendarDays size={21}/></span><span className="feature-index">01 / REQUEST</span><h3>Make plans<br/>without the paperwork.</h3><p>Choose your dates, see working days at a glance, and send a clear request in moments.</p><div className="mini-request"><div><span className="mini-label">YOUR REQUEST</span><b>Oct 8 — Oct 10</b></div><span className="mini-days">3 days</span></div></article>
        <article className="feature-card"><span className="feature-icon icon-peach"><WalletCards size={21}/></span><span className="feature-index">02 / BALANCES</span><h3>Know where<br/>you stand.</h3><p>See your available time off and request history without chasing a spreadsheet.</p><div className="balance-visual"><div><span>AVAILABLE</span><b>18 <small>days</small></b></div><div className="balance-track"><i/></div></div></article>
        <article className="feature-card"><span className="feature-icon icon-lilac"><Users size={21}/></span><span className="feature-index">03 / TEAM</span><h3>Plan with<br/>the whole team.</h3><p>Get a shared view of approved time away to help everyone plan with confidence.</p><div className="team-avatars"><span>AM</span><span>JL</span><span>SK</span><span>+4</span><small>team availability</small></div></article>
        <article className="feature-card feature-card-wide"><div><span className="feature-icon icon-blue"><CircleCheck size={21}/></span><span className="feature-index">04 / APPROVALS</span><h3>Decisions that<br/>keep things moving.</h3><p>Give managers a straightforward place to review requests and keep a clear record of decisions.</p><Link href="/features" className="inline-link">Explore the product <ArrowRight size={15}/></Link></div><div className="approval-card"><span className="approval-tag"><span/> PENDING REVIEW</span><b>Annual leave</b><span className="approval-dates">Amara M. · Nov 10–12 · 3 days</span><div className="approval-buttons"><span>Review request</span><Check size={15}/></div></div></article>
      </div>
    </section>
    <section className="closing-cta"><div className="cta-flower">✳</div><div><div className="eyebrow">A LITTLE MORE ROOM TO BREATHE</div><h2>Make time off<br/><em>the easy part.</em></h2></div><SignUpButton mode="modal" forceRedirectUrl="/onboarding"><button className="button button-cream">Get your team started <ArrowRight size={17}/></button></SignUpButton></section>
    <footer className="site-footer"><Link href="/" className="brand-lockup"><Mark/><span>daymark</span></Link><span>More life in every workday.</span><div><Link href="/features">Product</Link><Link href="/HowItWorks">How it works</Link><span>© {new Date().getFullYear()} Daymark</span></div></footer>
  </main>;
}
