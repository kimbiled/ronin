
import { useEffect, useState, useRef } from "react";
import arrow from '../assets/icons/45deg.svg'
import threeD from '../assets/icons/3d.svg'
import logoPhone from '../assets/icons/logoPhone.svg'
import stars from '../assets/icons/Stars.png'
import { motion } from "framer-motion";
const logos = [
    { src: "./images/icons/berg.png", alt: "berg", height: "h-[28px]" },
    { src: "./images/icons/disney.png", alt: "disney", height: "h-[32px]" },
    { src: "./images/icons/forbes.png", alt: "forbes", height: "h-[21px]" },
    { src: "./images/icons/gorilla.png", alt: "gorilla", height: "h-[41px]" },
    { src: "./images/icons/bigroup.png", alt: "bigroup", height: "h-[31px]" },
    { src: "./images/icons/jusanbank.png", alt: "jusanbank", height: "h-[31px]" },
    { src: "./images/icons/gold.png", alt: "gold", height: "h-[38px]" },
    { src: "./images/icons/weproject.png", alt: "weporject", height: "h-9" },
    { src: "./images/icons/capital.png", alt: "capital", height: "h-[20px]" },
    { src: "./images/icons/motiva.png", alt: "motiva", height: "h-[38px]" },
    { src: "./images/icons/astanahub.png", alt: "astanahub", height: "h-[27px]" },
    { src: "./images/icons/team.png", alt: "team", height: "h-[40px]" },
  ];


const Leaders = () => {
    const [counter, setCounter] = useState(829);
    const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsCounting(true);
              observer.disconnect(); // Отключаем после первого появления
            }
          },
          { threshold: 0.5 } // Запускаем, когда 50% блока в зоне видимости
        );
    
        if (counterRef.current) {
          observer.observe(counterRef.current);
        }
    
        return () => observer.disconnect();
      }, []);
    
      useEffect(() => {
        if (!isCounting) return;
    
        const start = 829;
        const end = 859;
        let currentValue = start;
    
        const updateCounter = () => {
          if (currentValue < end) {
            currentValue++;
            setCounter(currentValue);
    
            const delay = 50 + Math.pow(currentValue - start, 2);
            setTimeout(updateCounter, delay);
          }
        };
    
        updateCounter();
      }, [isCounting]);

    return (
        <div ref={counterRef} className="font-ppneue flex flex-col w-[85%] mx-auto gap-8 mb-16">
            <div className="flex flex-col text-center mt-12 items-center">
                <p className="sm25:text-[40px] sm75:text-[40px] sm20:text-[36px] font-medium leading-[48px]"><span className="text-[#1261FC]">Trusted </span>by<br />
                Industry Leaders </p>
            </div>
            <div className="relative flex flex-col mt-[26px] items-center">
                <div className="w-[345px] bg-[#F7F7F6] h-[339px] p-6 rounded-3xl flex flex-col justify-between">
                    <p className="text-[80px] font-medium leading-[94px]">{counter}</p>
                    <motion.img 
                        src={threeD} 
                        alt="3D"
                        className="absolute -top-14 -right-10"
                        animate={{ x: [-10, 10, -10] }} // Двигаем влево и вправо
                        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        />
                    <div className="flex justify-end items-center gap-3 mt-auto">
                    <p className="text-right font-medium uppercase leading-tight text-[14px]">
                        Projects completed<br /> successfully
                    </p>
                    <div className="h-12 w-12 bg-[#1261FC] rounded-lg flex justify-center items-center">
                        <img src={arrow} alt="arrow-45deg" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10"></div>
                
                <div className="flex items-center animate-scroll gap-8">
                    {[...logos, ...logos].map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className={`w-auto ${logo.height}`}
                    />
                    ))}
                </div>
            </div>
            <div className="flex flex-col mt-7">
                <p className="mb-4 font-book text-lg text-[#9CA3AF]">Clients trust us</p>
                <div className="flex flex-row gap-3">
                    <div>
                        <img src={logoPhone} alt="logoPhone" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <img src={stars} alt="stars" className="w-[76px] h-3"/> 
                        <div className="flex flex-row justify-center gap-2">
                        <p className="font-book">Rating 5</p>
                        <span> · </span>
                        <span>100+ reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaders;
