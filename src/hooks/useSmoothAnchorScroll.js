import { useEffect } from 'react';

/** Smooth-scrolls to in-page #anchors, offsetting for the fixed nav height. */
export function useSmoothAnchorScroll() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const onClick = (e) => {
      const anchor = e.currentTarget;
      const id = anchor.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 90;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };
    anchors.forEach((a) => a.addEventListener('click', onClick));
    return () => anchors.forEach((a) => a.removeEventListener('click', onClick));
  }, []);
}
