import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PlatformIcon } from './platformIcons';

export default function PlatformsModal({ isOpen, onClose, coverImage, title, artists, platforms }) {
  const { t } = useApp();

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) {
    // Keep it in DOM with hidden visibility for transition
    // Actually, CSS handles the fade out, so we render it always, just toggle class
  }

  return (
    <div
      className={`pm-overlay ${isOpen ? 'is-open' : ''}`}
      onClick={(e) => {
        // Close if clicking the overlay backdrop
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={t.platformsTitle}
    >
      <div className="pm-modal">
        <button
          className="pm-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>

        <div className="pm-header">
          <div className="pm-artwork-wrap">
            <div className="pm-glow"></div>
            <img src={coverImage} alt={title} className="pm-artwork" />
            <button
              className="pm-play-btn"
              aria-label={`Reproducir ${title}`}
              onClick={() => {
                if (platforms && platforms.length > 0) {
                  window.open(platforms[0].url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <h2 className="pm-title">{title}</h2>
          <p className="pm-artists">{artists}</p>
          <span className="pm-subtitle">{t.platformsSubtitle}</span>
        </div>

        <div className="pm-list">
          {platforms.map((p, i) => (
            <a
              key={p.platformName}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pm-row"
              style={{ '--row-i': i }}
            >
              <span className="pm-icon">
                <PlatformIcon id={p.iconId} size={22} />
              </span>
              <span className="pm-name">{p.platformName}</span>
              <span className="pm-action-btn">
                {p.isDownload ? t.platformsDownload : t.platformsPlay}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
