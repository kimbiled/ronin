import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderMobile = ({ isMenuOpen, toggleMenu }) => {
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
          : 'text-white flex flex-row justify-around items-center mt-6 w-[90%] h-[70px] rounded-lg bg-[#AEB9E103] border border-[#343B4F47] backdrop-blur-[24px] mb-12'
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
          <button
                    className=" w-[150px] h-11 text-sm fonts-mono mx-auto text-white py-3 rounded-lg flex items-center justify-center"
                    style={{
                        background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)',
                    }}
                    onClick={onClickScan}
                    >
                    Scan my wallet →
                    </button>
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

export default HeaderMobile;

