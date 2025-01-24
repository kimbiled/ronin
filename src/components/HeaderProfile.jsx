import React from 'react';

const Header = () => {
  return (
    <header className="font-mono bg-[#0A1330] text-white shadow-md border-b-[#343B4F] border-b overflow-hidden">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 xl40:max-w-[1440px] xl40:px-6">
        {/* Логотип и кнопка "Back" */}
        <div className="flex items-center space-x-6">
          <img
            src="./images/icons/logo.png"
            alt="Logo"
            className="w-8 h-5"
          />
          <button className="flex items-center space-x-2 px-4 py-2 border border-[#343B4F] rounded-md hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-10 text-sm">
          <button className="hover:text-gray-400">Generate</button>
          <div className="relative group">
            <button className="hover:text-gray-400">Explore ▾</button>
            <div className="absolute left-0 hidden group-hover:block bg-[#0A0E17] border border-gray-700 rounded-lg shadow-lg mt-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Option 2</a>
            </div>
          </div>
          <button className="hover:text-gray-400">How it works</button>
          <button className="hover:text-gray-400">FAQ</button>
        </nav>

        {/* Иконки и кнопка "Explore" */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block border border-[#343B4F] rounded-md hover:bg-gray-700 px-2 py-2">
            <img src="./images/icons/bell.png" alt="bell" className="w-5 h-5" />
          </button>
          <button className="hidden md:block border border-[#343B4F] rounded-md hover:bg-gray-700 px-2 py-2">
            <img src="./images/icons/crystal.png" alt="crystal" className="w-5 h-5" />
          </button>
          <button className="hidden md:flex items-center justify-between border border-[#343B4F] rounded-md hover:bg-gray-700 px-4 py-2 w-32">
            Explore
            <img src="./images/icons/bag.png" alt="bag" className="w-4 h-4" />
          </button>
          <button className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
