import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HYBRD</Text>
      <Text style={styles.subtitle}>Fitness Workout App</Text>
      <Text style={styles.heading}>Create Account</Text>

      <TextInput style={styles.input} placeholder="Enter your name" />
      <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />

      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Enter your password" secureTextEntry={!passwordVisible} />
        <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setPasswordVisible(!passwordVisible)} />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Confirm your password" secureTextEntry={!confirmPasswordVisible} />
        <FontAwesome5 name={confirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />
      </View>

      {/* Sign Up navigates to Fitness Goals */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("./fitnessgoals")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login navigates to Login Screen */}
      <TouchableOpacity onPress={() => router.push("./login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5", paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: "bold", color: "#1E3050" },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: { width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 10 },
  passwordContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", borderRadius: 10, width: "100%", paddingHorizontal: 10, marginBottom: 10 },
  passwordInput: { flex: 1, padding: 15 },
  button: { backgroundColor: "#007BFF", padding: 15, borderRadius: 10, width: "100%", alignItems: "center", marginBottom: 15 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  linkText: { fontSize: 14, color: "#007BFF", marginTop: 10 },
});
