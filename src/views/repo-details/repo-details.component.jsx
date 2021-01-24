import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./repo-details.styles";
import { Octicons } from "@expo/vector-icons";

// other component imports //
import MyButton from "../../components/my-button/my-button.component";
import RepoLanguage from "../../components/repo-details/repo-language/repo-language.component";
import RepoStat from "../../components/repo-details/repo-stat/repo-stat.component";

export default function RepoDetails({ navigation }) {
  const [stats, setStats] = useState([
    {
      id: 1,
      name: "star",
      number: 1493,
      unit: "stars",
    },
    {
      id: 2,
      name: "repo-forked",
      number: 585,
      unit: "forks",
    },
    {
      id: 3,
      name: "eye",
      number: 36,
      unit: "watchers",
    },
  ]);
  const [languages, setLanguages] = useState([
    {
      id: 1,
      name: "Java",
      percentage: "38.7%",
    },
    {
      id: 2,
      name: "Objective-C",
      percentage: "27.6%",
    },
    {
      id: 3,
      name: "TypeScript",
      percentage: "19.9%",
    },
    {
      id: 4,
      name: "JavaScript",
      percentage: "5.2%",
    },
    {
      id: 5,
      name: "Ruby",
      percentage: "4.8%",
    },
    {
      id: 6,
      name: "Starlark",
      percentage: "3.8%",
    },
  ]);

  return (
    <View style={styles.repoDetails}>
      <View style={styles.repoDetailsCard}>
        {/* HEADING SECTION */}
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
