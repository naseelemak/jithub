import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 25,
  },
  searchIcon: {
    position: "absolute",
    left: 20,
    fontSize: 15,
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: "black",
  },
});

export default styles;
