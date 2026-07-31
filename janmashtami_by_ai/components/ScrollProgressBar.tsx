"use client";

import React from "react";

interface ScrollProgressBarProps {
  progress: number;
  reducedMotion?: boolean;
  onNavigate?: (targetPercent: number) => void;
}

const SECTION_MARKERS = [
  { at: 0.08, label: "Home" },
  { at: 0.26, label: "Events" },
  { at: 0.50, label: "Gratitude" },
  { at: 0.74, label: "Schedule" },
  { at: 0.98, label: "Contact" },
];

export default function ScrollProgressBar({
  progress,
  reducedMotion = false,
  onNavigate,
}: ScrollProgressBarProps) {
  const safeProgress = Number.isNaN(progress) || typeof progress !== "number" ? 0 : progress;

  // Fade in after logo (0.08), fade out at very end (0.97)
  let barOpacity = 0;
  if (safeProgress < 0.06) {
    barOpacity = 0;
  } else if (safeProgress < 0.10) {
    barOpacity = (safeProgress - 0.06) / 0.04;
  } else if (safeProgress > 0.97) {
    barOpacity = 1 - (safeProgress - 0.97) / 0.03;
  } else {
    barOpacity = 1;
  }

  if (Number.isNaN(barOpacity) || barOpacity <= 0.01) return null;

  const fillPercent = Math.min(Math.max(safeProgress * 100, 0), 100);

  return (
    <div
      className="fixed right-3 top-1/2 z-40 -translate-y-1/2 flex flex-col items-center"
      style={{
        opacity: barOpacity,
        transition: reducedMotion ? "none" : "opacity 0.4s ease",
      }}
    >
      {/* Track container */}
      <div
        className="relative w-[2px] rounded-full bg-white/10"
        style={{ height: "40vh" }}
      >
        {/* Fill */}
        <div
          className="absolute bottom-0 left-0 w-full rounded-full"
          style={{
            height: `${fillPercent}%`,
            background:
              "linear-gradient(to top, rgba(212,168,87,0.2), rgba(212,168,87,0.6), rgba(240,214,138,0.9))",
            transition: reducedMotion ? "none" : "height 0.15s ease-out",
          }}
        >
          {/* Leading edge glow */}
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full"
            style={{
              background: "rgba(240,214,138,0.9)",
              boxShadow:
                "0 0 8px rgba(212,168,87,0.8), 0 0 20px rgba(212,168,87,0.4)",
            }}
          />
        </div>

        {/* Section dot markers */}
        {SECTION_MARKERS.map((marker) => {
          const dotBottom = marker.at * 100;
          const isPassed = progress >= marker.at;
          return (
            <div
              key={marker.label}
              onClick={() => onNavigate && onNavigate(marker.at)}
              className="group absolute left-1/2 -translate-x-1/2 cursor-pointer p-1"
              style={{ bottom: `${dotBottom}%` }}
            >
              {/* Dot */}
              <div
                className="h-[6px] w-[6px] rounded-full border transition-all duration-300 group-hover:scale-150"
                style={{
                  borderColor: isPassed
                    ? "rgba(240,214,138,0.9)"
                    : "rgba(255,255,255,0.2)",
                  background: isPassed
                    ? "rgba(212,168,87,0.8)"
                    : "rgba(255,255,255,0.05)",
                  boxShadow: isPassed
                    ? "0 0 6px rgba(212,168,87,0.6)"
                    : "none",
                }}
              />
              {/* Tooltip on hover */}
              <div
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-[#d4a857]/30 bg-[#0a0514]/90 px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase text-[#f0d68a] opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
              >
                {marker.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
