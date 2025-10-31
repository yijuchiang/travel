import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(persist((set) => ({
    cart: [],
    addCart: (product) => set((state) => {
      return { cart: [...state.cart, product]}
    }),
    removeCart: (id) => set((state) => {
      const newCart = state.cart.filter(item => item.id !== id)
      return { cart: newCart }
    })
  }), {
    name: 'travel-cart'
  }
))
