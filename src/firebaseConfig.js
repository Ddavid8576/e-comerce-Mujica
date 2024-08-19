// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYoH9SjbtBvX-NKj4-UNAo0EzC3wd7mDg",
  authDomain: "my-primer-1a259.firebaseapp.com",
  projectId: "my-primer-1a259",
  storageBucket: "my-primer-1a259.appspot.com",
  messagingSenderId: "374355777378",
  appId: "1:374355777378:web:026a98f2610796af9ffe3b",
  measurementId: "G-4XDE28FYNC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
