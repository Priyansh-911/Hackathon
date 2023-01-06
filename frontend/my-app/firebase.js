// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQR22tPAi3XsJ3Yb-zK-NtjgmPqk8HUIk",
  authDomain: "firesignup-b43e5.firebaseapp.com",
  projectId: "firesignup-b43e5",
  storageBucket: "firesignup-b43e5.appspot.com",
  messagingSenderId: "715186086036",
  appId: "1:715186086036:web:1577a336afd4a1e9b7d481",
  measurementId: "G-F9LN8QCQ33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export{app,auth};
