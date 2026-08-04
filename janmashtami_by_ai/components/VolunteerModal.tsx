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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-6 backdrop-blur-xl transition-all duration-300"
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
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-2 border-[#d4a857] bg-gradient-to-b from-[#120826] via-[#0c051a] to-[#06020c] shadow-[0_0_80px_rgba(212,168,87,0.5)] md:flex-row"
              style={{
                animation:
                  "zoomInModal 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 z-30 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#ffe8ad] bg-[#a855f7] text-white font-black text-sm shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all hover:scale-110 active:scale-95 hover:bg-[#c084fc]"
                title="Close (Esc)"
              >
                ✕
              </button>

              {/* LEFT COLUMN: Official Poster Image */}
              <div className="relative flex shrink-0 items-center justify-center bg-[#070310] p-2 max-h-[24vh] md:max-h-none md:w-5/12 md:p-6">
                <div className="relative max-h-full overflow-hidden rounded-xl border border-[#ffe8ad] shadow-[0_0_20px_rgba(212,168,87,0.5)]">
                  <img
                    src="/Janmashtami/images/Participants.jpeg"
                    alt="Call for Participation - Janmashtami '26 IITK"
                    className="block h-auto max-h-[20vh] sm:max-h-[50vh] md:max-h-[70vh] w-auto rounded-[10px] object-contain"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: Details & Form Link */}
              <div className="flex flex-1 flex-col justify-between overflow-y-auto min-h-0 p-4 md:p-7">
                <div>
                  {/* Top Badge */}
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#d4a857]/50 bg-[#d4a857]/15 px-3 py-0.5 backdrop-blur-md">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#f0d68a] sm:text-[11px]">
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
                  <p className="mt-1 text-xs font-semibold text-white/80 md:text-sm">
                    Be a part of the grandest celebration at IIT Kanpur! Participate or volunteer in exciting events:
                  </p>

                  {/* Categories Grid (Compact on mobile to fit nicely) */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:gap-3 sm:text-sm">
                    {categories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 backdrop-blur-sm transition-all hover:border-[#d4a857]/60 hover:bg-[#d4a857]/15 hover:scale-[1.02]"
                      >
                        <span className="text-sm sm:text-base">{cat.icon}</span>
                        <span className="font-bold text-[#f3e8ff] truncate text-[11px] sm:text-xs">
                          {cat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3.5">
                  {/* Google Form Link CTA */}
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-white bg-gradient-to-r from-[#d4a857] via-[#ffe8ad] to-[#d4a857] py-3.5 px-6 text-sm font-black uppercase tracking-wider text-[#0c051a] shadow-[0_0_35px_rgba(212,168,87,0.85)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,232,173,1)] active:scale-95 sm:text-base"
                  >
                    <span>Fill Participation Form</span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  {/* Contact Queries Info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/70">
                    <span className="font-medium">For queries contact:</span>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+918971460606"
                        className="font-bold text-[#f0d68a] hover:underline"
                      >
                        Shashwath: 89714 60606
                      </a>
                      <span>•</span>
                      <a
                        href="tel:+916366803430"
                        className="font-bold text-[#f0d68a] hover:underline"
                      >
                        Aniket: 63668 03430
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
