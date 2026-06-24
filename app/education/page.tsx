import { education, languages } from "@/lib/data";

export const metadata = { title: "Education" };

export default function Education() {
  return (
    <section className="page">
      <header className="page__head">
        <span className="page__tag">Education</span>
        <h1>Academic journey</h1>
      </header>

      <div className="timeline">
        {education.map((e, i) => (
          <div
            className={`tl-item${e.highlight ? " tl-item--hl" : ""}`}
            key={e.degree}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="tl-dot" />
            <div className="tl-date">{e.date}</div>
            <div className="tl-body">
              <h3>
                {e.degree}
                {e.highlight && <span className="tl-badge">Incoming</span>}
              </h3>
              <p className="tl-school">{e.school}</p>
              <p className="tl-detail">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="languages">
        <h4>Languages</h4>
        <div className="lang-row">
          {languages.map((l) => (
            <div className="lang" key={l}>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
