import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-16913.firebaseapp.com",
  projectId: "inventory-management-16913",
  storageBucket: "inventory-management-16913.appspot.com",
  messagingSenderId: "1085184167973",
  appId: "1:1085184167973:web:9e9acb8eba78d7e8abefcc",
  measurementId: "G-47JSW70183"
};

console.log(process.env.NEXT_PUBLIC_TEST)

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app);

export { firestore };
