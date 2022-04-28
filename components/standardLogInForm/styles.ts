import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const formStyles = StyleSheet.create({
    container: {
      width: wp('90%'),
      height: hp('30%')
    }
});