import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export default styles;
