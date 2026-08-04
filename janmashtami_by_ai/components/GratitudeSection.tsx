"use client";

import React from "react";
import Image from "next/image";
import { MENTORS_DATA } from "@/data/janmashtamiData";

export default function GratitudeSection() {
  return (
    <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl border border-[#d4a857]/50 bg-[#06030c]/90 p-3 sm:p-6 md:p-9 shadow-[0_0_60px_rgba(0,0,0,0.95)] backdrop-blur-md max-h-[88vh] overflow-y-auto sm:max-h-none scrollbar-none">
      {/* Header */}
      <div className="mb-3 text-center sm:mb-6">
        <h2
          className="text-base font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] sm:text-2xl md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Special Gratitude To Mentors
        </h2>

        {/* Shloka Box */}
        <div className="mx-auto mt-2 max-w-2xl rounded-xl sm:rounded-2xl border border-[#d4a857]/50 bg-[#0a0514]/90 p-2 sm:p-4 text-center shadow-[0_0_25px_rgba(0,0,0,0.9)] backdrop-blur-md">
          <p className="font-serif text-[11px] font-extrabold leading-snug sm:leading-relaxed text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] sm:text-sm md:text-lg">
            तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया |<br />
            उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिन: || BG 4.34 ||
          </p>
          <p className="mt-1 text-[9px] font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] sm:mt-2 sm:text-xs md:text-sm">
            &quot;Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him.&quot;
          </p>
        </div>
      </div>

      {/* Mentor Cards Grid — 3 Columns on Mobile & Desktop so all 3 Mentors are visible together */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-6">
        {MENTORS_DATA.map((mentor, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-[#d4a857]/40 bg-[#080410]/85 p-2 sm:p-5 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#ffe8ad] hover:bg-[#0c0618]/95 hover:shadow-[0_0_40px_rgba(212,168,87,0.4)]"
          >
            <div className="flex flex-col items-center">
              <div className="relative mb-1.5 h-14 w-14 overflow-hidden rounded-full border-2 border-[#d4a857] shadow-[0_0_15px_rgba(212,168,87,0.5)] sm:h-32 sm:w-32 md:h-40 md:w-40 sm:mb-3">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 60px, 160px"
                />
              </div>
              <h3 className="text-[11px] font-extrabold text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] leading-tight sm:text-base md:text-lg">
                {mentor.name}
              </h3>
              <p className="mt-0.5 text-[9px] font-bold text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,1)] leading-tight sm:mt-1 sm:text-xs md:text-sm">
                {mentor.title}
              </p>
            </div>

            <a
              href={mentor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-[#d4a857]/60 bg-[#d4a857]/20 px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wider text-[#ffe8ad] shadow-md transition-all duration-300 hover:bg-[#d4a857] hover:text-[#050208] hover:scale-105 sm:mt-3 sm:gap-1.5 sm:px-3.5 sm:py-1 sm:text-xs"
            >
              <span>Learn More</span>
              <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="sm:w-3 sm:h-3">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
