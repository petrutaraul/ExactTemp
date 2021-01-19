import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import * as Location from "expo-location";

const WEATHER_API_KEY = "547db0e9484c345e8c7937bb1c4ba40e";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

// colors
import { colors, darkMode } from "./utils/index";

// components
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";
import LanguagePicker from "./components/LanguagePicker";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Clock from "./components/Clock";

export default function App() {
  const { errorMessage, setErrorMessage } = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState("metric");
  const [language, setLanguage] = useState("en");
  const [appMode, setAppMode] = useState(false);

  // reload app when units or language is changing
  useEffect(() => {
    load();
  }, [unitsSystem, language]);

  async function load() {
    setCurrentWeather(null);
    setAppMode(appMode);
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Acces to location is needed to run the app");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      let weatherUrl = `${BASE_WEATHER_URL}?lat=${latitude}&units=${unitsSystem}&lon=${longitude}&lang=${language}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);

      const restul = await response.json();

      if (response.ok) {
        setCurrentWeather(restul);
      } else {
        setErrorMessage(restul.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  if (currentWeather) {
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor:
            appMode === false
              ? colors.BACKGROUND_COLOR
              : darkMode.BACKGROUND_COLOR,
        }}
      >
        <ImageBackground style={{ width: "100%", height: "100%" }}>
          <StatusBar style="auto" />
          <DarkModeSwitch setAppMode={setAppMode} appMode={appMode} />
          <View style={styles.main}>
            <UnitsPicker
              unitsSystem={unitsSystem}
              setUnitsSystem={setUnitsSystem}
              appMode={appMode}
            />
            <LanguagePicker
              language={language}
              setLanguage={setLanguage}
              appMode={appMode}
            />
            <ReloadIcon load={load} />
            <WeatherInfo currentWeather={currentWeather} appMode={appMode} />
          </View>
          <Clock appMode={appMode} />
          <WeatherDetails
            currentWeather={currentWeather}
            unitsSystem={unitsSystem}
            language={language}
            appMode={appMode}
          />
        </ImageBackground>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
