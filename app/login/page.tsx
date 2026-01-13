"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: integrate auth logic
    console.log({ email, password });
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-32.5">
      <div className="w-full max-w-112.5">
        {/* Breadcrumb */}
        <div className="mb-5 text-[11px] font-semibold uppercase text-[#999]">
          INÍCIO / LOGIN
        </div>

        {/* Title */}
        <h1 className="mb-2 text-2xl font-extrabold uppercase leading-tight">
          Entrar na sua conta
        </h1>

        <p className="mb-8 text-sm text-[#666]">
          Acesse sua conta para acompanhar pedidos e finalizar compras.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              required
              id="email"
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

          {/* Forgot password */}
          <div className="text-right">
            {/* <button
              type="button"
              className="text-xs font-semibold uppercase text-[#555] underline"
            >
              Esqueci minha senha
            </button> */}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full bg-black py-4.5 text-[13px] font-extrabold uppercase text-white transition hover:bg-[#111] cursor-pointer"
          >
            Entrar
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <span className="h-px flex-1 bg-[#eee]" />
            <span className="text-xs text-[#999]">ou</span>
            <span className="h-px flex-1 bg-[#eee]" />
          </div>

          {/* Register */}
          <Link
            href="/register"
            className="flex w-full items-center justify-center border border-[#e5e5e5] py-3.75 text-xs font-bold uppercase transition hover:border-black"
          >
            Criar nova conta
          </Link>
        </form>
      </div>
    </section>
  );
}
