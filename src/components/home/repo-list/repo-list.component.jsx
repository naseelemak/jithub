import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./repo-list.styles";
import { FlatList } from "react-native-gesture-handler";

// Redux imports
import { useSelector } from "react-redux";

// other component imports
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

// display loading icon when data form API is still being retrieved
// ! has error when using isLoading ternary
const renderFooter = (isLoading) => {
  return isLoading && <Loader />;
};

const RepoList = ({ repoData, isLoading, setPage }) => {
  const allLoaded = useSelector((state) => state.repoList.allLoaded);

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
          !allLoaded && handleLoadMore(setPage);
        }}
        onEndReachedThreshold={0.45}
        ListFooterComponent={renderFooter(isLoading)}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default RepoList;
