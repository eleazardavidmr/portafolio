import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { More } from "./componentsPages/More.jsx";
import { Certificates } from "./componentsPages/Certificates.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/more" element={<More />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
