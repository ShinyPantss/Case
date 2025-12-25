import { Stack } from "expo-router";
import React from "react";

const ModalsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="add-savings"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="withdrawal"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default ModalsLayout;

