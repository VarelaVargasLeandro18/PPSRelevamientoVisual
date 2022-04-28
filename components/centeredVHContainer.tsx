import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export const GlobalContainer : React.FC<any> = ( {children} ) => {
  
  return (
    <ImageBackground source={ require( '../assets/background.jpg' ) } style={ styles.background }>
      <View style={ styles.container } >
          {children}
      </View>
    </ImageBackground>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    background: {
      width: wp('100%'),
      height: hp('100%'),
      position: 'absolute',
      bottom: 0
    }
  });