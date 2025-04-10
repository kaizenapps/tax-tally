// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgb9-TYgTbtybYmMGZYgKPYeQPBa-L6jw",
  authDomain: "tax-tally.firebaseapp.com",
  projectId: "tax-tally",
  storageBucket: "tax-tally.firebasestorage.app",
  messagingSenderId: "192708150371",
  appId: "1:192708150371:web:4febf89d78ea8609336456",
  measurementId: "G-JD91T03508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);