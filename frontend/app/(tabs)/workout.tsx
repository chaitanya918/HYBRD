import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Start Workout</Text>
      <Text style={styles.subHeader}>Choose a Pre-Set Workout or Custom Workout</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Strength</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Cardio</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Hybrid</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Custom</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subHeader: { fontSize: 16, marginBottom: 20 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" },
  button: { backgroundColor: "#007BFF", padding: 10, borderRadius: 5, margin: 5 },
  buttonText: { color: "#fff", fontSize: 14 },
});
