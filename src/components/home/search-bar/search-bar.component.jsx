import React, { useState } from "react";
import styles from "./search-bar.styles";
import { View, Text, TextInput } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

// redux imports

// other component imports //

export default function SearchBar({ placeholder }) {
  const [searchField, setSearchField] = useState("");

  // SEARCH BAR FUNCTIONS
  // ===================================================
  const handleChange = (text) => {
    setSearchField(text);
  };
  // const filteredRepos = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchField.toLowerCase())
  // );
  // ===================================================

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon style={styles.searchIcon} name="search" />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(text) => {
            handleChange(text);
          }}
          value={searchField}
        />
      </View>
    </View>
  );
}
