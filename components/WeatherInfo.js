import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currentWeather, appMode }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.weatherInfo}>
      <Text
        style={{
          ...styles.cityName,
          color: appMode === false ? "black" : "white",
        }}
      >
        {name}
      </Text>
      <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
      <Text style={styles.textPrimary}>{Math.round(temp)}°</Text>
      <Text
        style={{
          ...styles.textSecondary,
          color: appMode === false ? "black" : "white",
        }}
      >
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cityName: {
    fontWeight: "700",
    fontSize: 30,
  },
  weatherInfo: {
    alignItems: "center",
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  weatherIcon: {
    width: 150,
    height: 150,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: "500",
  },
});
