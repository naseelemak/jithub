import React, { useState, useEffect } from "react";
import styles from "./git-user-select.styles";
import { View, Text, TextInput, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "@expo/vector-icons/FontAwesome";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { setGitUser } from "../../redux/gitUser/gituser.actions";
import { setGitUserList } from "../../redux/gituser-list/gituser-list.actions";

// other component imports //
import MyButton from "../../components/my-button/my-button.component";
import Error from "../../components/error/error.component";

export default function GitUserSelect() {
  const [searchField, setSearchField] = useState("");

  const dispatch = useDispatch();
  const gitUser = useSelector((state) => state.gitUser.currentUser);
  const gitUserList = useSelector((state) => state.gitUserList.userList);

  const keyExtractor = (item, index) => index.toString();

  // const query = "nasee";

  // const url = `https://api.github.com/search/users?q=${query}`;

  const getRepos = async () => {
    dispatch(setGitUserList(url));
  };

  const handleLoadMore = () => {};

  const renderItem = ({ item }) => (
    <ListItem style={styles.listItem} bottomDivider>
      <ListItem.Content style={styles.listItemContent}>
        <ListItem.Title style={styles.listItemTitle}>
          {item.login}
        </ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  const handleChange = (text) => {
    setSearchField(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon style={styles.searchIcon} name="search" />
        <TextInput
          style={styles.textInput}
          returnKeyType="search"
          placeholder="Enter repository keywords"
          onChangeText={(text) => {
            handleChange(text);
          }}
          onSubmitEditing={getRepos}
          value={searchField}
        />
      </View>
      <View style={styles.userListContainer}>
        <FlatList
          keyExtractor={keyExtractor}
          data={gitUserList}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.45}
        />
      </View>
    </View>
  );
}
