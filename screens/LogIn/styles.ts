import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { globalStyle } from "../../globalStyles/globalStyles";

export const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: heightPercentageToDP('60%'),
        width: widthPercentageToDP('80%'),
        backgroundColor: '#C4C4C47F',
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
    buttonLogIn: globalStyle.button,
    buttonText: globalStyle.buttonText
})