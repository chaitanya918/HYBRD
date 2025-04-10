import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const API_BASE_URL = "http://127.0.0.1:8000/api/users"; 

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        const fullName = `${data.first_name} ${data.last_name}`;
        await AsyncStorage.setItem("userEmail", email);
        Alert.alert("Welcome!", `Hello ${fullName}`);
        router.push("/home");
      } else {
        Alert.alert("Login failed", data.error || "Try again.");
      }
    } catch (err) {
      Alert.alert("Error", "Could not connect to server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HYBRD</Text>
      <Text style={styles.subtitle}>Fitness Workout App</Text>

      <TextInput style={styles.input} placeholder="Enter Email" keyboardType="email-address" onChangeText={setEmail} />

      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Enter Password" secureTextEntry={!passwordVisible} onChangeText={setPassword} />
        <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setPasswordVisible(!passwordVisible)} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("./signup")}>
        <Text style={styles.linkText}>Don't have an account? Create One</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5", paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: "bold", color: "#1E3050" },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  input: { width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 10 },
  passwordContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", borderRadius: 10, width: "100%", paddingHorizontal: 10, marginBottom: 10 },
  passwordInput: { flex: 1, padding: 15 },
  button: { backgroundColor: "#007BFF", padding: 15, borderRadius: 10, width: "100%", alignItems: "center", marginBottom: 15 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  linkText: { fontSize: 14, color: "#007BFF", marginTop: 10 },
});
