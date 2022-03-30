import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps

export function Button({ ...rest }:ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}  
      {...rest}
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
