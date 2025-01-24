import React, {useState, useEffect,} from "react";
import FooterMobile from "./FooterMobile";
import HeaderMobileScan from "./HeaderMobileScan";
import SidebarMobile from "./SidebarMobile";
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const MyTokens = () => {
useEffect(() => {
      AOS.init({ duration: 1000, once:true });
    }, []);
     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
 const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev); // Переключение состояния меню
    };


    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    const cardsData = [
      {
        title: 'Legendary',
        subtitle: 'Glasses',
        image: './images/icons/d1.png',
        rarity: '55%',
        description: "The slick, scale-styled 'hairstyle' on its head, glowing with confidence and attitude.",
        background: 'linear-gradient(90deg, rgba(156, 145, 105, 0.2) 0%, rgba(156, 145, 105, 0) 100%)',
      },
      {
        title: 'Rare',
        subtitle: 'Skin Color',
        image: './images/icons/d2.png',
        rarity: '75%',
        description: "The slick, scale-styled 'hairstyle' on its head, glowing with confidence and attitude.",
        background: 'linear-gradient(90deg, rgba(153, 153, 153, 0.2) 0%, rgba(153, 153, 153, 0) 100%)',
      },
      {
        title: 'Uncommon',
        subtitle: 'Accessories',
        image: './images/icons/d3.png',
        rarity: '55%',
        description: "The slick, scale-styled 'hairstyle' on its head, glowing with confidence and attitude.",
        background: 'linear-gradient(90deg, rgba(156, 145, 105, 0.2) 0%, rgba(156, 145, 105, 0) 100%)',
      },
      {
        title: 'Regular',
        subtitle: 'Haircut',
        image: './images/icons/d4.png',
        rarity: '75%',
        description: "The slick, scale-styled 'hairstyle' on its head, glowing with confidence and attitude.",
        background: 'linear-gradient(90deg, rgba(153, 153, 153, 0.2) 0%, rgba(153, 153, 153, 0) 100%)',
      },
      {
        title: 'Regular',
        subtitle: 'Shirt',
        image: './images/icons/d4.png',
        rarity: '75%',
        description: "The slick, scale-styled 'hairstyle' on its head, glowing with confidence and attitude.",
        background: 'linear-gradient(90deg, rgba(153, 153, 153, 0.2) 0%, rgba(153, 153, 153, 0) 100%)',
      },
    ];
  
    const toggleCard = (index) => {
      setExpandedCardIndex(index === expandedCardIndex ? null : index);
    };
     // Обработчик изменения размера окна
     useEffect(() => {
       const handleResize = () => {
         setScreenWidth(window.innerWidth);
       };
   
       // Добавление обработчика
       window.addEventListener('resize', handleResize);
   
       // Очистка обработчика при размонтировании
       return () => {
         window.removeEventListener('resize', handleResize);
       };
     }, []);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      const backgroundSize = screenWidth >= 1440 ? '130%' : '100%';
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
    (
      <div
      className={`${
        isMenuOpen
          ? "bg-[#0A1330] flex flex-col items-center fonts-mono"
          : "fonts-mono flex flex-col items-center h-auto bg-[#081028] overflow-x-hidden max-w-[425px] fonts-mono"
      }`}
      style={{
        ...style,
        overflowX: isMenuOpen ? "hidden" : "hidden", // Включаем горизонтальную прокрутку, если меню закрыто
      }}
    >
    
              <HeaderMobileScan isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
              <SidebarMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {!isMenuOpen && (
            <div className='flex flex-col items-center justify-center gap-4'>
            <div className="text-white p-4 fonts-mono sm20:w-[320px] mt-[-15px]">
        {/* Overview */}
        <div className="text-[#AEB9E1] text-xs mb-3 text-center opacity-50">/ Overview</div>
  
        {/* Title */}
        <h1 className="text-center text-3xl mb-4">My tokens</h1>
  
        {/* Tabs with Horizontal Scroll */}
        <div className="relative w-full">
  {/* Левый fade эффект */}
  <div className="fade-effect fade-effect-left"></div>

  {/* Контейнер кнопок */}
  <div className="parent-container flex gap-2 overflow-x-auto no-scrollbar pl-4 pr-4">
    <button className="px-4 py-2 hover:bg-[#1A233A] text-[#AEB9E1] text-sm rounded-md border border-[#343B4F] whitespace-nowrap opacity-50">
      Latest NFT
    </button>
    <button className="px-4 py-2 text-[#AEB9E1] text-sm rounded-md border border-[#343B4F] hover:bg-[#1A233A] whitespace-nowrap opacity-50">
      Sold
    </button>
    <button className="px-4 py-2 text-[#AEB9E1] text-sm rounded-md border border-[#343B4F] hover:bg-[#1A233A] whitespace-nowrap opacity-50">
      My Creations
    </button>
    <button className="px-4 py-2 text-[#AEB9E1] text-sm rounded-md border border-[#343B4F] hover:bg-[#1A233A] whitespace-nowrap opacity-50">
      Drafts
    </button>
    <button className="px-4 py-2 text-[#AEB9E1] text-sm rounded-md border border-[#343B4F] hover:bg-[#1A233A] whitespace-nowrap opacity-50">
      Archived
    </button>
  </div>

  {/* Правый fade эффект */}
  <div className="fade-effect fade-effect-right"></div>
</div>
      </div>
  
            <div data-aos="fade-left" className="flex flex-col gap-5 bg-[#0B1739] p-4 rounded-lg sm20:h-[605px] sm75:h-[665px] sm25:h-[705px] sm20:w-[300px] sm75:w-[350px] sm25:w-[400px] border border-[#343B4F]">
              <div className="mb-4 relative">
                <img src="./images/avatars/pepe.png" alt="pepe" className="w-full h-full"/>
                <div className="absolute top-5 right-2">
                    <img src="./images/icons/more.png" alt="more" className="w-6 h-6"/>
                </div>
              </div>
              <div>
  
    
                <div className="flex items-center space-x-1">
                    <img src="./images/icons/tick.png" alt="tick" className="w-3 h-3" />
                    <p className="text-sm text-[#AEB9E1] fonts-mono500">Jdkn00</p>
                    </div>
        
                    {/* Название */}
                <div className="flex flex-col gap-4 w-full"> 
                <p className="text-[22px] text-white mt-1 text-left fonts-mono500">
                Pepe2077
                </p>
                <p className="text-[#AEB9E1] mt-1 text-left fonts-mono">
                A legendary cyber icon, known for his bold charisma
                </p>
                </div>
              </div>
              <div className="flex items-center flex-row justify-between  w-full fonts-mono">
                <p className="text-[#AEB9E1] text-xs">Generation hash:</p>
                <div className="text-[10px] bg-[#AEB9E133] opacity-50 text-[#E9EAF3] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[120px] h-8">
                    0xab...xyz789
                    <img src="./images/icons/copy.png" alt="copy" className="w-[14px] h-[14px]"/>
                </div>
               </div>
               <button
                        className="w-full h-14 text-white py-3 rounded-lg flex items-center justify-center text-lg"
                        style={{
                            background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)'
                        }}
                        >
                        Mint NFT →
                        </button>
            </div>
  
  
            <div data-aos="fade-right" className="bg-[#0B1739] p-4 rounded-lg flex flex-col gap-6 h-auto sm20:w-[300px] sm75:w-[350px] sm25:w-[400px] fonts-mono border border-[#343B4F] mt-8">
              <div className="relative flex flex-col gap-4 text-center">
              <div className="relative group">
                <div className="absolute right-0">
                    <img src="./images/icons/question.png" alt="question" className="w-6 h-6"/>
                </div>
                <div className="py-2 px-2 absolute top-8 left-[-6px] mt-2 sm20:w-[280px] sm75:w-[320px] sm25:w-[360px] h-auto p-4 rounded-lg bg-[#1A233A] text-[#AEB9E1] text-sm shadow-lg border border-[#343B4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
  A wallet is a digital tool that allows you to store, send, and receive cryptocurrencies and NFTs.
  </div>
                </div>
                <div className="">
                  <h2 className="text-2xl text-white mt-12">Characteristics</h2>
                  <p className="text-[#AEB9E1] mb-8">Features of Your NFT</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mx-auto">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center bg-[#0A1330] rounded-md w-[350px] sm20:w-[270px] sm75:w-[315px] sm25:w-[355px] border border-[#7E89AC3D] transition-all duration-300 overflow-hidden ${
            expandedCardIndex === index ? 'h-auto py-4' : 'h-20'
          }`}
          style={{ background: card.background }}
          onClick={() => toggleCard(index)}
        >
          <div className="flex items-center gap-4 px-4 relative">
  {/* Иконка */}
  <div className="w-16 h-16 flex-shrink-0">
    <img src={card.image} alt="Icon" className="w-[150px] full object-contain" />
  </div>

  {/* Контент */}
  <div className="flex flex-col text-left">
    <p className="text-sm text-[#AEB9E1]">{card.title}</p>
    <p className="text-lg text-white font-semibold leading-tight">{card.subtitle}</p>

    {expandedCardIndex === index && card.rarity && (
      <div className="mt-2">
        {/* Rarity и процент */}
        <div className="flex items-center gap-3 mb-2">
          <div className="text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[50px] h-8">
            {card.rarity}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#7E89AC]">Rarity</p>
            <img src="./images/icons/question.png" alt="question" className="w-5 h-5" />
          </div>
        </div>

        {/* Описание */}
        {card.description && (
          <div className="mt-2">
            <p className="text-white text-sm mb-1">Description</p>
            <p className="text-xs text-[#7E89AC] leading-tight">{card.description}</p>
          </div>
        )}
      </div>
    )}
  </div>

  {/* Иконка раскрытия */}
  <div className="absolute top-6 right-4 text-[#AEB9E1] hover:text-white">
  {expandedCardIndex === index ? (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )}
</div>

</div>

        </div>
      ))}
    </div>
            </div>
  
            <div data-aos="fade-left" className="mt-8 relative bg-[#0B1739] p-4 rounded-lg flex flex-col sm20:h-[830px] sm75:h-[870px] sm25:h-[920px] sm20:w-[300px] sm75:w-[350px] sm25:w-[400px] border border-[#343B4F] fonts-mono">
                <div className="relative group">
                <div className="absolute top-1 right-0">
                    <img src="./images/icons/question.png" alt="question" className="w-6 h-6"/>
                </div>
                <div className="py-2 px-2 absolute left-[-6px] sm20:w-[280px] sm75:w-[320px] sm25:w-[360px] h-auto p-4 rounded-lg bg-[#1A233A] text-[#AEB9E1] text-sm shadow-lg border border-[#343B4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
  A wallet is a digital tool that allows you to store, send, and receive cryptocurrencies and NFTs.
  </div>
                </div>
                <div className="relative flex flex-col gap-4 mb-8 mt-12">
                  
                    <h2 className="text-2xl text-white">Token Ratio</h2>
                    <p className="text-[#AEB9E1]">Your Top Tokens</p>
                    <div className="absolute right-0 text-lg bg-[#AEB9E133] opacity-50 text-[#E9EAF3] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-11 h-11">
                    <img src="./images/icons/download.png" alt="copy" className="w-4 h-4"/>
                </div>
                </div>
              <div className="w-full mb-12  flex justify-center items-center flex-col">
                <img src="./images/avatars/circle.png" alt="circlePepe" className="w-full h-full"/>
              </div>
             
              <div className="flex flex-col gap-3 mb-12">
              <div className="bg-transparent hover:opacity-80 sm20:w-[265px] sm75:w-[315px] sm25:w-[365px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
                <div className="flex flex-row gap-4 items-center">
                    <div className="h-2 w-2 rounded-full bg-[#CB3CFF]"></div>
                    <div className="flex flex-col">
                        <p className="text-lg text-white">PepeCoin</p>
                        <p className="text-sm text-[#AEB9E1]">Dominant token</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-white text-lg">55.9%</p>    
                </div>            
                </div>
                <div className="bg-transparent hover:opacity-80 sm20:w-[265px] sm75:w-[315px] sm25:w-[365px] sm75:w-[315px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
                <div className="flex flex-row gap-4 items-center">
                    <div className="h-2 w-2 rounded-full bg-[#0E43FB]"></div>
                    <div className="flex flex-col">
                        <p className="text-lg text-white">DogeCoin</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-white text-lg">37.0%</p>    
                </div>            
                </div>
                <div className="bg-transparent hover:opacity-80 sm20:w-[265px] sm75:w-[315px] sm25:w-[365px] h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
                <div className="flex flex-row gap-4 items-center">
                    <div className="h-2 w-2 rounded-full bg-[#00C2FF]"></div>
                    <div className="flex flex-col">
                        <p className="text-lg text-white">Shiba Inu</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-white text-lg">7.1%</p>    
                </div>            
                </div>
              </div>
              <div className="flex flex-col">
                    <p className="text-[#AEB9E1] text-lg">See All →</p>
                    <p className="text-[#AEB9E1] opacity-50 text-sm">+43 Other Tokens</p>
              </div>
            </div>
            <div className=" h-[650px] flex flex-col gap-4 fonts-mono">
              <div data-aos="fade-right" className="relative sm20:w-[300px] sm75:w-[350px] sm25:w-[400px] h-[180px] rounded-lg p-3 border border-[#343B4F] mt-8"
              style={{
                backgroundImage: "url('/images/backgrounds/crystal.png')",
                backgroundSize: "100%", // Уменьшение размера фона (например, 120% от исходного размера)
                backgroundPosition: "center", // Центрирование фона
                backgroundRepeat: "no-repeat"
              }}>
                <div className="flex flex-col gap-3 p-4">
                    <p className="text-lg text-[#AEB9E1]">Agent Rarity</p>
                    <p className="text-3xl text-white">Rare</p>
                    <div className="h-8 text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[96px]">
                    03-101-01
                    </div>
                    <div className="relative group">
                <div className="absolute top-[-140px] right-[-15px]">
                    <img src="./images/icons/question.png" alt="question" className="w-6 h-6"/>
                </div>
                <div className="py-2 px-2 absolute left-[-15px] top-[-110px] mt-2 sm20:w-[280px] sm75:w-[320px] sm25:w-[360px] h-auto p-4 rounded-lg bg-[#1A233A] text-[#AEB9E1] text-sm shadow-lg border border-[#343B4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
  A wallet is a digital tool that allows you to store, send, and receive cryptocurrencies and NFTs.
  </div>
                </div>
                </div>
              </div>
    
              <div data-aos="fade-left" className="h-[400px] sm20:w-[300px] sm75:w-[350px] sm25:w-[400px] rounded-lg border border-[#343B4F] flex flex-col items-center justify-center gap-3 mt-8"
              style={{
                backgroundImage: "url('/images/backgrounds/stars.png')",
                backgroundSize: "100%", // Уменьшение размера фона (например, 120% от исходного размера) // Центрирование фона
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}>
                <h2 className="text-[28px] text-white">Boost Rarity</h2>
                <div className="h-8 text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[65px]">
                    Soon
                </div>
              </div>
            </div>
          <FooterMobile />
            </div>
          )}
        </div>)
    :
    (  <div className="p-6 space-y-6 bg-[#0A1330] h-full fonts-mono">
        {/* Header */}
        <div className="relative flex justify-between items-center mb-14 xl40:w-[1140px] 2xl:w-full">
          <h1 className="text-3xl fonts-mono500 text-white">My tokens</h1>
          <p className="text-lg text-[#AEB9E1] fonts-mono">/ Overview</p>
          <div className="absolute w-full bottom-[-30px] h-[1px] bg-[#FFFFFF] opacity-20"></div>
        </div>
  
        {/* Tabs */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg border border-[#AEB9E1] bg-[#AEB9E13D] text-[#AEB9E1] w-40">Latest NFT</button>
          <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] hover:bg-[#AEB9E13D] w-32 text-[#AEB9E1] opacity-50">Gallery</button>
          <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-24 text-[#AEB9E1] hover:bg-[#AEB9E13D] opacity-50">Sold</button>
          <button className="px-4 py-2 rounded-lg border border-gray-600 bg-[#AEB9E103] w-44 text-[#AEB9E1] hover:bg-[#AEB9E13D] opacity-50">My Creations</button>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-row gap-4">
          {/* NFT Card */}
          <div
  data-aos="fade-up"
  className="flex flex-col gap-5 bg-[#0B1739] p-4 rounded-lg 2xl:h-[680px] xl:h-[680px] xl40:h-[670px] w-[440px] border border-[#343B4F] 2xl:w-[380px] xl:w-[340px] xl40:w-[320px] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#1E2B4D] duration-300"
> 
  <div className="mb-4">
              <img src="./images/avatars/pepe.png" alt="pepe" className="w-full h-full"/>
            </div>
            <div className="relative">
  
              <div className="absolute right-0">
                  <img src="./images/icons/more.png" alt="more" className="w-6 h-6"/>
              </div>
  
              <div className="flex items-center space-x-1">
                  <img src="./images/icons/tick.png" alt="tick" className="w-4 h-4" />
                  <p className="text-lg text-[#AEB9E1] fonts-mono500">Jdkn00</p>
                  </div>
      
                  {/* Название */}
              <div className="flex flex-col gap-4"> 
              <p className="text-3xl text-white mt-1 text-left fonts-mono500">
              Pepe2077
              </p>
              <p className="text-lg text-[#AEB9E1] mt-1 text-left fonts-mono 2xl:w-[320px]">
              A legendary cyber icon, known for his bold charisma
              </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 w-full fonts-mono">
              <p className="text-[#AEB9E1] 2xl:text-lg xl40:text-base">Generation hash:</p>
              <div className="text-base bg-[#AEB9E133] opacity-50 text-[#E9EAF3] flex items-center justify-around rounded-md border border-[#7E89AC] 2xl:w-[190px] xl40:text-xs xl40:w-[120px] xl40:h-6" >
                  0xab...xyz789
                  <img src="./images/icons/copy.png" alt="copy" className="w-5 h-5 xl40:w-4 xl40:h-4"/>
              </div>
             </div>
             {/* <button
                      className="w-[155px] h-14 text-white py-3 rounded-lg flex items-center justify-center text-lg"
                      style={{
                          background: 'linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%)'
                      }}
                      >
                      Mint NFT →
                      </button> */}
          </div>
  
          {/* Characteristics */}
          <div data-aos="fade-down"className="transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#1E2B4D] duration-300 bg-[#0B1739] p-6 z-10 rounded-lg flex flex-col 2xl:gap-6 2xl:h-[680px] xl:h-[680px] xl40:h-auto w-[405px] fonts-mono border border-[#343B4F] 2xl:w-[405px] xl40:w-[300px]">
            <div className="relative flex flex-col gap-4">
              <h2 className="text-lg text-white">Characteristics</h2>
              <p className="text-[#AEB9E1]">Features of Your NFT</p>
              <div className=" group"> 
              <div className="absolute right-0 top-0">
                  <img src="./images/icons/question.png" alt="question" className="w-6 h-6"/>
              </div>
              <div className="py-2 px-2 absolute left-40 top-[-100px] mt-2 xl40:w-[320px] 2xl:w-[360px] h-auto p-4 rounded-lg bg-[#1A233A] text-[#AEB9E1] text-sm shadow-lg border border-[#343B4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
  A wallet is a digital tool that allows you to store, send, and receive cryptocurrencies and NFTs. 
  </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 items-center mt-4">
            {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
            </div> */}
            <div className="flex flex-col gap-4 mx-auto">
  {cardsData.map((card, index) => (
    <div
      key={index}
      className={`flex flex-col justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#1E2B4D] duration-300 bg-[#0A1330] rounded-md 2xl:w-[360px] xl40:w-[260px] border border-[#7E89AC3D] transition-all duration-300 overflow-hidden ${
        expandedCardIndex === index ? 'h-auto py-4' : 'h-20'
      }`}
      style={{ background: card.background }}
      onClick={() => toggleCard(index)}
    >
      <div className="flex items-center gap-4 px-4 relative">
        {/* Иконка */}
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src={card.image}
            alt="Icon"
            className="w-[150px] object-contain transition-opacity duration-300"
            style={{
              opacity: expandedCardIndex === index ? 1 : 0.8,
            }}
          />
        </div>

        {/* Контент */}
        <div
          className={`flex flex-col text-left transition-all duration-300 ${
            expandedCardIndex === index ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <p className="text-sm text-[#AEB9E1]">{card.title}</p>
          <p className="text-lg text-white font-semibold leading-tight">{card.subtitle}</p>

          {expandedCardIndex === index && card.rarity && (
            <div className="mt-2">
              {/* Rarity и процент */}
              <div className="flex items-center gap-3 mb-2">
                <div className="text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[50px] h-8">
                  {card.rarity}
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-[#7E89AC]">Rarity</p>
                  <img src="./images/icons/question.png" alt="question" className="w-5 h-5" />
                </div>
              </div>

              {/* Описание */}
              {card.description && (
                <div className="mt-2">
                  <p className="text-white text-sm mb-1">Description</p>
                  <p className="text-xs text-[#7E89AC] leading-tight">{card.description}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Иконка раскрытия */}
        <div className="absolute top-6 right-4 text-[#AEB9E1] hover:text-white">
          {expandedCardIndex === index ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
  
          {/* Token Ratio */}
          <div data-aos="fade-up"className="transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#1E2B4D] duration-300 bg-[#0B1739] z-0 p-6 rounded-lg flex flex-col 2xl:h-[680px] xl:h-[680px] xl40:h-[670px] w-[320px] 2xl:w-[350px] xl:w-[320px] xl40:w-[260px] border border-[#343B4F] fonts-mono">
              <div className="relative flex flex-col gap-4 mb-8">
                  <h2 className="text-lg text-white">Token ratio</h2>
                  <p className="text-[#AEB9E1]">Your Top Tokens</p>
                  <div className="h-8 absolute right-0 2xl:text-lg xl40:text-sm bg-[#AEB9E133] opacity-50 text-[#E9EAF3] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] xl40:w-[80px] 2xl:w-[110px] ">
                  Export
                  <img src="./images/icons/download.png" alt="copy" className="w-4 h-4"/>
              </div>
              </div>
              <div className="w-full h-[250px] mb-4 flex justify-center items-center flex-col">
                <img src="./images/avatars/circle.png" alt="circlePepe" width={209} height={209} />
              </div>
              {/* <div className="flex justify-center items-center flex-col"> 
      <img
        src="./images/avatars/circle.png" // Замените на ваш путь к изображению
        alt="Central Image"
        className="absolute w-[200px] h-[200px]"
      />
    </div> */}
           
            <div className="flex flex-col gap-3 mb-12">
            <div className="hover:bg-[#AEB9E114] 2xl:w-[265px] xl40:w-56 h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
              <div className="flex flex-row gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#CB3CFF]"></div>
                  <div className="flex flex-col">
                      <p className="text-lg text-white">PepeCoin</p>
                      <p className="2xl:text-sm text-[#AEB9E1] xl40:text-xs">Dominant token</p>
                  </div>
              </div>
              <div className="flex flex-row items-center">
                  <p className="text-white text-lg">55.9%</p>    
              </div>            
              </div>
              <div className="hover:bg-[#AEB9E114] 2xl:w-[265px] xl40:w-56 h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
              <div className="flex flex-row gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#0E43FB]"></div>
                  <div className="flex flex-col">
                      <p className="text-lg text-white">DogeCoin</p>
                  </div>
              </div>
              <div className="flex flex-row items-center">
                  <p className="text-white text-lg">37.0%</p>    
              </div>            
              </div>
              <div className="hover:bg-[#AEB9E114] 2xl:w-[265px] xl40:w-56 h-16 p-4 rounded-md flex flex-row justify-between items-center border border-[#FFFFFF3D]">
              <div className="flex flex-row gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-[#00C2FF]"></div>
                  <div className="flex flex-col">
                      <p className="text-lg text-white">Shiba Inu</p>
                  </div>
              </div>
              <div className="flex flex-row items-center">
                  <p className="text-white text-lg">7.1%</p>    
              </div>            
              </div>
            </div>
            <div className="flex flex-col xl40:mt-[-30px]">
                  <p className="text-[#AEB9E1] text-lg xl40:text-base hover:opacity-80">See All →</p>
                  <p className="text-[#AEB9E1] opacity-50 xl40:text-sm">+43 Other Tokens</p>
            </div>
          </div>
  
          {/* Agent Rarity */}
          <div data-aos="fade-down"className=" 2xl:h-[680px] xl:h-[680px] xl40:h-[670px] w-[280px] flex flex-col gap-4 fonts-mono">
            <div className="transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#1E2B4D] duration-300 relative 2xl:w-[320px] h-[180px] xl40:w-[220px] rounded-lg p-3 border border-[#343B4F]"
            style={{
              backgroundImage: "url('/images/backgrounds/crystal.png')",
              backgroundSize: backgroundSize, // Уменьшение размера фона (например, 120% от исходного размера)
              backgroundPosition: "center", // Центрирование фона
              backgroundRepeat: "no-repeat"
            }}>
              <div className="flex flex-col gap-3 p-4">
                  <p className="text-lg text-[#AEB9E1]">Agent Rarity</p>
                  <p className="text-3xl text-white">Rare</p>
                  <div className="h-8 text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[96px]">
                  03-101-01
                  </div>
                  <div className=" group"> 
              <div className="absolute right-3 top-3">
                  <img src="./images/icons/question.png" alt="question" className="w-6 h-6"/>
              </div>
              <div className="py-2 px-2 absolute right-2 top-[-80px] mt-2 xl40:w-[320px] 2xl:w-[360px] h-auto p-4 rounded-lg bg-[#1A233A] text-[#AEB9E1] text-sm shadow-lg border border-[#343B4F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
  A wallet is a digital tool that allows you to store, send, and receive cryptocurrencies and NFTs. 
  </div>
              </div></div>
            </div>
  
            <div className="transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#1E2B4D] duration-300 2xl:h-[550px] xl40:h-[473px] 2xl:w-[320px] xl40:w-[220px] rounded-lg border border-[#343B4F] flex flex-col items-center justify-center gap-3"
            style={{
              backgroundImage: "url('/images/backgrounds/stars.png')",
              backgroundSize: backgroundSize, // Уменьшение размера фона (например, 120% от исходного размера) // Центрирование фона
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <h2 className="text-[28px] text-white">Boost Rarity</h2>
              <div className="h-8 text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[65px]">
                  Soon
              </div>
            </div>
          </div>
        </div>
      </div>)
    }
  </div>
  );
};

export default MyTokens;
