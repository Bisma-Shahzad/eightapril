// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqXW_p-8oRiMb9kSobAnKRePWlAcvAKWY",
    authDomain: "restaurant-777dd.firebaseapp.com",
    projectId: "restaurant-777dd",
    storageBucket: "restaurant-777dd.appspot.com",
    messagingSenderId: "370643239692",
    appId: "1:370643239692:web:9ad18f8ee52fc724857f29",
    measurementId: "G-DRE3Y4TPV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;