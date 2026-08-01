"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

import NextImage from "next/image";
import InteractiveBeat from "@/components/InteractiveBeat";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AftermoviesSection from "@/components/AftermoviesSection";
import GratitudeSection from "@/components/GratitudeSection";
import HighlightsGallery from "@/components/HighlightsGallery";
import PhotoCollage from "@/components/PhotoCollage";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AmbientParticles from "@/components/AmbientParticles";
import TransitionVignette from "@/components/TransitionVignette";
import CountdownTimer from "@/components/CountdownTimer";

// ─── Constants ───
const TOTAL_FRAMES = 299;
const FRAME_PATH = "/Janmashtami/sequence/ezgif-frame-";
const LOGO_FADE_THRESHOLD = 0.08;

function getFrameSrc(index: number): string {
  const num = Math.min(Math.max(index, 1), TOTAL_FRAMES);
  return `${FRAME_PATH}${String(num).padStart(3, "0")}.jpg`;
}

// ─── Reduced Motion Hook ───
function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mql.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReduced(e.matches);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}

// ─── Loading Screen ───
function LoadingScreen({ progress }: { progress: number }) {
  const pct = Math.round(progress * 100);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050208]">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-pulse-glow absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,87,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Om symbol */}
      <div className="animate-float relative mb-12">
        <span className="text-glow-gold-strong text-7xl font-light tracking-widest text-[#d4a857] select-none md:text-8xl">
          ॐ
        </span>
      </div>

      {/* Loading text */}
      <p className="mb-8 text-sm font-light tracking-[0.3em] uppercase text-white/40">
        Preparing the Divine Experience
      </p>

      {/* Progress bar */}
      <div className="relative w-64 md:w-80">
        <div className="h-[1px] w-full bg-white/10">
          <div
            className="h-full transition-all duration-300 ease-out"
            style={{
              width: `${pct}%`,
              background:
                "linear-gradient(90deg, rgba(212,168,87,0.3), rgba(212,168,87,0.8), rgba(240,214,138,1))",
              boxShadow: "0 0 15px rgba(212,168,87,0.5)",
            }}
          />
        </div>
        <p className="mt-4 text-center font-mono text-xs tracking-widest text-white/30">
          {pct}%
        </p>
      </div>
    </div>
  );
}

