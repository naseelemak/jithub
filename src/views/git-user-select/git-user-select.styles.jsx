import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },

  // == CONTENT == //
  // SEARCH BAR SECTION
  topContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 25,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  searchIcon: {
    position: "absolute",
    left: 20,
    fontSize: 15,
  },
  textInput: {
    paddingHorizontal: 10,
    marginLeft: 30,
    fontSize: 15,
    color: "black",
  },

  // GIT USER LIST SECTION
  userListContainer: {
    flex: 1,
    marginVertical: 15,
  },
  listItem: {
    width: "100%",
  },
  listItemContent: {
    width: "100%",
  },
  listItemTitle: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
