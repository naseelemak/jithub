import React from "react";
import { styles } from "./navigator.styles";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// other component imports //
import Home from "../views/home/home.component";
import RepoDetails from "../views/repo-details/repo-details.component";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const stackNavigatorOptions = {
  headerShown: true,
  // headerTitle: "JitHub",
  // headerLeft: () => <Icon style={styles.icon} name="git" color="#fff" />,
  // headerRight: () => <Text style={styles.rightHeader}>dev</Text>,
  headerStyle: {
    backgroundColor: "#24292e",
  },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
  headerTitleStyle: {
    // marginLeft: -20,
  },
};

const views = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "JitHub",
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
