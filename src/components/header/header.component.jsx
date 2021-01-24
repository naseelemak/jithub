import React from "react";
import { View, Text } from "react-native";
import styles from "./header.styles";
import { MaterialIcons } from "@expo/vector-icons";

const handlePress = () => {
  console.log("Drawer open!");
};

const Header = () => (
  <View style={styles.header}>
    {/* <MaterialIcons
      style={styles.icon}
      name="menu"
      size={28}
      onPress={handlePress}
    /> */}
    <View>
      <Text style={styles.headerText}>JitHub</Text>
    </View>
  </View>
);

export default Header;
