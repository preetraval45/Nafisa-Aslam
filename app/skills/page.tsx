import { skills } from "@/lib/data";

export const metadata = { title: "Skills" };

export default function Skills() {
  return (
    <section className="page">
      <header className="page__head">
        <span className="page__tag">03 — Capabilities</span>
        <h1>Technical skills &amp; toolkit</h1>
        <p className="page__sub">The analytical methods and tools I work with.</p>
      </header>

      <div className="skills">
        {skills.map((s, i) => (
          <div className="skill-col" key={s.title} style={{ animationDelay: `${i * 0.1}s` }}>
            <h4>{s.title}</h4>
            <div className="chips">
              {s.items.map((it) => (
                <span key={it}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
