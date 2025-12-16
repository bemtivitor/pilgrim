"use client";

import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description?: string;
  comingSoon?: boolean;
  href?: string;
};

export function CollectionCard({
  image,
  title,
  description,
  comingSoon = false,
  href = "#",
}: Props) {
  return (
    <a
      href={comingSoon ? undefined : href}
      aria-disabled={comingSoon}
      className={`relative min-w-[350px] h-[480px] shrink-0 overflow-hidden bg-black ${
        comingSoon ? "pointer-events-none" : "cursor-pointer"
      }`}
    >
      <div
        className={`absolute inset-0 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
          ${comingSoon ? "filter grayscale brightness-[0.4]" : "group-hover:scale-105"}
        `}
        style={{ willChange: "transform, opacity" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 90vw, 350px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-90 hover:scale-[1.05] hover:opacity-70"
          onError={() => {}}
        />
      </div>

      {comingSoon && (
        <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 border-2 border-white px-4 py-2 text-white">
          <span className="text-sm font-bold uppercase tracking-wider">
            EM BREVE
          </span>
          {description && (
            <span className="text-[12px] font-normal text-[#ccc]">
              {description}
            </span>
          )}
        </div>
      )}

      <span className="absolute bottom-[30px] left-5 z-20 text-white text-[24px] font-black uppercase italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        {title}
        {description ? (
          <span className="block mt-1 text-[12px] font-normal text-[#ccc]">
            {description}
          </span>
        ) : null}
      </span>
    </a>
  );
}
