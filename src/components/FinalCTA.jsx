import { useApp } from '../context/AppContext';

export default function FinalCTA() {
  const { t } = useApp();
  const titleParts = t.ctaTitle.split('|');

  return (
    <section className="final-cta" id="contacto">
      <div className="final-cta-staff" aria-hidden="true">
        <svg viewBox="0 0 1600 160" preserveAspectRatio="none">
          <line x1="0" y1="20" x2="1600" y2="20"></line>
          <line x1="0" y1="55" x2="1600" y2="55"></line>
          <line x1="0" y1="90" x2="1600" y2="90"></line>
          <line x1="0" y1="125" x2="1600" y2="125"></line>
          <line x1="0" y1="160" x2="1600" y2="160"></line>
        </svg>
      </div>
      <div className="final-cta-content">
        <div className="section-eyebrow section-eyebrow-light" data-reveal>{t.ctaEyebrow}</div>
        <h2 className="final-cta-title" data-reveal>{titleParts[0]}<br />{titleParts[1]}</h2>
        <p className="final-cta-sub" data-reveal>
          {t.ctaSub}
        </p>
        <div className="final-cta-actions" data-reveal>
          <a href="#" className="btn btn-primary btn-lg">
            <span>{t.ctaBtn}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#" className="final-cta-whatsapp">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.5c1.5.9 3.2 1.4 5.1 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.2 14.3c-.2.6-1.3 1.2-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.3 0 .5-.4.8-.9 1-1.1 1.3-.1.2-.2.4 0 .7.4.9 1.1 1.7 1.8 2.3.8.7 1.5 1.1 2 1.3.3.1.5.1.6-.1.3-.3.7-1 .9-1.3.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.9.3.1.5.2.5.4.1.2.1.7-.1 1.2z" />
            </svg>
            {t.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
