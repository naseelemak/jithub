import React from "react";
import { View, Text } from "react-native";
import styles from "./repo-details.styles";
import { useAxiosGet } from "../../hooks/http-request";
import { Octicons } from "@expo/vector-icons";

// redux imports
import { useSelector } from "react-redux";

// other component imports //
import Loader from "../../components/loader/loader.component";
import MyButton from "../../components/my-button/my-button.component";
import RepoLanguageList from "../../components/repo-details/repo-language-list/repo-langauge-list.component";
import RepoStatList from "../../components/repo-details/repo-stat-list/repo-stat-list.component";

export default function RepoDetails({ navigation, route }) {
  const gitUser = useSelector((state) => state.gitUser.currentUser);
  const repoName = route.params.repoName;
  const languageFlag = route.params.languageFlag;

  const url = `https://api.github.com/repos/${gitUser}/${repoName}`;

  // Get REPO data
  // ====================================================
  const repo = useAxiosGet(url);
  const repoData = repo.data;
  // ====================================================

  // Get repo LANGUAGE data using the language URL from the previous API request
  // ====================================================
  const repoLanguagesUrl = repoData.languages_url;
  const repoLanguages = useAxiosGet(repoLanguagesUrl);
  const repoLanguageData = repoLanguages.data;
  // ====================================================

  let content = <Loader />;

  // set error message if data retrieval fails
  if (repo.error) {
    content = (
      <Text style={styles.error}>
        There was an error.
        {"\n"}
        {"\n"}Please relaunch app or try again later.
      </Text>
    );
  }

  // - repoLanguages.error returns true a few times because url is undefined at first. Fix it
  if (repo.loading || repoLanguages.loading || repoLanguages.error) {
    content = <Loader />;
  }

  // find a way...
  return repo.loading || repoLanguages.loading || repoLanguages.error ? (
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
          <Text style={styles.description}>{repoData.description}</Text>
        </View>

        <View style={styles.lineSeparator} />

        {/* STATS SECTION */}
        <RepoStatList repoData={repoData} />

        <View style={styles.lineSeparator} />

        {/* LANGUAGES SECTION */}
        <RepoLanguageList
          repoLanguageData={repoLanguageData}
          languageFlag={languageFlag}
        />

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
