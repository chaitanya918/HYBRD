import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const API_BASE_URL = "http://127.0.0.1:8000/api/users"; // Change to local IP for physical device testing

  const handleSignup = async () => {
    if (password !== confirm) {
      Alert.alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert("You are almost there", "Please fill out your fitness goals.");
        router.push({
          pathname: "/screens/fitnessgoals",
          params: {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
          },
        });
      } else {
        const errorText = typeof data === 'object' ? JSON.stringify(data) : String(data);
        Alert.alert("Signup failed", errorText);
      }
    } catch (err) {
      Alert.alert("Error", "Could not connect to server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HYBRD</Text>
      <Text style={styles.subtitle}>Fitness Workout App</Text>
      <Text style={styles.heading}>Create Account</Text>

      <TextInput style={styles.input} placeholder="First Name" onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={setEmail} />

      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Enter your password" secureTextEntry={!passwordVisible} onChangeText={setPassword} />
        <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setPasswordVisible(!passwordVisible)} />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Confirm your password" secureTextEntry={!confirmPasswordVisible} onChangeText={setConfirm} />
        <FontAwesome5 name={confirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("./login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

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
