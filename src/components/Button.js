import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.3}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a955",
    marginTop: 25,
    borderRadius: 10,
    alignItems: "center",
    padding: Platform.OS === "ios" ? 15 : 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
