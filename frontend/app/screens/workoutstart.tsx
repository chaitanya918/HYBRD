import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

// Placeholder Exercise Images
import SquatImage from "../../assets/images/squat.jpg";
import PushUpImage from "../../assets/images/pushup.jpg";
import BenchPressImage from "../../assets/images/benchpress.jpg";
import ChestFlyImage from "../../assets/images/chestflys.jpg";

export default function WorkoutStartScreen() {
  const router = useRouter();

  const exercises = [
    { id: "squats", name: "Squats", details: "3 sets x 8 reps", image: SquatImage },
    { id: "pushups", name: "Push-Ups", details: "3 sets x 8 reps", image: PushUpImage },
    { id: "benchpress", name: "Bench Press", details: "4 sets x 8 reps x 75 lbs", image: BenchPressImage },
    { id: "chestflys", name: "Chest Flys", details: "3 sets x 8 reps x 20 lbs", image: ChestFlyImage },
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
        <Text style={styles.title}>Full-Body Strength</Text>
        <Text style={styles.subTitle}>Boost your strength with this workout</Text>

        {/* Exercise List */}
        {exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseCard}>
            <Image source={exercise.image} style={styles.exerciseImage} />
            <View>
              <Text style={styles.exerciseTitle}>{exercise.name}</Text>
              <Text style={styles.exerciseDetails}>{exercise.details}</Text>
            </View>
          </View>
        ))}

        {/* Duration & Calories Burned */}
        <Text style={styles.summaryText}>Duration: 45 min total</Text>
        <Text style={styles.summaryText}>Estimated Calories Burn: 6xx</Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.startButton} onPress={() => router.push("/screens/workoutprogress")}>
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.adaptButton}>
          <Text style={styles.adaptButtonText}>Adapt Workout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },

  // Header
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { marginLeft: 5, fontSize: 16, color: "#007BFF" },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 16, fontWeight: "bold", marginLeft: 5 },

  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  subTitle: { fontSize: 16, textAlign: "center", color: "gray", marginBottom: 15 },

  // Exercise Cards
  exerciseCard: { flexDirection: "row", backgroundColor: "#fff", padding: 12, borderRadius: 10, alignItems: "center", marginBottom: 12, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  exerciseImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  exerciseTitle: { fontSize: 16, fontWeight: "bold" },
  exerciseDetails: { fontSize: 14, color: "gray" },

  // Summary
  summaryText: { fontSize: 16, fontWeight: "bold", textAlign: "center", marginTop: 10 },

  // Buttons
  startButton: { backgroundColor: "#007BFF", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  startButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  adaptButton: { borderWidth: 2, borderColor: "#007BFF", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10 },
  adaptButtonText: { color: "#007BFF", fontSize: 16, fontWeight: "bold" },
});
