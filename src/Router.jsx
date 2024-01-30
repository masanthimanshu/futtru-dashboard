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
const Metadata = lazy(() => import("./pages/metadata/Metadata"));
const AddMovie = lazy(() => import("./pages/addContent/AddMovie"));
const PaymentPlans = lazy(() => import("./pages/plans/PaymentPlans"));
const AddWebSeries = lazy(() => import("./pages/addContent/AddWebSeries"));

import { FallbackScreen } from "./pages/fallback/FallbackScreen";

export const Router = () => {
  useEffect(() => {
    window.onbeforeunload = () => "";
  }, []);

  return (
    <Suspense fallback={<FallbackScreen />}>
      <CssBaseline />
      <Routes>
        <Route element={<LoginKeeper />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<CheckAuth />}>
          <Route path="home" element={<Home />} />
          <Route path="metadata" element={<Metadata />} />
          <Route path="users" element={<Users />} />
          <Route path="payment-plans" element={<PaymentPlans />} />
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
