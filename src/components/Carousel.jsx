import React, { useRef, useEffect } from "react";
const Carousel = () => {
  const items = [
    { id: 1, username: "unit1", name: "Cyber", img: "./images/avatars/first.png" },
    { id: 2, username: "vkptr03", name: "Floking", img: "./images/avatars/second.png" },
    { id: 3, username: "king77", name: "Pepe2077", img: "./images/avatars/third.png" },
    { id: 4, username: "alexdev", name: "MemeSpace", img: "./images/avatars/fourth.png" },
  ];
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Сдвиг влево
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0; // Возврат к началу
        }
      }
    };

    const interval = setInterval(scrollCarousel, 20); // Скорость прокрутки

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#0A1330] ">
      {/* Левая тень */}
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-[#0A1330] to-transparent z-10 pointer-events-none"></div>

      {/* Карусель */}
      <div
        ref={carouselRef}
        className="flex space-x-4 w-full overflow-x-hidden scrollbar-none"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Дублируем элементы для бесконечной прокрутки */}
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#1a233a] p-4 rounded-lg flex-shrink-0 fonts-mono"
            style={{ width: "150px" }}
          >
            {/* Изображение */}
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg mb-2 w-full h-24 object-cover"
            />

            {/* Имя пользователя */}
            <div className="flex items-center space-x-1">
              <img src="./images/icons/tick.png" alt="tick" className="w-3 h-3" />
              <p className="text-xs text-[#AEB9E1]">{item.username}</p>
            </div>

            {/* Название */}
            <p className="text-lg text-white mt-1 text-left">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Правая тень */}
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-[#0A1330] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Carousel;
