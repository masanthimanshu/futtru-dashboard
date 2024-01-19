import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Router } from "./Router";
import { Theme } from "./Theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);
