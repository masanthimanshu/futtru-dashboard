import { auth } from "../firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

// SignUp users using their Email and Password
export const emailPasswordSignUp = async (mail, pass) => {
  const res = await createUserWithEmailAndPassword(auth, mail, pass);

  return res;
};

// Update Name of the User in Auth
export const updateName = async (name) => {
  const res = await updateProfile(auth.currentUser, {
    displayName: name,
  });

  return res;
};
