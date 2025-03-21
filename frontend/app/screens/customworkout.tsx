import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CustomWorkoutScreen() {
  const router = useRouter();

  // State for user selections
  const [workoutType, setWorkoutType] = useState("strength");
  const [location, setLocation] = useState("gym");
  const [duration, setDuration] = useState("30m");
  const [muscleFocus, setMuscleFocus] = useState<string[]>([]);
  const [intensity, setIntensity] = useState("");

  // List of muscle groups
  const muscleGroups = [
    "Shoulders", "Biceps", "Triceps", "Back", "Chest",
    "Abs", "Hamstrings", "Glutes", "Quadriceps",
  ];

  // Toggle muscle selection
  const handleMuscleToggle = (muscle: string) => {
    if (muscleFocus.includes(muscle)) {
      setMuscleFocus(muscleFocus.filter((item) => item !== muscle));
    } else {
      setMuscleFocus([...muscleFocus, muscle]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header with Back Button and HYBRD Logo */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <FontAwesome5 name="arrow-left" size={20} color="black" />
            <Text style={styles.backText}>Workout</Text>
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <FontAwesome5 name="h-square" size={28} color="black" />
            <Text style={styles.logoText}>HYBRD</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Custom Workout</Text>

        {/* Location Selection */}
        <Text style={styles.sectionTitle}>Location</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, location === "gym" && styles.activeButton]}
            onPress={() => setLocation("gym")}
          >
            <FontAwesome5 name="dumbbell" size={18} color="black" />
            <Text style={styles.toggleText}>Gym</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, location === "home" && styles.activeButton]}
            onPress={() => setLocation("home")}
          >
            <FontAwesome5 name="home" size={18} color="black" />
            <Text style={styles.toggleText}>Home</Text>
          </TouchableOpacity>
        </View>

        {/* Workout Type Selection */}
        <Text style={styles.sectionTitle}>Workout Type</Text>
        <View style={styles.toggleContainer}>
          {["strength", "cardio", "hybrid"].map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.toggleButton, workoutType === type && styles.activeButton]}
              onPress={() => setWorkoutType(type)}
            >
              <FontAwesome5
                name={type === "strength" ? "dumbbell" : type === "cardio" ? "running" : "flask"}
                size={18}
                color="black"
              />
              <Text style={styles.toggleText}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Time Selection */}
        <Text style={styles.sectionTitle}>Time</Text>
        <View style={styles.toggleContainer}>
          {["20m", "30m", "45m", "60m"].map((time) => (
            <TouchableOpacity
              key={time}
              style={[styles.toggleButton, duration === time && styles.activeButton]}
              onPress={() => setDuration(time)}
            >
              <FontAwesome5 name="clock" size={18} color="black" />
              <Text style={styles.toggleText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Muscle Focus Selection */}
        <Text style={styles.sectionTitle}>Muscle Focus</Text>
        <View style={styles.muscleContainer}>
          {muscleGroups.map((muscle) => (
            <TouchableOpacity
              key={muscle}
              style={[
                styles.muscleButton,
                muscleFocus.includes(muscle) && styles.activeButton,
              ]}
              onPress={() => handleMuscleToggle(muscle)}
            >
              <FontAwesome5 name="dumbbell" size={16} color="black" />
              <Text style={styles.muscleText}>{muscle}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Intensity Selection */}
        <Text style={styles.sectionTitle}>Intensity</Text>
        <View style={styles.toggleContainer}>
          {["Basic", "Moderate", "High"].map((level) => (
            <TouchableOpacity
              key={level}
              style={[styles.toggleButton, intensity === level && styles.activeButton]}
              onPress={() => setIntensity(level)}
            >
              <Text style={styles.toggleText}>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },

  // Header
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { marginLeft: 5, fontSize: 16, color: "#007BFF" },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 16, fontWeight: "bold", marginLeft: 5 },

  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },

  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  // Toggle Buttons (Location, Type, Time, Intensity)
  toggleContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  toggleButton: { flex: 1, padding: 10, backgroundColor: "#ddd", borderRadius: 8, alignItems: "center", marginHorizontal: 5 },
  activeButton: { backgroundColor: "#007BFF" },
  toggleText: { fontSize: 14, fontWeight: "bold", marginTop: 5 },

  // Muscle Group Selection
  muscleContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  muscleButton: { flexBasis: "45%", flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "#ddd", borderRadius: 8, marginBottom: 10 },
  muscleText: { marginLeft: 8, fontSize: 14, fontWeight: "bold" },

  // Start Button
  startButton: { backgroundColor: "#007BFF", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  startButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
