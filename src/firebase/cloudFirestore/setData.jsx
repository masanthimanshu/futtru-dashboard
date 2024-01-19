import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

// Add Document to a Collection
export const addDocument = async (collectionName, data) => {
  const res = await addDoc(collection(db, collectionName), {
    ...data,
  });

  return res;
};

// Create a Document with DocId
export const createDocument = async (collectionName, docId, data) => {
  const res = await setDoc(doc(db, collectionName, docId), {
    ...data,
  });

  return res;
};
