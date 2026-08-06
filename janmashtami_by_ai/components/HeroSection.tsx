"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { HERO_CONTENT } from "@/data/janmashtamiData";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full max-w-4xl p-6 text-center md:p-10">
      {/* Background audio element */}
      <audio ref={audioRef} loop src="/Janmashtami/audio/flute-meditation-113264.mp3" />

      {/* Header Pill & Flute Button Row */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#f0d68a] md:text-sm">
            ✦ Divine Celebration ✦
          </span>
        </div>

        <button
          onClick={toggleAudio}
          className="flex items-center gap-2 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/15 px-3 py-1.5 text-xs font-medium text-[#f0d68a] backdrop-blur-sm transition-all hover:bg-[#d4a857]/30 hover:shadow-[0_0_15px_rgba(212,168,87,0.3)] md:px-4 md:py-2 md:text-sm"
        >
          <span>{isPlaying ? "🔊 Pause Flute" : "🎵 Play Sacred Flute"}</span>
        </button>
      </div>

      {/* Main Title */}
      <h1
        className="mb-4 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] md:mb-6 md:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {HERO_CONTENT.title}
      </h1>

      {/* Sanskrit Mantra Banner */}
      <div className="mx-auto mb-6 max-w-2xl rounded-xl border border-[#d4a857]/20 bg-[#d4a857]/5 p-3 text-center backdrop-blur-sm">
        <p className="font-serif text-sm tracking-wide text-[#f0d68a] md:text-lg">
          {HERO_CONTENT.sanskritMantra}
        </p>
      </div>

      {/* Ornamental Line */}
      <div className="mx-auto mb-6 flex w-48 items-center justify-center gap-3 opacity-80">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4a857]" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[#f0d68a]" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4a857]" />
      </div>

      {/* Description */}
      <p className="text-glow-ethereal text-base font-light leading-relaxed text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] md:text-xl lg:text-2xl">
        {HERO_CONTENT.description}
      </p>

      {/* Scroll indicator prompt */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-[#f0d68a]/70">
        <span>Scroll to Experience</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="animate-bounce">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
