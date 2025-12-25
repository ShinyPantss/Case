import icons from "@/assets/icons/icons";
import { View, Text, Image } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface Props {
  size?: number;
  strokeWidth?: number;
  progress: number;
  imageUri: string;
}

export function CircularProgress({
  size = 220,
  strokeWidth = 5,
  progress,
  imageUri,
}: Props) {
  const clampedProgress = Math.min(progress, 100);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset =
    circumference - (clampedProgress / 100) * circumference;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle
          stroke="rgba(255,255,255,0.15)"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        <Circle
          stroke="white"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          rotation="90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
        className="mt-4"
      >
        <Image
          source={icons.pig}
          style={{ width: 64, height: 64, marginBottom: 8 }}
          resizeMode="contain"
        />
        <Text className="text-[rgba(255,255,255,0.60)] bg-white/5 rounded-full px-2 py-1 text-center font-inter text-[14px] font-semibold leading-[20px] tracking-[-0.084px] ">
          %{Math.round(clampedProgress)}
        </Text>
      </View>
    </View>
  );
}
