"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

// Target: 4 September 2026 at 12:00 AM (Midnight) IST
const TARGET_DATE = new Date("2026-09-04T00:00:00+05:30").getTime();

function calculateTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, totalMs: difference };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      if (remaining.totalMs <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Return null when timer ends or before initial calculation so component vanishes
  if (!timeLeft || timeLeft.totalMs <= 0) {
    return null;
  }

  return (
    <div className="mt-3.5 flex items-center justify-center gap-2 rounded-2xl border border-[#d4a857]/45 bg-[#080312]/75 px-5 py-2 shadow-[0_0_30px_rgba(212,168,87,0.3)] backdrop-blur-md transition-all duration-300 md:gap-4 md:px-7 md:py-2.5">
      {/* Days */}
      <div className="flex flex-col items-center">
        <span className="text-xl font-black tracking-tight text-[#ffe8ad] drop-shadow-[0_0_12px_rgba(212,168,87,0.9)] md:text-2xl">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-[9px] font-bold tracking-widest text-[#d4a857] uppercase md:text-[10px]">
          Days
        </span>
      </div>

      <span className="text-sm font-bold text-[#d4a857]/70 md:text-lg">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <span className="text-xl font-black tracking-tight text-[#ffe8ad] drop-shadow-[0_0_12px_rgba(212,168,87,0.9)] md:text-2xl">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-[9px] font-bold tracking-widest text-[#d4a857] uppercase md:text-[10px]">
          Hours
        </span>
      </div>

      <span className="text-sm font-bold text-[#d4a857]/70 md:text-lg">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <span className="text-xl font-black tracking-tight text-[#ffe8ad] drop-shadow-[0_0_12px_rgba(212,168,87,0.9)] md:text-2xl">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-[9px] font-bold tracking-widest text-[#d4a857] uppercase md:text-[10px]">
          Mins
        </span>
      </div>

      <span className="text-sm font-bold text-[#d4a857]/70 md:text-lg">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center min-w-[28px] md:min-w-[36px]">
        <span className="text-xl font-black tracking-tight text-[#ffe8ad] drop-shadow-[0_0_12px_rgba(212,168,87,0.9)] md:text-2xl">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-[9px] font-bold tracking-widest text-[#d4a857] uppercase md:text-[10px]">
          Secs
        </span>
      </div>
    </div>
  );
}
