import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MobileLayout from "./pages/MobileLayout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
