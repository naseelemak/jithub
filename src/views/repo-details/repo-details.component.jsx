import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./repo-details.styles";
import { Octicons } from "@expo/vector-icons";
import { useAxiosGet } from "../../hooks/http-request";

// other component imports //
import MyButton from "../../components/my-button/my-button.component";
import RepoLanguage from "../../components/repo-details/repo-language/repo-language.component";
import RepoStat from "../../components/repo-details/repo-stat/repo-stat.component";

export default function RepoDetails({ navigation }) {
  const [stats, setStats] = useState([
    // REPO STARS (stargazers_count)
    {
      id: 1,
      name: "star",
      number: 0,
      unit: "stars",
    },
    // REPO FORKS (forks_count)
    {
      id: 2,
      name: "repo-forked",
      number: 0,
      unit: "forks",
    },
    // REPO WATCHERS (subscribers_count)
    {
      id: 3,
      name: "eye",
      number: 0,
      unit: "watchers",
    },
  ]);
  const [languages, setLanguages] = useState([]);

  const gitUser = navigation.getParam("gitUser");
  const repoName = navigation.getParam("repoName");

  const url = `https://api.github.com/repos/${gitUser}/${repoName}`;

  const repo = useAxiosGet(url);
  const repoDetails = repo.data;

  // Get repo language data using the URL from the repo API request
  const repoLanguagesUrl = repoDetails.languages_url;
  const repoLanguages = useAxiosGet(repoLanguagesUrl);
  const repoLanguageDetails = repoLanguages.data;

  let content = null;

  // set error message if data retrieval fails
  // - Find out if you can add pull down to refresh functionality
  if (repo.error) {
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

  if (repo.loading) {
    content = (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    );
  }

  // SETS THE STATS
  useEffect(() => {
    const { stargazers_count, forks_count, subscribers_count } = repoDetails;

    setStats(() => [
      // REPO STARS (stargazers_count)
      {
        id: 1,
        name: "star",
        number: stargazers_count,
        unit: "stars",
      },
      // REPO FORKS (forks_count)
      {
        id: 2,
        name: "repo-forked",
        number: forks_count,
        unit: "forks",
      },
      // REPO WATCHERS (subscribers_count)
      {
        id: 3,
        name: "eye",
        number: subscribers_count,
        unit: "watchers",
      },
    ]);
  }, [repoDetails]);

  // SETS THE LANGUAGES
  // calculate total units of each language and then calculate percentage
  // useEffect(() => {
  //   let total = 0;

  //   setLanguages(() => {
  //     repoLanguageDetails.map(([language, units], index) => {
  //       total += units;

  //       return {
  //         id: index,
  //         name: "Java",
  //         percentage: "38.7%",
  //       };
  //     });
  //   });
  // }, [repoLanguageDetails]);

  return repo.error || repo.loading ? (
    content
  ) : (
    <View style={styles.repoDetails}>
      <View style={styles.repoDetailsCard}>
        {/* HEADING */}
        <View style={styles.heading}>
          <View style={styles.title}>
            <Octicons style={styles.icon} name="repo" size={18} />
            <Text
              style={styles.userName}
              onPress={() => navigation.navigate("Home")}
            >
              react-native-community
            </Text>
            <Text>{" / "}</Text>
            <Text style={styles.repoName}>
              react-native-template-typescript
            </Text>
          </View>
          <Text style={styles.description}>
            React Native command line tools
          </Text>
        </View>

        <View style={styles.lineSeparator} />

        {/* STATS SECTION */}
        <View style={styles.stats}>
          {stats.map((stat) => {
            return <RepoStat key={stat.id} {...stat} />;
          })}
        </View>

        <View style={styles.lineSeparator} />

        {/* LANGUAGES SECTION */}
        <View style={styles.languages}>
          <Text style={styles.languagesTitle}>Languages</Text>
          {languages.map((language) => {
            return <RepoLanguage key={language.id} {...language} />;
          })}
        </View>

        <View style={styles.lineSeparator} />
      </View>

      <MyButton
        title="Back to Repositories"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
