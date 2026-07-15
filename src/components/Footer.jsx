import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();

  const channels = [
    { href: '#contacto', label: t.footerChannelWhatsapp, icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.5 8.5 0 1 1-8.5-8.5c2.4 0 4.7.9 6.4 2.6L22 4" />
        <path d="M21 4v5h-5" />
      </svg>
    ) },
    { href: 'https://www.instagram.com/', label: t.footerChannelInstagram, icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    ) },
    { href: 'https://www.youtube.com/', label: t.footerChannelYoutube, icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
    ) },
    { href: 'https://open.spotify.com/artist/7Gl7yiOLDSRr1cZyPwpGv4', label: t.footerChannelSpotify, icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.8c2.8-1 6.5-.8 9.2.5"></path><path d="M9 15.5c2.1-.7 4.9-.5 7.1.3"></path><path d="M7 8c3.5-1.5 8.2-1.2 12 1"></path></svg>
    ) },
    { href: 'https://music.apple.com/', label: t.footerChannelAppleMusic, icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
    ) },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <div className="footer-brand">
            <span className="nav-logo-mark">JM</span>
            <span className="footer-brand-text">Jesús Molina</span>
          </div>
          <p className="footer-intro">{t.footerIntro}</p>
          <div className="footer-socials">
            {channels.map((channel) => (
              <a key={channel.label} href={channel.href} className="footer-social-pill" target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}>
                {channel.icon}
                <span>{channel.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>{t.footerNav}</h3>
            <ul className="footer-link-list">
              {t.footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>{t.footerContact}</h3>
            <ul className="footer-link-list">
              <li><a href="#contacto">{t.footerScheduleClass}</a></li>
              <li><a href="#cursos-disponibles">{t.footerExploreCourses}</a></li>
              <li><a href="#spotify">{t.footerListenSpotify}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t.footerCopyright}</span>
        <span>{t.footerTagline}</span>
      </div>
    </footer>
  );
}
