// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzQjlUDLazSMsEuVHUx_FjE2b-h9g86ko",
  authDomain: "busiot-70bf5.firebaseapp.com",
  projectId: "busiot-70bf5",
  storageBucket: "busiot-70bf5.appspot.com",
  messagingSenderId: "254513066096",
  appId: "1:254513066096:web:f90b9cdfb9cbbb27d484b5",
  measurementId: "G-ZGP241SXS7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase