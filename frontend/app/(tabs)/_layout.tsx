import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.iconStyle,
        tabBarBackground: () => <View style={styles.tabBarBackground} />, 
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={22} color={color} />
          ),
        }}
      />

      {/* Workout Tab */}
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dumbbell" size={22} color={color} />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cog" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarBackground: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    height: 65,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 25,
    backgroundColor: "transparent", // Blends with the custom background
    elevation: 0,
    shadowColor: "transparent",
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
  },
  tabBarLabel: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  iconStyle: {
    width: 28,
    height: 28,
  },
});
