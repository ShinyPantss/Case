import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Goal } from "@/store/useGoalStore";
import ProgressBar from "@/components/ProgressBar";
import { router } from "expo-router";
import icons from "@/assets/icons/icons";

const GoalCard = ({ goal }: { goal: Goal }) => {
  return (
    <TouchableOpacity
      className="border border-solid border-[#EEEFF2] rounded-xl p-4 "
      onPress={() => {
        router.push(`/progress/${goal._id}`);
      }}
    >
      <View className="flex-row items-center  ">
        <View className="p-4 bg-[#F9FAFB] mr-3 rounded-xl">
          <Image source={icons.pig} style={{ width: 36, height: 36 }} />
        </View>
        <View>
          <Text
            style={{
              color: "#020617",
              fontFamily: "Inter",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: 24,
              letterSpacing: -0.176,
            }}
          >
            {goal.title}
          </Text>
          <Text>
            <Text className="text-[#10B77F] text-center font-inter text-[16px] font-semibold leading-[24px] tracking-[-0.176px]">
              {goal.balance} {goal.currency}
            </Text>

            <Text className="text-[#D1D5DB] text-center font-inter text-[14px] font-semibold leading-[20px] tracking-[-0.084px]">
              / {goal.targetMoney} {goal.currency}
            </Text>
          </Text>
        </View>
      </View>
      <View className="mt-5 ">
        <ProgressBar progress={goal.progress} />
      </View>
    </TouchableOpacity>
  );
};

export default GoalCard;
