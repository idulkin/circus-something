import React, { useEffect, useRef } from "react";
import "./ShadowSwim.css";

// Some pages scroll the window; others (e.g. CastAndCrewPage) scroll an
// internal overflow container instead, so window.scrollY never changes
// there. Walk up to find whichever one actually scrolls.
const findScrollParent = (node: HTMLElement | null): HTMLElement | Window => {
  let el = node?.parentElement ?? null;
  while (el) {
    if (/(auto|scroll)/.test(window.getComputedStyle(el).overflowY)) {
      return el;
    }
    el = el.parentElement;
  }
  return window;
};

const ShadowSwim: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scrollTarget = findScrollParent(root);
    const getScrollY = () =>
      scrollTarget === window
        ? window.scrollY
        : (scrollTarget as HTMLElement).scrollTop;

    let frameId = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      // Bounded oscillation (rather than a value tied directly to how far
      // scrolled) so the shadow keeps breathing with scroll input no matter
      // how long the page is, instead of maxing out and going flat.
      const intensity = 0.8 + Math.sin(getScrollY() * 0.0022) * 0.25;
      root.style.setProperty("--scroll-intensity", intensity.toFixed(3));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="shadow-swim" ref={rootRef} aria-hidden="true">
      <div className="shadow-swim-core" />
    </div>
  );
};

export default ShadowSwim;
