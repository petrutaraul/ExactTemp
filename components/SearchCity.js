import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchCity({ setSearchCity, appMode, apiKey }) {
  const [text, setText] = useState("");

  updateCitySearch = () => {
    setSearchCity(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          ...styles.textInput,
          color: appMode === false ? "black" : "white",
          borderBottomColor: appMode === false ? "black" : "white",
        }}
        placeholder="Type here to search city"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <TouchableOpacity style={styles.searchButton}>
        <MaterialCommunityIcons
          name="map-search"
          style={{ fontSize: 30, color: appMode === false ? "black" : "white" }}
          onPress={updateCitySearch}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    bottom: 10,
  },
  textInput: {
    height: 40,
    borderBottomWidth: 2,
  },
  searchButton: {
    padding: 5,
    left: 10,
  },
});
