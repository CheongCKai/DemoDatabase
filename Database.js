import firebase from 'firebase/app';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCSAPU4LlT_pQxWShbGmh5r2PuUUvzQOBI",
  authDomain: "fyp-sample-3f6cc.firebaseapp.com",
  projectId: "fyp-sample-3f6cc",
  storageBucket: "fyp-sample-3f6cc.appspot.com",
  messagingSenderId: "483265173025",
  appId: "1:483265173025:web:ef8f538fb51867421af560",
  measurementId: "G-GM4P6FNQ7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();