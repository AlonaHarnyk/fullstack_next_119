import { create } from "zustand";

interface Counter {
  value: number;
  increment: (newValue: number) => void;
  value2: number;
  increment2: () => void;
}

export const useCounter = create<Counter>((set) => {
  return {
    value: 100,
    increment: (newValue: number) => set({ value: newValue }),
    value2: 0,
    increment2: () => set((prevState) => ({ value2: prevState.value2 + 1 })),
  };
});
