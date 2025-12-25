import * as SecureStore from "expo-secure-store";
import { create } from "zustand";

interface TokenStore {
  token: string | null;
  setToken: (token: string) => void;
  getToken: () => Promise<string | null>;
  saveToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
}

export const useTokenStore = create<TokenStore>((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),

  getToken: async () => {
    const token = await SecureStore.getItemAsync("token");
    return token;
  },
  saveToken: async (token: string) => {
    await SecureStore.setItemAsync("token", token);
    set({ token });
  },
  removeToken: async () => {
    await SecureStore.deleteItemAsync("token");
    set({ token: null });
  },
}));
