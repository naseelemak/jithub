import React from "react";
import styles from "./error.styles";
import { Text } from "react-native";

const Error = () => (
  <Text style={styles.error}>
    There was an error.
    {"\n"}
    {"\n"}Please relaunch app or try again later.
  </Text>
);

export default Error;
