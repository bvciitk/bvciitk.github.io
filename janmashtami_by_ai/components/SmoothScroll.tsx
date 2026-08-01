"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: isMobile ? 0.12 : 0.08,
        duration: isMobile ? 0.8 : 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: isMobile ? 1.0 : 1.2,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
