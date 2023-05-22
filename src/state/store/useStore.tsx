import { create } from "zustand";

interface Store {
  items: Map<string, undefined>;
  setItems: () => void;
}

export const useItemStore = create<Store>()((set) => ({
  items: new Map<string, undefined>(),
  setItems: () => set((state) => ({ ...state })),
}));
