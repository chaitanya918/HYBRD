import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>HYBRD</Text>
      <Text style={styles.subtitle}>Fitness Workout App</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("./login")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => router.push("./signup")}>
        <Text style={styles.buttonOutlineText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5" },
  logo: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: "bold", color: "#1E3050" },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 40 },
  button: { backgroundColor: "#007BFF", padding: 15, borderRadius: 10, width: "80%", alignItems: "center", marginBottom: 15 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  buttonOutline: { borderWidth: 2, borderColor: "#007BFF", padding: 15, borderRadius: 10, width: "80%", alignItems: "center" },
  buttonOutlineText: { color: "#007BFF", fontSize: 16, fontWeight: "bold" },
});
