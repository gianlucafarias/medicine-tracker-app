// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxgCWa4QSH-duaCILCOEjDGGJWPrKUDI0",
  authDomain: "medicine-tracker-bb673.firebaseapp.com",
  projectId: "medicine-tracker-bb673",
  storageBucket: "medicine-tracker-bb673.firebasestorage.app",
  messagingSenderId: "415269485753",
  appId: "1:415269485753:web:28ff6716a7841a86b82f68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
