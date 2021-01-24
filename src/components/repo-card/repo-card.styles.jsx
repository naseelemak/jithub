import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // container: {
  //   borderRadius: 10,
  //   overflow: "hidden",
  // },
  repoCard: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: "100%",
    height: 150,
    maxHeight: 150,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 12,

    // box shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // -- box shadows
  },
  repoName: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 5,
    color: "#0366d6",
    fontSize: 22,
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

export default styles;
