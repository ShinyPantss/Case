import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const DetailActionButton = ({
  icon,
  title,
  onPress,
  backgroundColor,
}: {
  icon: string;
  title: string;
  onPress: () => void;
  backgroundColor: string;
}) => {
  return (
    <TouchableOpacity onPress={onPress} className=" items-center flex-1">
      <View
        className="rounded-full border-2 border-[rgba(255,255,255,0.20)] p-[14px] items-center justify-center mb-2 backdrop-blur-lg"
        style={{ backgroundColor }}
      >
        <Image
          source={icon}
          style={{
            width: 24,
            height: 24,
            tintColor: backgroundColor === "#FFF" ? "black" : "white",
          }}
          contentFit="contain"
        />
      </View>
      <View className=" items-center w-full ">
        <Text className="text-white text-center font-inter font-medium text-base leading-6 tracking-[-0.176px]">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailActionButton;

const styles = StyleSheet.create({});
