import React, { useState, useEffect } from "react";
import styles from "./home-test.styles";
import { View, Text, TextInput } from "react-native";
import { useAxiosGet } from "../../hooks/http-request";
import Icon from "@expo/vector-icons/FontAwesome";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { setGitUser } from "../../redux/gitUser/gituser.actions";
import { setRepoList } from "../../redux/repo-list/repo-list.actions";

// other component imports //
import RepoList from "../../components/home/repo-list/repo-list.component";

// TODO:
// 1. Make a better header
// 2. Add back to top button if you make search bar disappear on scroll

export default function HomeTest() {
  const dispatch = useDispatch();
  const newRepos = useSelector((state) => state.repoList.data);
  const sagaLoading = useSelector((state) => state.repoList.loading);
  const sagaError = useSelector((state) => state.repoList.error);

  useEffect(() => {
    dispatch(setRepoList());
  }, []);

  console.log(sagaLoading);

  // if (!sagaLoading) {
  //   console.log(sagaRepo[0].name);
  // }

  const [repoData, setRepoData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState("");

  // SETS GIT USER
  // ===================================================
  // might allow users to change GitHub users in the future
  // let gitUserInput = "naseelemak";
  // dispatch(setGitUser(gitUserInput));
  const gitUser = useSelector((state) => state.gitUser.currentUser);
  // ===================================================

  const url = `https://api.github.com/users/${gitUser}/repos?per_page=${6}&page=${page}`;

  // let repos = useAxiosGet(url);
  // let newRepos = repos.data;
  let content = null;

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
      <View style={styles.body}>
        {/* Search bar section */}
        <View style={styles.topContainer}>
          <Text style={styles.gitUsername}>Home-Test</Text>
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
        {sagaError ? (
          content
        ) : (
          <RepoList
            repoData={filteredRepos}
            isLoading={sagaLoading}
            setPage={setPage}
            gitUser={gitUser}
          />
        )}
      </View>
    </View>
  );
}
