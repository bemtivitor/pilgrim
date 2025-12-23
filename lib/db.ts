export type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  discount?: number;
};

export type Collection = {
  id: string;
  title: string;
  image: string;
  comingSoon?: boolean;
  releaseDate?: string;
};

export async function getDatabase() {
  const baseUrl =
    typeof window === "undefined"
      ? (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
      : "";

  const res = await fetch(`${baseUrl}/api/db`);
  return res.json();
}

export async function getProducts() {
  const { products } = await getDatabase();
  return products as Product[];
}

export async function getCollections() {
  const { collections } = await getDatabase();
  return collections as Collection[];
}
