import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import next from '../assets/desktop/next.png'
import back from '../assets/desktop/back.png'

export default function ProjectCard({ images, logo, title, description, description2, country, tags, highlight, isMain, verified, starred, badgeImage, leftArrowImage, rightArrowImage, index}) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  
  const goPage = (index) =>{
   navigate(`/projects/${index}`)
   window.scrollTo(0, 0);
  }
  // Автоматическая смена фоток при наведении
  useEffect(() => {
    let interval;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        );
      }, 1500); // Интервал 3 секунды
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleNextImage = (e) => {
    e.stopPropagation(); // Предотвращаем всплытие события
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation(); // Предотвращаем всплытие события
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getBadgeStyles = () => {
    if (verified && (title === "p1" || title === "p2")) {
      return "font-ppneue bg-[#F7F7F6] bg-opacity-[5%] text-white border-[#FFFFFF] border-opacity-20 border-[0.5px] bg-backdrop-blur-[24px] rounded-[100px] pl-[4px] pb-[4px] pt-[4px] pr-[18px] font-book";
    } else if (verified && title === "p5") {
      return "font-ppneue bg-[#F7F7F6] bg-opacity-[70%] text-black border-[#FFFFFF] border-opacity-20 border-[0.5px] bg-backdrop-blur-[24px] rounded-[100px] pl-[4px] pb-[4px] pt-[4px] pr-[18px] font-book";
    } else if (starred && title === "p9") {
      return "font-ppneue bg-[#F7F7F6] bg-opacity-[5%] text-white border-[#FFFFFF] border-opacity-20 border-[0.5px] bg-backdrop-blur-[24px] rounded-[100px] pl-[4px] pb-[4px] pt-[4px] pr-[18px] font-medium";
    }
    return "";
  };

  return (
    <div
      className="font-ppneue relative cursor-pointer rounded-lg overflow-hidden w-full h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0); // Сброс к первой фотке при уходе курсора
      }}
    >
      {/* Затемняющий слой */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black rounded-[48px] z-10"
        onClick={ ()=>goPage(index)}
      />

      {/* Контейнер для изображений */}
      <div className="relative w-full h-auto overflow-hidden rounded-[48px]">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ position: index === 0 ? "relative" : "absolute" }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        ))}
      </div>


      {/* Анимированные элементы при наведении */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Логотип и текст в левом верхнем углу */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute top-[38px] left-[38px] flex flex-col text-white z-20"
            >
              {logo && <img src={logo} alt="Logo" className="mb-[18px]" />}
              <p className="text-lg font-book">{description}</p>
              {description2 && <p className="text-lg font-book">{description2}</p>}
            </motion.div>
            
            {/* Флаг в правом верхнем углу */}
            {country && (
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                src={country}
                alt="Country Flag"
                className="absolute top-[38px] right-[38px] z-20 w-12 h-9"
              />
            )}
            
            {/* Теги */}
            {tags && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className={`absolute bottom-[38px] left-[38px] flex ${isMain ? 'flex-row items-center' : 'flex-col'} gap-2 text-white z-20`}
              >
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="font-book text-[22px] text-[#FFFFFF] rounded-[100px] bg-backdrop-blur-[24px] bg-white bg-opacity-10 pl-[18px] pr-[18px] pt-[4px] pb-[4px]">{tag}</span>
                    {isMain && index !== tags.length - 1 && <div className="w-[2px] h-[2px] rounded-full bg-white"></div>}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Выделенный текст (например, Users или Raised) */}
            {(verified || starred) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className={`absolute bottom-[38px] right-[38px] ${getBadgeStyles()} flex items-center z-20`}
              >
                {badgeImage && <img src={badgeImage} alt="Badge" className="w-8 h-8 mr-2" />}
                <span className="text-[22px] leading-[28px]">{highlight}</span>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}