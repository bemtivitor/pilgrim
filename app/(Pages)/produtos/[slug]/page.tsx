"use client";

import Image from "next/image";
import { useState } from "react";

const images = ["/camisa1.jpg", "/camisa1.jpg", "/camisa1.jpg", "/camisa1.jpg"];

export default function ProductPage() {
  const [size, setSize] = useState<string | null>("G");

  return (
    <section className="flex min-h-screen gap-12.5 px-10 pb-10 pt-32.5 max-[900px]:flex-col max-[900px]:gap-5 max-[900px]:px-0 max-[900px]:pt-25">
      <div className="grid flex-[1.5] grid-cols-2 gap-2.5 max-[900px]:grid-cols-1 max-[900px]:gap-0">
        {images.map((src, i) => (
          <div key={src} className="relative aspect-3/4 bg-[#f9f9f9]">
            <Image
              src={src}
              alt="Camiseta Pilgrim"
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="sticky top-32.5 h-fit max-w-112.5 flex-1 px-0 max-[900px]:static max-[900px]:px-5 max-[900px]:pb-10">
        <div className="mb-5 text-[11px] font-semibold uppercase text-[#999]">
          INÍCIO / CAMISETAS / CORE
        </div>

        <span className="mb-2 inline-block bg-black px-2 py-1 text-[11px] font-bold uppercase text-white">
          -40% OFF
        </span>

        <h1 className="mb-1 text-2xl font-extrabold uppercase leading-tight max-[900px]:text-xl">
          CAMISETA CORE PILGRIM CROSS BLACK
        </h1>

        <span className="mb-5 block text-xs text-[#999]">SKU: PIL-001-BLK</span>

        <div className="mb-6 flex items-baseline gap-3">
          <span className="text-sm text-[#ccc] line-through">R$ 169,99</span>
          <span className="text-[22px] font-bold">R$ 101,99</span>
        </div>

        <div className="mb-2 flex items-center justify-between">
          <span className="text-[13px] font-bold uppercase">Tamanhos</span>
          <span className="flex cursor-pointer items-center gap-1 text-xs underline text-[#555]">
            Tabela de medidas
          </span>
        </div>

        <div className="mb-8 flex gap-2.5">
          {["P", "M", "G", "GG", "XG"].map((s) => {
            const disabled = s === "XG";

            return (
              <button
                type="button"
                key={s}
                disabled={disabled}
                onClick={() => setSize(s)}
                className={`
                  h-11.25 w-11.25 text-xs font-bold transition
                  ${
                    disabled
                      ? "cursor-not-allowed bg-[#f9f9f9] text-[#e0e0e0] line-through border border-[#eee]"
                      : size === s
                        ? "bg-black text-white border border-black"
                        : "border border-[#e5e5e5] hover:border-black"
                  }
                `}
              >
                {s}
              </button>
            );
          })}
        </div>

        <button
          type="submit"
          className={`mb-4 w-full py-4.5 text-[13px] font-extrabold uppercase text-white transition
            ${size ? "bg-black" : "bg-[#222]"}
          `}
        >
          {size
            ? `ADICIONAR À SACOLA – TAMANHO ${size}`
            : "SELECIONE O TAMANHO"}
        </button>

        <button
          type="button"
          className="mb-8 flex w-full items-center justify-center gap-2 border border-[#e5e5e5] py-3.75 text-xs font-bold uppercase transition hover:border-black"
        >
          PEDIDO VIA WHATSAPP
        </button>

        <div className="border-t border-[#eee] pt-5">
          <p className="mb-2 text-xs font-semibold">Simular Frete</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Digite seu CEP"
              className="flex-1 border-b border-[#ccc] py-2 text-sm outline-none"
            />
            <button
              type="button"
              className="bg-[#333] px-5 text-[11px] font-bold uppercase text-white"
            >
              Consultar
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-[11px] text-[#666]">Compartilhar:</span>
          <div className="flex gap-4 text-[16px] text-[#333]">
            <span>WA</span>
            <span>FB</span>
            <span>PT</span>
            <span>🔗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
