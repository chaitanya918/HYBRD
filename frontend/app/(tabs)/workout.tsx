import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";


// Sample workout images (Replace with actual assets if available)
import FullBodyImage from "../../assets/images/fullbody.jpg";
import HybridImage from "../../assets/images/hybrid.jpg";
import PowerSpeedImage from "../../assets/images/power-speed.jpg";

export default function WorkoutScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Top Right Logo (H Icon + HYBRD Text) */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <FontAwesome5 name="h-square" size={32} color="#1E3050" />
            <Text style={styles.logoText}>HYBRD</Text>
          </View>
        </View>

        {/* Title and Workout Type Selection */}
        <Text style={styles.mainHeader}>Start Workout</Text>
        <Text style={styles.subHeader}>
          Choose a Pre-Set Workout or Custom Workout
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Strength</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cardio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hybrid</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/customworkout")}>
            <Text style={styles.buttonText}>Custom</Text>
          </TouchableOpacity>
        </View>

        {/* Pre-Set Workouts */}
        <Text style={styles.sectionHeader}>Pre-Set Workout for You</Text>
        <View style={styles.workoutList}>
          <TouchableOpacity style={styles.workoutCard} onPress={() => router.push("/screens/workoutstart")}>
            <Image source={FullBodyImage} style={styles.workoutImage} />
            <View>
              <Text style={styles.workoutTitle}>Full-Body Strength</Text>
              <Text style={styles.workoutDetails}>45 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.workoutCard}>
            <Image source={HybridImage} style={styles.workoutImage} />
            <View>
              <Text style={styles.workoutTitle}>Hybrid Endurance</Text>
              <Text style={styles.workoutDetails}>30 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.workoutCard}>
            <Image source={PowerSpeedImage} style={styles.workoutImage} />
            <View>
              <Text style={styles.workoutTitle}>Power & Speed</Text>
              <Text style={styles.workoutDetails}>40 min</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginTop: 10,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3050",
  },

  mainHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#1E3050",
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },

  // Workout Selection Buttons
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Pre-Set Workouts
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1E3050",
  },
  workoutList: {
    marginTop: 10,
  },
  workoutCard: {
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
  workoutImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 10,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3050",
  },
  workoutDetails: {
    fontSize: 14,
    color: "#555",
  },
});
