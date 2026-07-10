import { useEffect, useRef, useState } from 'react';

/**
 * Reproduces the original loader behaviour:
 * - fills progress bar to ~85% over 1.8s while the page loads
 * - snaps to 100% and fades the loader out once `window.load` fires
 *   (with a 3.5s hard fallback in case `load` never fires)
 * - dispatches a `piano:enter` window event so the hero canvas
 *   (see usePianoCanvasBg) can start its entrance animation.
 */
export function useLoader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    let rafId;

    function updateProgress(target, duration) {
      const startVal = progress;
      const startTime = performance.now();
      function tick(now) {
        if (doneRef.current) return;
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = startVal + (target - startVal) * eased;
        setProgress(value);
        if (t < 1) rafId = requestAnimationFrame(tick);
      }
      rafId = requestAnimationFrame(tick);
    }

    updateProgress(85, 1800);

    function hideLoader() {
      if (doneRef.current) return;
      doneRef.current = true;
      setProgress(100);
      setTimeout(() => {
        setDone(true);
        window.dispatchEvent(new CustomEvent('piano:enter'));
      }, 400);
    }

    const onWindowLoad = () => setTimeout(hideLoader, 800);
    window.addEventListener('load', onWindowLoad);
    const fallback = setTimeout(hideLoader, 3500);

    // If the page already finished loading before this effect ran
    if (document.readyState === 'complete') onWindowLoad();

    return () => {
      window.removeEventListener('load', onWindowLoad);
      clearTimeout(fallback);
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { done, progress };
}
