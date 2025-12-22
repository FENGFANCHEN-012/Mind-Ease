import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
      />

      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      <Pressable
        onPress={() => {
          console.log(username, password); 
          router.push("/(tabs)");
        }}
      >
        <Text>Log In</Text>
      </Pressable>
    </View>
  );
}


