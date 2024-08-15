// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1uktwH8RW1dN5Kz3JDUparojEr-BUnaw",
  authDomain: "flashcardsaas-23738.firebaseapp.com",
  projectId: "flashcardsaas-23738",
  storageBucket: "flashcardsaas-23738.appspot.com",
  messagingSenderId: "391011837224",
  appId: "1:391011837224:web:6c7ca75ef63a56fc895c1d",
  measurementId: "G-6WP8DPW8VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);