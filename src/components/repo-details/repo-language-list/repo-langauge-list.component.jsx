import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./repo-language-list.styles";
import Loader from "../../loader/loader.component";
import RepoLanguage from "../repo-language/repo-language.component";

const RepoLanguageList = ({ repoLanguageData, languageFlag }) => {
  const [languages, setLanguages] = useState([]);

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
