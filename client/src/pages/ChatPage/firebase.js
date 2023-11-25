import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBziRTvb3BvBZrfo3mCLZAGPSfmHXyxP4I",
  authDomain: "stack-verification.firebaseapp.com",
  projectId: "stack-verification",
  storageBucket: "stack-verification.appspot.com",
  messagingSenderId: "800153300782",
  appId: "1:800153300782:web:ac0e72c9e2ff4baa3c14bf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)