"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProductForm from "./product-form";
import CollectionForm from "./collection-form";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user.role !== "ADMIN") {
      router.replace("/");
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  if (!session || session.user.role !== "ADMIN") {
    return null;
  }

  return (
    <main style={{ padding: 32, maxWidth: 900 }}>
      <h1>Admin Dashboard</h1>

      <hr />

      <h2>Add Product</h2>
      <ProductForm />

      <hr style={{ margin: "40px 0" }} />

      <h2>Add Collection</h2>
      <CollectionForm />
    </main>
  );
}
