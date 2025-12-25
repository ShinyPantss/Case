import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Goal } from "@/store/useGoalStore";
import { CircularProgress } from "./CircularProgress";

const DetailProgress = ({ goal }: { goal: Goal | undefined }) => {
  console.log("goal", goal);
  return (
    <View>
      <View className="flex-row items-center justify-center mt-[8px]">
        <Text className="text-white text-center font-inter text-[30px] font-bold leading-[34px] tracking-[-0.75px]">
          {goal?.balance} {goal?.currency}
        </Text>
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.40)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: 30,
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: 34,
            letterSpacing: -0.75,
          }}
        >
          /{goal?.targetMoney} {goal?.currency ?? ""}
        </Text>
      </View>
      <View className="mt-[24px] items-center justify-center">
        <CircularProgress
          progress={goal?.progress ?? 0}
          imageUri={goal?.iconUri ?? ""}
          size={156}
        />
      </View>
    </View>
  );
};

export default DetailProgress;
