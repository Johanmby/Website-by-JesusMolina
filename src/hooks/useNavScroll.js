import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has scrolled past the top (for the nav's
 * "scrolled" compact state) and whether a dark section currently sits
 * behind the nav bar (for the "on-dark" light-text state).
 */
export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const darkSectionEls = document.querySelectorAll('.method, .community, .final-cta');

    function update() {
      setScrolled(window.scrollY > 40);
      let dark = false;
      darkSectionEls.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < 80 && rect.bottom > 80) dark = true;
      });
      setOnDark(dark);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return { scrolled, onDark };
}
