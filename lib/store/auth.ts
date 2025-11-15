import { create } from "zustand";
import { User } from "../types";

interface AuthStore {
  isAuth: boolean;
  user: User | null;
  setAuth: (user: User) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isAuth: false,
  user: null,
  setAuth: (user: User) => set({ isAuth: true, user }),
  clearAuth: () => set({ isAuth: false, user: null }),
}));
