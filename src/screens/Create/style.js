import { StyleSheet } from "react-native";
import {
  WIDTH,
  HEIGHT,
  appBackgroundColor,
  primaryFontColor,
  primaryFontSize,
  borderRadius,
  themeColor
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
    backgroundColor: primaryFontColor,
    width: WIDTH - 40,
    height: "10%",
    borderRadius: borderRadius,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  createText: {
    color: "white",
    fontSize: primaryFontSize + 5
  },
  modalStyle: {
    height: "95%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: borderRadius,
    padding: 10,
    paddingLeft: 20,
    alignItems: "flex-start"
  },
  eachCheckBox: {
    marginTop: 7,
    marginBottom: 7
  },
  chckboxLabel: {
    fontSize: primaryFontSize + 5,
    color: primaryFontColor
  },
  modalButtons: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  modalButton: {
    padding: 10,
    width: "40%",
    backgroundColor: "red",
    borderRadius: borderRadius,
    justifyContent: "center",
    alignItems: "center"
  },
  modalButtonText: {
    color: "white"
  },
  cancleButton: {
    backgroundColor: "red"
  },
  saveButton: {
    backgroundColor: "#5FBA7D"
  },
  switchContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  switchText: {
    flexDirection: "row",
    alignItems: "center"
  },
  DatePickerStyle: {
    borderBottomWidth: 0,
    width: WIDTH / 2
  }
});

export default styles;
