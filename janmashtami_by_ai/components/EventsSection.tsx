"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EVENTS_DATA, EventItem } from "@/data/janmashtamiData";

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<string>(EVENTS_DATA[0].id);
  const activeEvent = EVENTS_DATA.find((e) => e.id === activeTab) || EVENTS_DATA[0];

  return (
    <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl border-2 border-[#d4a857]/60 bg-[#06030c]/90 p-3.5 sm:p-5 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] backdrop-blur-md max-h-[88vh] overflow-y-auto sm:max-h-none scrollbar-none">
      {/* Title Header */}
      <div className="mb-3 text-center sm:mb-6">
        <h2
          className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] sm:text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Grand Events & Festivities
        </h2>
        <p className="mt-1 text-[11px] font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1)] sm:text-xs md:text-base">
          Exciting Games, events, and performances by all age groups
        </p>
      </div>

      {/* Tabs — Horizontally Scrollable on Mobile, Wrapped on Desktop */}
      <div className="mb-3 flex items-center justify-start gap-2 overflow-x-auto p-1 scrollbar-none sm:mb-6 sm:justify-center sm:flex-wrap sm:gap-3.5 max-w-full">
        {EVENTS_DATA.map((event) => {
          const isActive = activeTab === event.id;
          return (
            <button
              key={event.id}
              onClick={() => setActiveTab(event.id)}
              className={`relative shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-extrabold tracking-wide transition-all duration-300 ease-out hover:scale-105 active:scale-95 sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm ${
                isActive
                  ? "border-2 border-[#ffe8ad] bg-gradient-to-r from-[#d4a857] via-[#f0d68a] to-[#d4a857] text-[#050208] shadow-[0_0_30px_rgba(240,214,138,0.9)] scale-105 font-black"
                  : "border-2 border-[#d4a857]/50 bg-[#080412]/90 text-white hover:border-[#ffe8ad] hover:bg-[#d4a857]/30 hover:text-white shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              }`}
            >
              {event.title}
            </button>
          );
        })}
      </div>

      {/* Active Event Card */}
      <div className="grid grid-cols-1 items-center gap-3 rounded-xl sm:rounded-2xl border-2 border-[#d4a857]/60 bg-[#080410]/95 p-3 sm:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.9)] md:grid-cols-12 md:gap-6 md:p-7">
        {/* Image Column */}
        <div className="relative h-32 sm:h-52 w-full overflow-hidden rounded-lg sm:rounded-xl border-2 border-[#d4a857]/60 shadow-[0_0_25px_rgba(0,0,0,0.8)] md:col-span-5 md:h-64">
          <Image
            src={activeEvent.image}
            alt={activeEvent.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* Text Details Column */}
        <div className="flex flex-col justify-center text-left md:col-span-7">
          <h3 className="mb-1 text-base font-black text-[#ffe8ad] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] sm:mb-2 sm:text-2xl md:text-3xl lg:text-4xl">
            {activeEvent.title}
          </h3>
          <p className="mb-1.5 text-[10px] font-black tracking-widest uppercase text-[#f0d68a] drop-shadow-[0_2px_6px_rgba(0,0,0,1)] sm:mb-3 sm:text-xs md:text-sm">
            {activeEvent.subtitle}
          </p>
          <p className="text-xs font-bold leading-relaxed text-white drop-shadow-[0_2px_6px_rgba(0,0,0,1)] sm:text-sm md:text-base">
            {activeEvent.description}
          </p>
        </div>
      </div>
    </div>
  );
}
