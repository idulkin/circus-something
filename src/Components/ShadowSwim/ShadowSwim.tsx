import React, { useEffect, useRef } from "react";
import "./ShadowSwim.css";

const ShadowSwim: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      // Bounded oscillation (rather than a value tied directly to how far
      // scrolled) so the shadow keeps breathing with scroll input no matter
      // how long the page is, instead of maxing out and going flat.
      const intensity = 0.8 + Math.sin(window.scrollY * 0.0022) * 0.25;
      root.style.setProperty("--scroll-intensity", intensity.toFixed(3));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
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
