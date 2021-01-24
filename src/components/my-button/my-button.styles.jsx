import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonNormal: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fafbfc",

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
  buttonPressed: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: "#A9A9A9",
    backgroundColor: "#0366d6",
  },
  buttonTextNormal: {
    fontSize: 12,
    color: "#0366d6",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "RobotoBold",
  },
  buttonTextPressed: {
    fontSize: 12,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "RobotoBold",
  },
});

export default styles;
