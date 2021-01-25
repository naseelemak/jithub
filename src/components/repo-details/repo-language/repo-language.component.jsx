import React from "react";
import { View, Text } from "react-native";
import styles from "./repo-language.styles";
import { Octicons } from "@expo/vector-icons";

const RepoLanguage = ({ name, percentage }) => {
  return (
    <View style={styles.language}>
      <Octicons style={styles.icon} name="primitive-dot" size={14} />
      <Text style={styles.languageName}>{name}</Text>
      <Text style={styles.languagePercentage}>{percentage}%</Text>
    </View>
  );
};

export default RepoLanguage;
