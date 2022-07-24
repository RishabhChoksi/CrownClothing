// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC38vxbePBljQvD_j6x_rQ1Fuf3NWBEZ5w",
  authDomain: "crwn-db-e284f.firebaseapp.com",
  projectId: "crwn-db-e284f",
  storageBucket: "crwn-db-e284f.appspot.com",
  messagingSenderId: "350613801464",
  appId: "1:350613801464:web:bf748aac9ae65ee7f72e0d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
