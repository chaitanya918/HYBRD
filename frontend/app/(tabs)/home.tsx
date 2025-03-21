import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Top Right Logo (H Icon + HYBRD Text) */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <FontAwesome5 name="h-square" size={28} color="black" />
          <Text style={styles.logoText}>HYBRD</Text>
        </View>
      </View>

      {/* Fitness Boosters */}
      <Text style={styles.sectionHeader}>Fitness Boosters</Text>
      <View style={styles.boosterContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="clipboard-check" size={20} color="black" />
          <Text style={styles.buttonText}>Take Fitness Test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="dumbbell" size={20} color="black" />
          <Text style={styles.buttonText}>Schedule Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="history" size={20} color="black" />
          <Text style={styles.buttonText}>Workout History</Text>
        </TouchableOpacity>
      </View>

      {/* Workouts for You */}
      <Text style={styles.sectionHeader}>Workouts for you</Text>
      <View style={styles.workouts}>
        <View style={styles.workoutCard}>
          <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.workoutImage} />
          <Text style={styles.workoutTitle}>Running</Text>
          <Text style={styles.workoutDetails}>5 miles</Text>
        </View>
        <View style={styles.workoutCard}>
          <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.workoutImage} />
          <Text style={styles.workoutTitle}>Cycling</Text>
          <Text style={styles.workoutDetails}>10 miles</Text>
        </View>
      </View>

      {/* Saved Workouts */}
      <Text style={styles.sectionHeader}>Saved Workouts</Text>
      <View style={styles.savedWorkouts}>
        <TouchableOpacity style={styles.savedWorkoutCard}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.checkboxImage} />
          <View>
            <Text style={styles.workoutTitle}>Morning Yoga</Text>
            <Text style={styles.workoutDetails}>30 min, Beginner</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.savedWorkoutCard}>
          <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.checkboxImage} />
          <View>
            <Text style={styles.workoutTitle}>HIIT Session</Text>
            <Text style={styles.workoutDetails}>20 min, Intermediate</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 20, 
      paddingTop: 30, // Lowered the content by 10px (default was 20)
      backgroundColor: "#f8f8f8" 
    },
  
    header: { flexDirection: "row", justifyContent: "flex-end", marginBottom: 20 },
    logoContainer: { alignItems: "center" },
    logoText: { fontSize: 14, fontWeight: "bold" },
  
    sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  
    boosterContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
    iconButton: { alignItems: "center", flex: 1 },
    buttonText: { fontSize: 12, textAlign: "center", marginTop: 5 },
  
    workouts: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
    workoutCard: { alignItems: "center", flex: 1, padding: 10 },
    workoutImage: { width: 100, height: 100, backgroundColor: "#ddd", marginBottom: 5 },
    workoutTitle: { fontSize: 16, fontWeight: "bold" },
    workoutDetails: { fontSize: 14, color: "gray" },
  
    savedWorkouts: { marginTop: 10 },
    savedWorkoutCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    checkboxImage: { width: 30, height: 30, marginRight: 10 },
  });
  