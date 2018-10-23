import { Dimensions, Platform } from 'react-native';

// Rochester

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
// global styles
export const borderRadius = 5
export const margin = 16
export const appBackgroundColor = 'white'

// color pallate
export const primaryFontColor = '#000'
export const themeColor = '#E81C84'


// font sizes
export const primaryFontSize = 14

// font families
export const themeFont = "Rochester"

// button opacity when pressed
export const activeOpacity = 0.6

// navigator styles
export const navTitleStyle = {
  fontSize: 18,
  color: this.appBackgroundColor,
  fontFamily: this.fontFamily,
  fontWeight: 'bold',
  textAlign: 'center',
  width: '100%',
  
};