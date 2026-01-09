"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: register logic
    console.log({ name, email, password });
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-32.5">
      <div className="w-full max-w-112.5">
        {/* Breadcrumb */}
        <div className="mb-5 text-[11px] font-semibold uppercase text-[#999]">
          INÍCIO / CRIAR CONTA
        </div>

        {/* Title */}
        <h1 className="mb-2 text-2xl font-extrabold uppercase leading-tight">
          Criar conta
        </h1>

        <p className="mb-8 text-sm text-[#666]">
          Crie sua conta para acompanhar pedidos e finalizar compras mais
          rápido.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-bold uppercase text-[#333]"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="w-full border-b border-[#ccc] py-2 text-sm outline-none transition focus:border-black"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-bold uppercase text-[#333]"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@email.com"
              className="w-full border-b border-[#ccc] py-2 text-sm outline-none transition focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-xs font-bold uppercase text-[#333]"
            >
              Senha
            </label>
            <input
              type="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border-b border-[#ccc] py-2 text-sm outline-none transition focus:border-black"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full bg-black py-4.5 text-[13px] font-extrabold uppercase text-white transition hover:bg-[#111] cursor-pointer"
          >
            Criar conta
          </button>

          {/* Login link */}
          <p className="text-center text-xs text-[#666]">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="font-bold uppercase underline text-[#333]"
            >
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
