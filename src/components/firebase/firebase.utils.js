import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB5sFIWWuArQSuVEvDwEbGsSwSrSe8-v-4",
  authDomain: "crwn-db-c8420.firebaseapp.com",
  databaseURL: "https://crwn-db-c8420.firebaseio.com",
  projectId: "crwn-db-c8420",
  storageBucket: "crwn-db-c8420.appspot.com",
  messagingSenderId: "585633499708",
  appId: "1:585633499708:web:468995c77c670ecbbf9139",
  measurementId: "G-M2CB01D7JK"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
