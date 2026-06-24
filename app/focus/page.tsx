import { focusAreas } from "@/lib/data";

export const metadata = { title: "Focus" };

export default function Focus() {
  return (
    <section className="page">
      <header className="page__head">
        <span className="page__tag">Focus Areas</span>
        <h1>What I cover</h1>
        <p className="page__sub">
          Three areas where my research, analysis, and storytelling come together as a journalist.
        </p>
      </header>

      <div className="focus-grid">
        {focusAreas.map((f, i) => (
          <article className="focus-card" key={f.title} style={{ animationDelay: `${i * 0.12}s` }}>
            <span className="focus-card__num">0{i + 1}</span>
            <div className="focus-card__icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <ul>
              {f.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
