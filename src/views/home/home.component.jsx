import React from "react";
import { StyleSheet, View, Text, Animated, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// other component imports //
import Icon from "@expo/vector-icons/FontAwesome";
import { color } from "react-native-reanimated";

export default function Home() {
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.gitUsername}>React Native Community</Text>
        <View style={styles.searchBar}>
          <Icon style={styles.searchIcon} name="search" />
          <TextInput
            placeholder="Enter repository keywords"
            style={styles.textInput}
          />
        </View>
      </View>

      <View style={styles.repoList}>
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.repoCard}>
            <Text style={styles.repoName}>
              react-native-template-typescript
            </Text>
            <Text style={styles.repoDescription}>
              👾 Clean and minimalist React Native template for a quick start
              with TypeScript.
            </Text>
          </View>

          <View style={styles.repoCard}>
            <Text style={styles.repoName}>hooks</Text>
            <Text style={styles.repoDescription}>
              React Native APIs turned into React Hooks for use in functional
              React components
            </Text>
          </View>

          <View style={styles.repoCard}>
            <Text
              style={styles.repoName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              cli
            </Text>
            <Text
              style={styles.repoDescription}
              numberOfLines={4}
              ellipsizeMode="tail"
            >
              React Native command line tools. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas tempora sint velit, hic quasi
              et aperiam officia nostrum autem nisi distinctio incidunt mollitia
              a praesentium doloribus adipisci quod ipsum accusamus? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Inventore
            </Text>
          </View>

          <View style={styles.repoCard}>
            <Text style={styles.repoName}>hooks</Text>
            <Text style={styles.repoDescription}>
              React Native APIs turned into React Hooks for use in functional
              React components
            </Text>
          </View>

          <View style={styles.repoCard}>
            <Text style={styles.repoName}>hooks</Text>
            <Text style={styles.repoDescription}>
              React Native APIs turned into React Hooks for use in functional
              React components
            </Text>
          </View>

          <View style={styles.repoCard}>
            <Text style={styles.repoName}>hooks</Text>
            <Text style={styles.repoDescription}>
              React Native APIs turned into React Hooks for use in functional
              React components
            </Text>
          </View>

          <View style={styles.repoCard}>
            <Text style={styles.repoName}>hooks</Text>
            <Text style={styles.repoDescription}>
              React Native APIs turned into React Hooks for use in functional
              React components
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 40,
    marginTop: 25,
  },
  gitUsername: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "RobotoBold",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  searchIcon: {
    fontSize: 15,
  },
  textInput: {
    paddingHorizontal: 20,
    fontSize: 15,
    color: "black",
  },
  repoList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  scrollView: {
    marginRight: 0,
    marginTop: 30,
  },
  repoCard: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 12,
    height: 140,
    maxHeight: 140,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  repoName: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 5,
    color: "#0366d6",
    fontSize: 20,
    fontFamily: "RobotoBold",
  },
  repoDescription: {
    flex: 2,
    marginTop: 5,
    fontSize: 14,
    color: "#808080",
    fontFamily: "RobotoRegular",
  },
});
