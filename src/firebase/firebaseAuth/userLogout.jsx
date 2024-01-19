import { auth } from "../firebase";

// Logout users from the website
export const userLogout = async () => {
  const res = auth.signOut();

  return res;
};
