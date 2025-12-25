import { Text, View } from "react-native";
import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  const progressRounded = Math.round(progress);
  const coloredBarsCount = Math.round((progressRounded / 100) * 40);
  return (
    <View className="flex-row items-center gap-2">
      <View className="flex-row items-center gap-[3px]">
        {Array.from({ length: 40 }).map((_, idx) => (
          <View
            key={idx}
            className={`h-[18px] w-[4px] rounded-[99px] ${idx < coloredBarsCount ? "bg-[#10B77F]" : "bg-[#EEEFF2]"}`}
          />
        ))}
      </View>
      <View className="bg-[#10B77F]/10">
        <Text className="text-[#10B77F] font-inter text-[14px] font-semibold leading-[20px] tracking-[-0.084px]">
          %
          {progressRounded
            ? progressRounded > 100
              ? 100
              : progressRounded
            : 0}
        </Text>
      </View>
    </View>
  );
};

export default ProgressBar;
