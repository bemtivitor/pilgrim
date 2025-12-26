import { create } from "zustand";
import type { TProduct } from "@/types";

type CartItem = {
  product: TProduct;
  quantity: number;
};

type TCart = {
  list: CartItem[];

  addProduct: (product: TProduct) => void;
  removeProduct: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<TCart>((set) => ({
  list: [],

  addProduct: (product) =>
    set((state) => {
      const index = state.list.findIndex(
        (item) => item.product.id === product.id,
      );

      if (index !== -1) {
        const newList = [...state.list];
        newList[index] = {
          ...newList[index],
          quantity: newList[index].quantity + 1,
        };

        return { list: newList };
      }

      return {
        list: [...state.list, { product, quantity: 1 }],
      };
    }),

  increaseQty: (id) =>
    set((state) => ({
      list: state.list.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      list: state.list
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    })),

  removeProduct: (id) =>
    set((state) => ({
      list: state.list.filter((item) => item.product.id !== id),
    })),

  clear: () => set({ list: [] }),
}));

export const useCartQuantity = () =>
  useCartStore((state) =>
    state.list.reduce((sum, item) => sum + item.quantity, 0),
  );
