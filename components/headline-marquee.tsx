// components/headline-marquee.tsx
import React from "react";

export function HeadlineMarquee() {
  return (
    // Ajustei py-6 para py-3 (altura da barra) e mb-10 para mb-6 (margem externa)
    <div className="relative flex w-full overflow-hidden bg-black py-3 mb-6 select-none pointer-events-none border-y border-white/10">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-infinite {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      {/* Faixa 1 */}
      {/* Ajustei gap-32 para gap-24 */}
      <div className="flex min-w-full shrink-0 animate-marquee-infinite items-center justify-around gap-24 px-10">
        {[...Array(10)].map((_, i) => ( // Aumentei para 10 repetições para preencher a tela com fonte menor
          <span
            key={`a-${i}`}
            // Ajustei para text-xl (mobile) e text-3xl (desktop)
            className="text-xl md:text-3xl font-light italic uppercase tracking-widest text-white"
          >
            PILGRIM
          </span>
        ))}
      </div>

      {/* Faixa 2 */}
      <div
        aria-hidden="true"
        className="flex min-w-full shrink-0 animate-marquee-infinite items-center justify-around gap-24 px-10"
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={`b-${i}`}
            className="text-xl md:text-3xl font-light italic uppercase tracking-widest text-white"
          >
            PILGRIM
          </span>
        ))}
      </div>
    </div>
  );
}