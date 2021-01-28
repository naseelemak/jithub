import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "./repo-stat-list.styles";
import RepoStat from "../repo-stat/repo-stat.component";

// Redux imports
import { useSelector } from "react-redux";

const RepoStatList = () => {
  const [stats, setStats] = useState([]);

  const repoDetails = useSelector((state) => state.repoDetails.details);

  // SETS THE STATS
  // ===================================================
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
  // ===================================================

  return (
    <View style={styles.stats}>
      {stats.map((stat) => {
        return <RepoStat key={stat.id} {...stat} />;
      })}
    </View>
  );
};

export default RepoStatList;
