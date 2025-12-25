import { View } from "react-native";
import React from "react";
import DetailActionButton from "./DetailActionButton";
import icons from "@/assets/icons/icons";
import { router } from "expo-router";
import { Goal } from "@/store/useGoalStore";

const DetailActionTab = ({ goal }: { goal: Goal | undefined }) => {
  return (
    <View className="flex-row justify-between">
      <DetailActionButton
        icon={icons.plus}
        title="Add Saving"
        onPress={() => {
          router.push({
            pathname: "/progress/modals/add-savings",
            params: {
              goalId: goal?._id,
            },
          });
        }}
        backgroundColor="#FFF"
      />
      <DetailActionButton
        icon={icons.minus}
        title="Withdrawal"
        onPress={() => {
          router.push({
            pathname: "/progress/modals/withdrawal",
            params: {
              goalId: goal?._id,
            },
          });
        }}
        backgroundColor="rgba(255,255,255,0.10)"
      />
      <DetailActionButton
        icon={icons.progress}
        title="Progress"
        onPress={() => {}}
        backgroundColor="rgba(255,255,255,0.10)"
      />
      <DetailActionButton
        icon={icons.fistbump}
        title="Invite+"
        onPress={() => {}}
        backgroundColor="rgba(255,255,255,0.10)"
      />
    </View>
  );
};

export default DetailActionTab;
