import { useRef } from "react";
import { Outlet, Navigate } from "react-router-dom";

export const CheckAuth = () => {
  const login = useRef(false);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    login.current = true;
  }

  return login.current ? <Outlet /> : <Navigate to="/" replace />;
};
