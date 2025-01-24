import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderMobileScan = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();

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
    <header
      className={
        isMenuOpen
          ? 'text-white flex flex-row justify-around items-center mt-6 w-[90%] h-[70px] rounded-lg bg-[#AEB9E103] border border-[#343B4F47] backdrop-blur-[24px]'
          : 'text-white flex flex-row justify-around items-center mt-6 w-[90%] h-[70px] rounded-lg bg-[#AEB9E103] border border-[#343B4F47] backdrop-blur-[24px] mb-6'
      }
    >
      {/* Секция контента */}
      {isMenuOpen ? (
        <div>
          <a href='https://degenai.ai/'>
          <img src="./images/icons/logo.png" alt="logo" className='w-8 h-5 mr-16'/>
          </a>
          </div>
      ) : (
        <div className="flex flex-row items-center gap-2">
        <img src="./images/avatars/avatar.png" alt="avatar" className="w-6 h-6" />
        <p className="fonts-mono text-sm">0x17...85</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      )}

      {/* Иконки и кнопки */}
      <div className="flex flex-row gap-3">
        <div className="w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center">
          <img src="./images/icons/bell.png" alt="bell" className="w-5 h-5" />
        </div>
        <div
          onClick={toggleMenu} // Открытие меню по клику
          className="w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center cursor-pointer"
        >
          <img
            src={isMenuOpen ? "./images/icons/close.png" : "./images/icons/menu.png"}
            alt={isMenuOpen ? "close menu" : "open menu"}
            className={isMenuOpen ? "h-5 w-5 mt-2" : "h-3 w-3"}
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderMobileScan;

