import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

// other component imports //
import AppNavigator from "./src/navigation/navigator.component";
import AppLoading from "expo-app-loading";

function App() {
  const [fontsLoaded] = useFonts({
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  return fontsLoaded ? <AppNavigator /> : <AppLoading />;
}

export default App;
