"use client";

import React from "react";
import Image from "next/image";
import { MENTORS_DATA } from "@/data/janmashtamiData";

export default function GratitudeSection() {
  return (
    <div className="w-full max-w-5xl rounded-3xl border border-[#d4a857]/40 bg-gradient-to-br from-[#0c051a]/35 via-black/25 to-[#140a26]/35 p-5 shadow-[0_0_50px_rgba(212,168,87,0.25),0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-8">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2
          className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Special Gratitude & Mentors
        </h2>

        {/* Shloka Box */}
        <div className="mx-auto mt-4 max-w-2xl rounded-2xl border border-[#d4a857]/40 bg-[#d4a857]/15 p-4 text-center backdrop-blur-md shadow-[0_0_20px_rgba(212,168,87,0.2)]">
          <p className="font-serif text-sm font-bold leading-relaxed text-[#ffe8ad] drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)] md:text-lg">
            तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया |<br />
            उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिन: || BG 4.34 ||
          </p>
          <p className="mt-2 text-xs italic font-medium text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] md:text-sm">
            &quot;Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him.&quot;
          </p>
        </div>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
        {MENTORS_DATA.map((mentor, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#d4a857]/30 bg-black/25 p-5 text-center backdrop-blur-lg transition-all duration-300 hover:border-[#ffe8ad] hover:bg-black/35 hover:shadow-[0_0_35px_rgba(212,168,87,0.35)]"
          >
            <div className="relative mb-3 h-32 w-32 overflow-hidden rounded-full border-2 border-[#d4a857]/60 shadow-[0_0_20px_rgba(212,168,87,0.4)] md:h-40 md:w-40">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="160px"
              />
            </div>
            <h3 className="text-base font-bold text-[#ffe8ad] drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)] md:text-lg">{mentor.name}</h3>
            <p className="mt-1 text-xs font-medium text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-sm">{mentor.title}</p>
            <a
              href={mentor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#f0d68a] hover:text-[#ffe8ad] hover:underline drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            >
              <span>Learn More</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
