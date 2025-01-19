// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2025.firebaseapp.com",
  projectId: "revents-2025",
  storageBucket: "revents-2025.firebasestorage.app",
  messagingSenderId: "590340266350",
  appId: "1:590340266350:web:6e5064136209cec0d9497f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
