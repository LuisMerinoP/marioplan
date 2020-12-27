import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyDqoR7bF0QBRRbepPXZ5EE-KIgY5CFqs-M",
  authDomain: "marioplan-fb835.firebaseapp.com",
  projectId: "marioplan-fb835",
  storageBucket: "marioplan-fb835.appspot.com",
  messagingSenderId: "406505268345",
  appId: "1:406505268345:web:3a0cf00c5a55a3c6ac20a8",
  measurementId: "G-11F1W7Y63P"
};
// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;