// ─── Scroll Indicator ───
function ScrollIndicator({ opacity }: { opacity: number }) {
  const safeOpacity =
    Number.isNaN(opacity) || typeof opacity !== "number"
      ? 0
      : Math.max(0, Math.min(1, opacity));
  if (safeOpacity <= 0) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
      style={{ opacity: safeOpacity }}
    >
      <div className="flex items-center gap-2.5 rounded-full border border-[#d4a857]/60 bg-black/60 px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#f0d68a] shadow-[0_0_25px_rgba(212,168,87,0.35)] backdrop-blur-md">
        <span>Scroll to Explore</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="animate-bounce"
        >
          <path
            d="M8 3v10M4 9l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

// ─── Section Title Overlay ───
interface TextBeatProps {
  scrollProgress: number;
  start: number;
  end: number;
  title: string;
  subtitle?: string;
  bodyText?: string;
  align?: "left" | "center" | "right";
  cta?: boolean;
  cardStyle?: boolean;
}

function SectionTitleOverlay({
  scrollProgress,
  start,
  end,
  title,
  subtitle,
  bodyText,
  align = "center",
  cta = false,
  cardStyle = false,
}: TextBeatProps) {
  const safeProgress =
    Number.isNaN(scrollProgress) || typeof scrollProgress !== "number"
      ? 0
      : scrollProgress;

  const range = end - start;
  const fadeInEnd = start + range * 0.2;
  const fadeOutStart = end - range * 0.2;

  let opacity = 0;
  let yOffset = 20;

  if (start === 0 && safeProgress <= fadeOutStart) {
    opacity = 1;
    yOffset = 0;
  } else if (safeProgress < start) {
    opacity = 0;
    yOffset = 20;
  } else if (safeProgress < fadeInEnd) {
    const t = (safeProgress - start) / (fadeInEnd - start);
    opacity = Number.isNaN(t) ? 0 : t;
    yOffset = 20 * (1 - opacity);
  } else if (safeProgress < fadeOutStart) {
    opacity = 1;
    yOffset = 0;
  } else if (safeProgress < end) {
    const t = (safeProgress - fadeOutStart) / (end - fadeOutStart);
    const safeT = Number.isNaN(t) ? 0 : t;
    opacity = 1 - safeT;
    yOffset = -20 * safeT;
  } else {
    opacity = 0;
    yOffset = -20;
  }

  opacity = Number.isNaN(opacity) ? 0 : Math.max(0, Math.min(1, opacity));

  if (opacity <= 0.01) return null;

  if (cardStyle) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-30 flex flex-col items-center justify-center px-4 md:px-8"
        style={{
          opacity,
          transform: `translateY(${yOffset}px)`,
        }}
      >
        <div className="relative max-w-4xl rounded-3xl border border-[#d4a857]/40 bg-transparent p-6 text-center shadow-[0_0_50px_rgba(212,168,87,0.15)] backdrop-blur-xs md:p-12">
          {/* Subtle ambient glow ring */}
          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-[#d4a857]/20 via-transparent to-[#f0d68a]/20 blur-xl opacity-70" />

          {/* Sacred Pill Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4a857]/40 bg-[#d4a857]/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#f0d68a] md:text-sm">
              ✦ Divine Wisdom ✦
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe8ad] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:mb-6 md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>

          {/* Golden Ornamental Line */}
          <div className="mx-auto mb-6 flex w-48 items-center justify-center gap-3 opacity-80">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4a857]" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#f0d68a]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4a857]" />
          </div>

          {/* Body Text */}
          {bodyText && (
            <p className="text-glow-ethereal text-base font-light leading-relaxed text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] md:text-xl lg:text-2xl">
              {bodyText}
            </p>
          )}
        </div>
      </div>
    );
  }

  const alignClass =
    align === "left"
      ? "items-start text-left pl-8 md:pl-16 lg:pl-24"
      : align === "right"
        ? "items-end text-right pr-8 md:pr-16 lg:pr-24"
        : "items-center text-center";

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 flex flex-col justify-center px-6 ${alignClass}`}
      style={{
        opacity,
        transform: `translateY(${yOffset}px)`,
      }}
    >
      <h2
        className={`text-glow-gold-strong mb-4 max-w-4xl font-bold tracking-tight text-white/95 md:mb-6 ${
          align === "center"
            ? "text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            : "text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-glow-ethereal max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl lg:text-2xl ${
            align === "center" ? "" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
      {cta && (
        <a
          href="#register"
          className="pointer-events-auto mt-8 inline-flex items-center gap-3 rounded-full border border-[#d4a857]/30 bg-gradient-to-r from-[#d4a857]/10 to-[#d4a857]/5 px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase text-[#f0d68a] backdrop-blur-sm transition-all duration-500 hover:border-[#d4a857]/60 hover:bg-[#d4a857]/15 hover:shadow-[0_0_30px_rgba(212,168,87,0.2)] md:mt-10 md:px-10 md:py-5 md:text-base"
        >
          <span>Register Now</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

// ─── Centered Initial Logo ───
function CenteredJanmashtamiLogo({ scrollProgress }: { scrollProgress: number }) {
  const safeProgress =
    Number.isNaN(scrollProgress) || typeof scrollProgress !== "number"
      ? 0
      : scrollProgress;

  if (safeProgress >= LOGO_FADE_THRESHOLD) return null;

  const t = Math.min(Math.max(safeProgress / LOGO_FADE_THRESHOLD, 0), 1);
  const rawOpacity = 1 - Math.pow(t, 1.5);
  const opacity = Number.isNaN(rawOpacity) ? 0 : Math.max(0, Math.min(1, rawOpacity));
  const yOffset = -15 - 70 * t;
  const scale = 1 - 0.02 * t;

  if (opacity <= 0.001) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 flex flex-col items-center justify-center p-4 text-center"
      style={{
        opacity,
        transform: `translateY(${yOffset}px) scale(${scale})`,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      }}
    >
      <div className="relative flex max-w-4xl flex-col items-center justify-center p-4 text-center">
        {/* Subtle radial ambient glow behind logo & text for maximum readability */}
        <div className="absolute -inset-16 -z-10 rounded-full bg-radial from-[#d4a857]/20 via-black/60 to-transparent blur-3xl opacity-90 pointer-events-none" />

        {/* Logo Emblem with Glowing Halo */}
        <div className="relative mb-5 h-32 w-32 overflow-hidden rounded-full border-2 border-[#d4a857] shadow-[0_0_55px_rgba(212,168,87,0.7),0_0_20px_rgba(255,232,173,0.5)] md:h-40 md:w-40">
          <NextImage
            src="/Janmashtami/images/logo.png"
            alt="Janmashtami BVC IITK Logo"
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Title */}
        <h1
          className="text-5xl font-extrabold tracking-[0.08em] md:tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f0d68a] to-[#d4a857] drop-shadow-[0_4px_28px_rgba(0,0,0,0.98)] drop-shadow-[0_0_40px_rgba(212,168,87,0.5)] md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          JANMASHTAMI
        </h1>

        {/* Golden Ornamental Line */}
        <div className="mx-auto my-3 flex w-48 items-center justify-center gap-3 opacity-85">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4a857]" />
          <div className="h-1.5 w-1.5 rotate-45 bg-[#f0d68a] shadow-[0_0_8px_rgba(240,214,138,0.8)]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4a857]" />
        </div>

        {/* Subtitle */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f0d68a] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] md:text-base">
          Bhaktivedanta Club • IIT Kanpur
        </p>

        {/* Sanskrit Mantra Banner */}
        <div className="mt-4 max-w-xl rounded-full border border-[#d4a857]/30 bg-black/40 px-6 py-2 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.7)]">
          <p className="font-serif text-xs tracking-wider text-[#ffe8ad] md:text-sm">
            हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे || हरे राम हरे राम राम राम हरे हरे
          </p>
        </div>

        {/* Countdown Timer (4 September 12 AM) */}
        <CountdownTimer />
      </div>
    </div>
  );
}

