import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* that uses the HTML5 history API (pushState, replaceState and the popstate event) 
  to keep your UI in sync with the URL. Without the BrowserRouter
   wrapper around <App/> the routing system is not going to work*/
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
