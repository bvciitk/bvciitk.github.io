"use client";

import React, { useState } from "react";
import Image from "next/image";

const VOLUNTEER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSetDIivlvP-llqJRsxRsEzFOqfEgIScpgrPVLy3ZSN4aJBzSg/viewform";

export default function RegistrationFooter() {
  const [showPosterModal, setShowPosterModal] = useState(false);

  const categories = [
    { icon: "🎭", label: "Drama" },
    { icon: "💃", label: "Dance" },
    { icon: "🎨", label: "Rangoli Making" },
    { icon: "🏛️", label: "Stage Decoration" },
    { icon: "📸", label: "Photography" },
    { icon: "📜", label: "Poster Presentation" },
    { icon: "📖", label: "Shloka Recitation" },
    { icon: "🎵", label: "Musical Composition" },
    { icon: "🖌️", label: "Fine Arts" },
    { icon: "🎯", label: "Games" },
  ];

  return (
    <div className="w-full max-w-5xl rounded-3xl border-2 border-[#d4a857]/60 bg-gradient-to-br from-[#120826]/95 via-[#0c051a]/98 to-[#06020c]/95 p-5 shadow-[0_0_70px_rgba(212,168,87,0.35)] backdrop-blur-md md:p-8">
      {/* Top Header Badge & Title */}
      <div className="mb-6 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#d4a857]/50 bg-[#d4a857]/15 px-4 py-1.5 backdrop-blur-md">
          <span className="text-xs font-extrabold tracking-widest uppercase text-[#f0d68a]">
            ✦ Call for Volunteers & Participation ✦
          </span>
        </div>

        <h2
          className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Janmashtami '26 IIT Kanpur
        </h2>
        <p className="mt-1 text-xs font-semibold text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-base">
          Be a part of the grandest celebration! Register to participate in cultural events or join our student organizing team.
        </p>
      </div>

      {/* Main Content Layout Grid */}
      <div className="mb-6 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        {/* LEFT: Official Poster Showcase */}
        <div className="flex flex-col items-center justify-center md:col-span-5">
          <div
            onClick={() => setShowPosterModal(true)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#ffe8ad] shadow-[0_0_35px_rgba(212,168,87,0.5)] transition-all duration-300 hover:scale-[1.03] hover:border-white hover:shadow-[0_0_50px_rgba(255,232,173,0.95)]"
          >
            <img
              src="/Janmashtami/images/Participants.jpeg"
              alt="Call for Participation - Janmashtami '26 IITK"
              className="block h-auto max-h-[340px] w-full max-w-[200px] sm:max-w-[260px] md:max-w-[290px] rounded-[14px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full border border-[#ffe8ad] bg-[#0c051a]/90 px-3 py-1 text-xs font-bold text-[#ffe8ad] shadow-lg">
                🔍 Expand Poster
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Categories Grid & Direct Form CTA */}
        <div className="flex flex-col justify-between md:col-span-7">
          {/* Categories Grid */}
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm scrollbar-none pb-2 sm:pb-0">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex whitespace-nowrap shrink-0 sm:shrink items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm transition-all hover:border-[#d4a857]/60 hover:bg-[#d4a857]/15 hover:scale-[1.02]"
              >
                <span className="text-base">{cat.icon}</span>
                <span className="font-bold text-[#f3e8ff] truncate">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Direct Google Form CTA Button */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-white bg-gradient-to-r from-[#d4a857] via-[#ffe8ad] to-[#d4a857] py-3.5 px-6 text-sm font-black uppercase tracking-wider text-[#0c051a] shadow-[0_0_35px_rgba(212,168,87,0.85)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,232,173,1)] active:scale-95 sm:text-base"
            >
              <span>Fill Participation Form</span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Contact Queries Bar */}
      <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
        <span className="font-semibold">📞 For any queries contact:</span>
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono font-bold">
          <a href="tel:+918971460606" className="text-[#f0d68a] hover:underline">
            Shashwath U: +91 89714-60606
          </a>
          <span>•</span>
          <a href="tel:+916366803430" className="text-[#f0d68a] hover:underline">
            Aniket M: +91 63668-03430
          </a>
        </div>
      </div>

      {/* Fullscreen Poster Modal Preview */}
      {showPosterModal && (
        <div
          onClick={() => setShowPosterModal(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 p-4 backdrop-blur-xl transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] max-w-xl flex-col items-center justify-center rounded-2xl border-2 border-[#d4a857] bg-[#0c051a] p-4 text-center shadow-2xl"
          >
            <button
              onClick={() => setShowPosterModal(false)}
              className="absolute top-3 right-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#ffe8ad] bg-[#a855f7] text-white font-black text-sm shadow-md hover:scale-110"
              title="Close"
            >
              ✕
            </button>
            <div className="relative my-2 max-h-[75vh] w-full overflow-hidden rounded-xl border border-[#d4a857]/30">
              <img
                src="/Janmashtami/images/Participants.jpeg"
                alt="Volunteer Poster"
                className="h-auto max-h-[75vh] w-full object-contain"
              />
            </div>
            <a
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block w-full rounded-full border-2 border-white bg-gradient-to-r from-[#d4a857] via-[#ffe8ad] to-[#d4a857] py-2.5 font-black uppercase text-[#0c051a] hover:scale-105 transition-all shadow-lg"
            >
              Open Participation Form ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
