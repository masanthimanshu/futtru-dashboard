// Cloud Firestore Functions
export {
  numOfDocuments,
  getDocumentData,
  getMatchingData,
  getCollectionData,
} from "./cloudFirestore/getData";
export { updateDocument, updateArray } from "./cloudFirestore/updateData";
export { addDocument, createDocument } from "./cloudFirestore/setData";
export { deleteDocument } from "./cloudFirestore/deleteData";

// Authentication Functions
export {
  googleLogin,
  facebookLogin,
  anonymousLogin,
  emailPasswordLogin,
} from "./firebaseAuth/userLogin";
export { userLogout } from "./firebaseAuth/userLogout";
export { emailPasswordSignUp } from "./firebaseAuth/userSignUp";

// Cloud Storage Functions
export { uploadImage } from "./cloudStorage/UploadImage";
