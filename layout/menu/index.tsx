"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconHeart,
  IconMenu,
  IconSearch,
  IconShoppingBag,
  IconUser,
  IconX,
} from "@tabler/icons-react";

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-[30px] left-0 z-1000
          flex h-20 w-full items-center justify-between
          px-10
          bg-white/0
          transition-all duration-300
          hover:bg-white hover:shadow-md
          lg:h-[60px]
        "
      >
        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden text-xl"
        >
          <IconMenu />
        </button>

        {/* LOGO */}
        <div className="logo">
          <Link
            href="#"
            className="
              text-[28px] font-black italic tracking-[-1px] text-black
              lg:text-[28px]
            "
          >
            PILGRIM
          </Link>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden  list-none gap-[30px] lg:flex">
          {["LOJA", "COLEÇÕES", "LANÇAMENTOS"].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="
                  relative block h-[15px] overflow-hidden
                  text-[13px] font-semibold uppercase tracking-[0.5px] text-black
                "
              >
                <span
                  className="
                    block transition-transform duration-400
                    [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                    hover:-translate-y-[15px]
                  "
                >
                  <span className="block h-[15px] leading-[15px]">{item}</span>
                  <span className="block h-[15px] leading-[15px]">{item}</span>
                </span>
              </Link>
            </li>
          ))}

          {/* SALE */}
          <li>
            <Link
              href="#"
              className="
                relative block h-[15px] overflow-hidden
                text-[13px] font-semibold uppercase tracking-[0.5px] text-[#d32f2f]
              "
            >
              <span
                className="
                  block transition-transform duration-400
                  [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-[15px]
                "
              >
                <span className="block h-[15px] leading-[15px]">SALE</span>
                <span className="block h-[15px] leading-[15px]">SALE</span>
              </span>
            </Link>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-[25px]">
          {/* SEARCH */}
          <div
            className="
              hidden w-[200px] items-center gap-2 rounded
              bg-black/5 px-[15px] py-2.5
              lg:flex
            "
          >
            <input
              className="w-full bg-transparent text-[13px] outline-none"
              placeholder="Procurar"
            />
            <IconSearch />
          </div>

          {/* ACTION ITEMS */}
          {[
            { label: "Wishlist", icon: IconHeart },
            { label: "Entrar", icon: IconUser },
          ].map(({ label, icon: Icon }) => (
            <Link
              key={label}
              href="#"
              className="
                hidden items-center gap-2
                text-[13px] font-medium uppercase text-black
                lg:flex
              "
            >
              <Icon />
              <span>{label}</span>
            </Link>
          ))}

          {/* CART */}
          <Link href="#" className="relative flex items-center text-black">
            <IconShoppingBag />
            <span
              className="
                absolute -top-[5px] -right-2
                flex h-4 w-4 items-center justify-center
                rounded-full bg-black text-[10px] text-white
              "
            >
              0
            </span>
          </Link>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <button
          type="button"
          className="
            fixed inset-0 z-1500
            bg-black/50
          "
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed top-0 z-2000 h-screen w-[80%] bg-white p-5
          transition-all duration-300
          ${open ? "left-0" : "-left-full"}
        `}
      >
        {/* HEADER */}
        <div className="mb-[30px] flex items-center justify-between border-b pb-[15px]">
          <span className="font-black italic">MENU</span>
          <button type="button" onClick={() => setOpen(false)}>
            <IconX size={24} />
          </button>
        </div>

        {/* LINKS */}
        <ul>
          {["Loja", "Coleções", "Lançamentos"].map((item) => (
            <li key={item} className="mb-5">
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="text-[18px] font-bold uppercase text-black"
              >
                {item}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="text-[18px] font-bold uppercase text-[#d32f2f]"
            >
              Sale
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
