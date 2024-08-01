import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestore, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "inventory-management-16913.firebaseapp.com",
  projectId: "inventory-management-16913",
  storageBucket: "inventory-management-16913.appspot.com",
  messagingSenderId: "1085184167973",
  appId: "1:1085184167973:web:9e9acb8eba78d7e8abefcc",
  measurementId: "G-47JSW70183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);