// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK3s7xmED-bSlBFpLhSY7DWhPzQoBSJjI",
  authDomain: "rsrafvp-4d1cc.firebaseapp.com",
  projectId: "rsrafvp-4d1cc",
  storageBucket: "rsrafvp-4d1cc.appspot.com",
  messagingSenderId: "477775298850",
  appId: "1:477775298850:web:a5f779c2616958d886257b",
  measurementId: "G-5CD7Y3P4ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);