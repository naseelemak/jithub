import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "pink",
    padding: 20,
  },
  headerText: {
    marginLeft: 20,
    fontFamily: "RobotoBold",
  },
  body: {},
  topContainer: {
    paddingHorizontal: 40,
    marginTop: 25,
  },
  gitUsername: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "RobotoBold",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  searchIcon: {
    fontSize: 15,
  },
  textInput: {
    paddingHorizontal: 20,
    fontSize: 15,
    color: "black",
  },
  repoList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  scrollView: {
    marginRight: 0,
    marginTop: 30,
  },
  repoCard: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 12,
    height: 140,
    maxHeight: 140,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  repoName: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 5,
    color: "#0366d6",
    fontSize: 20,
    fontFamily: "RobotoBold",
  },
  repoDescription: {
    flex: 2,
    marginTop: 5,
    fontSize: 14,
    color: "#808080",
    fontFamily: "RobotoRegular",
  },
});
