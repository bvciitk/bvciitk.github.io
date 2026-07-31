"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=flute-meditation-113264.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "none";

    audio.addEventListener("error", () => {
      setHasError(true);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setHasError(true);
      });
    }
  }, [isPlaying]);

  // Don't render if audio file failed to load
  if (hasError) return null;

  return (
    <button
      onClick={togglePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
      style={{
        borderColor: isPlaying
          ? "rgba(212,168,87,0.6)"
          : "rgba(255,255,255,0.15)",
        background: isPlaying
          ? "rgba(212,168,87,0.15)"
          : "rgba(5,2,8,0.7)",
        backdropFilter: "blur(8px)",
        boxShadow: isPlaying
          ? "0 0 15px rgba(212,168,87,0.3)"
          : "none",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
      aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
      title={isPlaying ? "Mute" : "Play ambient flute"}
    >
      {isPlaying ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(240,214,138,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}
