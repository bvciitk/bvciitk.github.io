"use client";

import React from "react";

const COLLAGE_IMAGES = [
  // ════ TOP ROW ════
  // Top Left: Kirtan Stage Performance (Landscape)
  {
    id: "top-left",
    src: "/Janmashtami/images/collage/IMG20220819194931_01.jpg",
    fallbackSrc: "/images/collage/IMG20220819194931_01.jpg",
  },
  // Top Middle: Audience Seated in Auditorium (Standard)
  {
    id: "top-middle",
    src: "/Janmashtami/images/collage/WhatsApp Image 2026-08-01 at 12.50.21 PM.jpeg",
    fallbackSrc: "/images/collage/WhatsApp Image 2026-08-01 at 12.50.21 PM.jpeg",
  },
  // Top Right: Jagannath Deities Altar (Landscape)
  {
    id: "top-right",
    src: "/Janmashtami/images/collage/imp1.JPG",
    fallbackSrc: "/images/collage/imp1.JPG",
  },

  // ════ BOTTOM ROW ════
  // Bottom Left: Cultural Dance Performance (Vertical Portrait Crop 4:5)
  {
    id: "bottom-left",
    src: "/Janmashtami/images/collage/IMG_9853.JPG",
    fallbackSrc: "/images/collage/IMG_9853.JPG",
  },
  // Bottom Middle: Diorama Cave & Krishna Display (Landscape)
  {
    id: "bottom-middle",
    src: "/Janmashtami/images/collage/IMG_0482.jpg",
    fallbackSrc: "/images/collage/IMG_0482.jpg",
  },
  // Bottom Right: Mridanga Player in Red Kurta (Landscape)
  {
    id: "bottom-right",
    src: "/Janmashtami/images/collage/IMG_9906.JPG",
    fallbackSrc: "/images/collage/IMG_9906.JPG",
  },
];

export default function PhotoCollage() {
  return (
    <div className="relative mx-auto flex w-[82vw] max-w-[1300px] flex-col items-center justify-center p-2 md:p-4">
      {/* Floating Photo Collage with Fillet Corners & Vibrant Purple Borders */}
      <div className="flex w-full flex-col gap-3.5 md:gap-5">
        {/* ════ TOP ROW ════ */}
        <div className="flex w-full flex-col items-start justify-between gap-3.5 sm:flex-row md:gap-5">
          {/* Top Left: Kirtan Stage */}
          <div className="group relative w-full overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-black/60 shadow-[0_0_20px_rgba(168,85,247,0.45)] sm:w-[35%] aspect-[16/10] transition-all duration-500 hover:border-[#c084fc] hover:shadow-[0_0_35px_rgba(192,132,252,0.7)] hover:scale-[1.02]">
            <img
              src={COLLAGE_IMAGES[0].src}
              onError={(e) => {
                (e.target as HTMLImageElement).src = COLLAGE_IMAGES[0].fallbackSrc;
              }}
              alt=""
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>

          {/* Top Middle: Audience Seated */}
          <div className="group relative w-full overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-black/60 shadow-[0_0_20px_rgba(168,85,247,0.45)] sm:w-[34%] aspect-[16/10] transition-all duration-500 hover:border-[#c084fc] hover:shadow-[0_0_35px_rgba(192,132,252,0.7)] hover:scale-[1.02]">
            <img
              src={COLLAGE_IMAGES[1].src}
              onError={(e) => {
                (e.target as HTMLImageElement).src = COLLAGE_IMAGES[1].fallbackSrc;
              }}
              alt=""
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>

          {/* Top Right: Deities Altar */}
          <div className="group relative w-full overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-black/60 shadow-[0_0_20px_rgba(168,85,247,0.45)] sm:w-[31%] aspect-[4/3] transition-all duration-500 hover:border-[#c084fc] hover:shadow-[0_0_35px_rgba(192,132,252,0.7)] hover:scale-[1.02]">
            <img
              src={COLLAGE_IMAGES[2].src}
              onError={(e) => {
                (e.target as HTMLImageElement).src = COLLAGE_IMAGES[2].fallbackSrc;
              }}
              alt=""
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
        </div>

        {/* ════ BOTTOM ROW ════ */}
        <div className="flex w-full flex-col items-end justify-between gap-3.5 sm:flex-row md:gap-5">
          {/* Bottom Left: Cultural Dance Performance (Vertical Portrait Crop 4:5) */}
          <div className="group relative w-full overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-black/60 shadow-[0_0_20px_rgba(168,85,247,0.45)] sm:w-[23%] aspect-[4/5] transition-all duration-500 hover:border-[#c084fc] hover:shadow-[0_0_35px_rgba(192,132,252,0.7)] hover:scale-[1.02]">
            <img
              src={COLLAGE_IMAGES[3].src}
              onError={(e) => {
                (e.target as HTMLImageElement).src = COLLAGE_IMAGES[3].fallbackSrc;
              }}
              alt=""
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>

          {/* Bottom Middle: Diorama Display */}
          <div className="group relative w-full overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-black/60 shadow-[0_0_20px_rgba(168,85,247,0.45)] sm:w-[41%] aspect-[4/3] transition-all duration-500 hover:border-[#c084fc] hover:shadow-[0_0_35px_rgba(192,132,252,0.7)] hover:scale-[1.02]">
            <img
              src={COLLAGE_IMAGES[4].src}
              onError={(e) => {
                (e.target as HTMLImageElement).src = COLLAGE_IMAGES[4].fallbackSrc;
              }}
              alt=""
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>

          {/* Bottom Right: Mridanga Player in Red Kurta */}
          <div className="group relative w-full overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-black/60 shadow-[0_0_20px_rgba(168,85,247,0.45)] sm:w-[36%] aspect-[4/3] transition-all duration-500 hover:border-[#c084fc] hover:shadow-[0_0_35px_rgba(192,132,252,0.7)] hover:scale-[1.02]">
            <img
              src={COLLAGE_IMAGES[5].src}
              onError={(e) => {
                (e.target as HTMLImageElement).src = COLLAGE_IMAGES[5].fallbackSrc;
              }}
              alt=""
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
