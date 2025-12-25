import { StyleSheet, Text, View } from "react-native";
import React from "react";
import icons from "@/assets/icons/icons";
import { Image } from "expo-image";
import { Transaction } from "@/store/useGoalStore";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <View className="py-4 justify-center mb-1">
      <View className="flex-row items-center gap-[12px]">
        <View
          className="rounded-full border border-[#F3F4F6] items-center justify-center"
          style={{ width: 40, height: 40 }}
        >
          <View
            className={`rounded-full ${
              transaction.inCome ? "bg-[#EDFDF5]" : "bg-[#FEF1F1]"
            } items-center justify-center`}
            style={{ width: 32, height: 32 }} // 40 - (4px * 2)
          >
            <Image
              source={transaction.inCome ? icons.plus : icons.minus}
              style={{
                width: 24,
                height: 24,
                tintColor: transaction.inCome ? "#10B77F" : "#EF4343",
              }}
            />
          </View>
        </View>

        <View className="flex-col  flex-1">
          <Text className="text-[#020617] font-inter text-[16px] font-medium leading-6 tracking-[-0.176px]">
            {transaction.createdAt
              ? new Date(transaction.createdAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : ""}
          </Text>
          <Text
            className="text-[#9CA3AF] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px]"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {(transaction.note || "").length > 30
              ? (transaction.note || "").slice(0, 30) + "..."
              : transaction.note || ""}
          </Text>
        </View>
        <View className="items-end">
          <Text
            className={`font-inter font-semibold text-[16px] leading-6 tracking-[-0.176px] ${transaction.inCome ? "text-[#10B77F]" : "text-[#EF4343]"}`}
          >
            {transaction.inCome ? "+" : "-"} {transaction.amount} TRY
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;
