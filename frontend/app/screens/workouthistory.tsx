import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

// Import Workout Images
import RunningImage from "../../assets/images/running.jpg";
import CyclingImage from "../../assets/images/cycling.jpg";

export default function WorkoutHistoryScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");

  const workouts = {
    "2025-03-21": [
      { id: "running", title: "Running", image: RunningImage },
      { id: "cycling", title: "Cycling", image: CyclingImage },
    ],
    "2025-03-14": [{ id: "running", title: "Running", image: RunningImage }],
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header with Back Button and HYBRD Logo */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <FontAwesome5 name="arrow-left" size={20} color="black" />
            <Text style={styles.backText}>Home</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <FontAwesome5 name="h-square" size={28} color="black" />
            <Text style={styles.logoText}>HYBRD</Text>
          </View>
        </View>

        {/* Page Title */}
        <Text style={styles.title}>Workout History</Text>

        {/* Calendar Picker */}
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "#007BFF" },
          }}
          theme={{
            selectedDayBackgroundColor: "#007BFF",
            todayTextColor: "#007BFF",
            arrowColor: "#007BFF",
          }}
          style={styles.calendar}
        />

        {/* Workouts for Selected Day */}
        <Text style={styles.sectionHeader}>Workouts on Selected Day</Text>
        {workouts[selectedDate]?.length ? (
          workouts[selectedDate].map((workout) => (
            <View key={workout.id} style={styles.workoutCard}>
              <FontAwesome5 name="running" size={30} color="#1E3050" style={styles.workoutIcon} />
              <View style={styles.workoutTextContainer}>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <TouchableOpacity style={styles.statsButton}>
                  <Text style={styles.statsButtonText}>Stats</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noWorkoutsText}>No workouts found for this day.</Text>
        )}
      </View>
    </ScrollView>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },

  // Header with Logo
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { marginLeft: 5, fontSize: 16, color: "#007BFF" },

  // HYBRD Logo
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 16, fontWeight: "bold", marginLeft: 5, color: "#1E3050" },

  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  // Calendar
  calendar: { borderRadius: 10, marginBottom: 15, backgroundColor: "#fff", elevation: 2 },

  // Workouts List
  workoutCard: { flexDirection: "row", backgroundColor: "#fff", padding: 12, borderRadius: 10, alignItems: "center", marginBottom: 12, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  workoutIcon: { marginRight: 10 },
  workoutTextContainer: { flex: 1 },
  workoutTitle: { fontSize: 16, fontWeight: "bold" },
  statsButton: { backgroundColor: "#007BFF", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, alignSelf: "flex-start", marginTop: 5 },
  statsButtonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },

  // No Workouts Text
  noWorkoutsText: { textAlign: "center", fontSize: 16, color: "gray", marginTop: 10 },
});
