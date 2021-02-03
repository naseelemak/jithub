import "react-native-gesture-handler";
import React, { useRef } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// redux imports
import { Provider } from "react-redux";
import store from "./src/redux/store";

// other component imports //
import GitUserSelect from "./src/views/git-user-select/git-user-select.component";
import Home from "./src/views/home/home.component";
import RepoDetails from "./src/views/repo-details/repo-details.component";
import Header from "./src/components/header/header.component";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GitUserSelect"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#24292e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              letterSpacing: 1,
              fontFamily: "RobotoBold",
            },
          }}
        >
          <Stack.Screen
            name="GitUserSelect"
            component={GitUserSelect}
            options={{
              title: "User Select",
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => {
                return <Header />;
              },
            }}
          />
          <Stack.Screen
            name="RepoDetails"
            component={RepoDetails}
            options={{
              title: "Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  ) : (
    <AppLoading />
  );
}

export default App;
