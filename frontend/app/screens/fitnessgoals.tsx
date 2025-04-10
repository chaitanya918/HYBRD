import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { RadioButton } from "react-native-paper";

export default function FitnessGoalsScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  const [gender, setGender] = useState("male");
  const [goal, setGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [trainingFrequency, setTrainingFrequency] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const validateForm = () => {
    return (
      email &&
      age && !isNaN(parseInt(age)) &&
      weight && !isNaN(parseFloat(weight)) &&
      height && !isNaN(parseFloat(height)) &&
      gender &&
      goal &&
      activityLevel &&
      trainingFrequency
    );
  };

  const handleSaveGoals = async () => {
    if (!validateForm()) {
      Alert.alert("Incomplete Form", "Please fill out all fields before continuing.");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/details/save-goals/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          age: parseInt(age),
          weight: parseFloat(weight),
          height: parseFloat(height),
          gender,
          goal,
          activity_level: activityLevel,
          training_frequency: trainingFrequency,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert("Success", "Your fitness goals have been saved.");
        router.push("./login");
      } else {
        Alert.alert("Error", JSON.stringify(data));
      }
    } catch (err) {
      Alert.alert("Error", "Could not connect to the server.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Fitness Goals</Text>

        <Text style={styles.label}>Basic Information</Text>
        <TextInput style={styles.input} placeholder="Enter Your Age" keyboardType="numeric" onChangeText={setAge} />
        <TextInput style={styles.input} placeholder="Enter Your Weight (lbs)" keyboardType="numeric" onChangeText={setWeight} />
        <TextInput style={styles.input} placeholder="Enter Your Height (cm)" keyboardType="numeric" onChangeText={setHeight} />

        <Text style={styles.label}>Gender</Text>
        <RadioButton.Group onValueChange={setGender} value={gender}>
          <View style={styles.radioGroup}>
            <RadioButton.Item label="Male" value="male" />
            <RadioButton.Item label="Female" value="female" />
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>Your Goals</Text>
        <RadioButton.Group onValueChange={setGoal} value={goal}>
          {["Build Muscle", "Lose Weight", "Get Stronger", "Improve Endurance", "Stay Fit"].map((item) => (
            <RadioButton.Item key={item} label={item} value={item} />
          ))}
        </RadioButton.Group>

        <Text style={styles.label}>Activity Level</Text>
        <RadioButton.Group onValueChange={setActivityLevel} value={activityLevel}>
          {["Beginner", "Intermediate", "Advanced"].map((item) => (
            <RadioButton.Item key={item} label={item} value={item} />
          ))}
        </RadioButton.Group>

        <Text style={styles.label}>Training Frequency</Text>
        <RadioButton.Group onValueChange={setTrainingFrequency} value={trainingFrequency}>
          {["1 - 3 days", "4 - 7 days", "7+ days"].map((item) => (
            <RadioButton.Item key={item} label={item} value={item} />
          ))}
        </RadioButton.Group>

        <TouchableOpacity style={styles.button} onPress={handleSaveGoals}>
          <Text style={styles.buttonText}>Save Goals</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
