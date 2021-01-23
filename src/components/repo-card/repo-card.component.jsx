import React from "react";
import { View, Text } from "react-native";
import { styles } from "./repo-card.styles";

const RepoCard = ({ name, description }) => {
  return (
    <View style={styles.repoCard}>
      <Text style={styles.repoName} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
      <Text
        style={styles.repoDescription}
        numberOfLines={3}
        ellipsizeMode="tail"
      >
        {description}
      </Text>
    </View>
  );
};

export default RepoCard;
