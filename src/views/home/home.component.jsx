import React, { useState, useEffect } from "react";
import styles from "./home.styles";
import { View, Text, TextInput } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { setGitUser } from "../../redux/gitUser/gituser.actions";
import { setRepoList } from "../../redux/repo-list/repo-list.actions";

// other component imports //
import RepoList from "../../components/home/repo-list/repo-list.component";
import Error from "../../components/error/error.component";

// TODO:
// 1. Make a better header
// 2. Add back to top button if you make search bar disappear on scroll

export default function Home() {
  const [page, setPage] = useState({
    perPage: 6,
    currentPage: 1,
  });
  const [searchField, setSearchField] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.repoList.loading);
  const error = useSelector((state) => state.repoList.error);
  const repoData = useSelector((state) => state.repoList.data);
  const gitUser = useSelector((state) => state.gitUser.currentUser);

  const url = `https://api.github.com/users/${gitUser}/repos?per_page=${page.perPage}&page=${page.currentPage}`;

  let content = null;

  // fetch repoList data from URL
  useEffect(() => {
    dispatch(setRepoList(url, page.perPage));
  }, [url]);

  // set error message if data retrieval fails
  content = error && <Error />;

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
      {/* Search bar section */}
      <View style={styles.topContainer}>
        <Text style={styles.gitUsername}>{gitUser}</Text>
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
      {error ? (
        content
      ) : (
        <RepoList
          repoData={filteredRepos}
          noRepos={
            // set noRepos to true if user has no repositories
            repoData.length < 1 ? true : false
          }
          isLoading={isLoading}
          setPage={setPage}
        />
      )}
    </View>
  );
}
