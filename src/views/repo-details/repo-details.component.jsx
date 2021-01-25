import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./repo-details.styles";
import { useAxiosGet } from "../../hooks/http-request";
import { Octicons } from "@expo/vector-icons";

// other component imports //
import Loader from "../../components/loader/loader.component";
import MyButton from "../../components/my-button/my-button.component";
import RepoLanguage from "../../components/repo-details/repo-language/repo-language.component";
import RepoStat from "../../components/repo-details/repo-stat/repo-stat.component";

export default function RepoDetails({ navigation }) {
  const [stats, setStats] = useState([]);
  const [languages, setLanguages] = useState([]);

  const gitUser = navigation.getParam("gitUser");
  const repoName = navigation.getParam("repoName");

  const url = `https://api.github.com/repos/${gitUser}/${repoName}`;

  // Get REPO data
  // ====================================================
  const repo = useAxiosGet(url);
  const repoData = repo.data;
  // ====================================================

  // Get repo LANGUAGE data using the language URL from the previous API request
  // ====================================================
  useEffect(() => {}, [repoLanguagesUrl]);
  const repoLanguagesUrl = repoData.languages_url;
  const repoLanguages = useAxiosGet(repoLanguagesUrl);
  const repoLanguageData = repoLanguages.data;

  // SETS THE STATS
  // ===================================================
  useEffect(() => {
    const { stargazers_count, forks_count, subscribers_count } = repoData;

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
  }, [repoData]);
  // ===================================================

  // SETS THE LANGUAGES
  // ===================================================
  // calculates total units of each language and then calculates the percentages
  useEffect(() => {
    const repoLanguageDetails = Object.entries(repoLanguageData).map(
      ([language, units]) => {
        return { name: language, units: units };
      }
    );

    // Gets the total quantity of language units to calculate percentage
    const totalLanguageUnits = repoLanguageDetails.reduce(
      (accumulatedQuantity, lang) => accumulatedQuantity + lang.units,
      0
    );

    const newLanguages = repoLanguageDetails.map(({ name, units }, index) => {
      let percentage = units / totalLanguageUnits;
      percentage = Math.round(percentage * 1000) / 10;

      return {
        id: index,
        name: name,
        percentage: percentage,
      };
    });

    setLanguages(newLanguages);
  }, [repoLanguageData]);
  // ===================================================

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

  // default languageList
  let languageList = (
    <View style={styles.noLanguages}>
      <Text style={styles.noLanguagesNote}>
        No programming languages detected
      </Text>
    </View>
  );

  if (languages.length > 0) {
    console.log("I ran");
    languageList = languages.map((language) => {
      return <RepoLanguage key={language.id} {...language} />;
    });
  }

  // - repoLanguages.error returns true a few times because url is undefined at first. Fix it
  // if (repo.loading || repoLanguages.loading || repoLanguages.error) {
  //   content = <Loader />;
  // }

  // find a way...
  return !(languages.length > 0) ? (
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
        <View style={styles.stats}>
          {stats.map((stat) => {
            return <RepoStat key={stat.id} {...stat} />;
          })}
        </View>

        <View style={styles.lineSeparator} />

        {/* LANGUAGES SECTION */}
        <View style={styles.languages}>
          <Text style={styles.languagesTitle}>Languages</Text>
          {languages.length > 0 ? languageList : <Loader />}
          <Text style={styles.languagesNote}>
            *percentages are rounded to the first decimal place
          </Text>
        </View>

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
