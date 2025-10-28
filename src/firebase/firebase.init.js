// DANGER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlfYuNL5pZ9NTJZQzJB5HHC8P7muqn-U",
  authDomain: "react-firebase-auth-adbaa.firebaseapp.com",
  projectId: "react-firebase-auth-adbaa",
  storageBucket: "react-firebase-auth-adbaa.firebasestorage.app",
  messagingSenderId: "193043656978",
  appId: "1:193043656978:web:d48fefc8f3d10899ee03cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
