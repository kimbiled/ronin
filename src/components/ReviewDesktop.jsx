"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import p1 from  "../assets/desktop/1.svg";
import p2 from  "../assets/desktop/4.svg";
import p3 from  "../assets/desktop/2.svg";
import p4 from  "../assets/desktop/3.svg";
import p5 from  "../assets/desktop/5.svg";
import p6 from  "../assets/desktop/6.svg";

const avatars = [
  p1, p2, p3, p4, p5, p6
];

const logos = [
    "./images/icons/antix.svg",
    "./images/icons/drberg.svg",
    "./images/icons/disney.svg",
    "./images/icons/forbes.svg",
    "./images/icons/gorilla.svg",
    "./images/icons/bigroup.svg",
    "./images/icons/jusanbank.svg",
    "./images/icons/weproject.svg",
    "./images/icons/capital.svg",
    "./images/icons/motiva.svg",
    "./images/icons/astanahub.svg",
  ];

  const logoSizes = {
    "./images/icons/antix.svg": { width: "156px", height: "58px" },
    "./images/icons/drberg.svg": { width: "150px", height: "58px" },
    "./images/icons/disney.svg": { width: "150px", height: "58px" },
    "./images/icons/forbes.svg": { width: "120px", height: "58px" },
    "./images/icons/gorilla.svg": { width: "80px", height: "58px" },
    "./images/icons/bigroup.svg": { width: "125px",height: "58px" },
    "./images/icons/jusanbank.svg": { width: "150px",height: "58px" },
    "./images/icons/weproject.svg": { width: "135px", height: "58px" },
    "./images/icons/capital.svg": { width: "150px", height: "58px" },
    "./images/icons/motiva.svg": { width: "120px", height: "58px" },
    "./images/icons/astanahub.svg": { width: "150px", height: "58px" },
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
            key={logos[index]}
            src={logos[index]}
            alt="logo"
            className="absolute"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              width: logoSizes[logos[index]]?.width ,
              height: logoSizes[logos[index]]?.height ,
            }}
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
