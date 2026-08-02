"use client";

import React from "react";
import Image from "next/image";
import { MENTORS_DATA } from "@/data/janmashtamiData";

export default function GratitudeSection() {
  return (
    <div className="w-full max-w-5xl rounded-3xl border border-[#d4a857]/50 bg-[#06030c]/85 p-6 shadow-[0_0_60px_rgba(0,0,0,0.95)] backdrop-blur-md md:p-9">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2
          className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Special Gratitude To Mentors
        </h2>

        {/* Shloka Box */}
        <div className="mx-auto mt-4 max-w-2xl rounded-2xl border border-[#d4a857]/50 bg-[#0a0514]/90 p-4 text-center shadow-[0_0_25px_rgba(0,0,0,0.9)] backdrop-blur-md">
          <p className="font-serif text-sm font-extrabold leading-relaxed text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] md:text-lg">
            तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया |<br />
            उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिन: || BG 4.34 ||
          </p>
          <p className="mt-2 text-xs font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] md:text-sm">
            &quot;Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him.&quot;
          </p>
        </div>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
        {MENTORS_DATA.map((mentor, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#d4a857]/40 bg-[#080410]/85 p-5 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#ffe8ad] hover:bg-[#0c0618]/95 hover:shadow-[0_0_40px_rgba(212,168,87,0.4)]"
          >
            <div className="relative mb-3 h-32 w-32 overflow-hidden rounded-full border-2 border-[#d4a857] shadow-[0_0_20px_rgba(212,168,87,0.5)] md:h-40 md:w-40">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="160px"
              />
            </div>
            <h3 className="text-base font-extrabold text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] md:text-lg">{mentor.name}</h3>
            <p className="mt-1 text-xs font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] md:text-sm">{mentor.title}</p>
            <a
              href={mentor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#d4a857]/60 bg-[#d4a857]/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#ffe8ad] shadow-md transition-all duration-300 hover:bg-[#d4a857] hover:text-[#050208] hover:scale-105"
            >
              <span>Learn More</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
