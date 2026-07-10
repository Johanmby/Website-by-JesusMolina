import { useEffect } from 'react';

/**
 * Custom dot + trailing ring cursor. Skipped entirely on touch devices,
 * same as the original. Also toggles `.dark-cursor` on <body> while a
 * dark section (method / community / final-cta) is centered in view,
 * and `.hovered` on the ring while hovering any interactive element.
 */
export function useCustomCursor(dotRef, ringRef) {
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    const cursorDot = dotRef.current;
    const cursorRing = ringRef.current;
    if (!cursorDot || !cursorRing) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let rafId;

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    }
    window.addEventListener('mousemove', onMouseMove);

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverables = document.querySelectorAll('a, button, .key, [data-tilt]');
    const onEnter = () => cursorRing.classList.add('hovered');
    const onLeave = () => cursorRing.classList.remove('hovered');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const darkSections = document.querySelectorAll('.method, .community, .final-cta');
    const cursorObserver = new IntersectionObserver(() => {
      let anyDark = false;
      darkSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) anyDark = true;
      });
      document.body.classList.toggle('dark-cursor', anyDark);
    }, { threshold: 0.1 });
    darkSections.forEach((sec) => cursorObserver.observe(sec));

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cursorObserver.disconnect();
      document.body.classList.remove('dark-cursor');
    };
  }, [dotRef, ringRef]);
}
