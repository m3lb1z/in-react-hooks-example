import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TreesProvider } from "./components/ExampleCreateContextUno/TreesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TreesProvider>
      <App />
    </TreesProvider>
  </React.StrictMode>
);
