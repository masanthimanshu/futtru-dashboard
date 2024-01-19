import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvrSKCdEurL3KlHHr0HhdCzu7qqSI8bFY",
  authDomain: "read-it-f5a4e.firebaseapp.com",
  projectId: "read-it-f5a4e",
  storageBucket: "read-it-f5a4e.appspot.com",
  messagingSenderId: "485921219808",
  appId: "1:485921219808:web:1ad054c7dd3ca9544f1c85",
  measurementId: "G-NVLL4L0GJH",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
