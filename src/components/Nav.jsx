import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavScroll } from '../hooks/useNavScroll';
import { useApp } from '../context/AppContext';

const LANGUAGES = ['en', 'es', 'fr'];

export default function Nav() {
  const { scrolled, onDark } = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { darkMode, setDarkMode, language, setLanguage, t } = useApp();
  const servicesRef = useRef(null);
  const langRef = useRef(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navClass = ['nav', scrolled && 'scrolled', onDark && 'on-dark'].filter(Boolean).join(' ');

  return (
    <>
      <header className={navClass} id="nav">

        {/* ── Logo ── */}
        <Link to="/#inicio" className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Jesús Molina logo" className="nav-logo-img" />
          <span className="nav-logo-text">Jesús Molina</span>
        </Link>

        {/* ── Centro: enlaces de redirección ── */}
        <nav className="nav-links" aria-label="Navegación principal">
          <Link to="/" className="nav-link">{t.home}</Link>
          <Link to="/concerts" className="nav-link">{t.concerts}</Link>
          <Link to="/biography" className="nav-link">{t.biography}</Link>

          {/* Services dropdown */}
          <div
            className={`nav-dropdown${servicesOpen ? ' open' : ''}`}
            ref={servicesRef}
          >
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              {t.services}
              <svg className="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/#cursos" className="nav-dropdown-item" onClick={() => setServicesOpen(false)}>{t.navCourses}</Link>
              <Link to="/#cursos" className="nav-dropdown-item" onClick={() => setServicesOpen(false)}>{t.masterclass}</Link>
            </div>
          </div>

          <Link to="/contact" className="nav-link">{t.contact}</Link>
          <Link to="/#planes" className="nav-link">{t.platform}</Link>
        </nav>

        {/* ── Derecha: controles ── */}
        <div className="nav-controls">
          {/* Dark mode toggle */}
          <button
            className={`nav-theme-toggle${darkMode ? ' dark' : ''}`}
            aria-pressed={darkMode}
            aria-label={darkMode ? t.switchToLightMode : t.switchToDarkMode}
            onClick={() => setDarkMode((v) => !v)}
          >
            <span className="nav-theme-icon nav-theme-sun">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="nav-theme-icon nav-theme-moon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="nav-theme-thumb"></span>
          </button>

          {/* Language selector */}
          <div
            className={`nav-lang${langOpen ? ' open' : ''}`}
            ref={langRef}
          >
            <button
              className="nav-lang-trigger"
              onClick={() => setLangOpen((v) => !v)}
              aria-label={t.changeLanguage}
              title={t.changeLanguage}
              aria-expanded={langOpen}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span>{language.toUpperCase()}</span>
              <svg className="nav-dropdown-chevron" width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-lang-menu">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  className={`nav-lang-option${language === lang ? ' active' : ''}`}
                  onClick={() => { setLanguage(lang); setLangOpen(false); }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Burger (mobile) ── */}
        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      {/* ── Mobile menu ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>{t.home}</Link>
        <Link to="/concerts" onClick={() => setMenuOpen(false)}>{t.concerts}</Link>
        <Link to="/biography" onClick={() => setMenuOpen(false)}>{t.biography}</Link>
        <Link to="/#cursos" onClick={() => setMenuOpen(false)}>{t.navCourses}</Link>
        <Link to="/#cursos" onClick={() => setMenuOpen(false)}>{t.masterclass}</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>{t.contact}</Link>
        <Link to="/#planes" onClick={() => setMenuOpen(false)}>{t.platform}</Link>
        <Link to="/#planes" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          {t.startNow}
        </Link>
      </div>
    </>
  );
}
