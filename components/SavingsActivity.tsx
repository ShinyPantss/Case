import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Transaction } from "@/store/useGoalStore";
import TransactionItem from "./TransactionItem";

const SavingsActivity = ({ transactions }: { transactions: Transaction[] }) => {
  console.log("transactions", transactions);
  return (
    <View className="flex-1 px-5 pt-[36px]">
      <View className="mb-4">
        <Text className="text-[#020617] font-inter text-[20px] font-semibold leading-6 tracking-[-0.3px]">
          Savings Activity
        </Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={({ item }: { item: Transaction }) => (
          <TransactionItem transaction={item} />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: 400 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SavingsActivity;
