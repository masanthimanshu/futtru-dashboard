import { db } from "../firebase";
import {
  doc,
  query,
  where,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

// Get all the data from a collection
export const getCollectionData = async (collectionName) => {
  const arr = [];
  const querySnapshot = await getDocs(collection(db, collectionName));

  querySnapshot.forEach((doc) => {
    arr.push({ docId: doc.id, ...doc.data() });
  });

  return arr;
};

// Get all the data from a document
export const getDocumentData = async (collectionName, documentName) => {
  const docRef = doc(db, collectionName, documentName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return "No document found!";
  }
};

// Get Data using a Query
export const getMatchingData = async (collectionName, key, operator, value) => {
  const arr = [];

  const dataQuery = query(
    collection(db, collectionName),
    where(key, operator, value)
  );

  const querySnapshot = await getDocs(dataQuery);

  querySnapshot.forEach((doc) => {
    arr.push({ docId: doc.id, ...doc.data() });
  });

  return arr;
};
