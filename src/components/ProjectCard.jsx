import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function ProjectCard({ images, logo, title, description, description2, country, tags, highlight, isMain, verified, starred, badgeImage }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Меняем картинку каждые 2 секунды
    }
    
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0); // Сбрасываем на первую картинку
    }
  }, [isHovered]);

  const getBadgeStyles = () => {
    if (verified && (title === "p1" || title === "p2")) {
      return "font-ppneue bg-[#F7F7F6] bg-opacity-[5%] text-white  border-[#FFFFFF] border-opacity-20 border-[0.5px] bg-backdrop-blur-[24px] rounded-[100px] pl-[4px] pb-[4px] pt-[4px] pr-[18px] font-book";
    } else if (verified && title === "p5") {
      return "font-ppneue bg-[#F7F7F6] bg-opacity-[70%] text-black border-[#FFFFFF] border-opacity-20 border-[0.5px] bg-backdrop-blur-[24px] rounded-[100px] pl-[4px] pb-[4px] pt-[4px] pr-[18px]  font-book";
    } else if (starred && title === "p9") {
      return "font-ppneue bg-[#F7F7F6] bg-opacity-[5%] text-white  border-[#FFFFFF] border-opacity-20 border-[0.5px] bg-backdrop-blur-[24px] rounded-[100px] pl-[4px] pb-[4px] pt-[4px] pr-[18px] font-medium";
    }
    return "";
  };
  return (
    <div
      className="font-ppneue relative cursor-pointer rounded-lg overflow-hidden w-full h-auto" // h-auto позволяет контенту адаптироваться
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Затемняющий слой */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black rounded-[48px] z-10"
      />

      {/* Контейнер для изображений */}
      <div className="relative w-full h-auto">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ position: index === 0 ? "relative" : "absolute" }} // Первая картинка "relative", остальные "absolute"
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              filter: `brightness(${isHovered ? 70 : 100}%)`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Анимированные элементы при наведении */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Логотип и текст в левом верхнем углу (если есть) */}
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
            
            {/* Флаг в правом верхнем углу (если есть) */}
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
            
            {/* Теги и выделенный элемент (если есть) */}
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
