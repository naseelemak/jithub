import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./repo-details.styles";
import { Octicons } from "@expo/vector-icons";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { setRepoDetails } from "../../redux/repo-details/repo-details.actions";

// other component imports //
import Loader from "../../components/loader/loader.component";
import Error from "../../components/error/error.component";
import MyButton from "../../components/my-button/my-button.component";
import RepoLanguageList from "../../components/repo-details/repo-language-list/repo-language-list.component";
import RepoStatList from "../../components/repo-details/repo-stat-list/repo-stat-list.component";

export default function RepoDetails({ navigation, route }) {
  const dispatch = useDispatch();
  const gitUser = useSelector((state) => state.gitUser.currentUser);
  const repoDetails = useSelector((state) => state.repoDetails.details);
  const isLoading = useSelector((state) => state.repoDetails.loading);
  const error = useSelector((state) => state.repoDetails.error);
  const repoName = route.params.repoName;

  const url = `https://api.github.com/repos/${gitUser}/${repoName}`;

  useEffect(() => {
    dispatch(setRepoDetails(url));
  }, []);

  let content = <Loader />;

  // set loading component if isLoading
  content = isLoading && <Loader />;

  // set error message if data retrieval fails
  content = error && <Error />;

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
            <Text style={styles.repoName}>{repoDetails.name}</Text>
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
