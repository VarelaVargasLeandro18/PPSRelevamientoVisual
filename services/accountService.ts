import firebase from '../utils/firebase';

export const logIn = ( email : string, password : string ) => {
    return firebase.auth().signInWithEmailAndPassword( email, password );
}

export const register = ( email : string, password : string ) => {
    return firebase.auth().createUserWithEmailAndPassword( email, password );
}