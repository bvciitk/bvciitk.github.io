"use client";

import React, { useState, useEffect } from "react";

interface VideoItem {
  year: string;
  youtubeId: string;
  url: string;
}

const AFTERMOVIES: VideoItem[] = [
  { year: "2025", youtubeId: "61xOd8Ecklw", url: "https://youtu.be/61xOd8Ecklw?si=XII8o75AQjU65bmL" },
  { year: "2024", youtubeId: "YEyAyvl-2xw", url: "https://youtu.be/YEyAyvl-2xw?si=A-z7KsRBm_CTtSvm" },
  { year: "2023", youtubeId: "YHRf7rCN_9U", url: "https://youtu.be/YHRf7rCN_9U?si=i8EUfTx73WH21Zxc" },
  { year: "2022", youtubeId: "i0gDaZeSF9M", url: "https://youtu.be/i0gDaZeSF9M?si=aMkbRmCatZF0yVcl" },
  { year: "2021", youtubeId: "Cf0fr1cjkFk", url: "https://youtu.be/Cf0fr1cjkFk?si=dxVFnFk_GIjrqWZB" },
  { year: "2019", youtubeId: "vReOxsYD708", url: "https://youtu.be/vReOxsYD708?si=sRsuTEnkKmz79VYK" },
  { year: "2018", youtubeId: "y5o_x8USDJE", url: "https://youtu.be/y5o_x8USDJE?si=FGTEGLDOjrH91Qg4" },
];

const STATS = [
  { label: "Footfall", value: 1000, suffix: "+", icon: "👥" },
  { label: "Alumni Network", value: 100, suffix: "+", icon: "🎓" },
  { label: "Participants", value: 150, suffix: "+", icon: "🚩" },
  { label: "Annual Flagship Events", value: 15, suffix: "+", icon: "🏆" },
];

