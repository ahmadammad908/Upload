// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDGZiA0hL9uMjCjXLSbH3opVf0QLYeFUR8",
  authDomain: "ideas-abff8.firebaseapp.com",
  projectId: "ideas-abff8",
  storageBucket: "ideas-abff8.appspot.com",
  messagingSenderId: "89854640998",
  appId: "1:89854640998:web:7df69a234da3cfcd5e3ea7",
  measurementId: "G-5VZ9GVZ6WC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
