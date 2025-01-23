import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const FooterMobile = () => {
  const navigate = useNavigate()

  const onClickHome = () => {
    navigate("/")
  }
  return (
    <footer className="mt-6 bg-[#090C21] text-[#AEB9E1] sm20:p-6 sm75:p-8 sm25:p-10 rounded-t-3xl max-w-[450px] min-w-[320px] sm20:w-[320px] sm75:w-[390px] sm25:w-[430px] rounded-t-3xl h-[400px] flex flex-col gap-6 fonts-mono">
      {/* Верхняя часть футера */}
      <div className="flex items-center justify-between mb-6 mt-8 ">
        {/* Кнопка "Return to site" */}
        <button className="w-[160px] h-[45px] flex items-center justify-center space-x-2 border border-[#343B4F] rounded-lg hover:bg-gray-700 text-white"
                onClick={onClickHome}
        >
          <span>←</span>
          <span className='text-xs'>Return to site</span>
        </button>

        {/* Иконка */}
        <button className="p-3 border border-[#343B4F] rounded-lg hover:bg-gray-700">
          <img src="./images/icons/crystal.png" alt="crystal" className='w-4 h-4' />
        </button>
      </div>

      {/* Логотип */}
      <div className="flex items-center mb-6">
        <img
          src="./images/icons/logo.png"
          alt="Logo"
          className="w-8 h-4 mr-4"
        />
      </div>

      {/* Политика и условия */}
      <div className="flex flex-col gap-6 mb-2 opacity-50">
        <p className="hover:text-white cursor-pointer ">Privacy Policy</p>
        <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
      </div>

      {/* Копирайт */}
      <div className="text-xs opacity-50">
        <p>© 2025 DEGENTS. All rights reserved</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
