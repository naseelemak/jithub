import React from "react";
import { View, Text } from "react-native";
import { styles } from "./header.styles";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Hello World</Text>
  </View>
);

export default Header;
