import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHhlY_OO3Bk1EZJ-v5XNf05GclD5SGR4o",
    authDomain: "next-aol.firebaseapp.com",
    projectId: "next-aol",
    storageBucket: "next-aol.appspot.com",
    messagingSenderId: "890442068012",
    appId: "1:890442068012:web:856fe3a9264bcfe36ba189",
    measurementId: "G-J4YEFPK6EV"
  };

// Checks if there's a firebase app initialized beforehand
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }