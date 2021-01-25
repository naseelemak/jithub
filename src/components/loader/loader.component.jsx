import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./loader.styles";

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="#999999" />
  </View>
);

export default Loader;
