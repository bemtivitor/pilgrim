// app/products/[slug]/ProductClient.tsx
"use client";

import { useCartStore } from "@/stores";
import type { ProductDB, ProductVariant } from "@/types/db";
import type { TProduct } from "@/types/main";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  product: ProductDB;
};

export default function ProductClient({ product }: Props) {
  const { addProduct } = useCartStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const firstAvailableVariant = useMemo(
    () =>
      product.variants.find((v) => v.stock > 0) ?? product.variants[0] ?? null,
    [product],
  );

  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    firstAvailableVariant?.id ?? null,
  );

  const selectedVariant: ProductVariant | undefined = product.variants.find(
    (v) => v.id === selectedVariantId,
  );

  const basePrice = useMemo(
    () => selectedVariant?.priceOverride ?? product.basePrice,
    [selectedVariant, product.basePrice],
  );
  const discount = product.discount ?? 0;

  const unitPrice = useMemo(() => {
    if (!selectedVariant) {
      return Math.round(basePrice * (1 - discount) * 100) / 100;
    }
    return Math.round(basePrice * (1 - discount) * 100) / 100;
  }, [selectedVariant, basePrice, discount]);

  const originalPriceDisplay = useMemo(() => {
    return basePrice;
  }, [basePrice]);

  const isVariantOutOfStock = (variant?: ProductVariant) =>
    !variant || variant.stock <= 0;

  const isLowStock = (variant?: ProductVariant) =>
    !!variant && variant.stock > 0 && variant.stock <= 3;

  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a size / variant.");
      return;
    }
    if (isVariantOutOfStock(selectedVariant)) {
      alert("Selected variant is out of stock.");
      return;
    }

    const p = {
      id: selectedVariant.id,
      image: product.images.at(0), // TODO add a filter to get the main image
      description: product.description,
      price: basePrice,
      discount: product.discount,
      size: selectedVariant.size,
      name: product.name,
    };

    addProduct(p as TProduct);
  };

  return (
    <section className="flex min-h-screen gap-12.5 px-10 pb-10 pt-32.5 max-[900px]:flex-col max-[900px]:gap-5 max-[900px]:px-0 max-[900px]:pt-25">
      <div className="flex flex-[1.5] gap-4 max-[900px]:flex-col">
        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div
            className="
        flex flex-col gap-2
        max-[900px]:order-2
        max-[900px]:flex-row
        max-[900px]:overflow-x-auto
      "
          >
            {product.images.map((src, i) => {
              const selected = i === selectedImageIndex;

              return (
                <button
                  key={`${src}${i + 1}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(i)}
                  className={`
              relative h-20 w-16 shrink-0 overflow-hidden
              border transition
              ${selected ? "border-black" : "border-transparent hover:border-[#ccc]"}
            `}
                  aria-label={`Selecionar imagem ${i + 1}`}
                  aria-pressed={selected}
                >
                  <Image
                    src={src}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Main image */}
        <div className="relative aspect-3/4 w-full bg-[#f9f9f9]">
          <Image
            src={
              product.images[selectedImageIndex] ??
              "https://placehold.co/400x500/EEE/31343C?text=NO+IMAGE"
            }
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="sticky top-32.5 h-fit max-w-112.5 flex-1 px-0 max-[900px]:static max-[900px]:px-5 max-[900px]:pb-10">
        <div className="mb-5 text-[11px] font-semibold uppercase text-[#999]">
          INÍCIO / CAMISETAS / CORE
        </div>

        {discount > 0 && (
          <span className="mb-2 inline-block bg-black px-2 py-1 text-[11px] font-bold uppercase text-white">
            -{Math.round(discount * 100)}% OFF
          </span>
        )}

        <h1 className="mb-1 text-2xl font-extrabold uppercase leading-tight max-[900px]:text-xl">
          {product.name}
        </h1>

        <span className="mb-2 block text-xs text-[#999]">
          SKU: {selectedVariant?.sku ?? product.variants[0]?.sku ?? "—"}
        </span>

        <div className="mb-6 flex items-baseline gap-3">
          {discount > 0 ? (
            <>
              <span className="text-sm text-[#ccc] line-through">
                R$ {originalPriceDisplay.toFixed(2)}
              </span>
              <span className="text-[22px] font-bold">
                R$ {unitPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[22px] font-bold">
              R$ {unitPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="mb-2 flex items-center justify-between">
          <span className="text-[13px] font-bold uppercase">Tamanhos</span>
          <span className="flex cursor-pointer items-center gap-1 text-xs underline text-[#555]">
            Tabela de medidas
          </span>
        </div>

        <div className="mb-2 flex gap-2.5">
          {["PP", "P", "M", "G", "GG", "XG"].map((s) => {
            const variantForSize = product.variants.find((v) => v.size === s);
            const disabled = !variantForSize || variantForSize.stock <= 0;
            const selected = variantForSize?.id === selectedVariantId;

            return (
              <button
                type="button"
                key={s}
                disabled={disabled}
                onClick={() =>
                  variantForSize && setSelectedVariantId(variantForSize.id)
                }
                className={`relative h-11.25 w-11.25 text-xs font-bold transition
                  ${disabled ? "cursor-not-allowed bg-[#f9f9f9] text-[#e0e0e0] line-through border border-[#eee]" : selected ? "bg-black text-white border border-black" : "border border-[#e5e5e5] hover:border-black"}
                `}
                aria-pressed={selected}
                aria-label={`Size ${s} ${disabled ? "unavailable" : ""}`}
              >
                {s}
                {isLowStock(variantForSize) && !disabled && (
                  <span className="absolute -right-1 -top-1 rounded-full bg-yellow-400 px-1 text-[10px] font-bold text-black">
                    ⚠️
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mb-6 text-sm text-[#666]">
          {selectedVariant ? (
            isVariantOutOfStock(selectedVariant) ? (
              <div className="text-red-600 font-bold">
                Esgotado neste tamanho
              </div>
            ) : isLowStock(selectedVariant) ? (
              <div className="text-yellow-600 font-semibold">
                Poucas unidades restantes ({selectedVariant.stock})
              </div>
            ) : (
              <div>Em estoque: {selectedVariant.stock} unidades</div>
            )
          ) : (
            <div className="text-[#666]">
              Selecione um tamanho para ver disponibilidade
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!selectedVariant || isVariantOutOfStock(selectedVariant)}
          className={`mb-4 cursor-pointer w-full py-4.5 text-[13px] font-extrabold uppercase text-white transition ${selectedVariant && !isVariantOutOfStock(selectedVariant) ? "bg-black" : "bg-[#222]/60 cursor-not-allowed"}`}
        >
          {selectedVariant && !isVariantOutOfStock(selectedVariant)
            ? `ADICIONAR À SACOLA – TAMANHO ${selectedVariant.size ?? ""}`
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
            <span>
              <IconBrandWhatsapp />
            </span>
            <span>
              <IconBrandFacebook />
            </span>
            <span>
              <IconBrandX />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
