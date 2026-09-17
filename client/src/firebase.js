// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webbuilder-ai-886b4.firebaseapp.com",
  projectId: "webbuilder-ai-886b4",
  storageBucket: "webbuilder-ai-886b4.firebasestorage.app",
  messagingSenderId: "440179129932",
  appId: "1:440179129932:web:9192d42b6075e2244c3ee9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };