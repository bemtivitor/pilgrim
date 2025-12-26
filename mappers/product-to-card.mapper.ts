// mappers/product-to-card.mapper.ts

import type { ProductDB } from "@/types/db";

export type ProductCardModel = {
  url: string;
  image: string;
  name: string;
  price: number;
  discount: number;
  finalPrice: number;
};

export function mapProductToCard(product: ProductDB): ProductCardModel {
  const discount = product.discount ?? 0;

  return {
    url: `/produtos/${product.id}`,
    image: product.images[0],
    name: product.name,
    price: product.basePrice,
    discount,
    finalPrice: product.basePrice * (1 - discount),
  };
}
