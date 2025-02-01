import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MobileLayout from "./pages/MobileLayout";
import FirstNews from "./pages/FirstNews";
import SecondNews from "./pages/SecondNews";
import ThirdNews from "./pages/ThirdNews";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileLayout />} />
        <Route path="/news/inclusive-design" element={<FirstNews />} />
        <Route path="/news/ux-trends-2025" element={<SecondNews />} />
        <Route path="/news/design-system-need" element={<ThirdNews />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
