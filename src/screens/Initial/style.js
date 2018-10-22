import {StyleSheet} from 'react-native';
import {
    primaryFontColor,
    primaryFontSize,
    WIDTH,
    HEIGHT,
    themeFont,
    themeColor
} from '../../GlobalStyle';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    bgImage: {
        height: HEIGHT,
        width: WIDTH
    },
    mainContainer : {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName: {
        color: themeColor,
        fontSize: primaryFontSize + 30,
        fontFamily: themeFont,
        marginTop: 10
    },
    first: {
        color: '#fff'
    },
    last: {
        fontSize: primaryFontSize + 50,
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    }
  });
 
export default styles;