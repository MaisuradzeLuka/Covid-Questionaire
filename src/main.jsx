import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContext from "./Context-API/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <AppContext>
    <App />
  </AppContext>
);
