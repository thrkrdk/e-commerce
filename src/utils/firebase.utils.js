import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANvQobLyos4dB0QLSJP46-V2qh63DwFpg",
  authDomain: "react-e-commerce-db-b31e0.firebaseapp.com",
  projectId: "react-e-commerce-db-b31e0",
  storageBucket: "react-e-commerce-db-b31e0.appspot.com",
  messagingSenderId: "459174137600",
  appId: "1:459174137600:web:7881ea5d3890563e47ade5",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account ",
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);
