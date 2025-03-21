import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

// Import images
import SquatImage from "../../assets/images/squat.jpg";
import PushupImage from "../../assets/images/pushup.jpg";

export default function WorkoutStatsScreen() {
  const router = useRouter();

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
        <Text style={styles.title}>Workout Statistics</Text>
        <Text style={styles.subTitle}>Well Done!</Text>
        <Text style={styles.description}>Here's your performance overview</Text>

        {/* Statistics List */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <FontAwesome5 name="fire-alt" size={40} color="#FF4500" style={styles.statIcon} />
            <View>
              <Text style={styles.statTitle}>Calories Burnt</Text>
              <Text style={styles.statDetail}>500 kcal</Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <FontAwesome5 name="clock" size={40} color="#007BFF" style={styles.statIcon} />
            <View>
              <Text style={styles.statTitle}>Time Spent</Text>
              <Text style={styles.statDetail}>45 min</Text>
            </View>
          </View>

          <Text style={styles.sectionHeader}>Exercises Completed</Text>

          <View style={styles.statCard}>
            <Image source={SquatImage} style={styles.statImage} />
            <View>
              <Text style={styles.statTitle}>Squats</Text>
              <Text style={styles.statDetail}>3 sets x 8 reps</Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <Image source={PushupImage} style={styles.statImage} />
            <View>
              <Text style={styles.statTitle}>Push-ups</Text>
              <Text style={styles.statDetail}>3 sets x 8 reps</Text>
            </View>
          </View>
        </View>

        {/* Share Stats Button */}
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share Stats</Text>
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
  subTitle: { fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#007BFF" },
  description: { fontSize: 16, textAlign: "center", color: "gray", marginBottom: 15 },

  // Statistics Container
  statsContainer: { marginTop: 10 },

  // Statistics Card
  statCard: {
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
  statImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  statIcon: { marginRight: 15 },
  statTitle: { fontSize: 16, fontWeight: "bold" },
  statDetail: { fontSize: 14, color: "gray" },

  // Section Header
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  // Share Button
  shareButton: { backgroundColor: "#007BFF", padding: 12, borderRadius: 10, alignItems: "center", marginTop: 20 },
  shareButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
