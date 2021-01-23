import React from "react";
import { View, Text } from "react-native";
import { styles } from "./repo-card.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

// TO DO: figure out how to load specific repo detail page
const handlePress = (navigation) => {
  navigation.navigate("RepoDetails");
};

const RepoCard = ({ name, description, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.repoCard}
      onPress={() => {
        handlePress(navigation);
      }}
    >
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
    </TouchableOpacity>
  );
};

export default RepoCard;
