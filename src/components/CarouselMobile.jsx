import React, { useEffect, useState } from "react";

const CarouselMobile = () => {
  const items = [
    { id: 1, username: "unit1", name: "Cyber", img: "./images/avatars/first.png" },
    { id: 2, username: "vkptr03", name: "Floking", img: "./images/avatars/second.png" },
    { id: 3, username: "king77", name: "Pepe2077", img: "./images/avatars/third.png" },
    { id: 4, username: "alexdev", name: "MemeSpace", img: "./images/avatars/fourth.png" },
  ];

  // Определяем, мобильное ли устройство
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Считаем устройство мобильным, если ширина экрана меньше 768px
    };

    handleResize(); // Проверяем при загрузке
    window.addEventListener("resize", handleResize); // Обработчик изменения размера экрана

    return () => window.removeEventListener("resize", handleResize); // Очистка обработчика
  }, []);

  // Дублируем элементы для создания бесконечной прокрутки
  const extendedItems = [...items, ...items]; // Дублируем элементы

  return (
    <div className="relative overflow-hidden sm75:w-[375px] sm20:w-[320px] sm25:w-[425px]">
      <div
        className="flex gap-4"
        style={{
          animation: isMobile ? "scroll 60s linear infinite" : "scroll 30s linear infinite", // Медленная анимация для мобильных
          display: "flex",
          flexWrap: "nowrap", // Это важно для горизонтального расположения карточек
        }}
      >
        {/* Прокручиваем все элементы */}
        {extendedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex flex-col bg-[#0B173903] p-4 rounded-lg border border-[#343B4F] flex-shrink-0"
            style={{
              minWidth: "150px", // фиксированная ширина
              height: "210px",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg mb-2 w-[125px] h-[125px] object-cover mx-auto"
            />
            <div className="flex items-center space-x-1">
              <img src="/images/icons/tick.png" alt="tick" className="w-3 h-3" />
              <p className="text-xs text-[#AEB9E1]">{item.username}</p>
            </div>
            <p className="text-sm text-white mt-1 text-left">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMobile;
