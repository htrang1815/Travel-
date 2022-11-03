// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvGbbh0Ao-2GVcrVwjWfBcl7zPNBWs1zI",
  authDomain: "travel-fe3f6.firebaseapp.com",
  projectId: "travel-fe3f6",
  storageBucket: "travel-fe3f6.appspot.com",
  messagingSenderId: "760131011616",
  appId: "1:760131011616:web:00d2dff594e8729e3ae845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage, auth };
