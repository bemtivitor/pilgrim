export type ProductDB = {
  id: string;
  name: string;
  description?: string;
  images: string[];
  basePrice: number;
  discount?: number;
  currency: "BRL";
  variants: ProductVariant[];
  createdAt: string;
  updatedAt: string;
};

export type ProductVariant = {
  id: string; // unique variant id (IMPORTANT)
  size?: "PP" | "P" | "M" | "G" | "GG";
  color?: string;

  stock: number;
  priceOverride?: number; // if size/color changes price
  sku: string;
};

export type TCollection = {
  id: string;
  title: string;
  image: string;
  comingSoon?: boolean;
  releaseDate?: string;
  productsIds?: string;
};
