import React, { useRef } from "react";
import { useFonts } from "expo-font";

// redux imports
import { Provider } from "react-redux";
import store from "./src/redux/store";

// other component imports //
import AppNavigator from "./src/navigation/navigator.component";
import AppLoading from "expo-app-loading";

function App() {
  // const fontsFlag = useRef(0);
  const [fontsLoaded] = useFonts({
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  // fontsFlag.current += 1;
  // console.log("App.js re-render count: " + fontsFlag.current);

  return fontsLoaded ? (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  ) : (
    <AppLoading />
  );
}

export default App;
