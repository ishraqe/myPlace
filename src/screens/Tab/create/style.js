import {StyleSheet} from 'react-native';
import {
    WIDTH, 
    HEIGHT,
    appBackgroundColor,
    primaryFontColor,
    primaryFontSize
} from '../../../GlobalStyle';

const boxWidth= WIDTH - 100;
const boxHeight= HEIGHT /3;

const styles = StyleSheet.create({
    container: {
        backgroundColor: appBackgroundColor,
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    headline: {
        color: primaryFontColor,
        fontSize: primaryFontSize +12,
        marginTop: 20
    },
    cardContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eachCard: {
        height: boxHeight-10,
        width: boxWidth,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 15,
        elevation: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 120,
        width : 110
    },
    title: {
        color: primaryFontColor,
        fontSize: primaryFontSize + 10,
        marginTop: 5
    },



});

export default styles;