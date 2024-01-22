import { useRef } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar";

export const CheckAuth = () => {
  const login = useRef(false);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    login.current = true;
  }

  return login.current ? (
    <Sidebar>
      <Outlet />
    </Sidebar>
  ) : (
    <Navigate to="/" replace />
  );
};
