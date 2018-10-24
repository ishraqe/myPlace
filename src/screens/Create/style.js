import { StyleSheet } from "react-native";
import {
  WIDTH,
  HEIGHT,
  appBackgroundColor,
  primaryFontColor,
  primaryFontSize,
  borderRadius
} from "../../GlobalStyle";

const styles = StyleSheet.create({
  container: {
    backgroundColor: appBackgroundColor,
    height: HEIGHT,
    width: "100%",
    alignItems: "center",
    flex: 1
  },
  uploadContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linearGradient: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  uploadTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  uploadText: {
    color: "#fff",
    marginLeft: 10
  },
  imageContainer: {
    elevation: 30,
    height: "80%",
    backgroundColor: "transparent",
    justifyContent: "center",
    borderRadius: borderRadius
  },
  imagePreview: {
    width: WIDTH - 40,
    height: "100%",
    borderRadius: borderRadius
  },
  removeImage: {
    position: "absolute",
    top: 10,
    right: 10
  },
  inputContainer: {
    flex: 1.7,
    width: WIDTH - 40
  },
  Input: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8
  },
  InputIcon: {
    color: primaryFontColor,
    marginRight: 20
  },
  text: {
    color: primaryFontColor,
    fontSize: primaryFontSize + 3
  },
  title: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  description: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    height: 50
  },
  createButton: {
    position: "absolute",
    bottom: 90,
    backgroundColor: primaryFontColor,
    width: WIDTH - 40,
    height: "10%",
    borderRadius: borderRadius,
    justifyContent: "center",
    alignItems: "center"
  },
  createText: {
    color: "white",
    fontSize: primaryFontSize + 5
  },
  modalStyle: {
    height: "95%",
    width: WIDTH - 40,
    backgroundColor: "white",
    borderRadius: borderRadius
  }
});

export default styles;
