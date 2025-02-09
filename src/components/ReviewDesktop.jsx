"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import p1 from  "../assets/desktop/1.svg";
import p2 from  "../assets/desktop/4.svg";
import p3 from  "../assets/desktop/2.svg";
import p4 from  "../assets/desktop/3.svg";
import p5 from  "../assets/desktop/5.svg";
import p6 from  "../assets/desktop/6.svg";

import berg from "../assets/desktop/drberg.svg"
import disney from "../assets/desktop/disney.svg"
import forbes from "../assets/desktop/forbes.svg"
import gorilla from "../assets/desktop/gorilla.svg"
import bigroup from "../assets/desktop/bigroup.svg"
import jusanbank from "../assets/desktop/jusanbank.svg"
import antix from "../assets/desktop/antix.svg"
import weproject from "../assets/desktop/weproject.svg"
import capital from "../assets/desktop/capital.svg"
import motiva from "../assets/desktop/motiva.svg"
import astanahub from "../assets/desktop/astanahub.svg"

const avatars = [
  p1, p2, p3, p4, p5, p6
];

const logos = [
    { key: "antix", src: antix },
    { key: "berg", src: berg },
    { key: "disney", src: disney },
    { key: "forbes", src: forbes },
    { key: "gorilla", src: gorilla },
    { key: "bigroup", src: bigroup },
    { key: "jusanbank", src: jusanbank },
    { key: "weproject", src: weproject },
    { key: "capital", src: capital },
    { key: "motiva", src: motiva },
    { key: "astanahub", src: astanahub }
 ];
  const logoSizes = {
    antix: { width: "w-[156px]", height: "h-[58px]" },
    berg: { width: "w-[150px]", height: "h-[58px]" },
    disney: { width: "w-[150px]", height: "h-[58px]" },
    forbes: { width: "w-[120px]", height: "h-[58px]" },
    gorilla: { width: "w-[80px]", height: "h-[58px]" },
    bigroup: { width: "w-[125px]", height: "h-[58px]" },
    jusanbank: { width: "w-[150px]", height: "h-[58px]" },
    weproject: { width: "w-[135px]", height: "h-[58px]" },
    capital: { width: "w-[150px]", height: "h-[58px]" },
    motiva: { width: "w-[120px]", height: "h-[58px]" },
    astanahub: { width: "w-[150px]", height: "h-[58px]" },
  };




const ReviewDesktop = () => {
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
        <div id="reviews" className="font-ppneue flex flex-col w-[85%] items-center mt-[200px] uppercase">
            <div className="flex flex-col max-w-[1200px] w-full justify-center">
                <p className="font-medium text-[128px] text-[#1261FC] leading-none text-left">
                    100+ 5 Star
                </p>
                <div className="flex flex-row items-center ml-52 gap-4">
                    <p className="font-medium text-[128px] text-[#1261FC] leading-none">
                        Reviews
                    </p>
                    <div className="flex -space-x-4">
                        {avatars.map((src, index) => (
                            <motion.img
                                key={index}
                                src={src}
                                alt={`Avatar${index + 1}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {opacity:1}}
                                transition={{ delay: index * 0.2, duration: 0.4 }}
                            />
                        ))}
                    </div>
                </div>
                <p className="font-medium text-[128px] text-[#090C21] leading-none">
                    & 859 Completed
                </p>
                <div className="flex flex-row items-center justify-center gap-6">
                    <button className="h-[90px] w-[515px] border border-[#090C21] rounded-[18px] overflow-hidden flex items-center justify-center relative" onClick={() => window.location.href = "https://drive.google.com/file/d/1FizTso9ZKKUooa-Rl6n0Sz6khVYuJCa1/view?usp=sharing"}>
                        <AnimatePresence mode="wait">
        {logos[index] && (
          <motion.img
          key={logos[index].key}
          src={logos[index].src}
            alt="logo"
            className={`absolute ${logoSizes[logos[index].key]?.width} ${logoSizes[logos[index].key]?.height}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
                    </button>
                    <p className="font-medium text-[128px] text-[#090C21] leading-none">
                        Projects
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDesktop;
