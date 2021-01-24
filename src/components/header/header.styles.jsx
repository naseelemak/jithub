import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24292e",
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
    fontFamily: "RobotoBold",
  },
  icon: {
    position: "absolute",
    left: 0,
    color: "#fff",
  },
});

export default styles;
