import React from "react";
import { StyleSheet, Text, View } from "react-native";

// icons
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

// colors
import { colors } from "../utils/index";

export default function WeatherDetails({
  currentWeather,
  unitsSystem,
  language,
  appMode,
}) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: colors.BORDERD_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={{ color: appMode === false ? "black" : "white" }}>
                {language === "en" ? "Feels like:" : "Se simte ca:"}
              </Text>
              <Text
                style={{
                  ...styles.textSecondary,
                  color: appMode === false ? "black" : "white",
                }}
              >
                {Math.round(feels_like)}°
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={{ color: appMode === false ? "black" : "white" }}>
                {language === "en" ? "Humidity:" : "Umiditate:"}
              </Text>
              <Text
                style={{
                  ...styles.textSecondary,
                  color: appMode === false ? "black" : "white",
                }}
              >
                {humidity}%
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* row 2 */}
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: colors.BORDERD_COLOR,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: colors.BORDERD_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={{ color: appMode === false ? "black" : "white" }}>
                {language === "en" ? "Wind speed:" : "Viteza vantului:"}
              </Text>
              <Text
                style={{
                  ...styles.textSecondary,
                  color: appMode === false ? "black" : "white",
                }}
              >
                {windSpeed}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={{ color: appMode === false ? "black" : "white" }}>
                {language === "en" ? "Pressure:" : "Presiune:"}
              </Text>
              <Text
                style={{
                  ...styles.textSecondary,
                  color: appMode === false ? "black" : "white",
                }}
              >
                {pressure} hPa
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: colors.BORDERD_COLOR,
    borderRadius: 10,
    margin: 15,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textSecondary: {
    fontSize: 15,
    color: colors.SECONDARY_COLOR,
    fontWeight: "700",
    marginTop: 7,
  },
});
