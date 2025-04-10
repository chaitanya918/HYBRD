import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://127.0.0.1:8000";

export default function AccountSettingsScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [userEmail, setUserEmail] = useState("");

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  useEffect(() => {
    const fetchEmailAndDetails = async () => {
      try {
        const email = await AsyncStorage.getItem("userEmail");
        if (!email) throw new Error("User email not found in storage");
        setUserEmail(email);

        const res = await fetch(`${API_BASE_URL}/api/details/get-goals/?email=${email}`);
        const data = await res.json();

        if (res.ok) {
          setAge(data.age.toString());
          setWeight(data.weight.toString());
          setHeight(data.height.toString());
          setGender(data.gender);
        } else {
          Alert.alert("Error", data.error || "Failed to fetch user details.");
        }
      } catch (err) {
        Alert.alert("Error", (err instanceof Error ? err.message : "An unknown error occurred") || "Could not load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmailAndDetails();
  }, []);

  const handleSaveProfile = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/details/update-goals/`, {
        method: "POST", // Use POST if backend expects it
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          age,
          weight,
          height,
          gender,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        Alert.alert("Success", "Profile updated successfully!");
      } else {
        Alert.alert("Failed", JSON.stringify(data));
      }
    } catch (err) {
      Alert.alert("Error", "Could not update profile.");
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
  
    try {
      const res = await fetch(`${API_BASE_URL}/api/users/change-password/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          new_password: newPassword,
          confirm_password: confirmPassword,
        }),
      });
  
      const data = await res.json();
      if (res.ok) {
        Alert.alert("Success", "Password changed successfully.");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        Alert.alert("Failed", data.error || "Password change failed.");
      }
    } catch (err) {
      Alert.alert("Error", "Could not update password.");
    }
  };  

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
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

        <Text style={styles.title}>Account Settings</Text>

        <Text style={styles.sectionHeader}>Edit Profile</Text>
        <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Weight (kg/lbs)" value={weight} onChangeText={setWeight} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Height (cm/in)" value={height} onChangeText={setHeight} keyboardType="numeric" />

        <Text style={styles.label}>Gender</Text>
        <RadioButton.Group onValueChange={setGender} value={gender}>
          <View style={styles.radioGroup}>
            <RadioButton.Item label="Male" value="male" />
            <RadioButton.Item label="Female" value="female" />
          </View>
        </RadioButton.Group>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>Change Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="New Password" secureTextEntry={!passwordVisible} value={newPassword} onChangeText={setNewPassword} />
          <FontAwesome5 name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setPasswordVisible(!passwordVisible)} />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="Confirm Password" secureTextEntry={!confirmPasswordVisible} value={confirmPassword} onChangeText={setConfirmPassword} />
          <FontAwesome5 name={confirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="#666" onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { marginLeft: 5, fontSize: 16, color: "#007BFF" },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 16, fontWeight: "bold", marginLeft: 5 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 15, marginBottom: 5 },
  input: { width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 10, backgroundColor: "#fff" },
  radioGroup: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  saveButton: { backgroundColor: "#007BFF", padding: 14, borderRadius: 10, alignItems: "center", marginVertical: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  passwordContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, backgroundColor: "#fff" },
  passwordInput: { flex: 1, padding: 15 },
});
