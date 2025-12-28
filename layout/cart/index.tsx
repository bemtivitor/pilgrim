"use client";

import { useCartStore, useCartUIStore } from "@/stores";
import type { TProduct } from "@/types/main";
import { IconTrash, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useMemo } from "react";

export const Cart = () => {
  const { close, isOpen } = useCartUIStore();
  const { list } = useCartStore();

  const total = useMemo(() => {
    return list.reduce(
      (prev, curr) =>
        prev +
        (curr.product.price -
          curr.product.price * (curr.product.discount ?? 0)) *
          curr.quantity,
      0,
    );
  }, [list]);

  return (
    isOpen && (
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
              onClick={() => close()}
            >
              <IconX size={20} />
            </button>
          </div>

          {/* Content */}
          {!list.length && (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="text-neutral-500">Seu carrinho está vazio</p>
            </div>
          )}

          {!!list.length && (
            <div className="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-minimal">
              {list.map((item) => (
                <CartItem
                  key={item.product.id}
                  {...item.product}
                  quantity={item.quantity}
                />
              ))}
            </div>
          )}

          {/* Footer */}
          {!!list.length && (
            <div className="mt-6 border-t border-neutral-200 pt-4 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Total</span>
                <span className="font-semibold text-neutral-900">
                  R$ {total.toFixed(2)}
                </span>
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
    )
  );
};

const CartItem = ({
  name,
  price,
  discount,
  image,
  quantity,
  size,
  id,
}: TProduct & { quantity: number }) => {
  const inc = useCartStore((s) => s.increaseQty);
  const dec = useCartStore((s) => s.decreaseQty);
  const del = useCartStore((s) => s.removeProduct);

  return (
    <div className="flex gap-4 rounded-xl border border-neutral-200 p-4">
      {/* Image */}
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
        {image && (
          <Image
            src={image}
            alt="Produto"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        {/* Top */}
        <div>
          <p className="text-sm font-medium text-neutral-900">{name}</p>
          <p className="text-xs text-neutral-500">Tamanho: {size}</p>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-x-1">
            {discount && (
              <span className="text-[10px] line-through text-neutral-500">
                R$ {price.toFixed(2)}
              </span>
            )}
            <span className="text-sm font-semibold text-neutral-900">
              R$ {(price - price * (discount ?? 0)).toFixed(2)}
            </span>
          </p>

          <div className="flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-300">
              <button
                type="button"
                className="px-2 py-1 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 cursor-pointer"
                onClick={() => dec(id)}
              >
                −
              </button>
              <span className="px-2 text-sm">{quantity}</span>
              <button
                type="button"
                className="px-2 py-1 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 cursor-pointer"
                onClick={() => inc(id)}
              >
                +
              </button>
            </div>

            {/* Delete */}
            <button
              type="button"
              className="text-neutral-400 hover:text-red-500 transition cursor-pointer"
              onClick={() => del(id)}
            >
              <IconTrash size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
