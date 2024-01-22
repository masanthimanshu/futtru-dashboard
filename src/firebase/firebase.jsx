import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDSSCNlzDzTwDH3-MvrGoeNzZIATzM058",
  authDomain: "ott-platform-18448.firebaseapp.com",
  projectId: "ott-platform-18448",
  storageBucket: "ott-platform-18448.appspot.com",
  messagingSenderId: "542928930814",
  appId: "1:542928930814:web:8798f44b3e32bc0f74e2af",
  measurementId: "G-DP7E0SVWGR",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
