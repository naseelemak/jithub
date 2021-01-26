import React, { useState, useEffect } from "react";
import styles from "./home.styles";
import { View, Text, TextInput } from "react-native";
import { useAxiosGet } from "../../hooks/http-request";
import Icon from "@expo/vector-icons/FontAwesome";

// other component imports //
import RepoList from "../../components/home/repo-list/repo-list.component";

// TODO:
// 1. Make a better header
// 2. Add back to top button if you make search bar disappear on scroll

export default function Home({ navigation }) {
  const [gitUser, setGitUser] = useState("react-native-community");
  const [repoData, setRepoData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState("");

  const url = `https://api.github.com/users/${gitUser}/repos?per_page=${6}&page=${page}`;

  let repos = useAxiosGet(url);
  let newRepos = repos.data;
  let content = null;

  // SETS ERROR MESSAGE if data retrieval fails
  // ===================================================
  // - Find out if you can add "pull down to refresh"
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
  // ===================================================

  // SETS REPO DATA
  // ===================================================
  useEffect(() => {
    setRepoData((prevRepoData) => {
      return prevRepoData.concat(newRepos);
    });
  }, [newRepos]);
  // ===================================================

  // SEARCH BAR FUNCTIONS
  // ===================================================
  const handleChange = (text) => {
    setSearchField(text);
  };
  const filteredRepos = repoData.filter((repo) =>
    repo.name.toLowerCase().includes(searchField.toLowerCase())
  );
  // ===================================================

  return (
    <View style={styles.container}>
      {/* Repo search bar */}
      <View style={styles.body}>
        <View style={styles.topContainer}>
          <Text style={styles.gitUsername}>React Native Community</Text>
          <View style={styles.searchBar}>
            <Icon style={styles.searchIcon} name="search" />
            <TextInput
              style={styles.textInput}
              placeholder="Enter repository keywords"
              onChangeText={(text) => {
                handleChange(text);
              }}
              value={searchField}
            />
          </View>
        </View>

        {/* Repo search results */}
        {repos.error ? (
          content
        ) : (
          <RepoList
            repoData={filteredRepos}
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
