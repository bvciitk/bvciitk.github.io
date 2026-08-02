"use client";

import React, { useState, useEffect } from "react";

const COLLAGE_IMAGES = [
  // ════ TOP ROW ════
  {
    id: "top-left",
    title: "Kirtan Stage Performance",
    src: "/Janmashtami/images/collage/IMG20220819194931_01.jpg",
    fallbackSrc: "/images/collage/IMG20220819194931_01.jpg",
  },
  {
    id: "top-middle",
    title: "Audience Seated in Auditorium",
    src: "/Janmashtami/images/collage/WhatsApp Image 2026-08-01 at 12.50.21 PM.jpeg",
    fallbackSrc: "/images/collage/WhatsApp Image 2026-08-01 at 12.50.21 PM.jpeg",
  },
  {
    id: "top-right",
    title: "Jagannath Deities Altar",
    src: "/Janmashtami/images/collage/imp1.JPG",
    fallbackSrc: "/images/collage/imp1.JPG",
  },

  // ════ BOTTOM ROW ════
  {
    id: "bottom-left",
    title: "Cultural Dance Performance",
    src: "/Janmashtami/images/collage/IMG_9853.JPG",
    fallbackSrc: "/images/collage/IMG_9853.JPG",
  },
  {
    id: "bottom-middle",
    title: "Diorama Pastime Display",
    src: "/Janmashtami/images/collage/IMG_0482.jpg",
    fallbackSrc: "/images/collage/IMG_0482.jpg",
  },
  {
    id: "bottom-right",
    title: "Mridanga Sankirtan Player",
    src: "/Janmashtami/images/collage/IMG_9906.JPG",
    fallbackSrc: "/images/collage/IMG_9906.JPG",
  },
];

export default function PhotoCollage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeImageKey, setActiveImageKey] = useState<number>(0);

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
      {/* Floating Photo Collage Grid with Complete Purple Borders */}
      <div className="flex w-full flex-col gap-3 sm:gap-5">
        {/* ════ TOP ROW ════ */}
        <div className="flex w-full flex-col items-start justify-between gap-3.5 sm:flex-row md:gap-5">
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
                className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-[#050208] shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all duration-500 hover:border-[#d8b4fe] hover:shadow-[0_0_40px_rgba(216,180,254,0.95)] hover:scale-[1.03] ${widthClasses[idx]}`}
              >
                <img
                  src={img.src}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = img.fallbackSrc;
                  }}
                  alt=""
                  className="block h-full w-full object-cover object-center rounded-[13px] transition-transform duration-700 group-hover:scale-105"
                />

              </div>
            );
          })}
        </div>

        {/* ════ BOTTOM ROW ════ */}
        <div className="flex w-full flex-col items-end justify-between gap-3.5 sm:flex-row md:gap-5">
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
                className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-[#050208] shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all duration-500 hover:border-[#d8b4fe] hover:shadow-[0_0_40px_rgba(216,180,254,0.95)] hover:scale-[1.03] ${widthClasses[idx]}`}
              >
                <img
                  src={img.src}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = img.fallbackSrc;
                  }}
                  alt=""
                  className="block h-full w-full object-cover object-center rounded-[13px] transition-transform duration-700 group-hover:scale-105"
                />

              </div>
            );
          })}
        </div>
      </div>

      {/* ════ FULLSCREEN LIGHTBOX MODAL — PURPLE BORDER WRAPS IMAGE BOUNDS EXACTLY ════ */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/94 p-4 backdrop-blur-xl transition-all duration-300"
          style={{ animation: "lightboxFadeIn 0.3s ease-out forwards" }}
        >
          <style jsx>{`
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
            className="relative flex items-center justify-center max-h-[85vh] max-w-[90vw] rounded-2xl border-[3.5px] border-[#c084fc] bg-[#0c061a] p-1 shadow-[0_0_70px_rgba(192,132,252,0.85)]"
            style={{ animation: "lightboxZoomIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ffe8ad] bg-[#a855f7] text-white font-black text-base shadow-[0_0_25px_rgba(168,85,247,0.9)] transition-all hover:scale-110 active:scale-95 hover:bg-[#c084fc]"
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
              className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-left-6"
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
              className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-right-6"
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
              className="block max-h-[82vh] w-auto max-w-[85vw] object-contain rounded-[13px] shadow-2xl transition-transform duration-300"
              style={{ animation: "imagePulse 0.3s ease-out forwards" }}
            />

            {/* Counter Overlay at bottom right of image */}
            <div className="absolute bottom-3 right-3 z-10 rounded-full border border-white/30 bg-black/80 px-3 py-0.5 text-[11px] font-bold text-[#f0d68a] backdrop-blur-sm shadow-md">
              {selectedIndex + 1} / {COLLAGE_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
