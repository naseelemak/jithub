import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  repoDetails: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  repoDetailsCard: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 12,
    width: "100%",
    maxHeight: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",

    // box shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    // -- box shadows
  },

  // == CONTENT == //
  icon: {
    marginRight: 7,
    color: "#6a737d",
  },
  lineSeparator: {
    borderBottomColor: "#eaecef",
    borderBottomWidth: 1,
    margin: 10,
  },

  // HEADING SECTION
  heading: {
    height: 80,
    marginBottom: 20,
  },
  title: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    color: "#0366d6",
  },
  repoName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0366d6",
  },
  description: {
    fontFamily: "RobotoRegular",
  },

  // STATS SECTION
  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    height: "auto",
    padding: 10,
    // marginBottom: 30,
    // borderWidth: 1,
    // borderColor: "#d9dbdb",
    // borderRadius: 5,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginVertical: 3,
  },
  statText: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
  },

  // LANGUAGES SECTION
  languages: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    height: "auto",
    padding: 10,
  },
  languagesTitle: {
    width: "100%",
    marginBottom: 20,
    color: "#5e5e5e",
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
  language: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    marginRight: 20,
  },
  languageName: {
    marginRight: 7,
    fontSize: 14,
    fontFamily: "RobotoBold",
  },
  languagePercentage: {
    color: "#5e5e5e",
    fontSize: 14,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
