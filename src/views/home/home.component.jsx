import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// other component imports //
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I wonder if it works now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "RobotoRegular",
    fontSize: 30,
  },
});
