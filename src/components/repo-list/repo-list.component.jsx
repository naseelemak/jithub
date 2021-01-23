import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./repo-list.styles";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

// other component imports
import RepoCard from "../../components/repo-card/repo-card.component";

// for flatList renderItem
const renderItem = (item, navigation) => {
  return <RepoCard {...item} navigation={navigation} />;
};

// for flatList to load more oneEndReached
const handleLoadMore = (setPage) => {
  setPage((prevPage) => prevPage + 1);
};

// display loading icon when data form API is still being retrieved
const renderFooter = (isLoading) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator />
    </View>
  );
};

const RepoList = ({ repoData, isLoading, setPage, navigation }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={repoData}
        renderItem={({ item }) => {
          return renderItem(item, navigation);
        }}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => {
          handleLoadMore(setPage);
        }}
        onEndReachedThreshold={0.5}
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
