import type { TCollection, ProductDB } from "@/types/db";

export async function getDatabase() {
  const baseUrl =
    typeof window === "undefined"
      ? (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
      : "";

  const res = await fetch(`${baseUrl}/api/db`);
  return res.json() as unknown as {
    products: ProductDB[];
    collections: TCollection[];
  };
}

export async function getProducts() {
  const { products } = await getDatabase();
  return products;
}

export async function getProduct(slug: string): Promise<ProductDB | null> {
  const { products } = await getDatabase();
  return products.find((product) => product.id === slug) ?? null;
}

export async function getCollections() {
  const { collections } = await getDatabase();
  return collections;
}
