import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  repoCard: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 12,
    height: 150,
    maxHeight: 150,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFF",
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
