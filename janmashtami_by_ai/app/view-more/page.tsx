"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryPhoto {
  id: string;
  src: string;
  category: "altar" | "kirtan" | "cultural" | "festivities";
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ── Deity Altar & Abhishek ──
  { id: "p1", src: "/Janmashtami/images/gallery/imp1.JPG", category: "altar" },
  { id: "p2", src: "/Janmashtami/images/gallery/IMG_0482.jpg", category: "altar" },
  { id: "p3", src: "/Janmashtami/images/gallery/IMG_0483.jpg", category: "altar" },
  { id: "p4", src: "/Janmashtami/images/gallery/IMG_0490.jpg", category: "altar" },
  { id: "p5", src: "/Janmashtami/images/gallery/IMG_0493.jpg", category: "altar" },
  { id: "p6", src: "/Janmashtami/images/gallery/IMG_0494.jpg", category: "altar" },
  { id: "p7", src: "/Janmashtami/images/gallery/IMG_0511.jpg", category: "altar" },
  { id: "p8", src: "/Janmashtami/images/gallery/IMG_0532.jpg", category: "altar" },
  { id: "p9", src: "/Janmashtami/images/gallery/IMG_20250816_141311.jpg", category: "altar" },
  { id: "p10", src: "/Janmashtami/images/gallery/IMG_20250816_153456_465_AI.jpg", category: "altar" },

  // ── Kirtan & Bhajan ──
  { id: "p11", src: "/Janmashtami/images/gallery/IMG20220819194931_01.jpg", category: "kirtan" },
  { id: "p12", src: "/Janmashtami/images/gallery/IMG_9906.JPG", category: "kirtan" },
  { id: "p13", src: "/Janmashtami/images/gallery/IMG_9925.JPG", category: "kirtan" },
  { id: "p14", src: "/Janmashtami/images/gallery/DSCN6763.JPG", category: "kirtan" },
  { id: "p15", src: "/Janmashtami/images/gallery/DSCN6785.JPG", category: "kirtan" },
  { id: "p16", src: "/Janmashtami/images/gallery/DSC_0032.JPG", category: "kirtan" },
  { id: "p17", src: "/Janmashtami/images/gallery/DSC_0078.JPG", category: "kirtan" },
  { id: "p18", src: "/Janmashtami/images/gallery/DSC_0097.JPG", category: "kirtan" },
  { id: "p19", src: "/Janmashtami/images/gallery/DSC_0105.JPG", category: "kirtan" },
  { id: "p20", src: "/Janmashtami/images/gallery/DSC_0123.JPG", category: "kirtan" },

  // ── Cultural Performances ──
  { id: "p21", src: "/Janmashtami/images/gallery/IMG_9853.JPG", category: "cultural" },
  { id: "p22", src: "/Janmashtami/images/gallery/IMG_9876.JPG", category: "cultural" },
  { id: "p23", src: "/Janmashtami/images/gallery/IMG_9887.JPG", category: "cultural" },
  { id: "p24", src: "/Janmashtami/images/gallery/IMG_9899.JPG", category: "cultural" },
  { id: "p25", src: "/Janmashtami/images/gallery/DSC_0126.JPG", category: "cultural" },
  { id: "p26", src: "/Janmashtami/images/gallery/DSC_0182.JPG", category: "cultural" },
  { id: "p27", src: "/Janmashtami/images/gallery/DSC_0217.JPG", category: "cultural" },
  { id: "p28", src: "/Janmashtami/images/gallery/DSC_0221.JPG", category: "cultural" },
  { id: "p29", src: "/Janmashtami/images/gallery/DSC_0252.JPG", category: "cultural" },
  { id: "p30", src: "/Janmashtami/images/gallery/DSC_0273.JPG", category: "cultural" },

  // ── Festivities & Exhibits ──
  { id: "p31", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM.jpeg", category: "festivities" },
  { id: "p32", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.20 PM.jpeg", category: "festivities" },
  { id: "p33", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (1).jpeg", category: "festivities" },
  { id: "p34", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (2).jpeg", category: "festivities" },
  { id: "p35", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (3).jpeg", category: "festivities" },
  { id: "p36", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (5).jpeg", category: "festivities" },
  { id: "p37", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.05 PM.jpeg", category: "festivities" },
  { id: "p38", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.06 PM.jpeg", category: "festivities" },
  { id: "p39", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.07 PM.jpeg", category: "festivities" },
];

export default function ViewMoreGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeKey, setActiveKey] = useState<number>(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setActiveKey(Date.now());
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
        );
        setActiveKey(Date.now());
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
            : 0
        );
        setActiveKey(Date.now());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <main className="min-h-screen bg-[#050208] text-white selection:bg-[#d4a857]/30">
      {/* ═══ TOP NAVBAR ═══ */}
      <nav className="sticky top-0 z-50 bg-transparent transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative h-14 w-20 sm:h-16 sm:w-24 transition-all duration-300 hover:scale-105 filter drop-shadow-[0_0_16px_rgba(255,232,173,0.75)]">
              <Image src="/Janmashtami/images/logo.png" alt="Janmashtami '26 IITK Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <span className="block text-xs font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857]">
                BVC IIT Kanpur
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f0d68a] transition-all hover:bg-[#d4a857]/20 hover:border-[#ffe8ad]"
            >
              <span>← Back to Janmashtami</span>
            </Link>
            <a
              href="../"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-white/80 hover:text-[#f0d68a] transition-colors"
            >
              Main BVC Website ↗
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO HEADER ═══ */}
      <section className="relative px-4 pt-10 pb-6 text-center md:pt-14 md:pb-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-widest uppercase text-[#f0d68a]">
              ✦ Memories & Celebrations ✦
            </span>
          </div>

          <h1
            className="mb-3 text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Photo Gallery
          </h1>
        </div>
      </section>

      {/* ═══ 3D MASONRY PHOTO GRID (COMPLETE PURPLE BORDER WRAP) ═══ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-[3px] border-[#a855f7] bg-[#050208] shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all duration-500 hover:border-[#d8b4fe] hover:shadow-[0_0_40px_rgba(216,180,254,0.95)] hover:scale-[1.03] aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt=""
                className="block h-full w-full object-cover object-center rounded-[13px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FULLSCREEN LIGHTBOX MODAL — PURPLE BORDER WRAPS IMAGE BOUNDS EXACTLY ═══ */}
      {lightboxIndex !== null && GALLERY_PHOTOS[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
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
            key={activeKey}
            onClick={(e) => e.stopPropagation()}
            className="relative flex items-center justify-center max-h-[85vh] max-w-[90vw] rounded-2xl border-[3.5px] border-[#c084fc] bg-[#0c061a] p-1 shadow-[0_0_70px_rgba(192,132,252,0.85)]"
            style={{ animation: "lightboxZoomIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-4 -right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ffe8ad] bg-[#a855f7] text-white font-black text-base shadow-[0_0_25px_rgba(168,85,247,0.9)] transition-all hover:scale-110 active:scale-95 hover:bg-[#c084fc]"
              title="Close (Esc)"
            >
              ✕
            </button>

            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                    : 0
                );
                setActiveKey(Date.now());
              }}
              className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-left-6"
              title="Previous Photo (←)"
            >
              ‹
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
                );
                setActiveKey(Date.now());
              }}
              className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-right-6"
              title="Next Photo (→)"
            >
              ›
            </button>

            {/* Lightbox Image Preview — Purple Border Exactly Wraps Image */}
            <img
              src={GALLERY_PHOTOS[lightboxIndex].src}
              alt=""
              className="block max-h-[82vh] w-auto max-w-[85vw] object-contain rounded-[13px] shadow-2xl transition-transform duration-300"
              style={{ animation: "imagePulse 0.3s ease-out forwards" }}
            />

            {/* Counter Overlay at bottom right */}
            <div className="absolute bottom-3 right-3 z-10 rounded-full border border-white/30 bg-black/80 px-3 py-0.5 text-[11px] font-bold text-[#f0d68a] backdrop-blur-sm shadow-md">
              {lightboxIndex + 1} / {GALLERY_PHOTOS.length}
            </div>
          </div>
        </div>
      )}

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/50">
        <p>© BVCIITK. All rights reserved.</p>
      </footer>
    </main>
  );
}
