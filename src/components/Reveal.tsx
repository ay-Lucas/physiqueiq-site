"use client";

import { useEffect, useRef, useState, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade" | "slide-up" | "slide-right" | "slide-left" | "zoom";

export default function Reveal({
  children,
  className,
  variant = "fade",
  delay = 0,
  once = true,
  rootMargin = "0px",
}: PropsWithChildren<{
  className?: string;
  variant?: Variant;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
}>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
          else if (!once) setInView(false);
        });
      },
      { threshold: 0.12, rootMargin }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [once, rootMargin]);

  // Use CSS transitions for smoother, persistent state instead of keyframes
  const initial: Record<Variant, string> = {
    fade: "opacity-0",
    "slide-up": "opacity-0 translate-y-6",
    "slide-right": "opacity-0 -translate-x-6",
    "slide-left": "opacity-0 translate-x-6",
    zoom: "opacity-0 scale-95",
  };

  const shown: Record<Variant, string> = {
    fade: "opacity-100",
    "slide-up": "opacity-100 translate-y-0",
    "slide-right": "opacity-100 translate-x-0",
    "slide-left": "opacity-100 translate-x-0",
    zoom: "opacity-100 scale-100",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={cn(
        // Smooth, GPU-accelerated transitions
        "transform-gpu transition-all duration-700 ease-out will-change-[transform,opacity]",
        // Respect reduced motion
        "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none",
        inView ? shown[variant] : initial[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
