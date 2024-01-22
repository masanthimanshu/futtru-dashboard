import "./style.css";
import "chart.js/auto";

import { CssBaseline } from "@mui/material";
import { CheckAuth } from "./auth/checkAuth";
import { LoginKeeper } from "./auth/loginKeeper";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Users = lazy(() => import("./pages/users/Users"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
const Content = lazy(() => import("./pages/content/Content"));
const AddMovie = lazy(() => import("./pages/addContent/AddMovie"));
const AddWebSeries = lazy(() => import("./pages/addContent/AddWebSeries"));

export const Router = () => {
  useEffect(() => {
    window.onbeforeunload = () => "";
  }, []);

  return (
    <Suspense>
      <CssBaseline />
      <Routes>
        <Route element={<LoginKeeper />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<CheckAuth />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="content">
            <Route index element={<Content />} />
            <Route path="add-movie" element={<AddMovie />} />
            <Route path="add-web-series" element={<AddWebSeries />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
