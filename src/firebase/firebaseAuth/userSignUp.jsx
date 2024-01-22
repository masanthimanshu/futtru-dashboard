import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// SignUp users using their Email and Password
export const emailPasswordSignUp = async (mail, pass) => {
  const res = await createUserWithEmailAndPassword(auth, mail, pass);

  return res;
};
