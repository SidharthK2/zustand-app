import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

let store = (set) => ({
  people: ["John Doe", "Jane Doe"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});

store = devtools(store);
store = persist(store, {
  name: "people-storage",
});

const useStore = create(store);

export default useStore;
