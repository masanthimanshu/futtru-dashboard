import { db } from "../firebase";
import { updateDoc, arrayUnion, doc, arrayRemove } from "firebase/firestore";

// Update a document to a Collection
export const updateDocument = async (collectionName, docId, data) => {
  const res = await updateDoc(doc(db, collectionName, docId), {
    ...data,
  });

  return res;
};

// Add value to an arrays of a Document
export const updateArrayAdd = async (collectionName, docId, arrName, value) => {
  try {
    await updateDoc(doc(db, collectionName, docId), {
      [arrName]: arrayUnion(value),
    });

    return "Array Updated";
  } catch (e) {
    console.log(e);
    return "Error Updating Array";
  }
};

// Remove value from an array of a Document
export const updateArrayRemove = async (collection, docId, arrName, value) => {
  try {
    await updateDoc(doc(db, collection, docId), {
      [arrName]: arrayRemove(value),
    });

    return "Array Updated";
  } catch (e) {
    console.log(e);
    return "Error Updating Array";
  }
};
