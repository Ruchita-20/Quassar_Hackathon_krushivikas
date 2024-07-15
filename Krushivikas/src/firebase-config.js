import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { signInWithPopup } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCIaM_1ZSeoOA0i-ZTGbvZthFFz3-hjkTE",
  authDomain: "krushivikas-d52cb.firebaseapp.com",
  projectId: "krushivikas-d52cb",
  storageBucket: "krushivikas-d52cb.appspot.com",
  messagingSenderId: "166351391212",
  appId: "1:166351391212:web:b5542b9728361455b198c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const imgDB = getStorage(app);
