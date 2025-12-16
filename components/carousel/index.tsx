"use client";

import { type PropsWithChildren, useRef, useState } from "react";
import "@/styles/carousel.css"; // <-- CSS for scrollbar + a few helpers

export function Carousel({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [, setGrab] = useState(false); // trigger rerender to update cursor if needed

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    isDownRef.current = true;
    el.setPointerCapture(e.pointerId);
    setGrab(true);
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    isDownRef.current = false;
    el.releasePointerCapture(e.pointerId);
    setGrab(false);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 2; // scroll speed
    el.scrollLeft = scrollLeftRef.current - walk;
  }

  return (
    <div
      ref={ref}
      className="carousel-container max-w-screen flex gap-5 overflow-x-auto px-10 py-2"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerMove={onPointerMove}
      style={{ cursor: isDownRef.current ? "grabbing" : "grab" }}
    >
      {children}
    </div>
  );
}
