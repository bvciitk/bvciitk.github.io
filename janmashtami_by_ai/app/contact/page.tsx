"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050208] text-white selection:bg-[#d4a857]/30">
      {/* ═══ TOP NAVBAR ═══ */}
      <nav className="sticky top-0 z-50 border-b border-[#d4a857]/30 bg-[#080410]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#d4a857] bg-[#0a0514] shadow-[0_0_15px_rgba(212,168,87,0.6)]">
              <Image src="/Janmashtami/images/logo.png" alt="BVC IITK Logo" fill className="object-contain p-0.5" />
            </div>
            <div>
              <span className="block text-base font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe8ad] to-[#d4a857]">
                Janmashtami
              </span>
              <span className="block text-[11px] font-bold tracking-widest uppercase text-white">
                BVC IIT Kanpur
              </span>
            </div>
          </Link>

          {/* Navigation Actions */}
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
      <section className="relative px-4 pt-12 pb-8 text-center md:pt-16 md:pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-widest uppercase text-[#f0d68a]">
              ✦ Reach Out to Us ✦
            </span>
          </div>

          <h1
            className="mb-4 text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact & Location
          </h1>

          <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-white/90 md:text-base">
            Have questions about Janmashtami celebrations, volunteering, or Bhagavad Gita sessions? Connect with the Bhaktivedanta Club team at IIT Kanpur.
          </p>
        </div>
      </section>

      {/* ═══ MAIN CONTENT GRID ═══ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT COLUMN: Contact Cards & About BVC */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Direct Contact Methods */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Email Card */}
              <a
                href="mailto:bhaktivedanta.club.iitk12@gmail.com"
                className="group relative flex flex-col justify-between rounded-2xl border-2 border-[#d4a857]/40 bg-[#080412]/90 p-5 shadow-lg transition-all duration-300 hover:border-[#ffe8ad] hover:bg-[#0d061e] hover:shadow-[0_0_25px_rgba(212,168,87,0.3)]"
              >
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4a857]/50 bg-[#d4a857]/10 text-xl text-[#f0d68a]">
                    📧
                  </div>
                  <h3 className="mb-1 text-base font-bold text-[#ffe8ad]">Email Us</h3>
                  <p className="text-xs text-white/70 break-all">
                    bhaktivedanta.club.iitk12@gmail.com
                  </p>
                </div>
                <span className="mt-4 text-xs font-bold text-[#f0d68a] group-hover:underline">
                  Send Email →
                </span>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+916394185667"
                className="group relative flex flex-col justify-between rounded-2xl border-2 border-[#d4a857]/40 bg-[#080412]/90 p-5 shadow-lg transition-all duration-300 hover:border-[#ffe8ad] hover:bg-[#0d061e] hover:shadow-[0_0_25px_rgba(212,168,87,0.3)]"
              >
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4a857]/50 bg-[#d4a857]/10 text-xl text-[#f0d68a]">
                    📞
                  </div>
                  <h3 className="mb-1 text-base font-bold text-[#ffe8ad]">Call Us</h3>
                  <p className="text-xs text-white/70">
                    +91 63941-85667
                  </p>
                </div>
                <span className="mt-4 text-xs font-bold text-[#f0d68a] group-hover:underline">
                  Call Now →
                </span>
              </a>
            </div>

            {/* Address Card */}
            <div className="rounded-2xl border-2 border-[#d4a857]/40 bg-[#080412]/90 p-6 shadow-lg">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4a857]/50 bg-[#d4a857]/10 text-xl text-[#f0d68a]">
                📍
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#ffe8ad]">Physical Address</h3>
              <p className="text-sm leading-relaxed text-white/90">
                House no. 664, Lane 36, Kalyanpur, Kanpur, Uttar Pradesh 208016
              </p>
              <div className="mt-4 pt-3 border-t border-white/10">
                <a
                  href="https://maps.google.com/?q=Bhaktivedanta+Club+IIT+Kanpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f0d68a] hover:text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* About Bhaktivedanta Club Card */}
            <div className="rounded-2xl border-2 border-[#d4a857]/40 bg-gradient-to-br from-[#0c061a] to-[#06030c] p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[#d4a857]">
                  <Image src="/Janmashtami/images/logo.png" alt="BVC Logo" fill className="object-contain p-0.5" />
                </div>
                <h3 className="text-base font-bold text-[#ffe8ad]">
                  Bhaktivedanta Club (BVC) IIT Kanpur
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-white/80">
                Promoting holistic living amongst the student community through cleanliness habits, nutritious diets, regular mantra meditation sessions, seminars on Bhagavad Gita, and selfless service.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="../"
                  className="rounded-full border border-[#d4a857]/50 bg-[#d4a857]/20 px-4 py-1.5 text-xs font-bold text-[#f0d68a] hover:bg-[#d4a857]/40 transition-colors"
                >
                  ← Back to Main BVC Website
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Google Maps & Navigation */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Interactive Google Map Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-[#d4a857]/40 bg-[#080412]/90 shadow-lg">
              <div className="border-b border-[#d4a857]/30 bg-[#0c061a] px-5 py-3.5 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#f0d68a]">
                  🗺️ Campus Location Map
                </h3>
                <span className="text-[11px] text-white/50">IIT Kanpur Region</span>
              </div>
              <div className="h-[460px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.0944772031826!2d80.23666497409646!3d26.517085776982977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37b096d4ff0f%3A0xd6e26ef002612917!2sBhaktivedanta%20Club%20IIT%20Kanpur!5e0!3m2!1sen!2sin!4v1691485300052!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/50">
        <p>© BVCIITK. All rights reserved.</p>
      </footer>
    </main>
  );
}
