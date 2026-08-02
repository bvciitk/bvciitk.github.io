"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

interface GalleryPhoto {
  id: string;
  src: string;
  category: "altar" | "kirtan" | "cultural" | "festivities";
  objectPosition?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ── Deity Altar & Abhishek ──
  { id: "p1", src: "/Janmashtami/images/gallery/imp1.webp", category: "altar" },
  { id: "p2", src: "/Janmashtami/images/gallery/IMG_0482.webp", category: "altar" },
  { id: "p3", src: "/Janmashtami/images/gallery/IMG_0483.webp", category: "altar" },
  { id: "p4", src: "/Janmashtami/images/gallery/IMG_0490.webp", category: "altar" },
  { id: "p5", src: "/Janmashtami/images/gallery/IMG_0493.webp", category: "altar" },
  { id: "p6", src: "/Janmashtami/images/gallery/IMG_0494.webp", category: "altar" },
  { id: "p7", src: "/Janmashtami/images/gallery/IMG_0511.webp", category: "altar" },
  { id: "p8", src: "/Janmashtami/images/gallery/IMG_0532.webp", category: "altar" },
  { id: "p9", src: "/Janmashtami/images/gallery/IMG_20250816_141311.webp", category: "altar" },
  { id: "p10", src: "/Janmashtami/images/gallery/IMG_20250816_153456_465_AI.webp", category: "altar" },

  // ── Kirtan & Bhajan ──
  { id: "p11", src: "/Janmashtami/images/gallery/IMG20220819194931_01.webp", category: "kirtan" },
  { id: "p12", src: "/Janmashtami/images/gallery/IMG_9906.webp", category: "kirtan", objectPosition: "object-top" },
  { id: "p13", src: "/Janmashtami/images/gallery/IMG_9925.webp", category: "kirtan" },
  { id: "p14", src: "/Janmashtami/images/gallery/DSCN6763.webp", category: "kirtan" },
  { id: "p15", src: "/Janmashtami/images/gallery/DSCN6785.webp", category: "kirtan" },
  { id: "p16", src: "/Janmashtami/images/gallery/DSC_0032.webp", category: "kirtan" },
  { id: "p17", src: "/Janmashtami/images/gallery/DSC_0078.webp", category: "kirtan" },
  { id: "p18", src: "/Janmashtami/images/gallery/DSC_0097.webp", category: "kirtan" },
  { id: "p19", src: "/Janmashtami/images/gallery/DSC_0105.webp", category: "kirtan" },
  { id: "p20", src: "/Janmashtami/images/gallery/DSC_0123.webp", category: "kirtan" },

  // ── Cultural Performances ──
  { id: "p21", src: "/Janmashtami/images/gallery/IMG_9853.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p22", src: "/Janmashtami/images/gallery/IMG_9876.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p23", src: "/Janmashtami/images/gallery/IMG_9887.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p24", src: "/Janmashtami/images/gallery/IMG_9899.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p25", src: "/Janmashtami/images/gallery/DSC_0126.webp", category: "cultural" },
  { id: "p26", src: "/Janmashtami/images/gallery/DSC_0182.webp", category: "cultural" },
  { id: "p27", src: "/Janmashtami/images/gallery/DSC_0217.webp", category: "cultural" },
  { id: "p28", src: "/Janmashtami/images/gallery/DSC_0221.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p29", src: "/Janmashtami/images/gallery/DSC_0252.webp", category: "cultural", objectPosition: "object-top" },
  { id: "p30", src: "/Janmashtami/images/gallery/DSC_0273.webp", category: "cultural" },

  // ── Festivities & Exhibits ──
  { id: "p31", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM.webp", category: "festivities" },
  { id: "p32", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.20 PM.webp", category: "festivities" },
  { id: "p33", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (1).webp", category: "festivities" },
  { id: "p34", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (2).webp", category: "festivities" },
  { id: "p35", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (3).webp", category: "festivities" },
  { id: "p36", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 12.50.21 PM (5).webp", category: "festivities" },
  { id: "p37", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.05 PM.webp", category: "festivities" },
  { id: "p38", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.06 PM.webp", category: "festivities" },
  { id: "p39", src: "/Janmashtami/images/gallery/WhatsApp Image 2026-08-01 at 1.31.07 PM.webp", category: "festivities" },
];

export default function ViewMoreGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeKey, setActiveKey] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#a855f7]/70 bg-[#050208] shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-[#ffe8ad] hover:shadow-[0_0_30px_rgba(192,132,252,0.7)] aspect-[4/3] transform-gpu"
            >
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                decoding="async"
                className={`block h-full w-full object-cover rounded-[13px] transition-transform duration-300 group-hover:scale-105 ${
                  photo.objectPosition || "object-center"
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FULLSCREEN LIGHTBOX MODAL — PORTAL TO BODY AT Z-[9999] ═══ */}
      {mounted &&
        lightboxIndex !== null &&
        GALLERY_PHOTOS[lightboxIndex] &&
        createPortal(
          <div
            onClick={() => setLightboxIndex(null)}
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

            <div
              key={activeKey}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center max-h-[82vh] max-w-[88vw] rounded-2xl border-[3.5px] border-[#c084fc] bg-[#0c061a] p-1 shadow-[0_0_70px_rgba(192,132,252,0.85)]"
              style={{ animation: "lightboxZoomIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
            >
              {/* Close Button — Placed safely inside top-right corner of image container */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-3 right-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ffe8ad] bg-[#a855f7] text-white font-black text-base shadow-[0_0_25px_rgba(168,85,247,0.9)] transition-all hover:scale-110 active:scale-95 hover:bg-[#c084fc]"
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
                className="absolute -left-5 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-left-6"
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
                className="absolute -right-5 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#ffe8ad]/80 bg-[#080412]/90 text-white font-bold text-xl backdrop-blur-md transition-all hover:bg-[#a855f7] hover:scale-110 hover:border-white shadow-xl md:-right-6"
                title="Next Photo (→)"
              >
                ›
              </button>

              {/* Lightbox Image Preview */}
              <img
                src={GALLERY_PHOTOS[lightboxIndex].src}
                alt=""
                className="block max-h-[78vh] w-auto max-w-[83vw] object-contain rounded-[13px] shadow-2xl transition-transform duration-300"
                style={{ animation: "imagePulse 0.3s ease-out forwards" }}
              />

              {/* Counter Overlay at bottom right */}
              <div className="absolute bottom-3 right-3 z-20 rounded-full border border-white/30 bg-black/80 px-3 py-0.5 text-[11px] font-bold text-[#f0d68a] backdrop-blur-sm shadow-md">
                {lightboxIndex + 1} / {GALLERY_PHOTOS.length}
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/50">
        <p>© BVCIITK. All rights reserved.</p>
      </footer>
    </main>
  );
}
