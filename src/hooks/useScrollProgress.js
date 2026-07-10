import { useEffect } from 'react';

/** Fills the thin top progress bar as the user scrolls the page. */
export function useScrollProgress(barRef) {
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (scrollTop / docHeight) * 100;
      bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [barRef]);
}