function LoopingCounter({ target, suffix = "+", onProgress }: { target: number; suffix?: string; onProgress?: (pct: number) => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const DURATION = 2200; // 2.2s count up
    const HOLD_TIME = 1800; // 1.8s hold at max before reset

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < DURATION) {
        const progress = elapsed / DURATION;
        const currentCount = Math.floor(target * (1 - Math.pow(1 - progress, 2)));
        setCount(currentCount);
        if (onProgress) onProgress(progress);
        animationFrameId = requestAnimationFrame(animate);
      } else if (elapsed < DURATION + HOLD_TIME) {
        setCount(target);
        if (onProgress) onProgress(1);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        startTime = null;
        setCount(0);
        if (onProgress) onProgress(0);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, onProgress]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

function StatCard({ label, value, suffix, icon }: { label: string; value: number; suffix: string; icon: string }) {
  const [progressPct, setProgressPct] = useState(0);

  return (
    <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-[#d4a857]/35 bg-transparent p-3.5 text-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-[#ffe8ad] hover:shadow-[0_0_30px_rgba(240,214,138,0.35)]">
      {/* Icon Badge */}
      <div className="mb-1 text-base md:text-lg opacity-90 transition-transform duration-300 group-hover:scale-125">
        {icon}
      </div>

      {/* Animated Counter */}
      <div className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:text-3xl">
        <LoopingCounter target={value} suffix={suffix} onProgress={setProgressPct} />
      </div>

      {/* Label */}
      <div className="mt-1 text-[11px] font-semibold tracking-wide text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] md:text-xs">
        {label}
      </div>

      {/* Animated Progress Bar Indicator at bottom of card */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#d4a857] via-[#f0d68a] to-[#ffe8ad] transition-all duration-150"
          style={{ width: `${progressPct * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function AftermoviesSection() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const activeVideo = AFTERMOVIES.find((v) => v.year === selectedYear) || AFTERMOVIES[0];

  return (
    <div className="w-full max-w-5xl rounded-3xl border border-[#d4a857]/40 bg-transparent p-5 shadow-[0_0_50px_rgba(212,168,87,0.15)] backdrop-blur-xs md:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Aftermovies */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2
                className="text-xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                AFTERMOVIES
              </h2>

              {/* Pulsing Live Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-[#f0d68a]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0d68a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a857]"></span>
                </span>
                <span>{selectedYear} Highlights</span>
              </div>
            </div>

            {/* Year Selector Tabs — 2 Rows: 5 in top row, 2 centered in bottom row */}
            <div className="mb-6 flex flex-col items-center gap-2.5 sm:gap-3 w-full">
              {/* Row 1: Top 5 years (2025 - 2021) */}
              <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
                {AFTERMOVIES.slice(0, 5).map((v) => {
                  const isActive = selectedYear === v.year;
                  return (
                    <button
                      key={v.year}
                      onClick={() => setSelectedYear(v.year)}
                      className={`flex-1 flex items-center justify-center gap-1 rounded-full py-2.5 px-2 text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${
                        isActive
                          ? "border-2 border-[#ffe8ad] bg-gradient-to-r from-[#d4a857]/80 via-[#f0d68a]/60 to-[#d4a857]/80 text-white shadow-[0_0_22px_rgba(240,214,138,0.75)] scale-105 font-black"
                          : "border-2 border-[#d4a857]/35 bg-[#0a0514]/40 text-white/90 backdrop-blur-xs hover:border-[#ffe8ad] hover:bg-[#d4a857]/20 hover:text-white"
                      }`}
                    >
                      {isActive && <span className="text-[10px] text-[#ffe8ad]">▶</span>}
                      <span>{v.year}</span>
                    </button>
                  );
                })}
              </div>

              {/* Row 2: Bottom 2 years (2019, 2018 - Centered) */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[280px] sm:max-w-[340px]">
                {AFTERMOVIES.slice(5).map((v) => {
                  const isActive = selectedYear === v.year;
                  return (
                    <button
                      key={v.year}
                      onClick={() => setSelectedYear(v.year)}
                      className={`flex-1 flex items-center justify-center gap-1 rounded-full py-2.5 px-4 text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${
                        isActive
                          ? "border-2 border-[#ffe8ad] bg-gradient-to-r from-[#d4a857]/80 via-[#f0d68a]/60 to-[#d4a857]/80 text-white shadow-[0_0_22px_rgba(240,214,138,0.75)] scale-105 font-black"
                          : "border-2 border-[#d4a857]/35 bg-[#0a0514]/40 text-white/90 backdrop-blur-xs hover:border-[#ffe8ad] hover:bg-[#d4a857]/20 hover:text-white"
                      }`}
                    >
                      {isActive && <span className="text-[10px] text-[#ffe8ad]">▶</span>}
                      <span>{v.year}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* YouTube Video Player Container */}
          <div className="flex flex-col">
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-[#d4a857]/40 shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#ffe8ad] hover:shadow-[0_0_35px_rgba(212,168,87,0.3)]">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                title={`Janmashtami ${activeVideo.year} Aftermovie`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* YouTube Link */}
            <a
              href={activeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#f0d68a] hover:text-[#ffe8ad] hover:underline transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            >
              <span>Watch {activeVideo.year} Aftermovie on YouTube</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: About Janmashtami & Animated Numbers */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            <h2
              className="mb-3 text-center text-xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:text-left md:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ABOUT JANMASTHAMI
            </h2>

            {/* Quote Card */}
            <div className="rounded-2xl border-l-4 border-l-[#d4a857] border border-[#d4a857]/30 bg-[#d4a857]/5 p-4 md:p-5 backdrop-blur-xs shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <h3 className="mb-2 text-base font-bold text-[#ffe8ad] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-lg">
                Why do We Celebrate Janmashtami?
              </h3>

              <p className="text-xs font-normal leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] md:text-sm">
                Janmashtami is a grand celebration to commemorate the appearance of Lord
                Krishna, who is believed to be the Supreme Lord or the Lord of the Lords. It is
                the celebration of joy, love, and divinity. The story of Krishna’s appearance
                reminds us through Kansa’s actions that ego and pride are the major faults in
                human beings which can only doom them.
              </p>
            </div>
          </div>

          {/* Looping Numbers Grid */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat, idx) => (
              <StatCard
                key={idx}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
