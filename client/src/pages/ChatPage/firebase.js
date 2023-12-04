import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "api_key",
  authDomain: "stack-verification.firebaseapp.com",
  projectId: "stack-verification",
  storageBucket: "stack-verification.appspot.com",
  messagingSenderId: "sender_id",
  appId: "app_id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)