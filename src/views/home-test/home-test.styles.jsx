import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    marginLeft: 20,
    fontFamily: "RobotoBold",
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },

  // == CONTENT == //
  // SEARCH BAR SECTION
  topContainer: {
    paddingHorizontal: 30,
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
    paddingHorizontal: 10,
    marginTop: 25,
  },
  searchIcon: {
    fontSize: 15,
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: "black",
  },
});

export default styles;
