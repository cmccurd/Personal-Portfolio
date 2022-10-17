import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);