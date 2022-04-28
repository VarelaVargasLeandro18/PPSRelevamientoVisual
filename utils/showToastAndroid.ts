import { ToastAndroid } from 'react-native';

export const showToastAndroid = ( message : string ) => ToastAndroid.show( message, ToastAndroid.SHORT );