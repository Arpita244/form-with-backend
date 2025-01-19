import React from "react";
import ReactDOM from "react-dom/client";  // Ensure ReactDOM is imported
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultPage from "./ResultPage";

function Arpi() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

// Get the root element
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render the Arpi component in the root element
root.render(
  <React.StrictMode>
    <Arpi />
  </React.StrictMode>
);
