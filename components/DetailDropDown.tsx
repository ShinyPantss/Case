import icons from "@/assets/icons/icons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onEdit: () => void;
  onArchive: () => void;
  onDelete: () => void;
};

const   DetailDropDown = ({ visible, onClose, onEdit, onArchive, onDelete }: Props) => {
  if (!visible) return null;

  return (
    <Pressable 
      className="absolute inset-0" 
      onPress={onClose}
    >
      <View className="absolute right-5 top-[80px] w-[191px] rounded-xl bg-white border border-[#E5E7EB] shadow-lg">
      <TouchableOpacity
        onPress={onEdit}
        className="px-4 py-4 flex-row items-center justify-between"
      >
        <Text className="text-[#1F2937] font-inter text-[16px] font-medium leading-6 tracking-[-0.176px]">
          Edit Goal
        </Text>
        <Image source={icons.edit} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onArchive}
        className="px-4 py-4 flex-row items-center justify-between"
      >
        <Text className="text-[#1F2937] font-inter text-[16px] font-medium leading-6 tracking-[-0.176px]">
          Archive Goal
        </Text>
        <Image source={icons.archive} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onDelete}
        className="px-4 py-4 flex-row items-center justify-between"
      >
        <Text className="text-[#EF4343] font-inter text-[16px] font-medium leading-6 tracking-[-0.176px]">
          Delete Goal
        </Text>
        <Image source={icons.deleteIcon} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default DetailDropDown;
