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
  { label: "Footfall", value: 7000, suffix: "+", icon: "👥" },
  { label: "Alumni Network", value: 100, suffix: "+", icon: "🎓" },
  { label: "Participants", value: 200, suffix: "+", icon: "🚩" },
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
    <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-[#d4a857]/50 bg-[#080410]/85 p-4 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-[#ffe8ad] hover:bg-[#0c0618]/95 hover:shadow-[0_0_35px_rgba(240,214,138,0.4)]">
      {/* Icon Badge */}
      <div className="mb-1 text-base md:text-xl transition-transform duration-300 group-hover:scale-125">
        {icon}
      </div>

      {/* Animated Counter */}
      <div className="text-xl font-black tracking-tight text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] md:text-3xl">
        <LoopingCounter target={value} suffix={suffix} onProgress={setProgressPct} />
      </div>

      {/* Label */}
      <div className="mt-1 text-xs font-black tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] md:text-sm">
        {label}
      </div>

      {/* Animated Progress Bar Indicator at bottom of card */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/20">
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
    <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl border border-[#d4a857]/50 bg-[#06030c]/90 p-3.5 sm:p-6 md:p-9 shadow-[0_0_60px_rgba(0,0,0,0.95)] backdrop-blur-md max-h-[88vh] overflow-y-auto lg:max-h-none scrollbar-none">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Aftermovies */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            <div className="mb-2.5 flex items-center justify-between sm:mb-4">
              <h2
                className="text-base font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] sm:text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                AFTERMOVIES
              </h2>

              {/* Pulsing Live Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a857]/60 bg-[#d4a857]/20 px-2.5 py-0.5 text-[10px] font-mono font-black uppercase text-[#ffe8ad] shadow-md backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe8ad] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#d4a857]"></span>
                </span>
                <span>{selectedYear} Highlights</span>
              </div>
            </div>

            {/* Year Selector Tabs — Horizontally Scrollable on Mobile, Wrapped on Desktop */}
            <div className="mb-3 flex w-full items-center justify-start gap-1.5 sm:justify-center sm:flex-wrap sm:gap-3 overflow-x-auto p-1 scrollbar-none sm:mb-6">
              {AFTERMOVIES.map((v) => {
                const isActive = selectedYear === v.year;
                return (
                  <button
                    key={v.year}
                    onClick={() => setSelectedYear(v.year)}
                    className={`relative shrink-0 flex items-center justify-center gap-1 rounded-full py-1 px-3 sm:py-2 sm:px-4 text-[11px] sm:text-sm font-black tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${
                      isActive
                        ? "border-2 border-[#ffe8ad] bg-gradient-to-r from-[#d4a857] via-[#f0d68a] to-[#d4a857] text-[#050208] shadow-[0_0_25px_rgba(240,214,138,0.9)] scale-105"
                        : "border-2 border-[#d4a857]/50 bg-[#080412]/90 text-white hover:border-[#ffe8ad] hover:bg-[#d4a857]/40 shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    {isActive && <span className="text-[9px] text-[#050208]">▶</span>}
                    <span>{v.year}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* YouTube Video Player Container */}
          <div className="flex flex-col items-center">
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl border-2 border-[#d4a857]/60 bg-black/80 shadow-[0_0_30px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[#ffe8ad] hover:shadow-[0_0_40px_rgba(212,168,87,0.5)]">
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
              className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#d4a857]/60 bg-[#d4a857]/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#ffe8ad] shadow-md transition-all duration-300 hover:bg-[#d4a857] hover:text-[#050208] hover:scale-105 sm:mt-3.5 sm:px-4 sm:py-1.5 sm:text-xs"
            >
              <span>Watch {activeVideo.year} Aftermovie on YouTube</span>
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: About Janmashtami & Animated Numbers */}
        <div className="flex flex-col justify-between lg:col-span-6">
          {/* Quote Card (Hidden on mobile to keep Aftermovies section compact) */}
          <div className="hidden sm:block">
            <h2
              className="mb-4 text-center text-xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] lg:text-left md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ABOUT JANMASTHAMI
            </h2>

            <div className="rounded-2xl border-l-4 border-l-[#d4a857] border border-[#d4a857]/50 bg-[#0a0514]/90 p-5 shadow-[0_0_30px_rgba(0,0,0,0.9)] backdrop-blur-md md:p-6">
              <h3 className="mb-2 text-base font-black text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] md:text-lg">
                Why do We Celebrate Janmashtami?
              </h3>

              <p className="text-xs font-bold leading-relaxed text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] md:text-sm">
                Janmashtami is a grand celebration to commemorate the appearance of Lord
                Krishna, who is believed to be the Supreme Lord or the Lord of the Lords. It is
                the celebration of joy, love, and divinity. The story of Krishna’s appearance
                reminds us through Kansa’s actions that ego and pride are the major faults in
                human beings which can only doom them.
              </p>
            </div>
          </div>

          {/* Looping Numbers Grid */}
          <div className="mt-2 sm:mt-6 grid grid-cols-2 gap-2.5 sm:gap-4">
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
