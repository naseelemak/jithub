import React, { useState, useEffect } from "react";
import { styles } from "./home.styles";
import { View, Text, Animated, TextInput, Button } from "react-native";
import { useAxiosGet } from "../../hooks/http-request";
import Icon from "@expo/vector-icons/FontAwesome";

// other component imports //
import RepoList from "../../components/repo-list/repo-list.component";

// TODO:
// 1. Make a better header
// 2. Add back to top button

export default function Home({ navigation }) {
  const [repoData, setRepoData] = useState([]);
  const [page, setPage] = useState(1);

  const url = `https://api.github.com/users/react-native-community/repos?per_page=${3}&page=${page}`;

  let repos = useAxiosGet(url);
  let newRepos = repos.data;
  let content = null;

  // display error message if data retrieval fails
  // - Find out if you can add pull down to refresh functionality
  if (repos.error) {
    content = (
      <p className="flex justify-center mt-3">
        There was an error. Please relaunch app or try again later.
      </p>
    );
  }

  useEffect(() => {
    setRepoData((prevRepoData) => {
      return prevRepoData.concat(newRepos);
    });
  }, [newRepos]);

  return (
    <View style={styles.container}>
      {/* Repo search bar */}
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

        {/* Repo search results */}
        <RepoList
          repoData={repoData}
          isLoading={repos.loading}
          setPage={setPage}
          navigation={navigation}
        />
      </View>
    </View>
  );
}
