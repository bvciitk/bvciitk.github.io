"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EVENTS_DATA, EventItem } from "@/data/janmashtamiData";

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<string>(EVENTS_DATA[0].id);
  const activeEvent = EVENTS_DATA.find((e) => e.id === activeTab) || EVENTS_DATA[0];

  return (
    <div className="w-full max-w-5xl rounded-3xl border border-[#d4a857]/40 bg-transparent p-5 shadow-[0_0_50px_rgba(212,168,87,0.15)] backdrop-blur-xs md:p-8">
      {/* Title Header */}
      <div className="mb-6 text-center">
        <h2
          className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Grand Events & Festivities
        </h2>
        <p className="mt-1 text-xs text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-base">
          Exciting Games, events, and performances by all age groups
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-3.5 p-2 overflow-visible">
        {EVENTS_DATA.map((event) => {
          const isActive = activeTab === event.id;
          return (
            <button
              key={event.id}
              onClick={() => setActiveTab(event.id)}
              className={`relative rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300 ease-out hover:scale-105 active:scale-95 md:px-5 md:py-2.5 md:text-sm ${
                isActive
                  ? "border-2 border-[#ffe8ad] bg-gradient-to-r from-[#d4a857]/40 via-[#f0d68a]/30 to-[#d4a857]/40 text-white shadow-[0_0_25px_rgba(240,214,138,0.6)] ring-2 ring-[#d4a857]/50 scale-105"
                  : "border-2 border-white/20 bg-transparent text-white/90 hover:border-[#d4a857]/60 hover:text-white hover:shadow-[0_0_15px_rgba(212,168,87,0.3)]"
              }`}
            >
              {event.title}
            </button>
          );
        })}
      </div>

      {/* Active Event Card */}
      <div className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-[#d4a857]/35 bg-transparent p-4 backdrop-blur-xs shadow-[0_0_30px_rgba(0,0,0,0.3)] md:grid-cols-12 md:p-6">
        {/* Image Column */}
        <div className="relative h-48 w-full overflow-hidden rounded-xl border border-[#d4a857]/40 shadow-xl md:col-span-5 md:h-64">
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
          <h3 className="mb-2 text-xl font-extrabold text-[#ffe8ad] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] md:text-2xl lg:text-3xl">
            {activeEvent.title}
          </h3>
          <p className="mb-3 text-xs font-bold tracking-wider uppercase text-[#f0d68a]/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] md:text-sm">
            {activeEvent.subtitle}
          </p>
          <p className="text-sm font-medium leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] md:text-base">
            {activeEvent.description}
          </p>
        </div>
      </div>
    </div>
  );
}
