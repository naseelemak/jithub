import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./repo-language-list.styles";
import Loader from "../../loader/loader.component";
import RepoLanguage from "../repo-language/repo-language.component";

// redux imports
import { useSelector } from "react-redux";

const RepoLanguageList = () => {
  const languages = useSelector((state) => state.repoDetails.languages);
  const languageFlag = useSelector(
    (state) => state.repoDetails.details.language
  );

  // default languageList
  let languageList = <Loader />;

  if (languageFlag === null) {
    languageList = (
      <View style={styles.noLanguages}>
        <Text style={styles.noLanguagesNote}>
          No programming languages detected
        </Text>
      </View>
    );
  }

  if (languages.length > 0) {
    languageList = languages.map((language) => {
      return <RepoLanguage key={language.id} {...language} />;
    });
  }
  // ===================================================

  return (
    <View style={styles.languages}>
      <Text style={styles.languagesTitle}>Languages</Text>
      {languageList}
      <Text style={styles.languagesNote}>
        *percentages are rounded to the first decimal place
      </Text>
    </View>
  );
};

export default RepoLanguageList;
