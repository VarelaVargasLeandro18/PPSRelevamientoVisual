import React, { useContext } from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { UserContext } from '../userContext';
import firebase from '../utils/firebase';


export const GlobalContainer : React.FC<any> = ( {children, navigation} ) => {
  const user = useContext(UserContext);
  
  return (
    <ImageBackground source={ require( '../assets/background.jpg' ) } style={ styles.background }>
      {(user.email && navigation) ?
        <Pressable style={ styles.logoutButton }  onPress={ () => { firebase.auth().signOut() ; user.email = "" ;navigation.navigate("LogIn") } }>
          <Image style={ styles.logoutImage } source={ require('../assets/logout.png') }/>
        </Pressable>
        : undefined
      }

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
    },
    logoutButton: {
      position: 'absolute',
      top: 50,
      right: 0,
    },
    logoutImage: {
      width: 75,
      height: 75,
    }
  });