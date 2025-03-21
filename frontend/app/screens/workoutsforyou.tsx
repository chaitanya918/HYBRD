import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

// Import Workout Image
import RunningImage from "../../assets/images/running.jpg";

export default function WorkoutsForYouScreen() {
  const router = useRouter();

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

        {/* Workout Image */}
        <Image source={RunningImage} style={styles.workoutImage} />

        {/* Workout Name */}
        <Text style={styles.workoutTitle}>Running</Text>
        <Text style={styles.workoutSubtitle}>5 miles</Text>

        {/* Details Section */}
        <Text style={styles.detailsHeader}>Details</Text>
        <View style={styles.detailRow}>
          <FontAwesome5 name="clock" size={18} color="#007BFF" />
          <Text style={styles.detailText}>Duration: 30 mins</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome5 name="heart" size={18} color="red" />
          <Text style={styles.detailText}>Estimated Calories Burn: 300</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome5 name="check" size={18} color="green" />
          <Text style={styles.detailText}>Required Pace: 8 min/mile</Text>
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
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5", alignItems: "center" },

  // Header
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: 10 },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { marginLeft: 5, fontSize: 16, color: "#007BFF" },

  // HYBRD Logo
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 16, fontWeight: "bold", marginLeft: 5, color: "#1E3050" },

  // Workout Image
  workoutImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },

  // Workout Titles
  workoutTitle: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  workoutSubtitle: { fontSize: 16, textAlign: "center", color: "gray", marginBottom: 20 },

  // Details Section
  detailsHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  detailRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  detailText: { fontSize: 16, marginLeft: 10 },

  // Start Button
  startButton: { backgroundColor: "#007BFF", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20, width: "80%" },
  startButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
