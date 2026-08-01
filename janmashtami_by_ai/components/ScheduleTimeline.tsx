"use client";

import React, { useState } from "react";
import { SCHEDULE_DATA } from "@/data/janmashtamiData";

export default function ScheduleTimeline() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeItem = SCHEDULE_DATA[selectedIndex];

  return (
    <div className="w-full max-w-5xl rounded-3xl border border-[#d4a857]/40 bg-transparent p-5 shadow-[0_0_50px_rgba(212,168,87,0.15)] backdrop-blur-xs md:p-8">
      {/* Title */}
      <div className="mb-6 text-center">
        <h2
          className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Auspicious Day Schedule
        </h2>
        <p className="mt-1 text-xs text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-base">
          From Morning Mangal Aarti to the Grand Midnight Celebration
        </p>
      </div>

      {/* Horizontal / Grid Timeline Selector */}
      <div className="mb-6 flex gap-3 overflow-x-auto p-2 scrollbar-thin">
        {SCHEDULE_DATA.map((item, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`flex shrink-0 flex-col items-center rounded-xl p-3 text-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${
                isSelected
                  ? "border-2 border-[#ffe8ad] bg-gradient-to-r from-[#d4a857]/40 via-[#f0d68a]/30 to-[#d4a857]/40 text-white shadow-[0_0_20px_rgba(240,214,138,0.6)] ring-2 ring-[#d4a857]/50 scale-105"
                  : item.highlight
                  ? "border-2 border-[#d4a857]/60 bg-transparent text-[#f0d68a] hover:bg-[#d4a857]/15 hover:border-[#ffe8ad]"
                  : "border-2 border-white/20 bg-transparent text-white/90 hover:border-white/50 hover:bg-black/20"
              }`}
            >
              <span className="text-xs font-mono font-bold text-[#ffe8ad] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{item.time}</span>
              <span className="mt-1 max-w-[110px] truncate text-[11px] font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Schedule Detail Card */}
      <div className="relative rounded-2xl border border-[#d4a857]/40 bg-transparent p-5 backdrop-blur-xs shadow-[0_0_30px_rgba(0,0,0,0.3)] md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a857]/50 bg-[#d4a857]/20 px-3.5 py-1 text-xs font-mono font-bold text-[#ffe8ad] shadow-[0_0_15px_rgba(212,168,87,0.3)]">
              ⏰ {activeItem.time}
            </div>
            <h3 className="mt-2 text-xl font-extrabold text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:text-3xl">
              {activeItem.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-white/95 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] md:text-lg">
              {activeItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : SCHEDULE_DATA.length - 1))}
              className="rounded-full border border-[#d4a857]/40 bg-black/40 p-2.5 text-[#f0d68a] transition-all hover:bg-[#d4a857]/30 hover:scale-105"
            >
              ←
            </button>
            <span className="text-xs font-mono font-bold text-[#ffe8ad] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              {selectedIndex + 1} / {SCHEDULE_DATA.length}
            </span>
            <button
              onClick={() => setSelectedIndex((prev) => (prev < SCHEDULE_DATA.length - 1 ? prev + 1 : 0))}
              className="rounded-full border border-[#d4a857]/40 bg-black/40 p-2.5 text-[#f0d68a] transition-all hover:bg-[#d4a857]/30 hover:scale-105"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
