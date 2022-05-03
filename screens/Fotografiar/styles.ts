import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { globalStyle } from "../../globalStyles/globalStyles";

export const styles = StyleSheet.create({
    button: globalStyle.button,
    buttonText: globalStyle.buttonText,
    container: {
        height: heightPercentageToDP('50%'),
        justifyContent: 'space-evenly'
    }
});