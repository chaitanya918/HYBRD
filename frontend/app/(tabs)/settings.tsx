import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/189/189664.png" }}
        style={styles.image}
      />
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.subtitle}>
        We're working hard to bring new features. Stay tuned!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
