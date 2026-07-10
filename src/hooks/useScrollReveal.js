import { useEffect } from 'react';

/**
 * Adds `.in-view` to every [data-reveal] element the first time it
 * scrolls into the viewport. Meant to be called once, from App, after
 * the whole page has mounted.
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
