import { useRef, useEffect, useState } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";
import { motion, AnimatePresence } from "framer-motion";

import p1 from "../assets/desktop/1.svg";
import p2 from "../assets/desktop/4.svg";
import p3 from "../assets/desktop/2.svg";
import p4 from "../assets/desktop/3.svg";
import p5 from "../assets/desktop/5.svg";

import berg from "../assets/desktop/drberg.svg";
import disney from "../assets/desktop/disney.svg";
import forbes from "../assets/desktop/forbes.svg";
import gorilla from "../assets/desktop/gorilla.svg";
import bigroup from "../assets/desktop/bigroup.svg";
import jusanbank from "../assets/desktop/jusanbank.svg";
import antix from "../assets/desktop/antix.svg";
import weproject from "../assets/desktop/weproject.svg";
import capital from "../assets/desktop/capital.svg";
import motiva from "../assets/desktop/motiva.svg";
import astanahub from "../assets/desktop/astanahub.svg";


const avatars = [p1, p2, p3, p4, p5];

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
  { key: "astanahub", src: astanahub },
];

const ReviewDesktop = () => {
  const [inView, setInView] = useState(false);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter < 95) {
          setCount((prev) => prev + 1);
          counter++;
        } else {
          clearInterval(interval);
        }
      }, 60);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div id="reviews" className="font-ppneue flex flex-col w-[85%] items-center mt-[200px] uppercase">
      <div className="flex flex-col max-w-[1200px] w-full justify-center">
        <p className="font-medium text-[128px] text-[#1261FC] leading-none text-left">
          100+ 5 Star
        </p>
        <div className="flex flex-row items-center ml-52 gap-4">
          <p className="font-medium text-[128px] text-[#1261FC] leading-none">Reviews</p>
          <div className="flex -space-x-4">
            {avatars.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Avatar${index + 1}`}
                className="w-[74px] h-[74px] rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
              />
            ))}
            {/* Вместо p6 используем div с счетчиком */}
            <motion.div
              className="w-[74px] h-[74px] bg-black rounded-full flex items-center justify-center text-white text-[24px] font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 1 }}
              transition={{ delay: avatars.length * 0.2, duration: 0.4 }}
            >
              +{count}
            </motion.div>
          </div>
        </div>
        <p className="font-medium text-[128px] text-[#090C21] leading-none">& 859 Completed</p>

        {/* Кнопка и логотипы */}
        <div className="flex flex-row items-center justify-center gap-6">
          <button
            className="h-[90px] w-[515px] border border-[#090C21] rounded-[18px] overflow-hidden flex items-center justify-center relative"
            onClick={() =>
              window.location.href = "https://drive.google.com/file/d/1FizTso9ZKKUooa-Rl6n0Sz6khVYuJCa1/view?usp=sharing"
            }
          >
            <AnimatePresence mode="wait">
              {logos[index] && (
                <motion.img
                  key={logos[index].key}
                  src={logos[index].src}
                  alt="logo"
                  className="absolute w-[150px] h-[58px]"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </button>
          <p className="font-medium text-[128px] text-[#090C21] leading-none">Projects</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDesktop;