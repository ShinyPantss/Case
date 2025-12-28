import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Image } from "expo-image";
import icons from "@/assets/icons/icons";
import { router, useLocalSearchParams } from "expo-router";
import useTransactionStore from "@/store/useTransactionStore";
import Ionicons from "@expo/vector-icons/Ionicons";

const AddSavings = () => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const { addTransaction, isLoading } = useTransactionStore();
  const { goalId } = useLocalSearchParams();

  const handleAddTransaction = async () => {
    await addTransaction({
      goalId: goalId as string,
      amount,
      inCome: true,
      date: targetDate as Date,
      note,
    });
    router.back();
  };
  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    if (selectedDate) {
      setTargetDate(selectedDate);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-transparent px-5 pt-[32px]  rounded-t-[16px] overflow-hidden">
      <View className=" flex-row items-baseline justify-between">
        <Text className="text-2xl font-semibold text-[#020617] mb-6">
          Add Saving
        </Text>
        <Ionicons
          name="close"
          size={24}
          color="#4B5563"
          className="border p-1 border-solid border-[#E5E7EB] rounded-full"
          onPress={() => router.back()}
        />
      </View>

      <View className="flex-row items-center border border-[#E5E7EB] rounded-xl px-4 py-4 mb-4 justify-between">
        <TextInput
          placeholder="Saving Amount"
          placeholderTextColor="#9CA3AF"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          className="flex-1 text-base text-[#020617]"
          onFocus={() => setShowPicker(false)}
        />
        <Text className="text-base text-[#020617] ml-3">USD</Text>
      </View>

      <TouchableOpacity
        className="flex-row items-center border border-[#E5E7EB] rounded-xl px-4 py-4 mb-4 justify-between"
        onPress={() => setShowPicker(showPicker ? false : true)}
        activeOpacity={0.8}
      >
        <Text
          className="text-base"
          style={{
            color: targetDate ? "#020617" : "#9CA3AF",
          }}
        >
          {targetDate
            ? targetDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "Target Date"}
        </Text>
        <Text className="text-base text-[#020617] ml-3">
          <Image
            source={icons.datepicker}
            style={{ width: 20, height: 20 }}
            contentFit="contain"
          />
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={targetDate || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
        />
      )}

      <View className="relative border border-[#E5E7EB] rounded-[14px] p-4 min-h-[120px] bg-transparent">
        <TextInput
          placeholder="Additional Notes"
          placeholderTextColor="#9CA3AF"
          value={note}
          onChangeText={setNote}
          multiline
          maxLength={200}
          className="flex-1 text-[16px] text-[#020617]"
          style={{ textAlignVertical: "top", padding: 0 }}
          onFocus={() => setShowPicker(false)}
        />
        <Text className="absolute bottom-3 right-4 text-[14px] text-[#9CA3AF]">
          {note.length}/200
        </Text>
      </View>
      <View className="w-full flex-1 justify-end pb-6">
        <TouchableOpacity
          className={`mt-6 bg-[#020617]  rounded-full items-center p-5 ${isLoading ? "opacity-50" : ""}`}
          onPress={handleAddTransaction}
        >
          <Text className="text-white text-center font-inter text-[18px] font-medium leading-[24px] tracking-[-0.27px]">
            {isLoading ? "Adding..." : "Add Saving +"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddSavings;
