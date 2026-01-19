"use client";

import { useState } from "react";
import type { ProductDB } from "@/types/db";

export default function ProductForm() {
  const [json, setJson] = useState("");

  function handleSubmit() {
    try {
      const product: ProductDB = JSON.parse(json);

      console.log("NEW PRODUCT:", product);

      // aqui você pode mandar para uma API:
      // fetch("/api/products", { method: "POST", body: JSON.stringify(product) });

      alert("Produto válido! Veja no console.");
    } catch (err) {
      alert("JSON inválido");
    }
  }

  return (
    <div>
      <textarea
        rows={14}
        style={{ width: "100%", fontFamily: "monospace" }}
        placeholder="Cole aqui o JSON do produto"
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />

      <button type="button" onClick={handleSubmit} style={buttonStyle}>
        Add Product
      </button>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  marginTop: 12,
  padding: "8px 16px",
  cursor: "pointer",
};
