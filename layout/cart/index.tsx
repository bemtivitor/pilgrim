"use client";

import { IconTrash, IconX } from "@tabler/icons-react";
import Image from "next/image";

export const Cart = () => {
  const isEmpty = false;

  return (
    <div
      className="
      fixed right-0 top-0 z-2000
      h-full max-h-dvh
      w-full sm:w-105 max-w-full sm:max-w-[90vw]
      bg-white shadow-xl border border-neutral-200
    "
    >
      <div className="flex h-full flex-col p-4 sm:p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">Carrinho</h2>

          <button
            type="button"
            className="rounded-lg p-1 cursor-pointer text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition"
            aria-label="Fechar carrinho"
            onClick={() => localStorage.setItem("cart_state", "false")}
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Content */}
        {isEmpty && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="text-neutral-500">Seu carrinho está vazio</p>
          </div>
        )}

        {!isEmpty && (
          <div className="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-minimal">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        )}

        {/* Footer */}
        {!isEmpty && (
          <div className="mt-6 border-t border-neutral-200 pt-4 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Total</span>
              <span className="font-semibold text-neutral-900">R$ 259,80</span>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-neutral-900 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="flex gap-4 rounded-xl border border-neutral-200 p-4">
      {/* Image */}
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src="/camisa1.jpg"
          alt="Produto"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        {/* Top */}
        <div>
          <p className="text-sm font-medium text-neutral-900">
            Camiseta Essential
          </p>
          <p className="text-xs text-neutral-500">Tamanho: M</p>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900">
            R$ 129,90
          </span>

          <div className="flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-300">
              <button
                type="button"
                className="px-2 py-1 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 cursor-pointer"
              >
                −
              </button>
              <span className="px-2 text-sm">1</span>
              <button
                type="button"
                className="px-2 py-1 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Delete */}
            <button
              type="button"
              className="text-neutral-400 hover:text-red-500 transition cursor-pointer"
            >
              <IconTrash size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
