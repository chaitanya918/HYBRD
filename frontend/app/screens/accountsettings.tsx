import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

export default function AccountSettingsScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header with Back Button and HYBRD Logo */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <FontAwesome5 name="arrow-left" size={20} color="black" />
            <Text style={styles.backText}>Settings</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <FontAwesome5 name="h-square" size={28} color="black" />
            <Text style={styles.logoText}>HYBRD</Text>
          </View>
        </View>

        {/* Account Settings Title */}
        <Text style={styles.title}>Account Settings</Text>

        {/* Edit Profile Section */}
        <Text style={styles.sectionHeader}>Edit Profile</Text>
        <TextInput style={styles.input} placeholder="Edit Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Edit Weight" value={weight} onChangeText={setWeight} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Edit Height" value={height} onChangeText={setHeight} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Edit Age" value={age} onChangeText={setAge} keyboardType="numeric" />

        {/* Gender Selection */}
        <Text style={styles.label}>Edit Gender</Text>
        <RadioButton.Group onValueChange={setGender} value={gender}>
          <View style={styles.radioGroup}>
            <RadioButton.Item label="Male" value="male" />
            <RadioButton.Item label="Female" value="female" />
          </View>
        </RadioButton.Group>

        {/* Save / Cancel Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        {/* Change Password Section */}
        <Text style={styles.sectionHeader}>Change Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="Enter new password" secureTextEntry={!passwordVisible} value={newPassword} onChangeText={setNewPassword} />
          <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setPasswordVisible(!passwordVisible)} />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="Confirm new password" secureTextEntry={!confirmPasswordVisible} value={confirmPassword} onChangeText={setConfirmPassword} />
          <FontAwesome5 name={confirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />
        </View>

        {/* Save / Cancel Buttons for Password */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },

  // Header with Logo
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { marginLeft: 5, fontSize: 16, color: "#007BFF" },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 16, fontWeight: "bold", marginLeft: 5 },

  // Titles
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 15, marginBottom: 5 },

  // Input Fields
  input: { width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 10, backgroundColor: "#fff" },

  // Gender Selection
  radioGroup: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },

  // Buttons
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  saveButton: { backgroundColor: "#007BFF", padding: 12, borderRadius: 10, alignItems: "center", flex: 1, marginRight: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  cancelButton: { borderWidth: 2, borderColor: "#007BFF", padding: 12, borderRadius: 10, alignItems: "center", flex: 1 },
  cancelButtonText: { color: "#007BFF", fontSize: 16, fontWeight: "bold" },

  // Password Inputs
  passwordContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, backgroundColor: "#fff" },
  passwordInput: { flex: 1, padding: 15 },
});

