import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: heightPercentageToDP('60%'),
        width: widthPercentageToDP('80%'),
        backgroundColor: '#C4C4C47F',
        /* position: 'absolute',
        top: widthPercentageToDP('50%') */
    },
    image: {
        width: 150,
        height: 150,
        position: 'relative',
        marginHorizontal: ((widthPercentageToDP('100%') - 150) / 3),
        top: -100,
        zIndex: -1
    },
    inputTransparent: {
        backgroundColor: 'transparent'
    },
    buttonLogIn: {
        width: widthPercentageToDP('60%'),
        alignSelf: 'center',
        backgroundColor: '#D3B7547F',
    },
    buttonText: {
        fontFamily: 'LeckerliOne_400Regular',
        color: '#000000FF',
    }
})