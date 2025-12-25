import { Transaction } from "./useGoalStore";
import { create } from "zustand";
import { useTokenStore } from "./useTokenStore";

interface TransactionStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (params: AddTransactionParams) => Promise<void>;
}

interface AddTransactionParams {
  goalId: string;
  amount: string;
  inCome: boolean;
  date: Date;
  note?: string;
}

const useTransactionStore = create<TransactionStore>((set, get) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  error: null,
  setError: (error: string | null) => set({ error }),
  transactions: [],
  setTransactions: (transactions: Transaction[]) => set({ transactions }),
  addTransaction: async (params: AddTransactionParams) => {
    try {
      set({ isLoading: true });
      const token = await useTokenStore.getState().getToken();
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await fetch(
        "https://mani.retryapps.co/v2/transactions/new",
        {
          method: "POST",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      const data = await response.json();
      set({ transactions: [...get().transactions, data.transaction] });

      set({ isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useTransactionStore;
