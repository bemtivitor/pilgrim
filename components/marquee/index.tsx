"use client";

import { cn } from "@/lib/cn";

type MarqueeProps = {
  text: string;
  speed?: number; // seconds
  repeat?: number;
  className?: string;
};

export function Marquee({
  text,
  speed = 20,
  repeat = 2,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        `relative z-1002 flex h-[30px] items-center overflow-hidden bg-black text-[11px] font-bold uppercase tracking-widest text-white`,
        className,
      )}
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <just because>
          <span key={i} className="px-10">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
