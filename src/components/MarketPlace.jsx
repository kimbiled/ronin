import React, {useState, useEffect} from "react";
import HeaderMobileScan from "./HeaderMobileScan";
import FooterMobile from "./FooterMobile";
import SidebarMobileMarket from "./SidebarMobileMarket";
import AOS from 'aos';
import 'aos/dist/aos.css';
const MarketPlace = () => {
    useEffect(() => {
          AOS.init({ duration: 1000, once:true});
        }, []);
     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
        
          useEffect(() => {
            const handleResize = () => {
              setIsMobile(window.innerWidth <= 768);
            };
        
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);

    const [selectedTime, setSelectedTime] = useState("24H");
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
     const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
          setIsMenuOpen((prev) => !prev); // Переключение состояния меню
        };
    const nfts = [
        { id: 1, name: "Pepe of the Moon", user: "CryptoWizard87", price: "8.5 ETH", bid: "No Bids Yet", image: "./images/avatars/a1.png" },
        { id: 2, name: "Shiba Samurai", user: "PixelPepeX", price: "1 ETH", bid: "No Bids Yet", image: "./images/avatars/a2.png" },
        { id: 3, name: "PonkeX Trip", user: "ElonMinter420", price: "1.5 ETH", bid: "No Bids Yet", image: "./images/avatars/a3.png" },
        { id: 4, name: "Rocket PENG", user: "MetaFroggo", price: "9 ETH", bid: "No Bids Yet", image: "./images/avatars/a4.png" },
        { id: 5, name: "Doge Dynasty", user: "MoonShibaArt", price: "5 ETH", bid: "No Bids Yet", image: "./images/avatars/a5.png" },
        { id: 6, name: "Pixel Pop Dream", user: "DukeN5", price: "2 ETH", bid: "No Bids Yet", image: "./images/avatars/a6.png" },
        { id: 7, name: "Frogchain Legend", user: "RareMinter23", price: "3 ETH", bid: "No Bids Yet", image: "./images/avatars/a7.png" },
        { id: 8, name: "Ponke 2R", user: "ApeLordNFT", price: "4 ETH", bid: "No Bids Yet", image: "./images/avatars/a8.png" },
    ];
    const style = isMenuOpen
      ? {
         
        }
      : {
          backgroundImage: "url('/images/backgrounds/grid-closed.png')",
          backgroundSize: "80%",
          backgroundPosition: "top",
          backgroundRepeat: "repeat",
          backgroundColor: "#081028",
        };

  return (
    <div>
        {isMobile? 
        (<div
            className={`${
              isMenuOpen
                ? "bg-[#0A1330] flex flex-col items-center"
                : "fonts-mono flex flex-col items-center h-auto bg-[#081028] overflow-x-hidden max-w-[425px]"
            }`}
            style={{
              ...style,
              overflowX: isMenuOpen ? "hidden" : "auto", // Включаем горизонтальную прокрутку, если меню закрыто
            }}
          >
          
                    <HeaderMobileScan isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
                    <SidebarMobileMarket isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    {!isMenuOpen && (
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className="text-white p-4 fonts-mono sm20:w-[320px]">
                            {/* Overview */}
                            <div className="text-[#AEB9E1] text-xs mb-6 text-center opacity-50">/ Overview</div>
                        
                            {/* Title */}
                            <h1 className="text-center text-3xl mb-4">My tokens</h1>
                        </div>
                    <div className="flex items-center gap-2 rounded-lg h-11 sm20:w-[300px] sm75:w-[350px] sm25:w-[400px]">
                      {/* Trending Dropdown */}
                      <button className="flex items-center justify-center gap-2 border border-[#343B4F] bg-[#AEB9E103] bg-opacity-50 rounded-lg hover:bg-[#1A233A] h-11 w-32 sm25:w-48 sm75:w-48">
                          <span className="text-[#AEB9E1] text-sm text-opacity-50">Trending</span>
                          <div className="text-[#AEB9E1] hover:text-white">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 h-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                                </svg>
                            </div>
                      </button>
                      
                      {/* All и фильтры */}
                      <div className="flex items-center justify-between border border-[#343B4F] rounded-lg h-11 bg-[#0A1330] sm25:w-52">
                            {/* Кнопка All */}
                            <button
                                onClick={() => setSelectedFilter("All")}
                                className={`px-4 py-2 text-[#AEB9E1] ${
                                    selectedFilter === "All"
                                        ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-11" // Активный стиль
                                        : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                                }`}
                            >
                                All
                            </button>
                
                            {/* Кнопка с иконкой Crystal */}
                            <button
                                onClick={() => setSelectedFilter("Crystal")}
                                className={`px-4 py-2 rounded-lg ${
                                    selectedFilter === "Crystal"
                                        ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-11" // Активный стиль
                                        : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                                }`}
                            >
                                <img
                                    src="./images/icons/crystal.png"
                                    alt="Ethereum"
                                    className="w-10 h-6 sm75:w-7 sm75:h-6 sm20:w-7"
                                />
                            </button>
                
                            {/* Кнопка с иконкой Cube */}
                            <button
                                onClick={() => setSelectedFilter("Cube")}
                                className={`px-4 py-2 rounded-lg ${
                                    selectedFilter === "Cube"
                                        ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-11" // Активный стиль
                                        : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                                }`}
                            >
                                <img
                                    src="./images/icons/cube.png"
                                    alt="BNB"
                                    className="w-10 h-6 sm75:w-8 sm75:h-6 sm20:w-7"
                                />
                            </button>
                        </div>
                      </div>
                      <div
  data-aos="fade-right"
  className="fonts-mono w-full overflow-x-auto no-scrollbar mt-8"
  style={{
    display: "flex",
    gap: "1rem", // Отступ между карточками
    overflowX: "auto", // Горизонтальная прокрутка
    scrollBehavior: "smooth", // Гладкая прокрутка
    WebkitOverflowScrolling: "touch", // Инерционная прокрутка на мобильных устройствах
    width: "100%", // Ширина контейнера
    maxWidth: "100vw", // Ограничение ширины
    paddingLeft: "1rem", // Внутренний отступ слева
    paddingRight: "1rem", // Внутренний отступ справа
  }}
>
  {nfts.map((nft) => (
    <div
      key={nft.id}
      className="flex flex-col border border-[#343B4F] rounded-lg p-4 hover:shadow-lg transition-shadow flex-shrink-0 text-white"
      style={{
        minWidth: "235px", // Фиксированная минимальная ширина карточки
        height: "425px", // Высота карточки
        flexShrink: "0", // Убираем сжатие карточек
      }}
    >
      <img
        src={nft.image}
        alt={nft.name}
        className="object-cover rounded-lg mb-4 w-[200px] h-[200px] mx-auto"
      />
      <div className="flex items-center space-x-2">
        <img src="./images/icons/tick.png" alt="tick" className="w-3 h-3" />
        <h3 className="text-sm text-[#AEB9E1]">{nft.name}</h3>
      </div>
      <p className="text-lg mt-2 mb-6">{nft.user}</p>
      <div className="border-b-[#FFFFFF] border-b-[1px] border-opacity-20"></div>
      <div className="flex justify-between mt-6 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-[#AEB9E1] text-sm">Price</p>
          <p>{nft.price}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#AEB9E1] text-sm">Highest Bid</p>
          <p>{nft.bid}</p>
        </div>
      </div>
    </div>
  ))}
</div>


                    <div className="flex flex-row items-center justify-center sm20:w-[300px] sm75:w-[350px] sm25:w-[400px] h-11 gap-4 mt-12  mb-8">
                        <div className="relative flex flex-row justify-center sm20:w-[300px] sm75:w-[350px] sm25:w-[400px]">
                            {/* Поле ввода */}
                            <input
                                    type="text"
                                    placeholder="Search by marketplace..."
                                    className="bg-[#AEB9E103] text-sm text-[#AEB9E1] opacity-50 flex-1 placeholder-[#AEB9E1] pl-10 pr-4 outline-none border border-[#AEB9E17A] rounded-lg sm20:w-[240px] h-11"
                                />
                                {/* Иконка поиска */}
                                <img
                                    src="./images/icons/Search.png"
                                    alt="search"
                                    className="absolute left-3 top-4 transform-translate-y-1/2 w-4 h-4 cursor-pointer"
                                />
                            </div>
                            <div className="bg-[#FFFFFF14] cursor-pointer w-11 h-11 rounded-lg flex flex-row items-center justify-center">
                                <img src="./images/icons/setting.png" alt="filter" className="w-6 h-6" />
                            </div>
                    </div>

                        <div data-aos="fade-up" className="sm20:w-[300px] sm75:w-[350px] sm25:w-[400px] mx-auto flex flex-row justify-center">
     
                            {/* Сетка карточек */}
                            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 ">
                                {nfts.map((nft) => (
                                <div
                                    key={nft.id}
                                    className="bg-[#0B173903] rounded-lg p-2 flex flex-col border border-[#343B4F] sm20:w-[140px] sm20:h-[210px] sm25:w-[190px] sm25:h-[240px] sm75:w-[165px] sm75:h-[230px]"
                                >
                                    {/* Изображение */}
                                    <img
                                    src={nft.image}
                                    alt={nft.name}
                                    className="rounded-lg mb-4 w-full h-40 object-cover"
                                    />
                                    <div className="flex items-center space-x-2 mb-2">
                                    <img src="./images/icons/tick.png" alt="tick" className="w-3 h-3" />
                                    <h3 className="text-[10px] text-[#AEB9E1]">{nft.name}</h3>
                                    </div>
                                    {/* Имя NFT */}
                                    <h3 className="text-white text-sm mb-2 sm20:text-xs">{nft.name}</h3>
                                </div>
                                ))}
                            </div>
                            </div>

                            <div className="flex flex-row gap-4 mt-12">
              {/* NFT Card */}
              
              <div data-aos="fade-left" className="flex flex-col gap-4 text-[#AEB9E1] sm20:w-[300px] sm75:w-[350px] sm25:w-[400px]">
                  {/* Первый блок */}
                  <div className="space-y-4 border border-[#343B4F] rounded-lg p-6 mb-8">
                      <div className=" flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Blockchain</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="flex flex-col justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <div className="flex flex-row w-full justify-between items-center cursor-pointer">
                              <span className="mb-3">Status</span>
                              <span className="mb-3">›</span>
                          </div>
                          <div className="flex flex-row justify-between items-center border border-[#343B4F] rounded-lg h-10 text-sm mb-4 w-full">
          {["All", "Buy Now", "Live"].map((stat) => (
              <button
                  key={stat}
                  onClick={() => setSelectedStatus(stat)} // Изменяем состояние при клике
                  className={`text-[#AEB9E1] w-20 h-9 flex items-center justify-center rounded-lg ${
                      selectedStatus === stat
                          ? "bg-[#FFFFFF0A] text-opacity-100" // Активный стиль
                          : "hover:bg-[#FFFFFF0A] text-opacity-50" // Неактивный стиль
                  }`}
              >
                  {stat}
              </button>
          ))}
      </div>
      
                      
                      </div>
                      <div className="flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Price</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Type</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Options</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="flex justify-between items-center cursor-pointer">
                          <span className="mb-3">Collections</span>
                          <span className="mb-3">›</span>
                      </div>
                  </div>
      
                  {/* Второй блок */}
                  <div data-aos="fade-right" className="flex flex-col gap-4 border border-[#343B4F] rounded-lg p-6 mb-4">
                      <h3 className="text-lg text-[#FFFFFF]">Transaction analysis</h3>
                      <p className="text-[#AEB9E1] mb-4">In the last 24 hours</p>
                      <div className="flex items-center justify-center sm20:w-[220px] mx-auto">
                          <div className="relative">
                                  <img src="./images/backgrounds/7k.png" alt="7k" />
                          </div>
                      </div>
                      <div className="flex flex-col gap-3 mb-12 items-center mt-8">
                        <div className="bg-transparent sm20:w-[220px] sm75:w-[315px] sm25:w-[365px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="h-2 w-2 rounded-full bg-[#CB3CFF]"></div>
                            <div className="flex flex-col">
                                <p className=" text-white">Sell</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-white ">60%</p>    
                        </div>            
                        </div>
                        <div className="bg-transparent sm20:w-[220px]  sm75:w-[315px] sm25:w-[365px] sm75:w-[315px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="h-2 w-2 rounded-full bg-[#0E43FB]"></div>
                            <div className="flex flex-col">
                                <p className=" text-white">Distribute</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-white ">35.0%</p>    
                        </div>            
                        </div>
                        <div className="bg-transparent sm20:w-[220px]  sm75:w-[315px] sm25:w-[365px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="h-2 w-2 rounded-full bg-[#00C2FF]"></div>
                            <div className="flex flex-col">
                                <p className=" text-white">Return</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-white ">5%</p>    
                        </div>            
                        </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center mt-[-24px]">
                             <p className=" text-[#AEB9E1] text-sm">More details</p>
                             <img src="./images/icons/plus.png" alt="plus" className="w-3 h-3"/>
                        </div>
                            </div>
                            
                        </div>
                        </div>
                        <FooterMobile />
                    </div>
                    )}
                    </div>
        )
        :
        (  <div className="p-10 space-y-6 bg-[#0A1330] h-full fonts-mono">
            {/* Header */}
            <div className="relative flex justify-between items-center mb-14" >
              <h1 className="text-3xl fonts-mono500 text-white">Marketplace</h1>
              <p className="text-lg text-[#AEB9E1] fonts-mono">/ Explore</p>
              <div className="absolute w-full bottom-[-30px] h-[1px] bg-[#FFFFFF] opacity-20"></div>
            </div>
      
            {/* Tabs */}
          <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center bg-[#0A1330] 2xl:w-2/5 h-[50px] gap-4">
                      <div className="bg-[#FFFFFF14] cursor-pointer w-10 h-10 rounded-lg flex flex-row items-center justify-center">
                          <img src="./images/icons/setting.png" alt="filter" className="w-6 h-6" />
                      </div>
              
                  {/* Поле ввода */}
                  <div className="relative w-full">
                          {/* Иконка поиска */}
                          <img
                              src="./images/icons/search.png"
                              alt="search"
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
                          />
                          
                          {/* Поле ввода */}
                          <input
                              type="text"
                              placeholder="Search by marketplace..."
                              className="text-[#AEB9E1] opacity-50 flex-1 bg-transparent placeholder-[#AEB9E1] pl-10 pr-4 outline-none border border-[#AEB9E17A] rounded-lg h-10 w-full"
                          />
                      </div>
                  </div>
      
                  <div className="flex items-center space-x-2 bg-[#0A1330] p-2 rounded-lg h-[50px]">
                      {/* Trending Dropdown */}
                      <button className="flex items-center space-x-2 px-4 py-2 border border-[#343B4F] rounded-lg hover:bg-[#1A233A] h-10">
                          <span className="text-[#AEB9E1] text-opacity-50">Trending</span>
                          <span className="text-[#AEB9E1] text-opacity-50">▾</span>
                      </button>
                      
                      {/* All и фильтры */}
                      <div className="flex items-center space-x-2 border border-[#343B4F] rounded-lg h-10">
                  {/* Кнопка All */}
                  <button
                      onClick={() => setSelectedFilter("All")}
                      className={`px-4 py-2 text-[#AEB9E1] ${
                          selectedFilter === "All"
                              ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                              : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                      }`}
                  >
                      All
                  </button>
      
                  {/* Кнопка с иконкой Crystal */}
                  <button
                      onClick={() => setSelectedFilter("Crystal")}
                      className={`px-4 py-2 rounded-lg ${
                          selectedFilter === "Crystal"
                              ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                              : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                      }`}
                  >
                      <img
                          src="./images/icons/crystal.png"
                          alt="Ethereum"
                          className="w-5 h-5"
                      />
                  </button>
      
                  {/* Кнопка с иконкой Cube */}
                  <button
                      onClick={() => setSelectedFilter("Cube")}
                      className={`px-4 py-2 rounded-lg ${
                          selectedFilter === "Cube"
                              ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                              : "hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50"
                      }`}
                  >
                      <img
                          src="./images/icons/cube.png"
                          alt="BNB"
                          className="w-7 h-7"
                      />
                  </button>
              </div>
                      
                      {/* Временные фильтры */}
                      <div className="flex items-center space-x-2 border border-[#343B4F] rounded-lg h-10">
                  {["1H", "6H", "24H", "7D"].map((time) => (
                      <button
                          key={time}
                          onClick={() => setSelectedTime(time)} // Изменяем состояние при клике
                          className={`px-4 py-2 text-[#AEB9E1] ${
                              selectedTime === time
                                  ? "bg-[#1A233A] text-opacity-100 rounded-lg bg-[#FFFFFF0A] h-9" // Активный стиль
                                  : " hover:rounded-lg hover:bg-[#FFFFFF0A] text-opacity-50" // Неактивный стиль
                          }`}
                      >
                          {time}
                      </button>
                  ))}
              </div>
                      
                      {/* Grid View */}
                      <div className="bg-[#FFFFFF14] cursor-pointer w-10 h-10 rounded-lg flex flex-row items-center justify-center">
                          <img src="./images/icons/square.png" alt="filter" className="w-6 h-6" />
                      </div>
                      </div>
          </div>
      
      
            {/* Main Content */}
            <div className="flex flex-row gap-4">
              {/* NFT Card */}
              <div  className="flex flex-col gap-4 p-4 text-[#AEB9E1] 2xl:w-1/6 xl40:w-3/8">
                  {/* Первый блок */}
                  <div className="space-y-4 border border-[#343B4F] rounded-lg p-4 w-">
                      <div className="hover:opacity-80 flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Blockchain</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="flex flex-col justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <div className="hover:opacity-80 flex flex-row w-full justify-between items-center cursor-pointer">
                              <span className="mb-3">Status</span>
                              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                  />
                  </svg>
                          </div>
                          <div className="flex flex-row justify-between items-center border border-[#343B4F] rounded-lg h-10 text-sm mb-4 w-full">
          {["All", "Buy Now", "Live"].map((stat) => (
              <button
                  key={stat}
                  onClick={() => setSelectedStatus(stat)} // Изменяем состояние при клике
                  className={`text-[#AEB9E1] w-20 h-9 flex items-center justify-center rounded-lg ${
                      selectedStatus === stat
                          ? "bg-[#FFFFFF0A] text-opacity-100" // Активный стиль
                          : "hover:bg-[#FFFFFF0A] text-opacity-50" // Неактивный стиль
                  }`}
              >
                  {stat}
              </button>
          ))}
      </div>
      
                      
                      </div>
                      <div className="hover:opacity-80 flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Price</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="hover:opacity-80 flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Type</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="hover:opacity-80 flex justify-between items-center cursor-pointer border-b-[#FFFFFF] border-opacity-20 border-b-[1px]">
                          <span className="mb-3">Options</span>
                          <span className="mb-3">›</span>
                      </div>
                      <div className="hover:opacity-80 flex justify-between items-center cursor-pointer">
                          <span className="mb-3">Collections</span>
                          <span className="mb-3">›</span>
                      </div>
                  </div>
      
                  {/* Второй блок */}
                  <div className="space-y-4 border border-[#343B4F] rounded-lg p-4">
                      <h3 className="text-lg font-bold">Transaction analysis</h3>
                      <p>In the last 24 hours</p>
                      <div className="flex items-center justify-center sm20:w-[220px] mx-auto">
                          <div className="relative">
                                  <img src="./images/backgrounds/7k.png" alt="7k" />
                          </div>
                      </div>
                  </div>
              </div>
      
              <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[#AEB9E1] 2xl:w-[65%] xl40:w-[85%]">
          {nfts.map((nft) => (
              <div
                  key={nft.id}
                  className="border border-[#343B4F] rounded-lg p-4  hover:shadow-lg transition-shadow transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#1E2B4D] duration-300"
              >
                  <img
                      src={nft.image}
                      alt={nft.name}
                      className="object-cover rounded-lg mb-4 w-[200px] h-[200px] mx-auto"
                  />
                  <h3 className="text-sm mb-2">{nft.name}</h3>
                  <p className="text-xs text-opacity-75">@{nft.user}</p>
                  <div className="flex justify-between mt-4 text-xs">
                      <div>
                          <p className="text-opacity-50">Price</p>
                          <p className="font-bold">{nft.price}</p>
                      </div>
                      <div>
                          <p className="text-opacity-50">Highest Bid</p>
                          <p>{nft.bid}</p>
                      </div>
                  </div>
              </div>
          ))}
      </div>
      
            </div>
          </div>)}
    </div>
  );
};

export default MarketPlace;
