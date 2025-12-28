import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "@/global.css";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef } from "react";
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { useUserStore } from "@/store/useUserStore";
import useGoalStore from "@/store/useGoalStore";

SplashScreen.preventAutoHideAsync();
export const unstable_settings = {
  anchor: "(tabs)",
};
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { isHandshakeCompleted } = useUserStore();
  const { getGoals } = useGoalStore();

  const hasToken = useRef(false);
  const splashHidden = useRef(false);

  const [loaded, error] = useFonts({
    "Inter-Thin": Inter_100Thin,
    "Inter-ExtraLight": Inter_200ExtraLight,
    "Inter-Light": Inter_300Light,
    "Inter-Regular": Inter_400Regular,
    "Inter-Medium": Inter_500Medium,
    "Inter-SemiBold": Inter_600SemiBold,
    "Inter-Bold": Inter_700Bold,
    "Inter-ExtraBold": Inter_800ExtraBold,
    "Inter-Black": Inter_900Black,
  });

  useEffect(() => {
    if ((loaded || error) && !splashHidden.current) {
      splashHidden.current = true;
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    if (!hasToken.current) {
      useUserStore.getState().initAuth();
      hasToken.current = true;
    }
  }, []);

  useEffect(() => {
    if (hasToken.current && isHandshakeCompleted) {
      getGoals();
    }
  }, [isHandshakeCompleted, getGoals]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="progress" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
