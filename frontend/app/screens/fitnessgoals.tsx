import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { RadioButton } from "react-native-paper";

export default function FitnessGoalsScreen() {
  const router = useRouter();
  const [gender, setGender] = useState("male");
  const [goal, setGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [trainingFrequency, setTrainingFrequency] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Fitness Goals</Text>

        {/* Basic Information */}
        <Text style={styles.label}>Basic Information</Text>
        <TextInput style={styles.input} placeholder="Enter Your Age" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Enter Your Weight (kg/lbs)" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Enter Your Height (cm/in)" keyboardType="numeric" />

        {/* Gender Selection */}
        <Text style={styles.label}>Gender</Text>
        <RadioButton.Group onValueChange={setGender} value={gender}>
          <View style={styles.radioGroup}>
            <RadioButton.Item label="Male" value="male" />
            <RadioButton.Item label="Female" value="female" />
          </View>
        </RadioButton.Group>

        {/* Fitness Goals */}
        <Text style={styles.label}>Your Goals</Text>
        <RadioButton.Group onValueChange={setGoal} value={goal}>
          {["Build Muscle", "Lose Weight", "Get Stronger", "Improve Endurance", "Stay Fit"].map((item) => (
            <RadioButton.Item key={item} label={item} value={item} />
          ))}
        </RadioButton.Group>

        {/* Activity Level */}
        <Text style={styles.label}>Activity Level</Text>
        <RadioButton.Group onValueChange={setActivityLevel} value={activityLevel}>
          {["Beginner", "Intermediate", "Advanced"].map((item) => (
            <RadioButton.Item key={item} label={item} value={item} />
          ))}
        </RadioButton.Group>

        {/* Training Frequency */}
        <Text style={styles.label}>Training Frequency</Text>
        <RadioButton.Group onValueChange={setTrainingFrequency} value={trainingFrequency}>
          {["1 - 3 days", "4 - 7 days", "7+ days"].map((item) => (
            <RadioButton.Item key={item} label={item} value={item} />
          ))}
        </RadioButton.Group>

        {/* Save Goals navigates to Home */}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Save Goals</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 15, marginBottom: 5 },
  input: { width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 10 },
  radioGroup: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  button: { backgroundColor: "#007BFF", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

