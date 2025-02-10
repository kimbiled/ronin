"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import antix from "../assets/mobile/antix.svg"
import disney from "../assets/mobile/disney.svg"
import forbes from "../assets/mobile/forbes.svg"
import gorilla from "../assets/mobile/gorilla.svg"
import bigroup from "../assets/mobile/bigroup.svg"
import jusanbank from "../assets/mobile/jusanbank.svg"
import weproject from "../assets/mobile/weproject.svg"
import capital from "../assets/mobile/capital.svg"
import motiva from "../assets/mobile/motiva.svg"
import astanahub from "../assets/mobile/astanahub.svg"

import i1 from '../assets/mobile/1.png'
import i2 from '../assets/mobile/2.png'
import i3 from '../assets/mobile/3.png'
import i4 from '../assets/mobile/4.png'
import i5 from '../assets/mobile/5.png'

import stars from '../assets/mobile/Stars.png'

const avatars = [
  i1,
  i4,
  i2,
  i3,
  i5,
];

const logos = [
   antix,
   disney,
   forbes,
   gorilla,
   bigroup,
   jusanbank,
   weproject,
   capital,
   motiva,
   astanahub,
  ];

const Review = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("reviews");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    setInView(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % logos.length); // Переключаем логотипы
      }, 2000); // Менять каждые 2 секунды
  
      return () => clearInterval(interval);
    }, []);
  

    return (
        <div id="reviews" className="font-ppneue flex flex-col w-[85%] mx-auto mt-8">
            <div className="flex flex-row items-center gap-4">
                <p className="font-medium sm25:text-[38px] sm75:text-[32px] sm20:text-[24px] text-[#1261FC]">100+ 5 Star</p>
                <img src={stars} alt="stars" className="w-32 h-[18px]"/>
            </div>
            <section id="reviews">
            <div className="flex flex-row items-center gap-4">
            <p className="font-medium sm25:text-[38px] sm75:text-[32px] sm20:text-[24px] text-[#1261FC]">
                Reviews
            </p>
            <div className="mt-1 flex flex-row items-center">
                {avatars.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Avatar${index + 1}`}
                        className="w-11 h-11 rounded-full border-2 border-white ml-[-10px]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {opacity:1}}
                        transition={{ delay: index * 0.3, duration: 0.5 }}
                    />
                ))}
            </div>
        </div>
            </section>
            <div className="flex flex-row items-center gap-4">
                <p className="font-medium sm25:text-[38px] sm75:text-[32px]  sm20:text-[24px] text-[#090C21]">& 859 Completed</p>
            </div>
            <div className="flex flex-row items-center gap-4">
            <button className="h-10 w-48 border border-[#090C21] rounded-md overflow-hidden flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                    <motion.img
                    key={index}
                    src={logos[index]}
                    alt="logo"
                    className="absolute"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </button>
                <p className="font-medium sm25:text-[38px] sm75:text-[32px]  sm20:text-[24px] text-[#090C21]">Projects</p>
            </div>
        </div>
    );
};

export default Review;
