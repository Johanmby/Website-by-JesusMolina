import { useEffect } from 'react';

/** Subtle 3D tilt-on-hover for any element with [data-tilt]. Desktop only. */
export function useTiltCards() {
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    const cards = document.querySelectorAll('[data-tilt]');
    const onMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };
    const onLeave = (e) => {
      e.currentTarget.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
}
