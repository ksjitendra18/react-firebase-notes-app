import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_projectId}.firebaseapp.com`,
  projectId: `{process.env.REACT_APP_projectId}`,
  storageBucket: `${process.env.REACT_APP_projectId}-7dd1f.appspot.com`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
