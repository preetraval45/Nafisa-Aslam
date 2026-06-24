import { PROFILE } from "@/lib/data";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="page page--contact">
      <header className="page__head">
        <span className="page__tag">Contact</span>
        <h1>
          Let&apos;s tell a<br />
          <em>story</em> worth reading.
        </h1>
        <p className="page__sub">
          Open to journalism, research, and internship opportunities in business &amp; finance media.
        </p>
      </header>

      <div className="contact-cards">
        <a className="contact-card" href={`mailto:${PROFILE.email}`}>
          <span className="contact-card__icon">✉</span>
          <span className="contact-card__label">Email</span>
          <span className="contact-card__val">{PROFILE.email}</span>
        </a>
        <a className="contact-card" href={`tel:${PROFILE.phoneHref}`}>
          <span className="contact-card__icon">☎</span>
          <span className="contact-card__label">Phone</span>
          <span className="contact-card__val">{PROFILE.phone}</span>
        </a>
        <div className="contact-card">
          <span className="contact-card__icon">📍</span>
          <span className="contact-card__label">Location</span>
          <span className="contact-card__val">{PROFILE.location}</span>
        </div>
        <a className="contact-card contact-card--accent" href={PROFILE.resume} download>
          <span className="contact-card__icon">⬇</span>
          <span className="contact-card__label">Résumé</span>
          <span className="contact-card__val">Download PDF</span>
        </a>
      </div>
    </section>
  );
}
