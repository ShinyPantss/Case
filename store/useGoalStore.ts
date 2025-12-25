import { create } from "zustand";
import { useTokenStore } from "./useTokenStore";
export interface Reminder {
  enabled: boolean;
  freq: "everyWeek" | "everyMonth" | "everyDay";
  time: string;
  lastNotificationDate: string;
}

export interface Transaction {
  _id: string;
  userID: string;
  moneyBankId: string;
  inCome: boolean;
  amount: number;
  createdAt: string;
  note?: string;
}

export interface Goal {
  _id: string;
  title: string;
  balance: number;
  targetMoney: number;
  targetDate: string;
  currency: string;
  icon: string;
  iconUri: string;
  archived: boolean;
  reminder: Reminder;
  createdAt: string;
  updatedAt: string;
  members: string[];
  transactions: Transaction[];
  progress: number;
}

interface GoalStore {
  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
  addGoal: (goal: Goal) => void;
  getGoalById: (id: string) => Goal | undefined;
  getGoals: () => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
const useGoalStore = create<GoalStore>((set, get) => ({
  goals: [],
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  setGoals: (goals: Goal[]) => set({ goals }),
  addGoal: (goal: Goal) => set((state) => ({ goals: [...state.goals, goal] })),

  getGoals: async () => {
    set({ loading: true });
    try {
      const token = await useTokenStore.getState().getToken();
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await fetch("https://mani.retryapps.co/v2/goals", {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      set({ goals: data.goals ?? [] });
      set({ loading: false });
    } catch (error) {
      console.error("Failed to fetch goals:", error);
    } finally {
      set({ loading: false });
    }
  },
  getGoalById: (id: string) => {
    return get().goals.find((g) => g._id === id);
  },
}));

export default useGoalStore;
