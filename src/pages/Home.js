import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { Button } from "../components/Button";
import { CardSkill } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Rythelle</Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#666"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 40 }]}>My skills</Text>
        {mySkills.map((skill) => (
          <CardSkill skill={skill} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 25,
    borderRadius: 10,
  },
});
