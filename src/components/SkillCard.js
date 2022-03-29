import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function CardSkill({ skill }) {
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={[styles.textSkill]}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonSkill: {
    alignItems: "center",
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 40,
    marginVertical: 5,
  },
});
