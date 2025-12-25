import { create } from "zustand";
import { useTokenStore } from "./useTokenStore";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface UserStore {
  isHandshakeCompleted: boolean;
  user: User | null;
  setIsHandshakeCompleted: (isHandshakeCompleted: boolean) => void;
  performHandshake: () => Promise<void>;
  initAuth(): Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  isHandshakeCompleted: false,
  user: null,
  setIsHandshakeCompleted: (isHandshakeCompleted: boolean) =>
    set({ isHandshakeCompleted }),
  setUser: (user: User) => set({ user }),

  performHandshake: async () => {
    try {
      const response = await fetch(
        "https://mani.retryapps.co/v2/user/handshake",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            deviceId: "CCCB5A2E-12BF-4A72-A673-1017164AD577",
            deviceName: "iPhone",
            deviceModel: "iPhone 13",
            platform: "ios",
            platformVersion: "26.1",
            appVersion: "2.8",
            country: "TR",
            language: "tr",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      await useTokenStore.getState().saveToken(data.token);

      set({
        user: data.user,
        isHandshakeCompleted: true,
      });
    } catch (error) {
      console.error("Handshake failed:", error);
    }
  },
  initAuth: async () => {
    const token = await useTokenStore.getState().getToken();
    if (token) {
      set({ isHandshakeCompleted: true });
    } else {
      await useUserStore.getState().performHandshake();
    }
  },
}));
