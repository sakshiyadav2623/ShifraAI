import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dora-ai---sy.firebaseapp.com",
  projectId: "dora-ai---sy",
  storageBucket: "dora-ai---sy.firebasestorage.app",
  messagingSenderId: "346651071502",
  appId: "1:346651071502:web:b2bd72e0d6d08ad9a1185f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

