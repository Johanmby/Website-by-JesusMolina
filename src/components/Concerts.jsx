import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { useApp } from '../context/AppContext';
import { CONCERTS, GLOBE_LOCATIONS, GLOBE_ARCS } from '../data/concerts';

export default function Concerts() {
  const { t } = useApp();
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = false;
      controls.enableZoom = false;
    }
  }, []);

  const activeMarker = null; // No longer needed for globe since it has native labels if needed, or we can use custom markers.


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
              <div 
                className="globe-wrapper" 
                style={{ width: '100%', height: '100%', cursor: 'grab' }}
                onMouseEnter={() => setHoveredMarker('globe')}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <Globe
                  ref={globeEl}
                  width={1000}
                  height={700}
                  backgroundColor="rgba(0,0,0,0)"
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                  atmosphereColor="#C9A227"
                  atmosphereAltitude={0.15}
                  
                  // Rings for cities
                  ringsData={GLOBE_LOCATIONS}
                  ringLat="lat"
                  ringLng="lng"
                  ringColor="color"
                  ringMaxRadius={2}
                  ringPropagationSpeed={2.5}
                  ringRepeatPeriod={800}

                  // Points/Dots — larger radius = bigger hitbox
                  pointsData={GLOBE_LOCATIONS}
                  pointLat="lat"
                  pointLng="lng"
                  pointColor={() => '#C9A227'}
                  pointAltitude={0.01}
                  pointRadius={0.8}
                  
                  // Premium HTML Tooltip on hover
                  pointLabel={(d) => `
                    <div class="globe-tooltip" style="pointer-events:none;">
                      <div class="tooltip-header">
                        <span class="tooltip-city">${d.city}</span>, <span class="tooltip-country">${d.country}</span>
                      </div>
                      <div class="tooltip-details">
                        <span class="tooltip-date">${d.date}</span>
                        <span class="tooltip-venue">${d.venue}</span>
                      </div>
                    </div>
                  `}

                  // Arcs (airline routes)
                  arcsData={GLOBE_ARCS}
                  arcStartLat="startLat"
                  arcStartLng="startLng"
                  arcEndLat="endLat"
                  arcEndLng="endLng"
                  arcColor="color"
                  arcDashLength={0.4}
                  arcDashGap={4}
                  arcDashInitialGap={() => Math.random() * 5}
                  arcDashAnimateTime={2000}
                  arcAltitudeAutoScale={0.3}
                />
              </div>


            </div>

            {/* Map legend */}
            <div className="map-legend">
              <div className="map-legend-item">
                <span className="legend-dot" />
                <span className="legend-text">+60 países visitados</span>
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
