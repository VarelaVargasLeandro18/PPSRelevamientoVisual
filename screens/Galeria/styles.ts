import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { globalStyle } from "../../globalStyles/globalStyles";

export const styles = StyleSheet.create({
    rating: {
        backgroundColor: '#00000000'
    },
    container: {
        height: heightPercentageToDP('80%'),
        justifyContent:'center',
    },
    button: globalStyle.button,
    buttonText: globalStyle.buttonText,
    imageSliderContainer: {
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    text: {
        alignSelf: 'center',
        fontSize: 24,
        backgroundColor: '#C4C4C490'
    }
});