"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSetDIivlvP-llqJRsxRsEzFOqfEgIScpgrPVLy3ZSN4aJBzSg/viewform";

export default function VolunteerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto-open modal shortly after site load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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

  if (!mounted) return null;

  return (
    <>

      {/* ═══ FULLSCREEN POPUP MODAL (Portal to Body) ═══ */}
      {isOpen &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 sm:p-4 md:p-6 backdrop-blur-xl transition-all duration-300"
            style={{ animation: "fadeInModal 0.3s ease-out forwards" }}
          >
            <style jsx global>{`
              @keyframes fadeInModal {
                from {
                  opacity: 0;
                  backdrop-filter: blur(0px);
                }
                to {
                  opacity: 1;
                  backdrop-filter: blur(16px);
                }
              }
              @keyframes zoomInModal {
                0% {
                  opacity: 0;
                  transform: scale(0.85) translateY(20px);
                }
                100% {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                }
              }
            `}</style>

            {/* Modal Dialog Card */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#d4a857] bg-gradient-to-b from-[#120826] via-[#0c051a] to-[#06020c] shadow-[0_0_80px_rgba(212,168,87,0.5)] md:flex-row"
              style={{
                animation:
                  "zoomInModal 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2.5 right-2.5 z-30 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-[#ffe8ad] bg-[#a855f7] text-white font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all hover:scale-110 active:scale-95 hover:bg-[#c084fc]"
                title="Close (Esc)"
              >
                ✕
              </button>

              {/* LEFT COLUMN: Official Poster Image (Enlarged) */}
              <div className="relative flex shrink-0 items-center justify-center bg-[#070310] p-3 max-h-[44vh] sm:max-h-[50vh] md:max-h-none md:w-1/2 md:p-6 border-b border-[#d4a857]/30 md:border-b-0 md:border-r">
                <div className="group relative max-h-full w-full flex items-center justify-center overflow-hidden rounded-xl border border-[#ffe8ad] shadow-[0_0_25px_rgba(212,168,87,0.6)] bg-black/40 cursor-pointer"
                  onClick={() => {
                    // Open image directly in new tab or enlarged window
                    window.open("/Janmashtami/images/Participants.jpeg", "_blank");
                  }}
                  title="Click to view full resolution poster"
                >
                  <img
                    src="/Janmashtami/images/Participants.jpeg"
                    alt="Call for Participation - Janmashtami '26 IITK"
                    className="block h-auto max-h-[40vh] sm:max-h-[46vh] md:max-h-[72vh] w-auto max-w-full rounded-[10px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-[#ffe8ad] bg-[#0c051a]/90 px-3 py-1 text-xs font-bold text-[#ffe8ad] shadow-lg">
                      🔍 View Full Poster
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Details & Form Link */}
              <div className="flex flex-1 flex-col justify-between overflow-y-auto min-h-0 p-4 sm:p-6 md:p-7 scrollbar-none">
                <div>
                  {/* Top Badge */}
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4a857]/50 bg-[#d4a857]/15 px-3 py-1 backdrop-blur-md">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#f0d68a] sm:text-xs">
                      ✦ Call for Participation ✦
                    </span>
                  </div>

                  {/* Modal Title */}
                  <h2
                    className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-3xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Janmashtami '26 IITK
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-white/80 sm:text-sm">
                    Be a part of the grandest celebration! Participate or volunteer:
                  </p>

                  {/* Categories Grid */}
                  <div className="mt-3 flex overflow-x-auto gap-1.5 p-0.5 scrollbar-none sm:grid sm:grid-cols-2 sm:gap-2 text-xs">
                    {categories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="flex shrink-0 sm:shrink items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 backdrop-blur-sm transition-all hover:border-[#d4a857]/60 hover:bg-[#d4a857]/15"
                      >
                        <span className="text-xs sm:text-sm">{cat.icon}</span>
                        <span className="font-bold text-[#f3e8ff] truncate text-xs">
                          {cat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2 sm:mt-6 sm:pt-4">
                  {/* Google Form Link CTA */}
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white bg-gradient-to-r from-[#d4a857] via-[#ffe8ad] to-[#d4a857] py-2.5 px-4 text-xs font-black uppercase tracking-wider text-[#0c051a] shadow-[0_0_35px_rgba(212,168,87,0.85)] transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:rounded-2xl sm:py-3.5 sm:px-6 sm:text-base"
                  >
                    <span>Fill Participation Form</span>
                    <span className="text-sm sm:text-lg transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
