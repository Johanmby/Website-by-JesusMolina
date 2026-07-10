import { Fragment, useRef } from 'react';
import { usePianoCanvasBg } from '../hooks/usePianoCanvasBg';
import { useAnimatedCounters } from '../hooks/useAnimatedCounters';
import { heroStats } from '../data/heroStats';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const canvasRef = useRef(null);
  usePianoCanvasBg(canvasRef, 'inicio');
  useAnimatedCounters();
  const { t } = useApp();

  const statLabels = [t.heroStat1Label, t.heroStat2Label, t.heroStat3Label];

  //xddddddd
  return (
    <section className="hero" id="inicio">
      <canvas className="piano-canvas-bg" id="pianoCanvasBg" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="hero-bg-glow"></div>
      <div className="hero-staff" aria-hidden="true">
        <svg viewBox="0 0 1600 200" preserveAspectRatio="none">
          <line x1="0" y1="20" x2="1600" y2="20"></line>
          <line x1="0" y1="60" x2="1600" y2="60"></line>
          <line x1="0" y1="100" x2="1600" y2="100"></line>
          <line x1="0" y1="140" x2="1600" y2="140"></line>
          <line x1="0" y1="180" x2="1600" y2="180"></line>
        </svg>
      </div>

      <div className="hero-top">
        <div className="hero-content">
          <div className="hero-eyebrow" data-reveal>
            <span className="dot-pulse"></span>
            {t.heroEyebrow}
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line" data-reveal>{t.heroTitle1}</span>
            <span className="hero-title-line hero-title-accent" data-reveal>{t.heroTitle2}</span>
            <span className="hero-title-line" data-reveal>{t.heroTitle3}</span>
          </h1>

          <p className="hero-sub" data-reveal>
            {t.heroSub}
          </p>

          <div className="hero-actions" data-reveal>
            <a href="#planes" className="btn btn-primary">
              <span>{t.heroCta1}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#metodo" className="btn btn-ghost">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="1.2" />
                <path d="M14 11l9 6-9 6V11z" fill="currentColor" />
              </svg>
              <span>{t.heroCta2}</span>
            </a>
          </div>

          <div className="hero-stats" data-reveal>
            {heroStats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="hero-stat-divider"></div>}
                <div className="hero-stat">
                  <div className="hero-stat-row">
                    <span className="hero-stat-num" data-count={stat.count}>0</span>
                    <span className="hero-stat-suffix">{stat.suffix}</span>
                  </div>
                  <span className="hero-stat-label">{statLabels[i] || stat.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="hero-bubbles" data-reveal aria-hidden="true">
          <div className="hero-bubble hero-bubble-main">
            <img src={`${import.meta.env.BASE_URL}images/image1.png`} alt="Jesús Molina tocando piano" />
          </div>
          <div className="hero-bubble hero-bubble-small hero-bubble-float-1">
            <img src={`${import.meta.env.BASE_URL}images/image2.png`} alt="Jesús Molina en concierto" />
          </div>
          <div className="hero-bubble hero-bubble-small hero-bubble-float-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
          <div className="hero-bubble-tag hero-bubble-float-3">
            <span className="hero-bubble-tag-dot"></span>
            {t.heroBubbleTag}
          </div>
        </div>
      </div>

      <div className="hero-scrolldown">
        <span>{t.heroScrollDown}</span>
        <div className="hero-scrolldown-line"></div>
      </div>
    </section>
  );
}
