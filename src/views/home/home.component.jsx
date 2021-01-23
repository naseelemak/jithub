import React from "react";
import { styles } from "./home.styles";
import { View, Text, Animated, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// other component imports //
import Icon from "@expo/vector-icons/FontAwesome";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello World</Text>
      </View>

      <View style={styles.body}>
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
              <Text
                style={styles.repoName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                react-native-template-typescript
              </Text>
              <Text
                style={styles.repoDescription}
                numberOfLines={4}
                ellipsizeMode="tail"
              >
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
                et aperiam officia nostrum autem nisi distinctio incidunt
                mollitia a praesentium doloribus adipisci quod ipsum accusamus?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore
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
    </View>
  );
}
