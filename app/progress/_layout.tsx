import { Stack } from "expo-router";
import React from "react";

const ProgressLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[goalsId]" />
      <Stack.Screen
        name="modals"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default ProgressLayout;
