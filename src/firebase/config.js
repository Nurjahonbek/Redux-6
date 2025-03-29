import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP98-e-2FnW7ggzJIFya0GVhC2uo1uf5Q",
  authDomain: "apps-25094.firebaseapp.com",
  projectId: "apps-25094",
  storageBucket: "apps-25094.firebasestorage.app",
  messagingSenderId: "198048325767",
  appId: "1:198048325767:web:e125352013b21ac8935822"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
