import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const CarouselMobile = () => {
  const items = [
    { id: 1, username: "unit1", name: "Cyber", img: "./images/avatars/first.png?v=1" },
    { id: 2, username: "vkptr03", name: "Floking", img: "./images/avatars/second.png?v=1" },
    { id: 3, username: "king77", name: "Pepe2077", img: "./images/avatars/third.png?v=1" },
    { id: 4, username: "alexdev", name: "MemeSpace", img: "./images/avatars/fourth.png?v=1" },
  ];
    

  return (
    <div className="w-full">
     <Swiper
  modules={[Autoplay]}
  spaceBetween={16}
  slidesPerView="auto"
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  className="w-full"
  style={{
    overflow: "hidden", // Для Safari
    willChange: "transform", // Для повышения производительности
  }}
>

        {items.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "150px" }}>
            <div
              className="flex flex-col bg-[#0B173903] p-4 rounded-lg border border-[#343B4F]"
              style={{ minWidth: "150px", height: "210px" }}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMobile;
