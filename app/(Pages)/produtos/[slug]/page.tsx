import { notFound } from "next/navigation";
import ProductClient from "./client";
import { getProduct } from "@/lib/db";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function ProdutoPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) {
    return notFound();
  }

  const product = await getProduct(slug);

  if (!product) {
    return notFound();
  }

  return <ProductClient product={product} />;
}
