import { motion } from "framer-motion";
import {useState, useEffect} from 'react';
import hero from '../assets/desktop/Hero.svg'
import ready from '../assets/desktop/ready.svg'
const logos = [
    { src: "./images/icons/berg.png", alt: "berg", height: "h-[47px]" },
    { src: "./images/icons/disney.png", alt: "disney", height: "h-[38px]" },
    { src: "./images/icons/forbes.png", alt: "forbes", height: "h-[25px]" },
    { src: "./images/icons/gorilla.png", alt: "gorilla", height: "h-[63px]" },
    { src: "./images/icons/bigroup.png", alt: "bigroup", height: "h-[40px]" },
    { src: "./images/icons/jusanbank.png", alt: "jusanbank", height: "h-[38px]" },
    { src: "./images/icons/gold.png", alt: "gold", height: "h-[56px]" },
    { src: "./images/icons/weproject.png", alt: "weporject", height: "h-10" },
    { src: "./images/icons/capital.png", alt: "capital", height: "h-[32px]" },
    { src: "./images/icons/motiva.png", alt: "motiva", height: "h-10" },
    { src: "./images/icons/astanahub.png", alt: "astanahub", height: "h-[42px]" },
    { src: "./images/icons/team.png", alt: "team", height: "h-[52px]" },
  ];

  const avatars = [
    "/images/icons/1.svg",
    "/images/icons/3.svg",
    "/images/icons/2.svg",
    "/images/icons/4.svg",
  ];

const HeroDesktop = () => {

    return (
        <div className="font-ppneue flex flex-col w-[85%] items-center mt-[68px]">
            <div>
                <img src={hero} alt="hero" />
            </div>
            <div className="flex flex-row max-w-[1200px] w-full justify-between">
                <div className="flex flex-col gap-3 mt-12 font-book">
                    <div className="flex flex-row gap-3 rounded-2xl w-[183px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                        <p>Unlimited requests</p>
                    </div>
                    <div className="flex flex-row gap-3 rounded-2xl w-[176px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                        <p>Fixed monthly fee</p>
                    </div>
                    <div className="flex flex-row gap-3 rounded-2xl w-[226px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                        <p>Pause or cancel any time</p>
                    </div>
                </div>
                <div className="flex gap-2 flex-row font-medium text-lg mt-9">
                    <button className=" bg-[#1261FC] text-white rounded-lg w-[176px] h-12">
                        View Portfolio
                    </button>
                    <button className="bg-transparent border border-[#1261FC] text-[#1261FC] rounded-lg w-[184px] h-12">
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
                </div>
            </div>
        </div>
    );
};

export default HeroDesktop;
