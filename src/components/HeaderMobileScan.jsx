import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderMobileScan = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(null); // Для управления сабменю
  const navigate = useNavigate();

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Функция для закрытия меню
  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Функция для переключения сабменю
  const toggleSubMenu = (menu) => {
    setSubMenu(subMenu === menu ? null : menu);
  };

  const onClickHome = () => {
    navigate("/");
  };
  const onClickConnect = () => {
    navigate("/profile");
  };
  const onClickScan = () => {
    navigate("/scan");
  };

  return (
    <header className="text-white flex flex-row justify-around items-center mt-6 w-[90%] h-[70px] rounded-lg bg-[#AEB9E103] border border-[#343B4F47] backdrop-blur-[24px] mb-12">
      <div className="flex flex-row items-center gap-2">
        <img src="./images/avatars/avatar.png" alt="avatar" className="w-6 h-6" />
        <p className="fonts-mono text-sm">0x17...85</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center">
          <img src="./images/icons/bell.png" alt="bell" className="w-5 h-5" />
        </div>
        <div
          onClick={toggleMenu} // Открытие меню по клику
          className="w-[2.8rem] h-[2.8rem] border border-[#343B4F] rounded-md flex flex-col items-center justify-center cursor-pointer"
        >
          <img src="./images/icons/menu.png" alt="menu" className="w-5 h-3" />
        </div>
      </div>

      {/* Поп-ап меню */}
      {/* {isMenuOpen && (
        <div className="absolute top-0 left-0 bg-[#0A1330] h-full w-[70%] p-6 rounded-r-lg shadow-lg z-50">
          <div className="flex flex-col gap-6 text-white">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">DegenAI</div>
              <button className="text-white" onClick={onCloseMenu}>
                ✕
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">46 Credits</span>
              <button className="text-white font-semibold">⬇</button>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <img
                src="profile-image-url"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-bold">Axel Verde</div>
                <button className="text-sm text-gray-400">Account settings</button>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="text-sm font-semibold w-full text-left py-2"
                onClick={onClickHome}
              >
                Dashboard
              </button>
              <div>
                <button
                  className="text-sm font-semibold w-full text-left py-2"
                  onClick={() => toggleSubMenu("tokens")}
                >
                  $ My tokens
                </button>
                {subMenu === "tokens" && (
                  <div className="pl-4 text-gray-400">
                    <button className="block py-1 text-left w-full">Overview</button>
                    <button className="block py-1 text-left w-full">Token Details</button>
                    <button className="block py-1 text-left w-full">Transfer Tokens</button>
                    <button className="block py-1 text-left w-full">Boost Rarity</button>
                    <button className="block py-1 text-left w-full">Wallets</button>
                  </div>
                )}
              </div>
              <button className="text-sm font-semibold w-full text-left py-2" onClick={onClickConnect}>
                Marketplace
              </button>
              <button className="text-sm font-semibold w-full text-left py-2">
                My Collection
              </button>
              <button className="text-sm font-semibold w-full text-left py-2">
                Community
              </button>
              <button className="text-sm font-semibold w-full text-left py-2">
                FAQ
              </button>
            </div>

            <div className="mt-auto">
              <button className="text-sm font-semibold w-full text-left py-2">
                Settings
              </button>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-400 text-sm">0x17...85</span>
                <button className="text-white font-semibold">📋</button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default HeaderMobileScan;
