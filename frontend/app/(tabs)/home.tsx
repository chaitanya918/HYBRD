import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Import Images Directly
import RunningImage from "../../assets/images/running.jpg";
import CyclingImage from "../../assets/images/cycling.jpg";
import YogaImage from "../../assets/images/yoga.jpg";
import HiitImage from "../../assets/images/hiit.jpg";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Top Bar with Logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <FontAwesome5 name="h-square" size={32} color="#1E3050" />
            <Text style={styles.logoText}>HYBRD</Text>
          </View>
        </View>

        {/* Fitness Boosters */}
        <Text style={styles.sectionHeader}>Fitness Boosters</Text>
        <View style={styles.boosterContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/screens/fitnesstest")}>
            <FontAwesome5 name="clipboard-check" size={22} color="#1E3050" />
            <Text style={styles.buttonText}>Take Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/screens/scheduleworkout")}>
            <FontAwesome5 name="dumbbell" size={22} color="#1E3050" />
            <Text style={styles.buttonText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push("/screens/workouthistory")}>
            <FontAwesome5 name="history" size={22} color="#1E3050" />
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Workouts for You */}
        <Text style={styles.sectionHeader}>Workouts for You</Text>
        <View style={styles.workouts}>
          <TouchableOpacity style={styles.workoutCard} onPress={() => router.push("/screens/workoutsforyou")}>
            <Image source={RunningImage} style={styles.workoutImage} />
            <Text style={styles.workoutTitle}>Running</Text>
            <Text style={styles.workoutDetails}>5 miles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.workoutCard}>
            <Image source={CyclingImage} style={styles.workoutImage} />
            <Text style={styles.workoutTitle}>Cycling</Text>
            <Text style={styles.workoutDetails}>10 miles</Text>
          </TouchableOpacity>
        </View>

        {/* Saved Workouts */}
        <Text style={styles.sectionHeader}>Saved Workouts</Text>
        <View style={styles.savedWorkouts}>
          <TouchableOpacity style={styles.savedWorkoutCard}>
            <Image source={YogaImage} style={styles.checkboxImage} />
            <View>
              <Text style={styles.workoutTitle}>Morning Yoga</Text>
              <Text style={styles.workoutDetails}>30 min, Beginner</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.savedWorkoutCard}>
            <Image source={HiitImage} style={styles.checkboxImage} />
            <View>
              <Text style={styles.workoutTitle}>HIIT Session</Text>
              <Text style={styles.workoutDetails}>20 min, Intermediate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
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
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1E3050",
  },

  // Fitness Boosters
  boosterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconButton: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
    color: "#1E3050",
  },

  // Workouts
  workouts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  workoutCard: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  workoutImage: {
    width: 120,
    height: 120,
    backgroundColor: "#ddd",
    borderRadius: 12,
    marginBottom: 8,
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

  // Saved Workouts
  savedWorkouts: {
    marginTop: 10,
  },
  savedWorkoutCard: {
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
  checkboxImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 10,
  },
});

