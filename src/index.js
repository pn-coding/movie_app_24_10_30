import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyeld } from "./GlobalStyeld";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyeld />
    <Router />
  </React.StrictMode>
);
