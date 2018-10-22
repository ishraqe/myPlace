import { Dimensions, Platform } from 'react-native';

// Rochester

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
// global styles
export const borderRadius = 5
export const buttonHeight = 48
export const margin = 16
export const appBackgroundColor = 'white'

// color pallate
export const primaryFontColor = '#000'
export const themeColor = '#0B9960'

// font sizes
export const primaryFontSize = 14

// font families
export const themeFont = "Rochester"

// button opacity when pressed
export const activeOpacity = 0.6

// navigator styles
export const navigatorStyles = {
  navBarTextFontFamily: themeFont,
  navBarTextFontSize: Platform.OS === 'ios' ? 22 : 24,
  topBarElevationShadowEnabled: Platform.OS === 'ios' ? false : true,
  drawUnderNavBar: false,
  navBarBackgroundColor: 'rgba(255, 255, 255, 0.9)',
  orientation: 'portrait',

  // ios only styles
  navBarNoBorder: true,
  navBarBlur: true,
  statusBarBlur: true,

  // android only styles
  navBarTitleTextCentered: true 
}