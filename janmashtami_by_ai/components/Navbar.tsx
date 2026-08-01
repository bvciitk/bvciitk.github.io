"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onNavigate?: (targetPercent: number) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToPercent = (percent: number) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(percent);
      return;
    }
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: maxScroll * percent,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", percent: 0.0 },
    { label: "Events", percent: 0.26 },
    { label: "Aftermovies", percent: 0.50 },
    { label: "Gratitude", percent: 0.74 },
    { label: "Contact Us", percent: 1.0 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#d4a857]/25 bg-transparent backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Brand Logo & Name */}
        <div
          onClick={() => scrollToPercent(0)}
          className="flex cursor-pointer items-center gap-3 transition-transform duration-200 hover:scale-105"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#d4a857] bg-[#0a0514] shadow-[0_0_15px_rgba(212,168,87,0.6)]">
            <Image src="/Janmashtami/images/logo.png" alt="BVC IITK Logo" fill className="object-contain p-0.5" />
          </div>
          <div>
            <span className="block text-base font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Janmashtami
            </span>
            <span className="block text-[11px] font-bold tracking-widest uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              BVC IIT Kanpur
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links — 100% Opaque Text */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => scrollToPercent(link.percent)}
              className="text-sm font-bold text-white transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] hover:text-[#f0d68a] hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(212,168,87,0.8)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Button — High Contrast Opaque Gold */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => scrollToPercent(0.95)}
            className="rounded-full border border-[#ffe8ad] bg-gradient-to-r from-[#d4a857] via-[#f0d68a] to-[#d4a857] px-5 py-2 text-xs font-black uppercase tracking-wider text-[#050208] shadow-[0_0_20px_rgba(212,168,87,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(240,214,138,0.9)]"
          >
            Order T-Shirt
          </button>
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
          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => scrollToPercent(link.percent)}
                className="text-left text-base font-bold text-white hover:text-[#f0d68a]"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 pt-3 border-t border-white/20">
              <button
                onClick={() => scrollToPercent(0.95)}
                className="w-full rounded-full border border-[#ffe8ad] bg-gradient-to-r from-[#d4a857] to-[#f0d68a] py-2.5 text-center text-xs font-black uppercase text-black shadow-lg"
              >
                Order T-Shirt
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
