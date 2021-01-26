import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  noLanguages: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 3,
    marginRight: 20,
  },
  noLanguagesNote: {
    marginRight: 7,
    fontSize: 12,
    fontStyle: "italic",
    fontFamily: "RobotoRegular",
  },
  languagesNote: {
    width: "100%",
    marginVertical: 10,
    color: "#5e5e5e",
    fontSize: 10,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
