import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./repo-details.styles";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// other component imports //
import MyButton from "../../components/my-button/my-button.component";

export default function RepoDetails({ navigation }) {
  return (
    <View style={styles.repoDetails}>
      <View style={styles.repoDetailsCard}>
        {/* HEADING SECTION */}
        <View style={styles.heading}>
          <View style={styles.name}>
            <Octicons style={styles.icon} name="repo" size={18} />
            <Text style={styles.userName}>react-native-community</Text>
            <Text>{" / "}</Text>
            <Text style={styles.repoName}>
              react-native-template-typescript
            </Text>
          </View>
          <Text style={styles.description}>
            React Native command line tools
          </Text>
        </View>

        {/* STATS SECTION */}
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Feather style={styles.icon} name="star" size={20} />
            <Text>{"1493"} stars</Text>
          </View>
          <View style={styles.stat}>
            <Octicons style={styles.icon} name="repo-forked" size={20} />
            <Text>{"585"} forks</Text>
          </View>
          <View style={styles.stat}>
            <Feather style={styles.icon} name="eye" size={20} />
            <Text>{"585"} watchers</Text>
          </View>
        </View>

        {/* LANGUAGES SECTION */}
        <View style={styles.languages}></View>
      </View>

      <MyButton
        title="Back to Repositories"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
