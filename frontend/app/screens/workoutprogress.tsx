import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

// Import exercise images
import SquatImage from "../../assets/images/squat.jpg";
import PushupImage from "../../assets/images/pushup.jpg";
import BenchPressImage from "../../assets/images/benchpress.jpg";
import ChestFlyImage from "../../assets/images/chestflys.jpg";

export default function WorkoutProgressScreen() {
  const router = useRouter();

  // Workout progress state
  const [progress, setProgress] = useState({
    squats: 0,
    pushups: 0,
    benchpress: 0,
    chestflys: 0,
  });

  // Function to update progress
  const updateProgress = (exercise: keyof typeof progress, change: number) => {
    setProgress((prev) => ({
      ...prev,
      [exercise]: Math.max(0, prev[exercise] + change),
    }));
  };

  // List of exercises
  const exercises = [
    { id: "squats", title: "Squats", sets: 3, image: SquatImage },
    { id: "pushups", title: "Push-ups", sets: 3, image: PushupImage },
    { id: "benchpress", title: "Bench Press", sets: 4, image: BenchPressImage },
    { id: "chestflys", title: "Chest Flys", sets: 3, image: ChestFlyImage },
  ];

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
        <Text style={styles.title}>Keep Going!</Text>
        <Text style={styles.subTitle}>Track your progress as you workout</Text>

        {/* Workout Progress List */}
        {exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseCard}>
            <Image source={exercise.image} style={styles.exerciseImage} />
            <View style={styles.exerciseDetails}>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
              <Text style={styles.exerciseProgress}>
                Completed: {progress[exercise.id as keyof typeof progress]}/{exercise.sets} sets
              </Text>
            </View>
            {/* Increment/Decrement Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => updateProgress(exercise.id as keyof typeof progress, 1)}
              >
                <FontAwesome5 name="plus" size={16} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => updateProgress(exercise.id as keyof typeof progress, -1)}
              >
                <FontAwesome5 name="minus" size={16} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Pause and End Workout Buttons */}
        <TouchableOpacity style={styles.pauseButton}>
          <Text style={styles.pauseButtonText}>Pause Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.endButton} onPress={() => router.push("/screens/workoutstats")}>
          <Text style={styles.endButtonText}>End Workout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },

  // Header and Logo
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
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  subTitle: { fontSize: 16, textAlign: "center", color: "gray", marginBottom: 15 },

  // Exercise Card
  exerciseCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  exerciseImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  exerciseDetails: { flex: 1 },
  exerciseTitle: { fontSize: 16, fontWeight: "bold" },
  exerciseProgress: { fontSize: 14, color: "gray" },

  // Increment/Decrement Buttons
  buttonContainer: { flexDirection: "row" },
  controlButton: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },

  // Workout Control Buttons
  pauseButton: { backgroundColor: "#FFC107", padding: 12, borderRadius: 10, alignItems: "center", marginTop: 20 },
  pauseButtonText: { color: "#000", fontSize: 16, fontWeight: "bold" },

  endButton: { backgroundColor: "#DC3545", padding: 12, borderRadius: 10, alignItems: "center", marginTop: 10 },
  endButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

