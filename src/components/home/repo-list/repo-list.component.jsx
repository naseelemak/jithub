import React from "react";
import { View, Text } from "react-native";
import styles from "./repo-list.styles";
import { FlatList } from "react-native-gesture-handler";

// Redux imports
import { useSelector } from "react-redux";

// other component imports
import SearchBar from "../search-bar/search-bar.component";
import Loader from "../../loader/loader.component";
import RepoCard from "../repo-card/repo-card.component";

// for flatList renderItem
const renderItem = (item) => {
  return <RepoCard {...item} />;
};

// for flatList to load more oneEndReached
const handleLoadMore = (setPage) => {
  setPage((prevPage) => ({
    ...prevPage,
    currentPage: prevPage.currentPage + 1,
  }));
};

// search bar that scrolls with the FlatList
const renderHeader = () => {
  return <SearchBar placeholder="Enter repository keywords" />;
};

// display loading icon when data form API is still being retrieved
const renderFooter = (isLoading) => {
  return isLoading && <Loader />;
};

// to display when user has no repositories
const NoRepos = () => (
  <View style={styles.noRepos}>
    <Text style={styles.noReposText}>This user has no repositories.</Text>
  </View>
);

const RepoList = ({ repoData, noRepos, isLoading, setPage }) => {
  const allLoaded = useSelector((state) => state.repoList.allLoaded);

  return noRepos ? (
    <NoRepos />
  ) : (
    <View style={styles.flatListContainer}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={repoData}
        renderItem={({ item }) => {
          return renderItem(item);
        }}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => {
          !allLoaded && handleLoadMore(setPage);
        }}
        onEndReachedThreshold={0.45}
        // ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter(isLoading)}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default RepoList;
