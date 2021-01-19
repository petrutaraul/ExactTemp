import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DarkModeSwitch({ appMode, setAppMode }) {
  const [darkMode, setDarkMode] = useState(null);

  handleSwitch = () => {
    setAppMode(!appMode);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleSwitch}
        style={{
          ...styles.buttonStyle,
          backgroundColor: appMode === false ? "white" : "black",
          borderColor: appMode === false ? "black" : "white",
        }}
        title={appMode === false ? "Light" : "Dark"}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: appMode === false ? "black" : "white",
          }}
        >
          {appMode === false ? (
            <MaterialCommunityIcons
              name="weather-sunny"
              style={{ fontSize: 30 }}
            />
          ) : (
            <MaterialCommunityIcons
              name="moon-first-quarter"
              style={{ fontSize: 30 }}
            />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    position: "absolute",
    top: 85,
    right: 20,
    padding: 5,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 40,
  },
});
