import React from "react";
import { View, Text } from "react-native";
import styles from "./repo-stat.styles";
import { Octicons } from "@expo/vector-icons";

const RepoStat = ({ name, number, unit }) => {
  return (
    <View style={styles.stat}>
      <Octicons style={styles.icon} name={name} size={20} />
      <Text style={styles.statText}>
        {number} {unit}
      </Text>
    </View>
  );
};

export default RepoStat;
