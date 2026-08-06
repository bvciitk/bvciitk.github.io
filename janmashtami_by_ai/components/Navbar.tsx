"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onNavigate?: (targetPercent: number) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (link: { label: string; percent?: number; href?: string }) => {
    setMobileMenuOpen(false);
    if (link.href) {
      window.location.href = link.href.startsWith("/") ? `/Janmashtami${link.href}` : link.href;
      return;
    }
    if (typeof link.percent === "number") {
      if (onNavigate) {
        onNavigate(link.percent);
        return;
      }
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: maxScroll * link.percent,
        behavior: "smooth",
      });
    }
  };

  const scrollLinks = [
    { label: "Home", percent: 0.0 },
    { label: "Events", percent: 0.24 },
    { label: "Aftermovies", percent: 0.42 },
    { label: "Gratitude", percent: 0.60 },
    { label: "Memories", percent: 0.78 },
  ];

  const pageLinks = [
    { label: "Gallery", href: "/view-more" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Brand Logo & Name */}
        <div
          onClick={() => handleLinkClick(scrollLinks[0])}
          className="flex cursor-pointer items-center gap-3 transition-transform duration-200 hover:scale-105"
        >
          <div className="relative h-14 w-20 sm:h-16 sm:w-24 transition-all duration-300 hover:scale-105 filter drop-shadow-[0_0_16px_rgba(255,232,173,0.75)]">
            <Image src="/Janmashtami/images/logo.png" alt="Janmashtami '26 IITK Logo" fill className="object-contain" priority />
          </div>
          <div className="hidden sm:block">
            <span className="block text-xs font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              BVC IIT Kanpur
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Scroll Section Links */}
          <div className="flex items-center gap-6">
            {scrollLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link)}
                className="text-sm font-bold text-white transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] hover:text-[#f0d68a] hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(212,168,87,0.8)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Glowing Vertical Divider */}
          <div className="h-5 w-[1.5px] bg-gradient-to-b from-transparent via-[#d4a857]/60 to-transparent mx-1" />

          {/* Page Navigation Action Buttons (Fully Opaque & High Contrast) */}
          <div className="flex items-center gap-2.5">
            {/* Gallery Button */}
            <button
              onClick={() => handleLinkClick(pageLinks[0])}
              className="group relative inline-flex items-center gap-1.5 rounded-full border-2 border-[#c084fc] bg-[#8b5cf6] px-4 py-1.5 text-xs font-black tracking-wider uppercase text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#9333ea] hover:border-[#ffe8ad] hover:shadow-[0_0_30px_rgba(192,132,252,0.9)]"
            >
              <span>🖼️ Gallery</span>
              <span className="text-[11px] font-bold opacity-90 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>

            {/* Contact Us Button */}
            <button
              onClick={() => handleLinkClick(pageLinks[1])}
              className="group relative inline-flex items-center gap-1.5 rounded-full border-2 border-[#ffe8ad] bg-gradient-to-r from-[#d4a857] to-[#eab308] px-4 py-1.5 text-xs font-black tracking-wider uppercase text-[#0c051a] shadow-[0_0_20px_rgba(212,168,87,0.6)] transition-all duration-300 hover:scale-105 hover:from-[#ffe8ad] hover:to-[#f0d68a] hover:border-white hover:shadow-[0_0_30px_rgba(255,232,173,0.9)]"
            >
              <span>📞 Contact</span>
              <span className="text-[11px] font-bold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#d4a857] bg-[#0a0514] text-[#f0d68a] font-bold shadow-lg md:hidden"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-[#d4a857]/30 bg-[#080410]/98 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3.5">
            {scrollLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link)}
                className="text-left text-base font-bold text-white hover:text-[#f0d68a]"
              >
                {link.label}
              </button>
            ))}

            <div className="my-1 border-t border-white/10" />

            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={() => handleLinkClick(pageLinks[0])}
                className="flex items-center justify-between rounded-xl border-2 border-[#c084fc] bg-[#8b5cf6] px-4 py-2.5 text-sm font-black text-white shadow-lg"
              >
                <span>🖼️ Photo Gallery</span>
                <span>↗</span>
              </button>

              <button
                onClick={() => handleLinkClick(pageLinks[1])}
                className="flex items-center justify-between rounded-xl border-2 border-[#ffe8ad] bg-[#d4a857] px-4 py-2.5 text-sm font-black text-[#0c051a] shadow-lg"
              >
                <span>📞 Contact & Location</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
