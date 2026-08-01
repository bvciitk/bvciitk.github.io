"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function RegistrationFooter() {
  const [showTshirtModal, setShowTshirtModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  return (
    <div className="w-full max-w-5xl rounded-3xl border border-[#d4a857]/40 bg-transparent p-5 shadow-[0_0_50px_rgba(212,168,87,0.15)] backdrop-blur-xs md:p-8">
      {/* Title Header */}
      <div className="mb-6 text-center">
        <h2
          className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Join the Divine Celebration
        </h2>
        <p className="mt-1 text-xs text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-base">
          Book Festival T-Shirts, Volunteer, or Register to Participate
        </p>
      </div>

      {/* Action Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {/* T-Shirt Card */}
        <div className="flex flex-col items-center justify-between rounded-2xl border border-[#d4a857]/35 bg-transparent p-5 text-center shadow-lg backdrop-blur-xs transition-all duration-300 hover:border-[#ffe8ad] hover:bg-black/20 hover:shadow-[0_0_35px_rgba(212,168,87,0.3)]">
          <div>
            <div className="relative mx-auto mb-3 h-28 w-28 overflow-hidden rounded-xl border border-[#d4a857]/50 shadow-md">
              <Image src="/Janmashtami/images/Tshirt.jpeg" alt="Janmashtami T-Shirt" fill className="object-cover" />
            </div>
            <h3 className="text-lg font-bold text-[#ffe8ad] drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">Janmashtami T-Shirt</h3>
            <p className="mt-1 text-xs font-medium text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">Exclusive official yellow/blue festive T-shirts.</p>
          </div>
          <button
            onClick={() => setShowTshirtModal(true)}
            className="mt-4 rounded-full border border-[#ffe8ad] bg-gradient-to-r from-[#d4a857]/50 via-[#f0d68a]/40 to-[#d4a857]/50 px-6 py-2.5 text-xs font-bold uppercase text-white shadow-[0_0_20px_rgba(212,168,87,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(240,214,138,0.7)]"
          >
            Order T-Shirt
          </button>
        </div>

        {/* Volunteer Card */}
        <div className="flex flex-col items-center justify-between rounded-2xl border border-[#d4a857]/35 bg-transparent p-5 text-center shadow-lg backdrop-blur-xs transition-all duration-300 hover:border-[#ffe8ad] hover:bg-black/20 hover:shadow-[0_0_35px_rgba(212,168,87,0.3)]">
          <div>
            <div className="relative mx-auto mb-3 h-28 w-28 overflow-hidden rounded-xl border border-[#d4a857]/50 shadow-md">
              <Image src="/Janmashtami/images/Participants.jpeg" alt="Volunteer Call" fill className="object-cover" />
            </div>
            <h3 className="text-lg font-bold text-[#ffe8ad] drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">Call for Volunteers</h3>
            <p className="mt-1 text-xs font-medium text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">Be part of the organizing team for Janmashtami.</p>
          </div>
          <button
            onClick={() => setShowVolunteerModal(true)}
            className="mt-4 rounded-full border border-[#ffe8ad] bg-gradient-to-r from-[#d4a857]/50 via-[#f0d68a]/40 to-[#d4a857]/50 px-6 py-2.5 text-xs font-bold uppercase text-white shadow-[0_0_20px_rgba(212,168,87,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(240,214,138,0.7)]"
          >
            Join as Volunteer
          </button>
        </div>
      </div>

      {/* Modals */}
      {showTshirtModal && (
        <div onClick={() => setShowTshirtModal(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-md rounded-2xl border border-[#d4a857]/40 bg-[#080410] p-6 text-center shadow-2xl">
            <button onClick={() => setShowTshirtModal(false)} className="absolute top-3 right-3 text-white/60 hover:text-white">✕</button>
            <h3 className="text-xl font-bold text-[#ffe8ad]">Book Janmashtami T-Shirt</h3>
            <div className="relative my-4 h-48 w-full overflow-hidden rounded-xl border border-[#d4a857]/30">
              <Image src="/Janmashtami/images/Tshirt.jpeg" alt="Tshirt" fill className="object-cover" />
            </div>
            <a href="https://forms.gle/jsRVfgJ1Yx5gMCEL7" target="_blank" rel="noopener noreferrer" className="inline-block w-full rounded-full border border-[#d4a857] bg-[#d4a857] py-2.5 font-bold uppercase text-black hover:bg-[#ffe8ad]">
              Open Order Form ↗
            </a>
          </div>
        </div>
      )}

      {showVolunteerModal && (
        <div onClick={() => setShowVolunteerModal(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-md rounded-2xl border border-[#d4a857]/40 bg-[#080410] p-6 text-center shadow-2xl">
            <button onClick={() => setShowVolunteerModal(false)} className="absolute top-3 right-3 text-white/60 hover:text-white">✕</button>
            <h3 className="text-xl font-bold text-[#ffe8ad]">Call for Volunteers</h3>
            <div className="relative my-4 h-48 w-full overflow-hidden rounded-xl border border-[#d4a857]/30">
              <Image src="/Janmashtami/images/Participants.jpeg" alt="Volunteer" fill className="object-cover" />
            </div>
            <a href="https://forms.gle/cr1SYA2jiCCPxgyk8" target="_blank" rel="noopener noreferrer" className="inline-block w-full rounded-full border border-[#d4a857] bg-[#d4a857] py-2.5 font-bold uppercase text-black hover:bg-[#ffe8ad]">
              Open Volunteer Form ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
