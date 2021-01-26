import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./repo-card.styles";
// import { TouchableNativeFeedback } from "react-native-gesture-handler";

// TO DO: figure out how to load specific repo detail page
const handlePress = (navigation, gitUser, repoName, languageFlag) => {
  navigation.navigate("RepoDetails", {
    gitUser: gitUser,
    repoName: repoName,
    languageFlag: languageFlag,
  });
};

const RepoCard = ({ name, description, language, navigation, gitUser }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.repoCard}
        onPress={() => {
          handlePress(navigation, gitUser, name, language);
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
    </View>
  );
};

export default RepoCard;
