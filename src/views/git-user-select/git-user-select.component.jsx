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
import Loader from "../../components/loader/loader.component";
import Error from "../../components/error/error.component";
import MyButton from "../../components/my-button/my-button.component";

export default function GitUserSelect() {
  const [page, setPage] = useState({
    perPage: 25,
    currentPage: 0,
  });
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const gitUserList = useSelector((state) => state.gitUserList.userList);
  const isLoading = useSelector((state) => state.gitUserList.loading);
  const allLoaded = useSelector((state) => state.gitUserList.allLoaded);
  const error = useSelector((state) => state.gitUserList.error);

  let content = null;

  let url = `https://api.github.com/search/users?q=${query}&per_page=${page.perPage}&page=${page.currentPage}`;

  // fetch gitUserList data from URL
  useEffect(() => {
    if (query.trim() != "") {
      dispatch(setGitUserList(url, page.perPage));
    }
  }, [page]);

  const getGitUserList = () => {
    setQuery(searchField);
    setPage((prevPage) => ({
      ...prevPage,
      currentPage: 1,
    }));
  };

  // set error message if data retrieval fails
  content = error && <Error />;

  const handleLoadMore = () => {
    console.log("Loading more!");

    !allLoaded &&
      setPage((prevPage) => ({
        ...prevPage,
        currentPage: prevPage.currentPage + 1,
      }));
  };

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

  // display loading icon when data form API is still being retrieved
  const renderFooter = () => {
    return isLoading && <Loader />;
  };

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
          autoCapitalize="none"
          placeholder="Search for any user..."
          onChangeText={(text) => {
            handleChange(text);
          }}
          onSubmitEditing={getGitUserList}
          value={searchField}
        />
      </View>

      {error ? (
        content
      ) : (
        <View style={styles.userListContainer}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={gitUserList}
            renderItem={renderItem}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.45}
            ListFooterComponent={renderFooter}
          />
        </View>
      )}
    </View>
  );
}
