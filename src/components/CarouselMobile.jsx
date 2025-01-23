import React from "react";

const CarouselMobile = () => {
  const items = [
    { id: 1, username: "unit1", name: "Cyber", img: "./images/avatars/first.png" },
    { id: 2, username: "vkptr03", name: "Floking", img: "./images/avatars/second.png" },
    { id: 3, username: "king77", name: "Pepe2077", img: "./images/avatars/third.png" },
    { id: 4, username: "alexdev", name: "MemeSpace", img: "./images/avatars/fourth.png" },
  ];

  return (
    <div
      className="w-full overflow-x-auto no-scrollbar"
      style={{
        display: "flex",
        gap: "1rem",
        overflowX: "auto", // Прокрутка по оси X
        scrollBehavior: "smooth", // Гладкая прокрутка
        WebkitOverflowScrolling: "touch", // Поддержка инерционной прокрутки на мобильных устройствах
        width: "100%", // Убедитесь, что ширина родительского контейнера задана
        maxWidth: "100vw", // Ограничиваем ширину контейнера для прокрутки
        paddingLeft: "1rem", // Отступ слева
        paddingRight: "1rem", // Отступ справа
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-[#0B173903] p-4 rounded-lg border border-[#343B4F] flex-shrink-0"
          style={{
            minWidth: "150px", // Устанавливаем фиксированную минимальную ширину карточек
            height: "210px",   // Высота карточек
            flexShrink: "0",    // Убираем растягивание карточек
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
          <p className="text-sm text-white mt-1 text-left">{item.name}</p> {/* Текст выравнивается по левому краю */}
        </div>
      ))}
    </div>
  );
};

export default CarouselMobile;
