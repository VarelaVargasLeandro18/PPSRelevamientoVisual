import 'firebase/compat/auth';

import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""  
};
  
export default firebase.initializeApp(firebaseConfig);