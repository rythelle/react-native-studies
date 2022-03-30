import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data ={
      id: String(new Date().getTime()),
      name: newSkill  
    }
    setMySkills((oldState) => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning!");
    } else if (currentHour >= 12 && currentHour <= 18) {
      setGreeting("Good afternoon!");
    } else {
      setGreeting("Good night!");
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Rythelle</Text>

        <Text style={styles.greetings}>{greeting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#666"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill}  activeOpacity={0.3} />

        <Text style={[styles.title, { marginVertical: 40 }]}>My skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SkillCard skill={item.name} />}
        />
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
  greetings: {
    color: "#fff",
  },
});
