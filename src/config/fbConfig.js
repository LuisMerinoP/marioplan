// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

export const fbConfig = {
  apiKey: "AIzaSyBjd5847SFrphMYdDtXhCEef0UcziVVe0w",
    authDomain: "marioplan-403af.firebaseapp.com",
    projectId: "marioplan-403af",
    storageBucket: "marioplan-403af.appspot.com",
    messagingSenderId: "120177323085",
    appId: "1:120177323085:web:5ddaec57eceed524610004",
    measurementId: "G-JQFXXJB15Y"
};

export const reduxFirebase = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: true
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { fbConfig, reduxFirebase };