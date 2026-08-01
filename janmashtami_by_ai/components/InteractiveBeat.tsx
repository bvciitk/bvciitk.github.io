"use client";

import React, { ReactNode } from "react";

interface InteractiveBeatProps {
  scrollProgress: number;
  start: number;
  end: number;
  children: ReactNode;
  className?: string;
  isHero?: boolean;
  reducedMotion?: boolean;
}

export default function InteractiveBeat({
  scrollProgress,
  start,
  end,
  children,
  className = "",
  isHero = false,
  reducedMotion = false,
}: InteractiveBeatProps) {
  const safeProgress = Number.isNaN(scrollProgress) || typeof scrollProgress !== "number" ? 0 : scrollProgress;
  const range = end - start;
  const fadeInEnd = start + range * 0.25;
  const fadeOutStart = end - range * 0.3;

  let opacity = 0;
  let yOffset = 40;
  let scale = 0.96;

  if (safeProgress < start) {
    opacity = 0;
    yOffset = 40;
    scale = 0.96;
  } else if (safeProgress < fadeInEnd) {
    // Phase 1: Fade in while moving up into view (40px -> 0px)
    const t = (safeProgress - start) / (fadeInEnd - start);
    const safeT = Number.isNaN(t) ? 0 : t;
    const eased = 1 - Math.pow(1 - safeT, 2);
    opacity = Number.isNaN(eased) ? 0 : eased;
    yOffset = 40 * (1 - opacity);
    scale = 0.96 + 0.04 * opacity;
  } else if (safeProgress < fadeOutStart) {
    // Phase 2: Fully visible, scrolling slightly upward (0px -> -25px)
    const t = (safeProgress - fadeInEnd) / (fadeOutStart - fadeInEnd);
    const safeT = Number.isNaN(t) ? 0 : t;
    opacity = 1;
    yOffset = reducedMotion ? 0 : -25 * safeT;
    scale = 1;
  } else if (safeProgress < end) {
    // Phase 3: Continue moving upward (-25px -> -80px) while fading away
    const t = (safeProgress - fadeOutStart) / (end - fadeOutStart);
    const safeT = Number.isNaN(t) ? 0 : t;
    const eased = Math.pow(safeT, 2);
    opacity = Number.isNaN(eased) ? 0 : 1 - eased;
    yOffset = reducedMotion ? 0 : -25 - 55 * safeT;
    scale = 1 - 0.03 * safeT;
  } else {
    opacity = 0;
    yOffset = -80;
    scale = 0.95;
  }

  if (Number.isNaN(opacity) || opacity <= 0.01) return null;

  return (
    <div
      className={`fixed inset-0 z-30 flex items-center justify-center px-4 py-8 md:px-8 ${
        opacity > 0.1 ? "pointer-events-auto" : "pointer-events-none"
      } ${className}`}
      style={{
        opacity,
        transform: `translateY(${yOffset}px) scale(${scale})`,
        transition: reducedMotion
          ? "opacity 0.01ms"
          : "transform 0.1s ease-out, opacity 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}
