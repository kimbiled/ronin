import React, { useRef, useEffect } from "react";
const CarouselMobile = () => {
  const items = [
    { id: 1, username: "unit1", name: "Cyber", img: "./images/avatars/first.png" },
    { id: 2, username: "vkptr03", name: "Floking", img: "./images/avatars/second.png" },
    { id: 3, username: "king77", name: "Pepe2077", img: "./images/avatars/third.png" },
    { id: 4, username: "alexdev", name: "MemeSpace", img: "./images/avatars/fourth.png" },
  ];
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollCarousel = () => {
      if (!carouselRef.current) return;
      carouselRef.current.scrollLeft += 1;
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
        carouselRef.current.scrollLeft = 0;
      }
    };

    const interval = setInterval(scrollCarousel, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden p-4">
      <div
        ref={carouselRef}
        className="flex space-x-4 w-full overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#0B173903] p-4 rounded-lg flex-shrink-0 border border-[#343B4F]"
            style={{ width: "152px", height: "208px" }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg mb-2 w-full h-[125px] w-[125px] object-cover"
            />
            <div className="flex items-center space-x-1">
              <img src="./images/icons/tick.png" alt="tick" className="w-3 h-3" />
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
