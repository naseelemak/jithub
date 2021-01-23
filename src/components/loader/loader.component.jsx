import React from "react";
import { View, Text } from "react-native";
import { styles } from "./loader.styles";

function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.loader}>
        <Text>Test</Text>
      </View>
    </View>
  );
}

export default Loader;
