"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const COLLAGE_IMAGES = [
  // ════ TOP ROW ════
  {
    id: "top-left",
    title: "Kirtan Stage Performance",
    src: "/Janmashtami/images/collage/IMG20220819194931_01.webp",
    fallbackSrc: "/images/collage/IMG20220819194931_01.webp",
  },
  {
    id: "top-middle",
    title: "Audience Seated in Auditorium",
    src: "/Janmashtami/images/collage/WhatsApp Image 2026-08-01 at 12.50.21 PM.webp",
    fallbackSrc: "/images/collage/WhatsApp Image 2026-08-01 at 12.50.21 PM.webp",
  },
  {
    id: "top-right",
    title: "Jagannath Deities Altar",
    src: "/Janmashtami/images/collage/imp1.webp",
    fallbackSrc: "/images/collage/imp1.webp",
  },

  // ════ BOTTOM ROW ════
  {
    id: "bottom-left",
    title: "Cultural Dance Performance",
    src: "/Janmashtami/images/collage/IMG_9853.webp",
    fallbackSrc: "/images/collage/IMG_9853.webp",
    objectPosition: "object-top",
  },
  {
    id: "bottom-middle",
    title: "Diorama Pastime Display",
    src: "/Janmashtami/images/collage/IMG_0482.webp",
    fallbackSrc: "/images/collage/IMG_0482.webp",
  },
  {
    id: "bottom-right",
    title: "Mridanga Sankirtan Player",
    src: "/Janmashtami/images/collage/IMG_9906.webp",
    fallbackSrc: "/images/collage/IMG_9906.webp",
    objectPosition: "object-top",
  },
];

