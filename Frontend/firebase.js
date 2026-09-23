// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{ getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY || "AIzaSyADw1hnhPOq_QvtWSYgSzzNEVsVwRYoIX8",
  authDomain: "swad-food-delivery.firebaseapp.com",
  projectId: "swad-food-delivery",
  storageBucket: "swad-food-delivery.firebasestorage.app",
  messagingSenderId: "789336316891",
  appId: "1:789336316891:web:86061e89a191a37540e5fe"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}


