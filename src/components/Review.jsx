"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const avatars = [
  "/images/icons/1.png",
  "/images/icons/4.png",
  "/images/icons/2.png",
  "/images/icons/3.png",
  "/images/icons/5.png",
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

    return (
        <div id="reviews" className="flex flex-col w-[85%] mx-auto mt-8">
            <div className="flex flex-row items-center gap-4">
                <p className="font-medium sm25:text-[38px] sm75:text-[32px] sm20:text-[24px] text-[#1261FC]">100+ 5 Star</p>
                <img src="./images/icons/Stars.png" alt="stars" className="w-32 h-[18px]"/>
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
                <button className="h-10 w-48 border border-[#090C21] rounded-md">
                    <img src="./images/icons/antix.png" alt="antix" className="w-16 h-6 mx-auto"/>
                </button>
                <p className="font-medium sm25:text-[38px] sm75:text-[32px]  sm20:text-[24px] text-[#090C21]">Projects</p>
            </div>
        </div>
    );
};

export default Review;
