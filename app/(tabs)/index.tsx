import icons from "@/assets/icons/icons";
import GoalCardComponent from "@/components/GoalCard";
import useGoalStore, { Goal } from "@/store/useGoalStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { goals } = useGoalStore();
  return (
    <SafeAreaView className="flex-1 px-5 bg-white relative">
      <View className=" my-[10px] ">
        <Image
          source={icons.pig}
          style={{ width: 40, height: 40 }}
          contentFit="contain"
        />
      </View>

      <View className="  py-2">
        <View className=" relative mt-[6px] border border-[#EEEFF2] rounded-xl p-4 flex-row  gap-4">
          <Image
            source={icons.hand_3d}
            style={{ width: 72, height: 62 }}
            contentFit="contain"
          />
          <View className="absolute right-2 top-2">
            <Ionicons name="close" size={24} color="#D1D5DB" />
          </View>
          <View className="flex-1 gap-1">
            <Text className="text-[16px] leading-[24px] font-semibold text-[#020617] tracking-[-0.176px] font-inter">
              Learn How to Save
            </Text>
            <Text className="text-[14px] font-inter-regular text-[#9CA3AF] leading-[20px] tracking-[-0.084px] font-normal">
              Use your existing accounts to start tradings
            </Text>
          </View>
        </View>
      </View>

      <View className=" py-7 flex-row justify-between items-center ">
        <Text className="text-[24px] leading-[30px] font-bold text-[#020617] tracking-[-0.36px] font-inter">
          My Savings
        </Text>
        <View className="flex-row items-center gap-2 border border-solid border-[#EEEFF2] rounded-[30px] px-[12px] py-[6px] ">
          <TouchableOpacity
            className="flex-row items-center gap-2"
            onPress={() => {}}
          >
            <Text className="text-[16px] leading-[24px] font-semibold text-[#1F2937] tracking-[-0.176px] font-inter">
              Sort
            </Text>
            <Image
              source={icons.updownarrow}
              style={{ width: 16, height: 16 }}
              contentFit="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={goals}
        renderItem={({ item }: { item: Goal }) => (
          <GoalCardComponent goal={item} />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ gap: 16 }}
      />
      <View className="absolute bottom-6 right-5 items-center">
        <TouchableOpacity className="bg-[#020617] rounded-full py-4 px-6 flex-row items-center justify-center gap-3">
          <Text className="text-white text-center font-inter text-[16px] font-medium leading-[24px] tracking-[-0.176px]">
            Add Goal
          </Text>
          <Image
            source={icons.plus}
            style={{ width: 20, height: 20, tintColor: "#fff" }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
