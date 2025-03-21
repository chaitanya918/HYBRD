import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function FitnessTestScreen() {
  const router = useRouter();

  const tests = [
    { id: "cardio", title: "Cardio Test", description: "Assess your endurance", image: require("../../assets/images/cardio.jpg") },
    { id: "strength", title: "Strength Test", description: "Evaluate your strength", image: require("../../assets/images/strength.jpg") },
    { id: "flexibility", title: "Flexibility Test", description: "Check your flexibility", image: require("../../assets/images/flexibility.jpg") },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header with Back Button and Logo */}
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
        <Text style={styles.title}>Fitness Test</Text>

        {/* Test List */}
        {tests.map((test) => (
          <View key={test.id} style={styles.testCard}>
            <Image source={test.image} style={styles.testImage} />
            <View style={styles.testDetails}>
              <Text style={styles.testTitle}>{test.title}</Text>
              <Text style={styles.testDescription}>{test.description}</Text>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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

  // HYBRD Logo
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { marginLeft: 5, fontSize: 16, fontWeight: "bold", color: "black" },

  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },

  testCard: { flexDirection: "row", backgroundColor: "#fff", padding: 10, borderRadius: 10, marginBottom: 15, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },

  testImage: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },

  testDetails: { flex: 1 },
  testTitle: { fontSize: 18, fontWeight: "bold" },
  testDescription: { fontSize: 14, color: "gray", marginBottom: 5 },

  startButton: { backgroundColor: "#007BFF", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5, alignSelf: "flex-start" },
  startButtonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
});
