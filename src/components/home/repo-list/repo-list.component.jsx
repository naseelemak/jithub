import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./repo-list.styles";
import { FlatList } from "react-native-gesture-handler";

// other component imports
import RepoCard from "../repo-card/repo-card.component";

// for flatList renderItem
const renderItem = (item) => {
  return <RepoCard {...item} />;
};

// for flatList to load more oneEndReached
const handleLoadMore = (setPage) => {
  setPage((prevPage) => prevPage + 1);
};

// display loading icon when data form API is still being retrieved
// ! has error when I use isLoading ternary
const renderFooter = (isLoading) => {
  return (
    isLoading && (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    )
  );
};

const RepoList = ({ repoData, isLoading, setPage }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={repoData}
        renderItem={({ item }) => {
          return renderItem(item);
        }}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => {
          handleLoadMore(setPage);
        }}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          <View style={styles.loader}>
            <ActivityIndicator />
          </View>
        }
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default RepoList;
