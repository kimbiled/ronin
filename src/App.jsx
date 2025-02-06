import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreloaderDesktop from "./pages/PreloaderDesktop";
import Preloader from "./pages/Preloader";

import MobileLayout from "./pages/MobileLayout";
import DesktopLayout from "./pages/DesktopLayout";
import FirstNews from "./pages/FirstNews";
import SecondNews from "./pages/SecondNews";
import ThirdNews from "./pages/ThirdNews";
import NotFound from "./pages/NotFound";
import NotFoundDesktop from "./pages/NotFoundDesktop";
import FirstNewsDesktop from "./pages/FirstNewsDesktop";
import SecondNewsDesktop from "./pages/SecondNewsDesktop";
import ThirdNewsDesktop from "./pages/ThirdNewsDesktop";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // Имитация загрузки при навигации

    return () => clearTimeout(timer);
  }, [location.pathname]); // Срабатывает при изменении пути

  if (loading) {
    return isMobile ? <Preloader /> : <PreloaderDesktop />;
  }

  return (
    <Routes>
      <Route path="/" element={isMobile ? <MobileLayout /> : <DesktopLayout />} />
      <Route path="/news/inclusive-design" element={<FirstNews />} />
      <Route path="/news/ux-trends-2025" element={<SecondNews />} />
      <Route path="/news/design-system-need" element={<ThirdNews />} />
      <Route path="/news/desktop/inclusive-design" element={<FirstNewsDesktop />} />
      <Route path="/news/desktop/ux-trends-2025" element={<SecondNewsDesktop />} />
      <Route path="/news/desktop/design-system-need" element={<ThirdNewsDesktop />} />
      <Route path="/*" element={isMobile ? <NotFound /> : <NotFoundDesktop />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}