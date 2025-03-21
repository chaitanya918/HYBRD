import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

// Import Workout Images
import YogaImage from "../../assets/images/yoga.jpg";
import HiitImage from "../../assets/images/hiit.jpg";

export default function ScheduleWorkoutScreen() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [workouts, setWorkouts] = useState([
    { id: "yoga", title: "Yoga Class", time: "XX/XX/XXXX, 7 AM", image: YogaImage },
    { id: "hiit", title: "HIIT Session", time: "XX/XX/XXXX, 6:30 PM", image: HiitImage },
  ]);

  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
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
        <Text style={styles.title}>Schedule Workout</Text>
        <Text style={styles.subTitle}>Date and Time Chooser</Text>

        {/* Date Picker */}
        <View style={styles.datePickerContainer}>
          <TextInput style={styles.dateInput} value={date.toLocaleDateString()} editable={false} />
          <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
            <FontAwesome5 name="calendar-alt" size={20} color="#1E3050" />
          </TouchableOpacity>
        </View>

        {showPicker && <DateTimePicker value={date} mode="date" display="default" onChange={onChange} />}

        {/* Schedule Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.buttonOutlineText}>Add Reminder</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Workouts */}
        <Text style={styles.sectionHeader}>Upcoming Workouts</Text>
        {workouts.map((workout) => (
          <View key={workout.id} style={styles.workoutCard}>
            <Image source={workout.image} style={styles.workoutImage} />
            <View>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <Text style={styles.workoutDetails}>{workout.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Styles
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

  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  subTitle: { fontSize: 16, textAlign: "center", color: "gray", marginBottom: 15 },

  // Date Picker
  datePickerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  dateInput: { width: "60%", padding: 12, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, textAlign: "center", backgroundColor: "#fff" },
  dateButton: { padding: 10, marginLeft: 10, backgroundColor: "#ddd", borderRadius: 10 },

  // Buttons
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  button: { backgroundColor: "#007BFF", padding: 12, borderRadius: 10, alignItems: "center", flex: 1, marginRight: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  buttonOutline: { borderWidth: 2, borderColor: "#007BFF", padding: 12, borderRadius: 10, alignItems: "center", flex: 1 },
  buttonOutlineText: { color: "#007BFF", fontSize: 16, fontWeight: "bold" },

  // Section Header
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  // Workout List
  workoutCard: { flexDirection: "row", backgroundColor: "#fff", padding: 12, borderRadius: 10, alignItems: "center", marginBottom: 12, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  workoutImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  workoutTitle: { fontSize: 16, fontWeight: "bold" },
  workoutDetails: { fontSize: 14, color: "gray" },
});
