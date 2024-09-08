import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ParallaxProvider>
        <Routes>
          <Route path="/candor.it/*" element={<App />} />
        </Routes>
      </ParallaxProvider>
    </Router>
  </React.StrictMode>
);
