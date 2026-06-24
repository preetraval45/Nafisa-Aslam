import Link from "next/link";
import { PROFILE } from "@/lib/data";

export const metadata = { title: "About" };

const glance = [
  { k: "Based in", v: "Kolkata, India" },
  { k: "Incoming", v: "ACJ, Chennai" },
  { k: "Specializing in", v: "Business & Finance Journalism" },
  { k: "Languages", v: "English · Hindi · Bengali" },
];

export default function About() {
  return (
    <section className="page">
      <header className="page__head">
        <span className="page__tag">01 — About</span>
        <h1>
          Researcher first.<br />
          <em>Storyteller by purpose.</em>
        </h1>
      </header>

      <div className="about">
        <div className="about__text">
          <p>
            I&apos;m <strong>Nafisa Aslam</strong>, a motivated and analytical Political Science
            postgraduate from <strong>Presidency University, Kolkata</strong>, with a strong interest
            in political and social processes, public affairs, and policy.
          </p>
          <p>
            I&apos;m now heading to the <strong>Asian College of Journalism, Chennai</strong> to
            specialize in <strong>Business &amp; Finance Journalism</strong> — bringing my{" "}
            <em>research, critical thinking, and communication skills</em> to the stories behind
            markets, money, and the economy.
          </p>
          <p>
            I believe good financial journalism makes complex systems understandable and holds power
            to account. Adaptable, detail-oriented, and committed to continuous learning, I want to
            report stories that create <strong>clarity and positive impact.</strong>
          </p>
          <div className="about__cta">
            <Link href="/focus" className="btn btn--primary">Explore my focus →</Link>
            <a href={PROFILE.resume} download className="btn btn--ghost">⬇ Download Résumé</a>
          </div>
        </div>

        <aside className="glance">
          <h4>At a glance</h4>
          <dl>
            {glance.map((g) => (
              <div className="glance__row" key={g.k}>
                <dt>{g.k}</dt>
                <dd>{g.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
