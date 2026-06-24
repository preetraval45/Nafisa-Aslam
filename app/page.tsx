import Image from "next/image";
import Link from "next/link";
import Metrics from "@/components/Metrics";
import { PROFILE } from "@/lib/data";

export default function Home() {
  return (
    <section className="page hero">
      <div className="hero__text">
        <span className="status-pill">
          <span className="status-pill__dot" />
          Incoming · Business &amp; Finance Journalism, ACJ Chennai
        </span>
        <p className="hero__eyebrow">📍 {PROFILE.location}</p>
        <h1 className="hero__name">
          Nafisa<br />Aslam
        </h1>
        <p className="hero__role">
          Business &amp; Finance Journalist <span className="dot">·</span> Political Science Postgraduate
        </p>
        <p className="hero__intro">
          A Political Science postgraduate heading to the{" "}
          <strong>Asian College of Journalism, Chennai</strong> to specialize in{" "}
          <strong>Business &amp; Finance Journalism.</strong> I turn complex information — markets,
          policy, and the economy — into clear, well-researched stories that help people understand
          the forces shaping their world.
        </p>
        <div className="hero__cta">
          <Link href="/research" className="btn btn--primary">View My Work</Link>
          <Link href="/contact" className="btn btn--ghost">Get in Touch</Link>
          <a href={PROFILE.resume} download className="btn btn--ghost">⬇ Résumé</a>
        </div>
        <div className="hero__social">
          <a href={`mailto:${PROFILE.email}`}>✉ {PROFILE.email}</a>
          <a href={`tel:${PROFILE.phoneHref}`}>☎ {PROFILE.phone}</a>
        </div>
      </div>

      <div className="hero__photo">
        <div className="avatar">
          <div className="avatar__spin" />
          <div className="avatar__img">
            <Image src={PROFILE.photo} alt="Nafisa Aslam" width={420} height={420} priority />
          </div>
        </div>
        <div className="avatar__badge avatar__badge--1">M.A. Political Science</div>
        <div className="avatar__badge avatar__badge--2">Business &amp; Finance Journalism</div>
      </div>

      <div className="hero__metrics">
        <div className="ticker">
          <div className="ticker__track">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["Markets", "Economy", "Public Policy", "Business", "Governance", "Public Affairs", "Finance"].map(
                (t) => <span key={`${k}-${t}`}>{t}</span>
              )
            )}
          </div>
        </div>
        <Metrics />
      </div>
    </section>
  );
}
