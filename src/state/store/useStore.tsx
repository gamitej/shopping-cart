import { create } from "zustand";

interface Store {
  items: Record<string, Record<string, number>>;
}

export const useItemStore = create<Store>()((set) => ({
  items: {},
}));
