import { motion } from "framer-motion";
import {useState, useEffect} from 'react';
import hero from '../assets/desktop/Hero.svg'
import tick from '../assets/desktop/Icon.png'
import berg from "../assets/desktop/berg.png"
import disney from "../assets/desktop/disney.png"
import forbes from "../assets/desktop/forbes.png"
import gorilla from "../assets/desktop/gorilla.png"
import bigroup from "../assets/desktop/bigroup.png"
import jusanbank from "../assets/desktop/jusanbank.png"
import gold from "../assets/desktop/gold.png"
import weproject from "../assets/desktop/weproject.png"
import capital from "../assets/desktop/capital.png"
import motiva from "../assets/desktop/motiva.png"
import astanahub from "../assets/desktop/astanahub.png"

import r1 from "../assets/desktop/r1.svg"
import r2 from "../assets/desktop/r2.svg"
import r3 from "../assets/desktop/r3.svg"
import r4 from "../assets/desktop/r4.svg"

const logos = [
    { src: berg, alt: "berg", height: "h-[47px]" },
    { src: disney, alt: "disney", height: "h-[38px]" },
    { src: forbes, alt: "forbes", height: "h-[25px]" },
    { src: gorilla, alt: "gorilla", height: "h-[63px]" },
    { src: bigroup, alt: "bigroup", height: "h-[40px]" },
    { src: jusanbank, alt: "jusanbank", height: "h-[38px]" },
    { src: gold, alt: "gold", height: "h-[56px]" },
    { src: weproject, alt: "weporject", height: "h-10" },
    { src: capital, alt: "capital", height: "h-[32px]" },
    { src: motiva, alt: "motiva", height: "h-10" },
    { src: astanahub, alt: "astanahub", height: "h-[42px]" },
  ];
  const floatingAnimation = {
    y: [0, -5, 5, 0], // Двигаемся вверх-вниз
    x: [0, 3, -3, 0], // Немного смещаем в стороны
    transition: {
      duration: 24, // Очень медленная анимация (6 секунд)
      ease: "easeInOut",
      repeat: Infinity, // Бесконечный повтор
    }
  };

const HeroDesktop = () => {
    return (
        <div className="font-ppneue flex flex-col w-[85%] items-center mt-[68px]">
            <div className="relative">
                <img src={hero} alt="hero" />
                <motion.img
          src={r1} 
          alt="r1"
          className="absolute top-28 left-24"
          animate={floatingAnimation}
        />

        {/* R2 */}
        <motion.img
          src={r2}
          alt="r2"
          className="absolute top-48 right-[376px]"
          animate={floatingAnimation}
        />

        {/* R3 */}
        <motion.img
          src={r3}
          alt="r3"
          className="absolute top-14 left-[480px]"
          animate={floatingAnimation}
        />

        {/* R4 */}
        <motion.img
          src={r4}
          alt="r4"
          className="absolute top-44 right-2"
          animate={floatingAnimation}
        />
            </div>
            <div className="flex flex-row max-w-[1200px] w-full justify-between">
                <div className="flex flex-col gap-3 mt-12 font-book">
                    <div className="flex flex-row gap-3 rounded-2xl w-[183px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src={tick} alt="Icon"  className="h-6 w-6"/>
                        <p>Unlimited requests</p>
                    </div>
                    <div className="flex flex-row gap-3 rounded-2xl w-[176px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src={tick} alt="Icon"  className="h-6 w-6"/>
                        <p>Fixed monthly fee</p>
                    </div>
                    <div className="flex flex-row gap-3 rounded-2xl w-[226px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src={tick} alt="Icon"  className="h-6 w-6"/>
                        <p>Pause or cancel any time</p>
                    </div>
                </div>
                <div className="flex gap-2 flex-row font-medium text-lg mt-9">
                    <button className=" bg-[#1261FC] text-white rounded-lg w-[176px] h-12"
                     onClick={() => {
                        const element = document.getElementById("recentProjects");
                        if (element) {
                          const offset = 100;
                          const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                          window.scrollTo({ top: elementPosition, behavior: "smooth" });
                        }
                      }}>
                        View Portfolio
                    </button>
                    <button className="bg-transparent border border-[#1261FC] text-[#1261FC] rounded-lg w-[184px] h-12"
                    onClick={() => {
                        const element = document.getElementById("form-section");
                        if (element) {
                          const offset = 100;
                          const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                          window.scrollTo({ top: elementPosition, behavior: "smooth" });
                        }
                      }}>
                        Get a Proposal
                    </button>
                </div>
                <div>
                    <div className="flex flex-col gap-5 mt-9">
                        <h1 className="font-medium text-[34px] leading-[37px]">
                            Web design and Content<br /> That Skyrocket Your Business
                        </h1>
                        <p className="text-[#090C21] font-book text-lg">
                            Get your first task done for free in 24 hours
                        </p>
                    </div>
                    <div className="relative max-w-[478px] w-full overflow-hidden mt-10">
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10"></div>
                
                <div className="flex items-center animate-scroll gap-6">
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
                </div>
            </div>
        </div>
    );
};

export default HeroDesktop;
