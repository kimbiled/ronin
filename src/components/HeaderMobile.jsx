import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickHome = () => {
    navigate("/")
  }
  const onClickConnect= () => {
    navigate("/profile")
  }
  const onClickScan = () => {
    navigate("/scan")
  }

  return (
    <header className='text-white flex flex-row justify-around items-center mt-6 w-[90%] h-[70px] rounded-lg bg-[#AEB9E103] border border-[#343B4F47] backdrop-blur-[24px] mb-12'>
      <button
        className="fonts-violet w-[55%] h-[2.8rem] text-white font-bold rounded-lg flex items-center justify-center "
        style={{
          background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)',
        }}
        onClick={onClickScan}
      >
        Scan my wallet →
      </button>
      <div className='flex flex-row gap-3'>
        <div className='w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center'>
          <img src="./images/icons/bell.png" alt="bell" className='w-5 h-5' />
        </div>
        <div
          onClick={toggleMenu} // Открытие меню по клику
          className='w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center cursor-pointer'
        >
          <img src="./images/icons/menu.png" alt="menu" className='w-5 h-3' />
        </div>
      </div>

      {/* Поп-ап меню */}
      {isMenuOpen && (
        <div className='absolute top-16 right-0 bg-[#0A1330] w-[70%] p-4 rounded-lg shadow-lg z-10'>
          <div className='flex flex-col gap-4'>
          <button className='text-white font-semibold' onClick={onClickHome}>Home</button>
            <button className='text-white font-semibold' onClick={onClickConnect}>Profile</button>
            <button className='text-white font-semibold' onClick={onClickScan}>Scan Wallet</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
