import { useRef } from "react";
import { Outlet, Navigate } from "react-router-dom";

export const LoginKeeper = () => {
  const login = useRef(false);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    login.current = true;
  }

  return login.current ? <Navigate to="/home" replace /> : <Outlet />;
};
