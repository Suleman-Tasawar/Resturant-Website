import { create } from "zustand";

const useStore = create((set) => ({
  catering: [],
  addObject: (newObject) => set((state) => ({ catering: [...state.catering, newObject] })),
}));

export default useStore;
