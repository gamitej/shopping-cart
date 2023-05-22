import { create } from "zustand";

interface Store {
  items: Record<string, Record<string, number>>;
  setItems: (id: string, val: number) => void;
}

export const useItemStore = create<Store>()((set) => ({
  items: {},
  setItems: (id, val) =>
    set((state) => ({
      ...state,
      items: { ...state.items, [id]: { quantity: val } },
    })),
}));
