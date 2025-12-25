import { Tabs } from "expo-router";
import React from "react";
import { Image } from "expo-image";
import icons from "@/assets/icons/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
        tabBarLabelStyle: {
          fontSize: 14,
          lineHeight: 20,
          fontWeight: "semibold",
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Savings",

          tabBarIcon: ({ color }) => (
            <Image
              source={icons.vector}
              style={{ width: 24, height: 24 }}
              contentFit="contain"
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.progress}
              style={{ width: 24, height: 24 }}
              contentFit="contain"
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.settings}
              style={{ width: 24, height: 24 }}
              contentFit="contain"
              tintColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
