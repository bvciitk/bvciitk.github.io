"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_DATA, GalleryItem } from "@/data/janmashtamiData";

export default function HighlightsGallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full max-w-5xl rounded-3xl border border-[#d4a857]/40 bg-gradient-to-br from-[#0c051a]/35 via-black/25 to-[#140a26]/35 p-5 shadow-[0_0_50px_rgba(212,168,87,0.25),0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-8">
      {/* Title */}
      <div className="mb-6 text-center">
        <h2
          className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Past Celebrations & Highlights
        </h2>
        <p className="mt-1 text-xs text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-base">
          A glimpse of past Janmashtami euphoria at IIT Kanpur
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {GALLERY_DATA.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative h-36 w-full cursor-pointer overflow-hidden rounded-xl border border-[#d4a857]/30 bg-black/25 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-[#ffe8ad] hover:bg-black/40 hover:shadow-[0_0_25px_rgba(212,168,87,0.4)] md:h-44"
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-2 left-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-[11px] font-bold text-[#ffe8ad] truncate drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-[#d4a857]/40 bg-[#080410] p-4 text-center shadow-2xl"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-white/20"
            >
              ✕
            </button>
            <div className="relative h-[60vh] w-full max-w-3xl">
              <Image
                src={activePhoto.src}
                alt={activePhoto.caption}
                fill
                className="object-contain"
                sizes="80vw"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-[#ffe8ad] md:text-base">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
