import React, { useEffect, useRef } from "react";

const CarouselMobile = () => {
  const items = [
    { id: 1, username: "unit1", name: "Cyber", img: "./images/avatars/first.png" },
    { id: 2, username: "vkptr03", name: "Floking", img: "./images/avatars/second.png" },
    { id: 3, username: "king77", name: "Pepe2077", img: "./images/avatars/third.png" },
    { id: 4, username: "alexdev", name: "MemeSpace", img: "./images/avatars/fourth.png" },
  ];

  const carouselRef = useRef(null);


  useEffect(() => {
     if (typeof window === "undefined") return;

  const container = carouselRef.current;
    if (!container) return;
  
    const scrollSpeed = 0.5;
    const interval = setInterval(() => {
      try {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      } catch (error) {
        console.error("Error during scroll:", error);
      }
    }, 16);
  
    return () => clearInterval(interval);
  }, []);

  // Клонируем элементы для бесшовной карусели
  const extendedItems = [...items, ...items];

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-x-auto no-scrollbar"
      style={{
        display: "flex",
        gap: "1rem",
        overflowX: "scroll",
        scrollBehavior: "auto", // Убираем плавную прокрутку для мгновенного переноса
        WebkitOverflowScrolling: "touch",
        width: "100%",
        maxWidth: "100vw",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {extendedItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`} // Уникальный ключ для клонированных элементов
          className="flex flex-col bg-[#0B173903] p-4 rounded-lg border border-[#343B4F] flex-shrink-0"
          style={{
            minWidth: "150px",
            height: "210px",
            flexShrink: "0",
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            className="rounded-lg mb-2 w-[125px] h-[125px] object-cover mx-auto"
          />
          <div className="flex items-center space-x-1">
            <img src="./images/icons/tick.png" alt="tick" className="w-3 h-3" />
            <p className="text-xs text-[#AEB9E1]">{item.username}</p>
          </div>
          <p className="text-sm text-white mt-1 text-left">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CarouselMobile;
