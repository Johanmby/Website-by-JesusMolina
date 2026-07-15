import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CONCERTS, TOUR_MARKERS } from '../data/concerts';

export default function Concerts() {
  const { t } = useApp();
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [playingId, setPlayingId] = useState(null);

  const activeMarker = TOUR_MARKERS.find((m) => m.id === hoveredMarker);

  return (
    <section className="concerts-page">
      <div className="concerts-bg-piano-strings" aria-hidden="true" />
      <div className="concerts-ambient-glow-1" aria-hidden="true" />
      <div className="concerts-ambient-glow-2" aria-hidden="true" />

      <div className="concerts-container">
        <header className="concerts-header" data-reveal>
          <span className="section-eyebrow">{t.concertsEyebrow2}</span>
          <h1 className="section-title">
            Jesús Molina <em>{t.concerts}</em>
          </h1>
          <p className="concerts-subtitle">{t.concertsSubtitle}</p>
        </header>

        {/* ── World Tour Map — Premium redesign ── */}
        <div className="concerts-map-section" data-reveal>
          <div className="map-card">
            <div className="map-header">
              <div className="map-header-left">
                <span className="map-badge">
                  <span className="map-badge-dot" />
                  World Tour
                </span>
                <h3 className="map-title">{t.concertsMapTitle}</h3>
              </div>
              <p className="map-desc">{t.concertsMapDesc}</p>
            </div>

            <div className="map-canvas-container">
              <svg
                className="world-map-svg"
                viewBox="0 0 1000 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(201,162,39,0.12)" />
                    <stop offset="100%" stopColor="rgba(14,13,15,0)" />
                  </radialGradient>
                  <linearGradient id="tourPath" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(201,162,39,0.08)" />
                    <stop offset="50%" stopColor="rgba(201,162,39,0.55)" />
                    <stop offset="100%" stopColor="rgba(201,162,39,0.08)" />
                  </linearGradient>
                  <filter id="markerGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect width="1000" height="500" fill="url(#mapGlow)" rx="18" />

                {/* Refined continent shapes */}
                <g className="map-continents" opacity="0.25">
                  {/* North America */}
                  <path d="M80 100 Q120 80 180 90 Q220 85 260 100 Q280 110 270 140 Q260 170 250 190 Q230 210 200 230 Q180 250 160 260 Q140 240 130 220 Q110 200 100 170 Q90 140 80 120Z" stroke="rgba(247,241,230,0.15)" strokeWidth="1" fill="rgba(247,241,230,0.03)" />
                  {/* South America */}
                  <path d="M240 280 Q260 270 280 280 Q300 290 310 320 Q315 350 300 380 Q285 410 270 420 Q255 410 250 390 Q240 360 235 330 Q232 300 240 280Z" stroke="rgba(247,241,230,0.15)" strokeWidth="1" fill="rgba(247,241,230,0.03)" />
                  {/* Europe */}
                  <path d="M440 80 Q460 75 490 85 Q520 90 540 100 Q550 115 540 130 Q530 145 510 150 Q490 148 470 140 Q455 130 445 115 Q440 100 440 80Z" stroke="rgba(247,241,230,0.15)" strokeWidth="1" fill="rgba(247,241,230,0.03)" />
                  {/* Africa */}
                  <path d="M470 170 Q490 160 520 170 Q540 185 550 210 Q560 250 555 290 Q545 330 530 350 Q510 360 490 340 Q475 310 468 270 Q462 230 465 200Z" stroke="rgba(247,241,230,0.12)" strokeWidth="1" fill="rgba(247,241,230,0.02)" />
                  {/* Asia */}
                  <path d="M580 70 Q640 60 720 80 Q780 95 830 120 Q870 140 880 170 Q875 200 850 220 Q820 235 780 230 Q740 225 700 210 Q660 195 630 175 Q600 155 585 130 Q575 100 580 70Z" stroke="rgba(247,241,230,0.12)" strokeWidth="1" fill="rgba(247,241,230,0.02)" />
                  {/* Australia */}
                  <path d="M800 320 Q840 310 870 325 Q890 340 885 365 Q875 385 850 390 Q825 388 810 375 Q795 355 800 320Z" stroke="rgba(247,241,230,0.1)" strokeWidth="1" fill="rgba(247,241,230,0.02)" />
                </g>

                {/* Subtle grid lines */}
                {[200, 400, 600, 800].map((x) => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" stroke="rgba(247,241,230,0.04)" strokeWidth="0.5" strokeDasharray="4 8" />
                ))}
                {[125, 250, 375].map((y) => (
                  <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(247,241,230,0.04)" strokeWidth="0.5" strokeDasharray="4 8" />
                ))}

                {/* Tour route — animated dashed path */}
                <path
                  className="tour-path-line"
                  d="M 280 320 C 278 312 276 308 275 305 C 260 270 220 230 170 200 C 200 195 230 192 260 190 C 350 195 420 198 470 200 C 478 185 488 175 495 170 C 490 160 485 155 480 150 C 580 160 700 185 820 210"
                  stroke="url(#tourPath)"
                  strokeWidth="1.5"
                  strokeDasharray="8 5"
                  fill="none"
                />

                {/* Tour markers */}
                {TOUR_MARKERS.map((marker) => (
                  <g
                    key={marker.id}
                    className={`map-marker-group ${hoveredMarker === marker.id ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredMarker(marker.id)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    style={{ cursor: 'pointer' }}
                    filter={hoveredMarker === marker.id ? 'url(#markerGlow)' : undefined}
                  >
                    <circle cx={marker.x} cy={marker.y} r="18" className="marker-ripple" />
                    <circle cx={marker.x} cy={marker.y} r="10" className="marker-ring" />
                    <circle cx={marker.x} cy={marker.y} r="4.5" className="marker-dot" />
                    <text x={marker.x} y={marker.y + 24} textAnchor="middle" className="marker-label">
                      {marker.city}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Premium tooltip */}
              {activeMarker && (
                <div
                  className="map-tooltip"
                  style={{
                    left: `${(activeMarker.x / 1000) * 100}%`,
                    top: `${(activeMarker.y / 500) * 100}%`,
                  }}
                >
                  <div className="tooltip-header">
                    <span className="tooltip-year-badge">{activeMarker.year}</span>
                    <span className="tooltip-country">{activeMarker.country}</span>
                  </div>
                  <div className="tooltip-city">{activeMarker.city}</div>
                </div>
              )}
            </div>

            {/* Map legend */}
            <div className="map-legend">
              <div className="map-legend-item">
                <span className="legend-dot" />
                <span className="legend-text">{TOUR_MARKERS.length} ciudades</span>
              </div>
              <div className="map-legend-item">
                <span className="legend-line" />
                <span className="legend-text">Ruta de gira</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Concert Gallery — Editorial bento grid ── */}
        <div className="concerts-gallery-header" data-reveal>
          <div className="gallery-header-content">
            <h3 className="gallery-title">{t.concertsGalleryTitle}</h3>
            <p className="gallery-desc">{t.concertsGalleryDesc}</p>
          </div>
          <div className="gallery-stats">
            <div className="gallery-stat">
              <span className="stat-number">{CONCERTS.length}</span>
              <span className="stat-label">Shows</span>
            </div>
            <div className="gallery-stat">
              <span className="stat-number">{new Set(CONCERTS.map((c) => c.country)).size}</span>
              <span className="stat-label">Países</span>
            </div>
          </div>
        </div>

        <div className="concerts-gallery" data-reveal-stagger>
          {CONCERTS.map((concert, i) => {
            const isPlaying = playingId === concert.id;
            return (
              <article
                key={concert.id}
                className={`concert-card ${isPlaying ? 'playing' : ''} ${i === 0 ? 'concert-card--featured' : ''}`}
                data-reveal
                data-reveal-delay={i * 80}
              >
                <div className="concert-card-video">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${concert.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                      title={concert.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="concert-card-poster"
                      onClick={() => setPlayingId(concert.id)}
                      onKeyDown={(e) => e.key === 'Enter' && setPlayingId(concert.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${concert.title}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${concert.youtubeId}/hqdefault.jpg`}
                        alt={concert.title}
                        loading="lazy"
                      />
                      <div className="poster-overlay">
                        <div className="play-btn-wrap">
                          <div className="play-btn-ring" />
                          <svg className="play-btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <span className="concert-card-year">{concert.year}</span>
                    </div>
                  )}
                </div>
                <div className="concert-card-body">
                  <div className="concert-card-meta-row">
                    <span className="concert-card-live-dot" />
                    <span className="concert-card-location">
                      {concert.city}, {concert.country}
                    </span>
                  </div>
                  <h4 className="concert-card-title">{concert.title}</h4>
                  <p className="concert-card-venue">{concert.venue}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${concert.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="concert-card-cta"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{t.concertsWatchLive}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
