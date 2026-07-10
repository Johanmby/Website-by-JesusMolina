import { useEffect, useMemo } from 'react';

const BARS = 28;

/** Generates the little waveform bar heights once (stable across renders),
 *  and animates the progress-fill bar to 68% once the phone mock scrolls
 *  into view. */
export function usePhoneWaveform(waveformRef, progressFillRef, phoneMockRef) {
  const bars = useMemo(
    () =>
      Array.from({ length: BARS }, (_, i) => {
        const h = 20 + Math.sin(i * 0.5) * 16 + Math.random() * 14;
        return Math.max(8, h);
      }),
    []
  );

  useEffect(() => {
    const progressFill = progressFillRef.current;
    const phoneMock = phoneMockRef.current;
    if (!progressFill || !phoneMock) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              progressFill.style.width = '68%';
            }, 300);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(phoneMock);
    return () => observer.disconnect();
  }, [progressFillRef, phoneMockRef]);

  return bars;
}
