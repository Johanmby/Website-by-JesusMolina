import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SUB_PAGES = ['/concerts', '/biography', '/contact'];
const DARK_SECTION_SELECTORS = '.method, .community, .final-cta, .hero, .concerts-page, .biography-page, .contact-page';

/**
 * Tracks nav scroll state and contrast mode.
 * Sub-pages always get a visible nav from the first paint.
 */
export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const { pathname } = useLocation();
  const isSubPage = SUB_PAGES.includes(pathname);

  useEffect(() => {
    function update() {
      const y = window.scrollY;
      setScrolled(isSubPage ? y > 8 : y > 40);

      if (isSubPage) {
        setOnDark(true);
        return;
      }

      let dark = false;
      document.querySelectorAll(DARK_SECTION_SELECTORS).forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < 80 && rect.bottom > 80) dark = true;
      });
      setOnDark(dark);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    const timer = setTimeout(update, 80);
    return () => {
      window.removeEventListener('scroll', update);
      clearTimeout(timer);
    };
  }, [pathname, isSubPage]);

  return { scrolled: isSubPage || scrolled, onDark: isSubPage || onDark, isSubPage };
}
