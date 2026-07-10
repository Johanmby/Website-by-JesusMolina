import { useEffect } from 'react';

/** Adds `.in-view` to the scatter cloud container once it's visible, so its
 *  items animate from a grouped cluster to their scattered final positions. */
export function useScatterCloud(cloudRef) {
  useEffect(() => {
    const cloud = cloudRef.current;
    if (!cloud) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cloud.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(cloud);
    return () => observer.disconnect();
  }, [cloudRef]);
}
