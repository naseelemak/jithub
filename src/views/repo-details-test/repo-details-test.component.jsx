import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./repo-details-test.styles";
import { useAxiosGet } from "../../hooks/http-request";
import { Octicons } from "@expo/vector-icons";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { setRepoDetails } from "../../redux/repo-details/repo-details.actions";

// other component imports //
import Loader from "../../components/loader/loader.component";
import MyButton from "../../components/my-button/my-button.component";
import RepoLanguageList from "../../components/repo-details/repo-language-list/repo-language-list.component";
import RepoStatList from "../../components/repo-details/repo-stat-list/repo-stat-list.component";

export default function RepoDetailsTest({ navigation, route }) {
  const dispatch = useDispatch();
  const gitUser = useSelector((state) => state.gitUser.currentUser);
  const repoDetails = useSelector((state) => state.repoDetails.details);
  const isLoading = useSelector((state) => state.repoDetails.loading);
  const error = useSelector((state) => state.repoDetails.error);

  const repoName = route.params.repoName;
  const languageFlag = route.params.languageFlag;

  const url = `https://api.github.com/repos/${gitUser}/${repoName}`;

  useEffect(() => {
    dispatch(setRepoDetails(url));
  }, [url]);

  // Get REPO data
  // ====================================================
  const repo = useAxiosGet(url);
  // ====================================================

  let content = <Loader />;

  // set error message if data retrieval fails
  if (error) {
    content = (
      <Text style={styles.error}>
        There was an error.
        {"\n"}
        {"\n"}Please relaunch app or try again later.
      </Text>
    );
  }

  return isLoading || error ? (
    content
  ) : (
    <View style={styles.repoDetails}>
      <View style={styles.repoDetailsCard}>
        {/* HEADING */}
        <View style={styles.heading}>
          <View style={styles.title}>
            <Octicons style={styles.icon} name="repo" size={18} />
            <Text style={styles.userName} onPress={() => navigation.goBack()}>
              {gitUser}
            </Text>
            <Text>{" / "}</Text>
            <Text style={styles.repoName}>{repoName}</Text>
          </View>
          <Text style={styles.description}>{repoDetails.description}</Text>
        </View>

        <View style={styles.lineSeparator} />

        {/* STATS SECTION */}
        <RepoStatList />

        <View style={styles.lineSeparator} />

        {/* LANGUAGES SECTION */}
        <RepoLanguageList />

        <View style={styles.lineSeparator} />
      </View>

      <MyButton
        title="Back to Repositories"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
