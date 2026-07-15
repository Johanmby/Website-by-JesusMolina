import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const REVEAL_VARIANTS = {
  'slide-left': { hidden: 'translateX(-48px)', visible: 'translateX(0)' },
  'slide-right': { hidden: 'translateX(48px)', visible: 'translateX(0)' },
  default: { hidden: 'translateY(28px)', visible: 'translateY(0)' },
};

/**
 * Adds `.in-view` to [data-reveal] elements with optional slide variants and stagger delays.
 * Uses MutationObserver to work robustly with route changes and dynamically rendered components.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    function setupElement(el) {
      if (el.classList.contains('in-view')) return;
      const variant = el.getAttribute('data-reveal');
      const delay = el.getAttribute('data-reveal-delay');
      const config = REVEAL_VARIANTS[variant] || REVEAL_VARIANTS.default;

      el.style.setProperty('--reveal-from', config.hidden);
      el.style.setProperty('--reveal-to', config.visible);
      if (delay) el.style.transitionDelay = `${delay}ms`;

      observer.observe(el);
    }

    // Initial query on mount/route change
    const revealEls = document.querySelectorAll('[data-reveal]');
    revealEls.forEach(setupElement);

    // Watch for new [data-reveal] elements added dynamically
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return; // Only ELEMENT_NODE
          if (node.hasAttribute('data-reveal')) {
            setupElement(node);
          }
          node.querySelectorAll('[data-reveal]').forEach(setupElement);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);
}
