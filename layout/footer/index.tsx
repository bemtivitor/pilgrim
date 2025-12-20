"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandPinterest,
  IconBrandYoutube,
  IconBrandWhatsapp,
  IconShieldCheck,
} from "@tabler/icons-react";

export function Footer() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Obrigado por se inscrever!");
  };

  return (
    <footer className="w-full">
      {/* STORY SECTION */}
      <div className="flex flex-col items-center justify-center gap-10 bg-[#f9f9f9] px-10 py-16 text-center md:flex-row md:text-left">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#333]">
          <span className="font-serif text-4xl font-black italic">P</span>
        </div>

        <p className="max-w-[800px] text-sm leading-relaxed text-[#666]">
          Desde 2025, a <strong>PILGRIM</strong> constrói sua história na
          intersecção entre a fé e o asfalto. Movida pela coragem de expressar
          devoção através do estilo urbano, nascemos do desejo de vestir os
          peregrinos modernos. Nossa missão é criar peças que não apenas vestem,
          mas comunicam uma identidade: <strong>Blessed & Street</strong>.
          Pilgrim Yourself: um convite para caminhar com propósito.
        </p>
      </div>

      {/* MAIN FOOTER */}
      <div className="flex flex-wrap justify-between gap-10 border-t border-[#eee] px-10 py-16 pb-24">
        {/* NEWSLETTER */}
        <div className="min-w-[300px] flex-2">
          <h4 className="mb-5 text-xs font-extrabold uppercase tracking-wide text-black">
            Registre-se para ganhar descontos exclusivos:
          </h4>

          <p className="mb-5 text-sm text-[#666]">Assine nossa newsletter:</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full border-b border-[#ccc] py-2 text-sm outline-none transition focus:border-black"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full border-b border-[#ccc] py-2 text-sm outline-none transition focus:border-black"
            />

            <button
              type="submit"
              className="mt-2 w-full bg-[#555] py-4 text-xs font-bold uppercase text-white transition hover:bg-black"
            >
              Inscrever-se
            </button>

            <p className="text-[10px] text-[#999]">
              Ao enviar você concorda com os termos descritos na{" "}
              <Link href="#" className="font-medium text-black">
                Política de Privacidade
              </Link>
            </p>
          </form>
        </div>

        {/* LINKS */}
        {[
          {
            title: "Sobre",
            links: [
              "Quem Somos",
              "Perguntas Frequentes",
              "Nossas Lojas",
              "Coleções",
            ],
          },
          {
            title: "Meus Dados",
            links: [
              "Minha Conta",
              "Meus Pedidos",
              "Lista de Desejos",
              "Trocas e Devoluções",
            ],
          },
          {
            title: "Políticas",
            links: [
              "Políticas Trocas e Devoluções",
              "Entrega e Frete",
              "Pagamento",
              "Privacidade",
              "Termos de Uso",
            ],
          },
        ].map(({ title, links }) => (
          <div key={title} className="min-w-[150px] flex-1">
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-wide text-black">
              {title}
            </h4>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-[#666] transition hover:text-black hover:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT */}
        <div className="min-w-[150px] flex-1">
          <h4 className="mb-5 text-xs font-extrabold uppercase tracking-wide text-black">
            Contato
          </h4>

          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-sm text-[#666] hover:underline">
                Fale Conosco
              </Link>
            </li>
            <li className="text-[13px] text-[#666]">(11) 99999-9999</li>
            <li>
              <a
                href="mailto:atendimento@pilgrim.com.br"
                className="text-sm font-bold text-black"
              >
                atendimento@pilgrim.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-5 pt-5 md:flex-row">
          <div className="flex gap-5 text-black">
            <IconBrandInstagram size={22} />
            <IconBrandFacebook size={22} />
            <IconBrandTwitter size={22} />
            <IconBrandPinterest size={22} />
            <IconBrandYoutube size={22} />
            <IconBrandWhatsapp size={22} />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#555]">
            <IconShieldCheck size={18} />
            <span>Google Safe Browsing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
