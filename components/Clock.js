import React, { useEffect } from "react";
import { useTime } from "react-timer-hook";
import { StyleSheet, Text, View } from "react-native";

export default function Clock({ appMode }) {
  const { minutes, hours, seconds } = useTime({ format: "24-hour" });

  return (
    <View style={styles.clock}>
      <Text
        style={{ ...styles.time, color: appMode === false ? "black" : "white" }}
      >
        {hours} :{" "}
      </Text>
      <Text
        style={{ ...styles.time, color: appMode === false ? "black" : "white" }}
      >
        {minutes} :{" "}
      </Text>
      <Text
        style={{ ...styles.time, color: appMode === false ? "black" : "white" }}
      >
        {seconds}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clock: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  time: {
    fontSize: 25,
    bottom: 10,
    fontWeight: "700",
  },
});
