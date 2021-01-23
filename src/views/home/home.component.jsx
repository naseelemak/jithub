import React from "react";
import { styles } from "./home.styles";
import { View, Text, Animated, TextInput, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useAxiosGet } from "../../hooks/http-request";
import Icon from "@expo/vector-icons/FontAwesome";

// other component imports //
import Loader from "../../components/loader/loader.component";
import RepoCard from "../../components/repo-card/repo-card.component";

// TODO:
// 1. Make a better header
// 2. Add back to top button

export default function Home({ navigation }) {
  const url = `https://api.github.com/users/react-native-community/repos`;

  let repos = useAxiosGet(url);

  let content = null;

  const handlePress = () => {
    navigation.navigate("RepoDetails");
  };

  // display error message if data retrieval fails
  // - Find out if you can add pull down to refresh functionality
  if (repos.error) {
    content = (
      <p className="flex justify-center mt-3">
        There was an error. Please relaunch app or try again later.
      </p>
    );
  }

  // display loading icon when data form API is still being retrieved
  if (repos.loading) {
    content = <Loader />;
    // content = null;
  }

  console.log(repos.data);
  // display data if it exists
  if (repos.data) {
    content = repos.data.map((repo) => <RepoCard key={repo.id} {...repo} />);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello World</Text>
      </View>

      <View style={styles.body}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
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
            <Button title="Repo Details" onPress={handlePress} />

            <RepoCard
              name="react-native-template-typescript"
              description="👾 Clean and minimalist React Native template for a quick start with
        TypeScript."
            />

            {content}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
