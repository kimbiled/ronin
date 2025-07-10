import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./pages/Preloader";
import PreloaderDesktop from "./pages/PreloaderDesktop";

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
import ProjectPageDesktop from "./pages/ProjectPageDesktop";
import ProjectPage from "./pages/ProjectPage";
import PrivacyDesktop from "./pages/PrivacyDesktop";
// 🔹 Предзагрузка картинок
import first from './assets/mobile/h1.png';
import second from './assets/mobile/h2.png';
import third from './assets/mobile/h3.png';
import four from './assets/mobile/h4.png';
import hero from './assets/mobile/footer.png';
import item1 from './assets/desktop/item1.png';
import item2 from './assets/desktop/item2.png';
import item3 from './assets/desktop/item3.png';
import item4 from './assets/desktop/item4.png';
import phone from './assets/mobile/phone.png';
import r1 from "./assets/desktop/r1.png";
import r2 from "./assets/desktop/r2.png";
import r3 from "./assets/desktop/r3.png";
import r4 from "./assets/desktop/r4.png";
import heros from "./assets/desktop/Hero.svg";

const preloadImages = [first, second, third, four, hero, item1, item2, item3, item4, phone, r1, r2, r3, r4, heros];
const scrollToFormSection = () => {
  const scroll = () => {
    const element = document.getElementById("form-section");
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  // Если элемента пока нет, ждем его появления
  let attempts = 0;
  const interval = setInterval(() => {
    if (document.getElementById("form-section") || attempts > 20) {
      scroll();
      clearInterval(interval);
    }
    attempts++;
  }, 100);
};

function App() {
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      sessionStorage.removeItem("scrollTo");
  
      // Ждем появления элемента
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(scrollTo);
        if (element || attempts > 20) {
          scrollToFormSection();
          clearInterval(interval);
        }
        attempts++;
      }, 100);
    }
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  const [loading, setLoading] = useState(!sessionStorage.getItem("sessionStarted"));
  const location = useLocation();
  const [videoEnded, setVideoEnded] = useState(false);

  // 🔹 Ленивая загрузка изображений
  useEffect(() => {
    document.querySelectorAll("img").forEach((img) => {
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }
    });
  }, []);

  // 🔹 Обновляем состояние мобильной версии при ресайзе
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 430);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Прелоадер ждет загрузку контента перед стартом
  useEffect(() => {
    const checkImagesLoaded = () => {
      return new Promise((resolve) => {
        let checkInterval = setInterval(() => {
          const images = document.querySelectorAll("img");
          let allLoaded = Array.from(images).every((img) => img.complete && img.naturalHeight !== 0);
          if (allLoaded) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 500);
      });
    };

    if (!sessionStorage.getItem("sessionStarted")) {
      setLoading(true);

      Promise.all([
        ...preloadImages.map((src) => new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        })),
        document.fonts ? document.fonts.ready : Promise.resolve(),
        checkImagesLoaded(),
      ]).then(() => {
       
        if (videoEnded) handlePreloaderComplete(); // ✅ Ждём завершения видео
      });
    }
  }, [videoEnded]); // ✅ Следим за концом видео

  // 🔹 Функция, вызываемая, когда видео доиграет до конца
  const handleVideoEnd = () => {
    
    setVideoEnded(true);
    if (!loading) handlePreloaderComplete(); // ✅ Если контент уже загружен, скрываем прелоадер
  };

  // 🔹 Функция скрытия прелоадера
  const handlePreloaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem("sessionStarted", "true");
  };

  if (loading) {
    return isMobile 
      ? <Preloader onComplete={handlePreloaderComplete} onVideoEnd={handleVideoEnd} /> 
      : <PreloaderDesktop onComplete={handlePreloaderComplete} onVideoEnd={handleVideoEnd} />;
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
      <Route path="/projects/:id" element={isMobile ? <ProjectPage /> : <ProjectPageDesktop />}/>
      <Route path="/privacy" element={<PrivacyDesktop />} />
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

export { scrollToFormSection };