export default function PhotoCollage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeImageKey, setActiveImageKey] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setActiveImageKey(Date.now());
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % COLLAGE_IMAGES.length : 0));
        setActiveImageKey(Date.now());
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + COLLAGE_IMAGES.length) % COLLAGE_IMAGES.length : 0
        );
        setActiveImageKey(Date.now());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="relative mx-auto flex w-[94vw] sm:w-[82vw] max-w-[1300px] flex-col items-center justify-center p-1 sm:p-4">
      {/* ════ MOBILE COLLAGE BENTO GRID (< 640px) ════ */}
      <div className="grid w-full grid-cols-2 gap-2.5 sm:hidden">
        {COLLAGE_IMAGES.map((img, idx) => {
          const isFeatured = idx === 0 || idx === 5;
          return (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 border-[#a855f7]/70 bg-[#050208] shadow-md transition-all duration-300 active:scale-95 ${
                isFeatured ? "col-span-2 aspect-[16/9]" : "col-span-1 aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = img.fallbackSrc;
                }}
                alt={img.title}
                className={`block h-full w-full object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-105 ${
                  img.objectPosition || "object-center"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* ════ DESKTOP PHOTO COLLAGE GRID (>= 640px) ════ */}
      <div className="hidden sm:flex w-full flex-col gap-3 sm:gap-5">
        {/* ════ TOP ROW ════ */}
        <div className="flex w-full flex-row items-start justify-between gap-3.5 md:gap-5">
          {COLLAGE_IMAGES.slice(0, 3).map((img, idx) => {
            const widthClasses = [
              "sm:w-[35%] aspect-[16/10]",
              "sm:w-[34%] aspect-[16/10]",
              "sm:w-[31%] aspect-[4/3]",
            ];
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-[#a855f7]/70 bg-[#050208] shadow-md transition-all duration-300 hover:border-[#ffe8ad] hover:shadow-[0_0_30px_rgba(192,132,252,0.7)] hover:scale-[1.03] transform-gpu ${widthClasses[idx]}`}
              >
                <img
                  src={img.src}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = img.fallbackSrc;
                  }}
                  alt={img.title}
                  className={`block h-full w-full object-cover rounded-[13px] transition-transform duration-300 group-hover:scale-105 ${
                    img.objectPosition || "object-center"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* ════ BOTTOM ROW ════ */}
        <div className="flex w-full flex-row items-end justify-between gap-3.5 md:gap-5">
          {COLLAGE_IMAGES.slice(3, 6).map((img, idx) => {
            const globalIdx = idx + 3;
            const widthClasses = [
              "sm:w-[23%] aspect-[4/5]",
              "sm:w-[41%] aspect-[4/3]",
              "sm:w-[36%] aspect-[4/3]",
            ];
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(globalIdx)}
                className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-[#a855f7]/70 bg-[#050208] shadow-md transition-all duration-300 hover:border-[#ffe8ad] hover:shadow-[0_0_30px_rgba(192,132,252,0.7)] hover:scale-[1.03] transform-gpu ${widthClasses[idx]}`}
              >
                <img
                  src={img.src}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = img.fallbackSrc;
                  }}
                  alt={img.title}
                  className={`block h-full w-full object-cover rounded-[13px] transition-transform duration-300 group-hover:scale-105 ${
                    img.objectPosition || "object-center"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ════ VIEW MORE BUTTON BELOW COLLAGE ════ */}
      <div className="mt-4 sm:mt-8 flex justify-center">
        <a
          href="/Janmashtami/view-more/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-[#ffe8ad] bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#a855f7] px-6 py-2.5 text-xs font-extrabold tracking-wider uppercase text-white shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(192,132,252,0.95)] hover:border-white active:scale-95 sm:px-8 sm:py-3.5 sm:text-sm sm:gap-2.5"
        >
          <span>View More Photos</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* ════ FULLSCREEN LIGHTBOX MODAL — PORTAL TO BODY AT Z-[9999] ════ */}
      {mounted &&
        selectedIndex !== null &&
        createPortal(
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-xl transition-all duration-300"
            style={{ animation: "lightboxFadeIn 0.3s ease-out forwards" }}
          >
            <style jsx global>{`
              @keyframes lightboxFadeIn {
                from { opacity: 0; backdrop-filter: blur(0px); }
                to { opacity: 1; backdrop-filter: blur(16px); }
              }
              @keyframes lightboxZoomIn {
                0% { opacity: 0; transform: scale(0.82) translateY(24px); }
                100% { opacity: 1; transform: scale(1) translateY(0); }
              }
              @keyframes imagePulse {
                0% { transform: scale(0.96); opacity: 0.7; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}</style>

            {/* Tight Image Container — Purple Border Exactly Fits Image Bounds */}
            <div
              key={activeImageKey}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center max-h-[82vh] max-w-[88vw] rounded-2xl border-[3.5px] border-[#c084fc] bg-[#0c061a] p-1 shadow-[0_0_70px_rgba(192,132,252,0.85)]"
              style={{ animation: "lightboxZoomIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
            >
              {/* Close Button — Placed safely inside top-right corner of image container */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ffe8ad] bg-[#a855f7] text-white font-black text-base shadow-[0_0_25px_rgba(168,85,247,0.9)] transition-all hover:scale-110 active:scale-95 hover:bg-[#c084fc]"
                title="Close (Esc)"
              >
                ✕
              </button>

              {/* Previous Image Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev - 1 + COLLAGE_IMAGES.length) % COLLAGE_IMAGES.length : 0
                  );
                  setActiveImageKey(Date.now());
                }}
                className="absolute -left-5 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-left-6"
                title="Previous Photo (←)"
              >
                ‹
              </button>

              {/* Next Image Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev + 1) % COLLAGE_IMAGES.length : 0
                  );
                  setActiveImageKey(Date.now());
                }}
                className="absolute -right-5 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-right-6"
                title="Next Photo (→)"
              >
                ›
              </button>

              {/* Image — exactly fits inside border */}
              <img
                src={COLLAGE_IMAGES[selectedIndex].src}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = COLLAGE_IMAGES[selectedIndex].fallbackSrc;
                }}
                alt=""
                className="block max-h-[78vh] w-auto max-w-[83vw] object-contain rounded-[13px] shadow-2xl transition-transform duration-300"
                style={{ animation: "imagePulse 0.3s ease-out forwards" }}
              />

              {/* Counter Overlay at bottom right of image */}
              <div className="absolute bottom-3 right-3 z-20 rounded-full border border-white/30 bg-black/80 px-3 py-0.5 text-[11px] font-bold text-[#f0d68a] backdrop-blur-sm shadow-md">
                {selectedIndex + 1} / {COLLAGE_IMAGES.length}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
