import React, { useState } from 'react';
import Slider from 'react-slick';

const ProjectItem = ({ profile, avatars, isLast }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Состояние для текущего слайда

  const footerIcon = profile.verified
    ? "./images/icons/Icon.png"
    : profile.stared
    ? "./images/icons/stared.png"
    : null;

  // Настройки слайдера
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true, // Разрешаем свайпать фотографии
    arrows: true, // Стрелки для навигации
    beforeChange: (current, next) => setCurrentSlide(next), // Обновляем состояние при смене слайда
  };

  return (
    <div
      className={`relative flex flex-col gap-4 pb-6 ${!isLast ? "border-b-[1px]" : ""}`}
    >
      {/* Слайдер для изображений */}
      <div className="relative w-full">
        <Slider {...sliderSettings}>
          {avatars.map((avatar, index) => (
            <div key={index} className="relative w-full">
              <img
                src={avatar}
                alt={`${profile.name}-image-${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>

        {/* Индикатор страницы */}
        <p className="absolute text-white top-4 right-5 text-xs">
          {currentSlide + 1} / {avatars.length}
        </p>

        {/* Футер изображения */}
        {footerIcon && (
          <div className="absolute bottom-3 right-2 flex items-center gap-2 p-1 bg-black bg-opacity-50 text-white rounded-3xl backdrop-blur-md">
            <img src={footerIcon} alt="status-icon" className="w-6 h-6" />
            <p className="text-sm">{profile.followers}</p>
          </div>
        )}
      </div>

      {/* Информация о проекте */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-medium text-[25px]">{profile.name}</h4>
          <img
            src={profile.location}
            alt={profile.name}
            className="w-5 h-auto rounded-[4px]"
          />
        </div>
        <p className="text-sm text-gray-700">{profile.role}</p>
        <p className="text-xs text-[#637695]">
          {profile.tags.join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
