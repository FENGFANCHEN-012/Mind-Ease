import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    
    setError("");

    
    if (!username.trim() || !password.trim()) {
      setError("Please ensure all fields are filled.");
      return;
    }
    
    /*else if{username !== "user" || password !== "pass"} {
      setError("Invalid username or password.");
      return;
    }*/

    
    router.push("/(tabs)");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
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
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

     
      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>
          {error}
        </Text>
      ) : null}

      <Pressable onPress={handleLogin}>
        <Text>Log In</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/signup")} style={{ alignSelf: "center", marginBottom: 20 }}>
        <Text style={{ color: "blue" }}>Don't have an account? Sign up</Text>
      </Pressable>
    </View>
  );
}

