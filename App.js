import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { useFonts } from "expo-font";

// other component imports //
import AppNavigator from "./src/navigation/navigator.component";
import { AppLoading } from "expo-app-loading";

function App() {
  const [fontsLoaded] = useFonts({
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  console.log(fontsLoaded);
  // need to figure out how to use <AppLoading />
  return fontsLoaded ? <AppNavigator /> : null;
}

export default App;
