"use client";

import React from "react";

interface TransitionVignetteProps {
  scrollProgress: number;
  reducedMotion?: boolean;
}

// Vignette appears during boundary zones between video motion and text card phases
// Video→Text boundaries: just before 0.20, 0.44, 0.68, 0.90
// Text→Video boundaries: just after 0.32, 0.56, 0.80
const BOUNDARIES = [
  // Video Motion 1 ending → Events Section starting
  { center: 0.20, halfWidth: 0.03 },
  // Events Section ending → Video Motion 2 starting
  { center: 0.32, halfWidth: 0.03 },
  // Video Motion 2 ending → Schedule starting
  { center: 0.44, halfWidth: 0.03 },
  // Schedule ending → Video Motion 3 starting
  { center: 0.56, halfWidth: 0.03 },
  // Video Motion 3 ending → Gratitude starting
  { center: 0.68, halfWidth: 0.03 },
  // Gratitude ending → Video Motion 4 starting
  { center: 0.80, halfWidth: 0.03 },
  // Video Motion 4 ending → Registration starting
  { center: 0.90, halfWidth: 0.03 },
];

export default function TransitionVignette({
  scrollProgress,
  reducedMotion = false,
}: TransitionVignetteProps) {
  if (reducedMotion) return null;

  const safeProgress = Number.isNaN(scrollProgress) || typeof scrollProgress !== "number" ? 0 : scrollProgress;

  // Compute max vignette intensity across all boundaries
  let intensity = 0;
  for (const b of BOUNDARIES) {
    const dist = Math.abs(safeProgress - b.center);
    if (dist < b.halfWidth) {
      // Smooth bell curve: 1 at center, 0 at edge
      const t = dist / b.halfWidth;
      const contribution = 1 - t * t;
      intensity = Math.max(intensity, contribution);
    }
  }

  if (Number.isNaN(intensity) || intensity <= 0.01) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[15]"
      style={{
        background: `radial-gradient(ellipse at center, transparent 35%, rgba(5,2,8,${0.55 * intensity}) 100%)`,
        transition: "opacity 0.2s ease-out",
      }}
      aria-hidden="true"
    />
  );
}