// ─── Smoothstep easing for cinematic video transitions ───
function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

// Helper function for alternating Video Motion and Text Card Freeze phases
function getFrameIndexFromScroll(progress: number): number {
  let videoProgress = 0;

  if (progress <= 0.08) {
    // Intro Logo (0.00 -> 0.08): Hold on Frame 0
    videoProgress = 0;
  } else if (progress <= 0.20) {
    // Video Motion 1 (0.08 -> 0.20): Advance video 0% -> 25%
    const t = (progress - 0.08) / (0.20 - 0.08);
    videoProgress = 0.25 * smoothstep(t);
  } else if (progress <= 0.32) {
    // Events Section (0.20 -> 0.32): Hold video at 25%
    videoProgress = 0.25;
  } else if (progress <= 0.44) {
    // Video Motion 2 (0.32 -> 0.44): Advance video 25% -> 50%
    const t = (progress - 0.32) / (0.44 - 0.32);
    videoProgress = 0.25 + 0.25 * smoothstep(t);
  } else if (progress <= 0.56) {
    // Aftermovies & About Janmashtami (0.44 -> 0.56): Hold video at 50%
    videoProgress = 0.50;
  } else if (progress <= 0.68) {
    // Video Motion 3 (0.56 -> 0.68): Advance video 50% -> 75%
    const t = (progress - 0.56) / (0.68 - 0.56);
    videoProgress = 0.50 + 0.25 * smoothstep(t);
  } else if (progress <= 0.80) {
    // Gratitude & Mentors (0.68 -> 0.80): Hold video at 75%
    videoProgress = 0.75;
  } else if (progress <= 0.90) {
    // Video Motion 4 (0.80 -> 0.90): Advance video 75% -> 100%
    const t = (progress - 0.80) / (0.90 - 0.80);
    videoProgress = 0.75 + 0.25 * smoothstep(t);
  } else {
    // Registration Finale (0.90 -> 1.00): Hold video at 100%
    videoProgress = 1.0;
  }

  const frame = Math.floor(videoProgress * (TOTAL_FRAMES - 1));
  return Math.min(Math.max(frame, 0), TOTAL_FRAMES - 1);
}

