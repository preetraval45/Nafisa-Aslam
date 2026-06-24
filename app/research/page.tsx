export const metadata = { title: "Research" };

export default function Research() {
  return (
    <section className="page">
      <header className="page__head">
        <span className="page__tag">04 — Research &amp; Projects</span>
        <h1>Selected work</h1>
      </header>

      <article className="project">
        <span className="project__status">M.A. Dissertation · 2026</span>
        <div className="project__label">Dissertation · Qualitative Research Study</div>
        <h3>The Aspirational Districts Programme &amp; Governance Transformation in India</h3>
        <p>
          A qualitative research study on the Aspirational Districts Programme (ADP), examining its
          impact on bureaucratic leadership, decentralised governance, and centre–state relations.
        </p>
        <div className="project__methods">
          <span>Policy Analysis</span>
          <span>Thematic Content Analysis</span>
          <span>Process Tracing</span>
        </div>
        <div className="project__finding">
          <strong>Key finding:</strong> Using policy analysis, thematic content analysis, and process
          tracing, the research found that while the ADP improves administrative accountability and
          development outcomes through <em>performance monitoring</em>, it also creates tensions
          between decentralisation and centralised evaluative control.
        </div>
      </article>
    </section>
  );
}
