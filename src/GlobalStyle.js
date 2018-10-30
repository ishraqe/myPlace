import { Dimensions, Platform } from "react-native";

// Rochester

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
// global styles
export const borderRadius = 5;
export const margin = 16;
export const appBackgroundColor = "white";

// color pallate
export const primaryFontColor = "#494D53";
export const themeColor = "#E81C84";

// font sizes
export const primaryFontSize = 14;

// font families
export const themeFont = "Rochester";

// button opacity when pressed
export const activeOpacity = 0.6;

// navigator styles
export const navTitleStyle = {
  fontSize: 18,
  color: this.appBackgroundColor,
  fontWeight: "bold",
  textAlign: "center",
  width: "100%"
};
export const navBackButton = {
  button: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center"
  },
  icon: {
    color: themeColor,
    fontSize: primaryFontSize + 10,
    marginRight: 5
  },
  buttonText: {
    color: themeColor,
    fontSize: primaryFontSize + 1
  }
};

export const issueGradientColor = {
  green: "#7FC335",
  blur: "#2386FF",
  red: "#FF6159"
};
