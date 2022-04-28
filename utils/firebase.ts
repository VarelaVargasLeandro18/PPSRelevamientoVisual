import 'firebase/compat/auth';

import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBgQ94I2dHDbG9luvwRPDgEEc9lGvtqNfk",
    authDomain: "pps---tup.firebaseapp.com",
    projectId: "pps---tup",
    storageBucket: "pps---tup.appspot.com",
    messagingSenderId: "668374734392",
    appId: "1:668374734392:web:347b2a20736d1b52b338cd"  
};
  
export default firebase.initializeApp(firebaseConfig);