import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function LanguagePicker({ language, setLanguage, appMode }) {
  return (
    <View style={styles.languagePicker}>
      <Picker
        selectedValue={language}
        onValueChange={(item) => setLanguage(item)}
        mode="dropdown"
        style={{ color: appMode === false ? "black" : "white" }}
      >
        <Picker.Item label="RO" value="ro" />
        <Picker.Item label="EN" value="en" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  languagePicker: {
    position: "absolute",
    top: 20,
    right: 35,
    height: 50,
    width: 100,
  },
});
