import React from "react";
import styles from "./navigator.styles";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// other component imports //
import Home from "../views/home/home.component";
import RepoDetails from "../views/repo-details/repo-details.component";
import Header from "../components/header/header.component";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const stackNavigatorOptions = {
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
};

// custom header used for Home to allow for potential addition of drawer navigation
const views = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => {
        return <Header />;
      },
    },
  },
  RepoDetails: {
    screen: RepoDetails,
    navigationOptions: {
      title: "Details",
    },
  },
};

const AppNavigator = createStackNavigator(views, {
  defaultNavigationOptions: stackNavigatorOptions,
});

export default createAppContainer(AppNavigator);
