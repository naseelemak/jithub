import React from "react";
import { StyleSheet, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// other component imports //
import Home from "../views/home/home.component";
import RepoDetails from "../views/repo-details/repo-details.component";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const stackNavigatorOptions = {
  headerShown: true,
  headerTitle: "JitHub",
  headerLeft: () => <Icon style={styles.icon} name="git" color="#fff" />,
  headerRight: () => (
    <Text style={styles.repoName}>React Native Community</Text>
  ),
  headerStyle: {
    backgroundColor: "#24292e",
  },
  headerTitleStyle: {
    color: "#fff",
    marginLeft: -20,
  },
};

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: RepoDetails },
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 10,
    fontSize: 30,
  },
  repoName: {
    fontFamily: "RobotoBold",
    fontSize: 12,
    color: "#fff",
    paddingRight: 10,
  },
});

export default createAppContainer(AppNavigator);
