"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductCardProps = {
  url: string;
  image: string;
  name: string;
  price: number;
  finalPrice: number;
  discount?: number; // 0.25 = 25%
};

export function ProductCard({
  url,
  image,
  name,
  finalPrice,
  price,
  discount = 0,
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="w-119.25 max-w-full shrink-0">
      <Link href={url} className="block">
        <div className="relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={name}
            width={500}
            height={320}
            className="h-80 w-full object-cover"
            onError={() => {
              setImgSrc(
                "https://placehold.co/400x500/EEE/31343C?text=CAMISA+1",
              );
            }}
          />

          {discount > 0 && (
            <span className="absolute left-2 top-2 bg-black px-2 py-1 text-xs font-bold text-white">
              -{discount * 100}% OFF
            </span>
          )}
        </div>

        <div className="mt-3">
          <h3 className="text-sm font-bold uppercase">{name}</h3>

          <div className="mt-1 flex items-center gap-2">
            {discount > 0 ? (
              <>
                <span className="text-sm line-through text-gray-400">
                  R$ {price.toFixed(2)}
                </span>
                <span className="text-sm font-bold">
                  R$ {finalPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-sm font-bold">R$ {price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
