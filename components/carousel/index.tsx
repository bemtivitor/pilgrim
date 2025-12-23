"use client";

import { type PropsWithChildren, useRef, useState } from "react";
import "@/styles/carousel.css";

const DRAG_THRESHOLD = 6;

export function Carousel({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isPointerDown = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const [, forceRender] = useState(false);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    isPointerDown.current = true;
    isDragging.current = false;

    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !isPointerDown.current) return;

    const dx = e.clientX - startX.current;

    // Start drag ONLY after threshold
    if (!isDragging.current && Math.abs(dx) > DRAG_THRESHOLD) {
      isDragging.current = true;

      // Capture pointer only NOW
      el.setPointerCapture(e.pointerId);
      forceRender((v) => !v);
    }

    if (!isDragging.current) return;

    e.preventDefault();
    el.scrollLeft = startScrollLeft.current - dx;
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    if (isDragging.current) {
      el.releasePointerCapture(e.pointerId);
    }

    isPointerDown.current = false;

    // Delay reset so click event can fire
    requestAnimationFrame(() => {
      isDragging.current = false;
      forceRender((v) => !v);
    });
  }

  return (
    <div
      ref={ref}
      className="carousel-container flex gap-5 overflow-x-auto px-10 py-2"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
    >
      {children}
    </div>
  );
}
