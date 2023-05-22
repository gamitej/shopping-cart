import { create } from "zustand";

interface Store {
  totalItems: number;
  items: Record<string, Record<string, number>>;
  setItems: (id: string, val: number) => void;
  setTotalQuant: (val: number) => void;
}

export const useItemStore = create<Store>()((set) => ({
  items: {},
  totalItems: 0,
  setItems: (id, val) =>
    set((state) => ({
      ...state,
      items: { ...state.items, [id]: { quantity: val } },
    })),
  setTotalQuant: (val) => set((state) => ({ ...state, totalItems: val })),
}));
