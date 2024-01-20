import "./style.css";
import "chart.js/auto";

import { CssBaseline } from "@mui/material";
import { CheckAuth } from "./auth/checkAuth";
import { LoginKeeper } from "./auth/loginKeeper";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Users } from "./pages/users/Users";
import { Login } from "./pages/login/Login";
import { NotFound } from "./pages/404/NotFound";
import { Content } from "./pages/content/Content";
import { AddMovie } from "./pages/addContent/AddMovie";
import { AddWebSeries } from "./pages/addContent/AddWebSeries";

export const Router = () => {
  return (
    <>
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
    </>
  );
};
