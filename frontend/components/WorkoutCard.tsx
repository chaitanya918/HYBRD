import { View, Text, StyleSheet } from "react-native";

export default function WorkoutCard({ title, distance }: { title: string; distance: string }) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{distance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: 150, height: 120, backgroundColor: "#fff", padding: 10, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, alignItems: "center" },
  imagePlaceholder: { width: "100%", height: 60, backgroundColor: "#ddd", borderRadius: 5, marginBottom: 5 },
  title: { fontWeight: "bold", fontSize: 16 },
  details: { color: "gray", fontSize: 14 },
});