// ─── Main Canvas Component ───
export default function JanmashtamiCanvas() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const lastDrawnFrame = useRef<number>(-1);
  const rafId = useRef<number | null>(null);
  const isNavigatingRef = useRef(false);
  const navTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  // ─── Reduced motion ───
  const reducedMotion = usePrefersReducedMotion();

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobileDevice(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // ─── Scroll tracking ───
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 300 : 70,
    damping: reducedMotion ? 50 : 35,
    restDelta: 0.0005,
  });

  // On mobile screens, use raw scrollYProgress directly for 120Hz instant touch tracking
  const activeProgressMotion = isMobileDevice ? scrollYProgress : smoothProgress;

  useMotionValueEvent(activeProgressMotion, "change", (latest) => {
    setCurrentProgress(latest);
  });

  // Scroll indicator opacity
  const scrollIndicatorOpacity = useMemo(() => {
    if (currentProgress > 0.1) return 0;
    if (currentProgress > 0.05) return 1 - (currentProgress - 0.05) / 0.05;
    return 1;
  }, [currentProgress]);

  const lastDrawnImageRef = useRef<HTMLImageElement | null>(null);

  // Helper to get the target image or nearest loaded keyframe/neighbor
  const getClosestLoadedFrame = useCallback((targetIdx: number): HTMLImageElement | null => {
    const images = imagesRef.current;
    if (images[targetIdx]) return images[targetIdx];

    let distance = 1;
    while (targetIdx - distance >= 0 || targetIdx + distance < TOTAL_FRAMES) {
      if (targetIdx - distance >= 0 && images[targetIdx - distance]) {
        return images[targetIdx - distance];
      }
      if (targetIdx + distance < TOTAL_FRAMES && images[targetIdx + distance]) {
        return images[targetIdx + distance];
      }
      distance++;
    }
    return null;
  }, []);

  // ─── Progressive Keyframe Preload & Mobile Downsampling ───
  useEffect(() => {
    let mounted = true;
    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    imagesRef.current = images;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    
    // On Mobile: Downsample to 60 keyframes total (every 5th frame). 
    // This slashes RAM from 250MB to 25MB, completely eliminating GC freezes!
    // On Desktop: Keyframes every 6 frames, then Stage 2 intermediate frames.
    const KEYFRAME_STEP = isMobile ? 5 : 6;
    const keyframeIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += KEYFRAME_STEP) {
      keyframeIndices.push(i);
    }
    if (keyframeIndices[keyframeIndices.length - 1] !== TOTAL_FRAMES - 1) {
      keyframeIndices.push(TOTAL_FRAMES - 1);
    }

    const totalKeyframes = keyframeIndices.length;
    let loadedKeyframeCount = 0;

    const loadSingleFrame = (idx: number): Promise<void> => {
      return new Promise<void>((resolve) => {
        if (images[idx]) {
          resolve();
          return;
        }
        const img = new window.Image();
        img.onload = () => {
          if (mounted) images[idx] = img;
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        img.src = getFrameSrc(idx + 1);
      });
    };

    // Stage 1: Load essential keyframes in parallel batches
    async function loadKeyframes() {
      const BATCH_SIZE = isMobile ? 8 : 10;
      for (let i = 0; i < keyframeIndices.length; i += BATCH_SIZE) {
        if (!mounted) return;
        const batch = keyframeIndices.slice(i, i + BATCH_SIZE);
        await Promise.all(
          batch.map(async (idx) => {
            await loadSingleFrame(idx);
            if (mounted) {
              loadedKeyframeCount++;
              setLoadProgress(loadedKeyframeCount / totalKeyframes);
            }
          })
        );
      }
    }

    // Stage 2: Load remaining intermediate frames (Desktop ONLY)
    async function loadRemainingFrames() {
      if (isMobile) return; // Skip on mobile to save 90% RAM!

      const remainingIndices: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!keyframeIndices.includes(i)) {
          remainingIndices.push(i);
        }
      }

      const BATCH_SIZE = 10;
      for (let i = 0; i < remainingIndices.length; i += BATCH_SIZE) {
        if (!mounted) return;
        const batch = remainingIndices.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((idx) => loadSingleFrame(idx)));
        await new Promise((res) => setTimeout(res, 40));
      }
    }

    // Execute Stage 1 (unlock UI immediately), then Stage 2 in background
    loadKeyframes().then(() => {
      if (mounted) {
        setIsLoaded(true);
        loadRemainingFrames();
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  // ─── Canvas Drawing (cover fit — fills entire viewport) ───
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const clampedIndex = Math.min(
        Math.max(frameIndex, 0),
        TOTAL_FRAMES - 1
      );

      const img = getClosestLoadedFrame(clampedIndex);
      if (!img) return;

      if (img === lastDrawnImageRef.current && clampedIndex === lastDrawnFrame.current) {
        return;
      }

      lastDrawnFrame.current = clampedIndex;
      lastDrawnImageRef.current = img;

      const displayW = window.innerWidth;
      const displayH = window.innerHeight;
      const isMobile = displayW < 768;

      // Cap DPR on mobile screens to prevent rendering 20M+ pixels per frame
      const maxDpr = isMobile ? 1.0 : 1.5;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

      const targetCanvasW = Math.floor(displayW * dpr);
      const targetCanvasH = Math.floor(displayH * dpr);

      if (
        canvas.width !== targetCanvasW ||
        canvas.height !== targetCanvasH
      ) {
        canvas.width = targetCanvasW;
        canvas.height = targetCanvasH;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      // Crisp image rendering with adaptive quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = isMobile ? "medium" : "high";

      // Clear
      ctx.clearRect(0, 0, displayW, displayH);

      // Crop out watermark (excludes top/left 2% and right/bottom 11%)
      const srcX = img.naturalWidth * 0.02;
      const srcY = img.naturalHeight * 0.02;
      const srcW = img.naturalWidth * 0.87;
      const srcH = img.naturalHeight * 0.87;

      // "Cover" fit — fills entire viewport, crops overflow
      const imgAspect = srcW / srcH;
      const canvasAspect = displayW / displayH;

      let drawW: number, drawH: number, drawX: number, drawY: number;

      if (canvasAspect > imgAspect) {
        drawW = displayW;
        drawH = displayW / imgAspect;
        drawX = 0;
        drawY = (displayH - drawH) / 2;
      } else {
        drawH = displayH;
        drawW = displayH * imgAspect;
        drawX = (displayW - drawW) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, srcX, srcY, srcW, srcH, drawX, drawY, drawW, drawH);
    },
    [getClosestLoadedFrame]
  );

  const navTargetFrameRef = useRef<number | null>(null);

  // ─── Direct Navigation (Navbar & Progress Bar click) ───
  const handleNavigate = useCallback(
    (targetPercent: number) => {
      isNavigatingRef.current = true;
      if (navTimerRef.current) {
        clearTimeout(navTimerRef.current);
      }

      // Determine target video frame directly for destination
      const targetFrame = getFrameIndexFromScroll(targetPercent);
      navTargetFrameRef.current = targetFrame;

      // Instantly draw destination frame on canvas
      lastDrawnFrame.current = -1; // force redraw
      drawFrame(targetFrame);

      // Instantly update smoothProgress & currentProgress state
      if (activeProgressMotion && typeof (activeProgressMotion as any).jump === "function") {
        (activeProgressMotion as any).jump(targetPercent);
      } else {
        activeProgressMotion.set(targetPercent);
      }
      setCurrentProgress(targetPercent);

      // Scroll window to target position instantly
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const targetY = maxScroll * targetPercent;

      window.scrollTo({
        top: targetY,
        behavior: "auto",
      });

      // Keep lock active briefly to prevent reverse video scrubbing, then guarantee target frame draw & unlock
      navTimerRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
        navTargetFrameRef.current = null;
        lastDrawnFrame.current = -1; // force redraw
        const finalFrame = getFrameIndexFromScroll(activeProgressMotion.get());
        drawFrame(finalFrame);
      }, 150);
    },
    [drawFrame, activeProgressMotion]
  );

  // ─── Animate on scroll ───
  useEffect(() => {
    if (!isLoaded) return;

    // Draw initial frame if not yet drawn
    if (lastDrawnFrame.current === -1) {
      drawFrame(0);
    }

    const unsubscribe = activeProgressMotion.on("change", (latest) => {
      if (isNavigatingRef.current) {
        // While navigating, allow rendering ONLY if we are at the target frame for destination section
        const currentFrame = getFrameIndexFromScroll(latest);
        if (
          navTargetFrameRef.current !== null &&
          currentFrame === navTargetFrameRef.current
        ) {
          drawFrame(currentFrame);
        }
        return;
      }

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        const frameIndex = getFrameIndexFromScroll(latest);
        drawFrame(frameIndex);
        rafId.current = null;
      });
    });

    return () => {
      unsubscribe();
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isLoaded, activeProgressMotion, drawFrame]);

  // ─── Handle Resize ───
  useEffect(() => {
    if (!isLoaded) return;

    const handleResize = () => {
      lastDrawnFrame.current = -1; // force redraw
      const frameIndex = getFrameIndexFromScroll(smoothProgress.get());
      drawFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, smoothProgress, drawFrame]);

  return (
    <>
      {/* Loading screen */}
      {!isLoaded && <LoadingScreen progress={loadProgress} />}

      {/* ═══ NAVBAR — fixed top header ═══ */}
      {isLoaded && <Navbar onNavigate={handleNavigate} />}

      {/* ═══ SCROLL PROGRESS BAR — vertical golden track on right edge ═══ */}
      {isLoaded && (
        <ScrollProgressBar
          progress={currentProgress}
          reducedMotion={reducedMotion}
          onNavigate={handleNavigate}
        />
      )}

      {/* ═══ CENTERED INITIAL LOGO — fades out on scroll before video starts ═══ */}
      {isLoaded && <CenteredJanmashtamiLogo scrollProgress={currentProgress} />}

      {/* ═══ FIXED FULLSCREEN CANVAS — always behind everything ═══ */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 h-screen w-screen"
        style={{
          display: "block",
          background: "#050208",
          imageRendering: "crisp-edges",
        }}
      />

      {/* ═══ AMBIENT FLOATING PARTICLES — golden bokeh drifting across viewport ═══ */}
      {isLoaded && <AmbientParticles reducedMotion={reducedMotion} />}

      {/* ═══ TRANSITION VIGNETTE — darkens edges at section boundaries ═══ */}
      {isLoaded && (
        <TransitionVignette
          scrollProgress={currentProgress}
          reducedMotion={reducedMotion}
        />
      )}

      {/* ═══ SCROLL SPACER — transparent div that provides scroll height (833vh for 80% scroll speed) ═══ */}
      <div
        ref={scrollContainerRef}
        className="relative z-10"
        style={{ height: "833vh" }}
      >
      </div>

      {/* ═══ STATIC FOOTER AT BOTTOMMOST PART OF WEBSITE ═══ */}
      {isLoaded && (
        <div className="relative z-30 w-full bg-black/30 border-t border-[#d4a857]/30 backdrop-blur-md">
          <SiteFooter />
        </div>
      )}

      {/* ═══ INTERACTIVE SCROLL BEATS — timed with scrollable wallpaper video ═══ */}
      {isLoaded && (
        <>
          {/* Beat 1: Events Section (Active 0.20 -> 0.32, Video Holds at 25%) */}
          <InteractiveBeat scrollProgress={currentProgress} start={0.20} end={0.32} reducedMotion={reducedMotion}>
            <EventsSection />
          </InteractiveBeat>

          {/* Beat 2: Aftermovies & About Janmashtami (Active 0.44 -> 0.56, Video Holds at 50%) — Where Gratitude was initially */}
          <InteractiveBeat scrollProgress={currentProgress} start={0.44} end={0.56} reducedMotion={reducedMotion}>
            <AftermoviesSection />
          </InteractiveBeat>

          {/* Beat 3: Gratitude & Mentors (Active 0.68 -> 0.80, Video Holds at 75%) — Where Schedule was initially */}
          <InteractiveBeat scrollProgress={currentProgress} start={0.68} end={0.80} reducedMotion={reducedMotion}>
            <GratitudeSection />
          </InteractiveBeat>

          {/* Beat 4: Photo Collage (Active 0.90 -> 1.00, Video Holds at 100%) */}
          <InteractiveBeat scrollProgress={currentProgress} start={0.90} end={1.00} reducedMotion={reducedMotion}>
            <PhotoCollage />
          </InteractiveBeat>
        </>
      )}

      {/* Scroll Indicator */}
      {isLoaded && <ScrollIndicator opacity={scrollIndicatorOpacity} />}
    </>
  );
}
