"use client";

import { useRef } from "react";

const MAX_TILT = 8;

export function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * MAX_TILT).toFixed(
      2
    )}deg) rotateY(${(x * MAX_TILT).toFixed(2)}deg) translateZ(0)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
