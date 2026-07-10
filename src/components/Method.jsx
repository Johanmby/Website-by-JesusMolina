import { useApp } from '../context/AppContext';

const CHECK_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Method() {
  const { t } = useApp();

  return (
    <section className="method" id="metodo">
      <div className="method-header">
        <div className="section-eyebrow section-eyebrow-light" data-reveal>{t.methodEyebrow}</div>
        <h2 className="section-title section-title-light" data-reveal>{t.methodTitle}</h2>
        <p className="method-sub" data-reveal>
          {t.methodSub}
        </p>
      </div>

      {/* APP BENTO GRID */}
      <div className="bento" data-reveal>
        <div className="bento-cell bento-beginner">
          <span className="bento-eyebrow">{t.methodBentoBeginnerLabel}</span>
          <h4>{t.methodBentoBeginnerTitle}</h4>
          <p>{t.methodBentoBeginnerDesc}</p>
          <div className="bento-progress-mini">
            <div className="bento-progress-step">
              <span className="bento-progress-step-label">{t.methodBentoStep1}</span>
              <span className="bento-progress-check">✓</span>
            </div>
            <div className="bento-progress-step bento-progress-step-active">
              <span className="bento-progress-step-label">{t.methodBentoStep2}</span>
              <span className="bento-progress-check">…</span>
            </div>
          </div>
        </div>

        <div className="bento-cell bento-community">
          <div className="bento-community-avatars">
            <img src="https://i.pravatar.cc/80?img=12" alt="" />
            <img src="https://i.pravatar.cc/80?img=33" alt="" />
            <img src="https://i.pravatar.cc/80?img=47" alt="" />
            <span className="bento-community-plus">+</span>
          </div>
          <h4>{t.methodBentoCommunityTitle}</h4>
          <p>{t.methodBentoCommunityDesc}</p>
        </div>

        <div className="bento-cell bento-app">
          <span className="bento-eyebrow">{t.methodBentoAppLabel}</span>
          <h4>{t.methodBentoAppTitle}</h4>
          <p>{t.methodBentoAppDesc}</p>
          <div className="bento-phone-mini">
            <div className="bento-phone-mini-notch"></div>
            <div className="bento-phone-mini-status">
              <span>9:41</span>
              <span>●●●</span>
            </div>
            <div className="bento-phone-mini-screen">
              <span className="bento-phone-mini-track">Nocturno Op.9</span>
              <div className="bento-phone-mini-bars">
                {[40, 70, 30, 85, 50, 65, 35, 75, 45].map((h, i) => (
                  <span key={i} style={{ height: h + '%' }}></span>
                ))}
              </div>
              <div className="bento-phone-mini-progress"><span></span></div>
              <div className="bento-phone-mini-icons">
                <span className="bento-phone-mini-icon" style={{ background: 'var(--bronce)' }}></span>
                <span className="bento-phone-mini-icon" style={{ background: 'var(--vino)' }}></span>
                <span className="bento-phone-mini-icon" style={{ background: 'var(--niebla-claro)' }}></span>
              </div>
            </div>
          </div>
        </div>

        <div className="bento-cell bento-topics">
          <h4>{t.methodBentoTopicsTitle}</h4>
          <p>{t.methodBentoTopicsDesc}</p>
          <div className="bento-tags">
            {t.methodBentoTags.map((tag) => (
              <span className="bento-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop + Phone mockup showcase */}
      <div className="method-showcase">
        <div className="method-showcase-text" data-reveal>
          <h3>{t.methodShowcaseTitle}</h3>
          <p>
            {t.methodShowcaseDesc}
          </p>
          <ul className="method-showcase-list">
            {t.methodShowcaseItems.map((item, idx) => (
              <li key={idx}>{CHECK_ICON} {item}</li>
            ))}
          </ul>
        </div>

        <div className="method-showcase-visual" data-reveal>
          {/* Realistic Laptop mockup */}
          <div className="laptop-mock">
            <div className="laptop-lid">
              <div className="laptop-camera"></div>
              <div className="laptop-screen">
                <img src={`${import.meta.env.BASE_URL}images/laptop-screen.png`} alt="Plataforma de clases de piano" className="laptop-screen-img" />
              </div>
              <div className="laptop-screen-bezel"></div>
            </div>

          </div>

          {/* Realistic Phone overlapping the laptop */}
          <div className="device-phone-overlay" style={{ background: 'transparent', border: 'none', padding: 0 }}>
            <img src={`${import.meta.env.BASE_URL}images/phone-screen.png`} alt="Clase de piano en móvil" className="device-phone-screen-img" style={{ borderRadius: '24px', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="phone-glow"></div>
        </div>
      </div>
    </section>
  );
}

