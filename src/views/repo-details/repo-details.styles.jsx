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

  // HEADING SECTION
  heading: {
    height: 80,
    marginBottom: 40,
  },
  name: {
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
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#d9dbdb",
    borderRadius: 5,
    padding: 10,
  },
  stat: {
    flexDirection: "row",
    marginRight: 20,
    marginVertical: 3,
  },

  // LANGUAGES SECTION
  languages: {
    height: "auto",
  },
});

export default styles;
