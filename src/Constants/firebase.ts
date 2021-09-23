// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYrLcRf2Tf1VXqlWpfQQxzcrqTAsxJDfY",
  authDomain: "course-module-manager.firebaseapp.com",
  projectId: "course-module-manager",
  storageBucket: "course-module-manager.appspot.com",
  messagingSenderId: "939734043189",
  appId: "1:939734043189:web:aa218176da86e9ab377f7c",
  measurementId: "G-MVE0L9LPE3"
};

const firebaseApp: firebase.app.App = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
export default firebaseApp;
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);