// import { TouchableNativeFeedback } from "react-native-gesture-handler";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./repo-card.styles";

const handlePress = (navigation, repoName) => {
  navigation.navigate("RepoDetails", {
    repoName: repoName,
  });
};

const RepoCard = ({ name, description }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.repoCard}
        onPress={() => {
          handlePress(navigation, name);
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
