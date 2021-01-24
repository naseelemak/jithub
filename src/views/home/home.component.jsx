import React, { useState, useEffect } from "react";
import styles from "./home.styles";
import { View, Text, TextInput } from "react-native";
import { useAxiosGet } from "../../hooks/http-request";
import Icon from "@expo/vector-icons/FontAwesome";

// other component imports //
import RepoList from "../../components/repo-list/repo-list.component";

// TODO:
// 1. Make a better header
// 2. Add back to top button

export default function Home({ navigation }) {
  const [gitUser, setGitUser] = useState("react-native-community");
  const [repoData, setRepoData] = useState([]);
  const [page, setPage] = useState(1);

  const url = `https://api.github.com/users/${gitUser}/repos?per_page=${3}&page=${page}`;

  let repos = useAxiosGet(url);
  let newRepos = repos.data;
  let content = null;

  // set error message if data retrieval fails
  // - Find out if you can add pull down to refresh functionality
  if (repos.error) {
    content = (
      <Text
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
          paddingHorizontal: 30,
        }}
      >
        There was an error.
        {"\n"}
        {"\n"}Please relaunch app or try again later.
      </Text>
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
        {repos.error ? (
          content
        ) : (
          <RepoList
            repoData={repoData}
            isLoading={repos.loading}
            setPage={setPage}
            navigation={navigation}
            gitUser={gitUser}
          />
        )}
      </View>
    </View>
  );
}
