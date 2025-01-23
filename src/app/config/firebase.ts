// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2025-29bea.firebaseapp.com",
  projectId: "revents-2025-29bea",
  databaseURL:
    "https://revents-2025-29bea-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "revents-2025-29bea.firebasestorage.app",
  messagingSenderId: "350216074402",
  appId: "1:350216074402:web:4eca046e9efb77115193fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase(app);
