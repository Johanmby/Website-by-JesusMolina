import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const { t } = useApp();

  return (
    <section className="pricing" id="planes">
      <div className="section-eyebrow" data-reveal>{t.pricingEyebrow}</div>
      <h2 className="section-title" data-reveal>{t.pricingTitle}</h2>
      <p className="pricing-sub" data-reveal>
        {t.pricingSub}
      </p>

      <div className="pricing-toggle" data-reveal>
        <span className={`pricing-toggle-label${!yearly ? ' active' : ''}`}>{t.pricingMonthly}</span>
        <button
          className={`pricing-switch${yearly ? ' on' : ''}`}
          aria-label="Cambiar a pago anual"
          onClick={() => setYearly((v) => !v)}
        >
          <span className="pricing-switch-knob"></span>
        </button>
        <span className={`pricing-toggle-label${yearly ? ' active' : ''}`}>
          {t.pricingYearly} <em>{t.pricingYearlyNote}</em>
        </span>
      </div>

      <div className="pricing-grid">
        {t.pricingPlans.map((plan) => (
          <div
            className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''}`}
            data-reveal
            key={plan.id}
          >
            {plan.badge && <div className="pricing-card-badge">{plan.badge}</div>}
            <h3>{plan.name}</h3>
            <p className="pricing-card-desc">{plan.desc}</p>
            <div className="pricing-card-price">
              <span className="price-currency">$</span>
              <span className="price-amount" style={{ opacity: 1 }}>
                {yearly ? plan.yearly : plan.monthly}
              </span>
              <span className="price-period">{yearly ? t.pricingPeriodYearly : t.pricingPeriodMonthly}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#contacto" className={`btn btn-${plan.ctaVariant === 'primary' ? 'primary' : 'outline-dark'}`}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="pricing-footnote" data-reveal>
        {t.pricingFootnote} <a href="#contacto">{t.pricingFootnoteLink}</a>
      </p>
    </section>
  );
}
