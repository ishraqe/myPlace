import { StyleSheet } from "react-native";
import {
  primaryFontColor,
  primaryFontSize,
  borderRadius,
  issueGradientColor
} from "../../GlobalStyle";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: "5%",
    paddingTop: 0,
    height: "100%"
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: primaryFontSize + 10,
    marginBottom: 15
  },
  desc: {
    color: primaryFontColor,
    fontSize: primaryFontSize,
    marginBottom: 15
  },
  imageContainer: {
    width: "100%",
    height: "35%",
    borderRadius: borderRadius,
    elevation: 20,
    marginBottom: 20
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: borderRadius
  },
  dataAndProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  date: {
    color: "#333",
    fontSize: primaryFontSize + 1
  },
  progress: {
    color: issueGradientColor.green,
    fontSize: primaryFontSize + 2
  }
});

export default styles;
