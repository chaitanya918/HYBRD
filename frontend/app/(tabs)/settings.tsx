import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";


export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Right Logo (H Icon + HYBRD Text) */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <FontAwesome5 name="h-square" size={32} color="#1E3050" />
          <Text style={styles.logoText}>HYBRD</Text>
        </View>
      </View>

      {/* Settings Title */}
      <Text style={styles.title}>Settings</Text>

      {/* Settings List */}
      <TouchableOpacity style={styles.settingOption} onPress={() => router.push("/screens/accountsettings")}>
        <FontAwesome5 name="user" size={18} color="#1E3050" />
        <Text style={styles.settingText}>Account Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <FontAwesome5 name="bell" size={18} color="#1E3050" />
        <Text style={styles.settingText}>Notification Preferences</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <FontAwesome5 name="lock" size={18} color="#1E3050" />
        <Text style={styles.settingText}>Privacy & Security</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <FontAwesome5 name="info-circle" size={18} color="#1E3050" />
        <Text style={styles.settingText}>About HYBRD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 72,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3050",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3050",
    marginBottom: 20,
  },
  settingOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3050",
    marginLeft: 15,
  },
});
