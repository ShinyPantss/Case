import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import useGoalStore from "@/store/useGoalStore";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ImageBackground } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import icons from "@/assets/icons/icons";
import DetailProgress from "@/components/DetailProgress";
import DetailActionButton from "@/components/DetailActionButton";
import SavingsActivity from "@/components/SavingsActivity";
import DetailDropDown from "@/components/DetailDropDown";
import DetailActionTab from "@/components/DetailActionTab";

const GoalDetailPage = () => {
  const { goalsId } = useLocalSearchParams();
  const [visible, setVisible] = useState(false);
  const { getGoalById } = useGoalStore();
  const goal = getGoalById(goalsId as string);
  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <SafeAreaView className="flex-1 bg-transparent ">
        <View className="flex-row items-center justify-between py-[18px] px-5">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={icons.arrowleft} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <Text className="text-white text-center font-inter text-[18px] font-semibold leading-[24px] tracking-[-0.27px]">
            {goal?.title}
          </Text>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View className="pb-6 px-5">
          <DetailProgress goal={goal} />
        </View>
        <View className="">
          <DetailActionTab goal={goal} />
        </View>
        <View className="bg-white h-full w-full rounded-t-[20px] mt-6 ">
          <SavingsActivity transactions={goal?.transactions ?? []} />
        </View>
      </SafeAreaView>
      <DetailDropDown
        visible={visible}
        onClose={() => setVisible(false)}
        onEdit={() => {}}
        onArchive={() => {}}
        onDelete={() => {}}
      />
    </ImageBackground>
  );
};

export default GoalDetailPage;
