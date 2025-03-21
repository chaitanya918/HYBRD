import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import FontAwesome

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.iconStyle,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* Workout Tab */}
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dumbbell" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cog" size={size ?? 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 20 : 15,
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
  },
  tabBarLabel: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
});
