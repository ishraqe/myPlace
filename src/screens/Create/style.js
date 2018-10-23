import {StyleSheet} from 'react-native';
import {
    WIDTH, 
    HEIGHT,
    appBackgroundColor,
    primaryFontColor,
    primaryFontSize
} from '../../GlobalStyle';



const styles = StyleSheet.create({
    container: {
        backgroundColor: appBackgroundColor,
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    uploadContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40
    },
    linearGradient: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent :'center',
        alignItems:'center'
    },  
    uploadTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadText: {
        color: '#fff',
        marginLeft: 10
    },
    inputContainer: {
        flex: 1
    }
});

export default styles;