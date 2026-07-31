"use client";

import React, { useMemo } from "react";

interface AmbientParticlesProps {
  reducedMotion?: boolean;
}

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
}

export default function AmbientParticles({
  reducedMotion = false,
}: AmbientParticlesProps) {
  // Don't render particles if user prefers reduced motion
  if (reducedMotion) return null;

  const particles = useMemo<Particle[]>(() => {
    const count = 30;
    const result: Particle[] = [];
    // Deterministic pseudo-random for SSR consistency
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807 + 0) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let i = 0; i < count; i++) {
      result.push({
        id: i,
        size: 2 + rand() * 4, // 2px–6px
        left: rand() * 100, // 0%–100%
        top: rand() * 100, // 0%–100%
        opacity: 0.08 + rand() * 0.25, // 0.08–0.33
        duration: 10 + rand() * 12, // 10s–22s
        delay: rand() * 10, // 0s–10s
        driftX: -15 + rand() * 30, // -15px to +15px horizontal sway
      });
    }
    return result;
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle-drift"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            background: `radial-gradient(circle, rgba(240,214,138,0.9) 0%, rgba(212,168,87,0.4) 60%, transparent 100%)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(212,168,87,${p.opacity * 0.6})`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift-x" as string]: `${p.driftX}px`,
          }}
        />
      ))}
    </div>
  );
}
