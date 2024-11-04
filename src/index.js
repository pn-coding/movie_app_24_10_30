import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyeld } from "./GlobalStyeld";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyeld />
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
