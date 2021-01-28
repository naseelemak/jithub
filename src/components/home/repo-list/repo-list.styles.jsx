import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    justifyContent: "flex-start",
  },
  loader: {
    marginTop: 10,
    alignItems: "center",
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  noRepos: {
    flex: 1,
    marginTop: 40,
  },
  noReposText: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
