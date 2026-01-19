"use client";

import { useState } from "react";
import type { TCollection } from "@/types/db";

export default function CollectionForm() {
  const [json, setJson] = useState("");

  function handleSubmit() {
    try {
      const collection: TCollection = JSON.parse(json);

      console.log("NEW COLLECTION:", collection);

      // fetch("/api/collections", { method: "POST", body: JSON.stringify(collection) });

      alert("Collection válida! Veja no console.");
    } catch {
      alert("JSON inválido");
    }
  }

  return (
    <div>
      <textarea
        rows={12}
        style={{ width: "100%", fontFamily: "monospace" }}
        placeholder="Cole aqui o JSON da collection"
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />

      <button type="button" onClick={handleSubmit} style={buttonStyle}>
        Add Collection
      </button>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  marginTop: 12,
  padding: "8px 16px",
  cursor: "pointer",
};
