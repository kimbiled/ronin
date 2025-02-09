import { useState } from "react";
import p1 from "../assets/desktop/p1.svg";
import p2 from "../assets/desktop/p2.svg";
import p3 from "../assets/desktop/p3.svg";
import p4 from "../assets/desktop/p4.svg";
import p5 from "../assets/desktop/p5.svg";
import p6 from "../assets/desktop/p6.svg";
import p7 from "../assets/desktop/p7.svg";
import p8 from "../assets/desktop/p8.svg";
import p9 from "../assets/desktop/p9.svg";
import p11 from "../assets/desktop/p11.svg";
import p22 from "../assets/desktop/p22.svg";
import p33 from "../assets/desktop/p33.svg";
import p55 from "../assets/desktop/p55.svg";
import p66 from "../assets/desktop/p66.svg";
import p77 from "../assets/desktop/p77.svg";
import p99 from "../assets/desktop/p99.svg";
import metall from "../assets/desktop/metall.svg";
import star from '../assets/icons/stared.png';
import verify from '../assets/icons/Icon.png'
import ProjectCard from "./ProjectCard";


import antix2 from "../assets/desktop/antix2.svg";
import cat2 from "../assets/desktop/cat2.svg";
import cat3 from "../assets/desktop/cat3.svg";
import orb2 from "../assets/desktop/orb2.svg";
import orb3 from "../assets/desktop/orb3.svg";
import orb4 from "../assets/desktop/orb4.svg";
import orb5 from "../assets/desktop/orb5.svg";
import nas2 from "../assets/desktop/nas2.svg";
import nas3 from "../assets/desktop/nas3.svg";
import berg2 from "../assets/desktop/berg2.svg";
import berg3 from "../assets/desktop/berg3.svg";
import degen2 from "../assets/desktop/degen2.svg";
import degen3 from "../assets/desktop/degen3.svg";
import degen4 from "../assets/desktop/degen4.svg";
import shar2 from "../assets/desktop/degen2.svg";
import shar3 from "../assets/desktop/shar3.svg";
import shar4 from "../assets/desktop/shar4.svg";
import kz2 from "../assets/desktop/kz2.svg"
import kz3 from "../assets/desktop/kz3.svg"
import kz4 from "../assets/desktop/kz4.svg"
import kz5 from "../assets/desktop/kz5.svg"
import glen2 from "../assets/desktop/glen2.svg"
import glen3 from "../assets/desktop/glen3.svg"

import kz from "../assets/desktop/kz.svg"
import usa from "../assets/desktop/usa.svg"
import uk from "../assets/desktop/uk.svg"
import australia from "../assets/desktop/australia.svg"
import qatar from "../assets/desktop/qatar.svg"
import { motion } from "framer-motion";

const projects = [
    { images: [p1, antix2], logo: p11,title:"p1", description: "Website design", description2: " and development", country: usa, tags: ["Web design", "Development", "WEB3"], highlight: "$5.8M+ Raised", isMain: true, verified: true, badgeImage: verify },
    { images: [p2, cat2, cat3], logo: p22, title:"p2",description: "UX/UI Design", country: uk, tags: ["Prototyping", "Design System", "Mobile Design"], highlight: "900.000+ Users", verified: true, badgeImage: verify },
    { images: [p3, orb2, orb3, orb4, orb5], logo: p33, description: "Website development", country: australia, tags: ["Frontend Development", "Custom Web Solutions", "Web3"] },
    { images: [p4, nas2, nas3], logo: null },
    { images: [p5, berg2, berg3], logo: p55,title:"p5", description: "Social media content", country: usa, tags: ["Content creation", "Graphic design", "SMM"], highlight: "20M+ Followers", verified: true, badgeImage: verify },
    { images: [p6, shar2, shar3, shar4], logo: p66, description: "Website development", country: qatar, tags: ["Frontend Development", "Custom Web Solutions", "Web3"] },
    { images: [p7, degen2, degen3, degen4], logo: p77, description: "Branding", country: australia, tags: ["Brand Strategy", "Visual Identity", "Fintech"] },
    { images: [p8, kz2, kz3, kz4, kz5], logo: null, description: "Branding", country: kz, tags: ["Brand Positioning", "Visual Identity", "Edutech"],},
    { images: [p9, glen2, glen3], logo: p99,title:"p9", description: "Website development", country: uk, tags: ["Full-Stack Development", "UI/UX", "E-commerce"], highlight: "4.7 Trustpilot", starred: true, badgeImage: star},
  ];

export default function ProjectsDesktop() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [moveDirection, setMoveDirection] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Определяем направление движения (убегаем от курсора)
    const offsetX = (mouseX - centerX) / centerX; // -1 влево, 1 вправо
    const offsetY = (mouseY - centerY) / centerY; // -1 вверх, 1 вниз

    setMoveDirection({
      x: -offsetX * 40, // Увеличиваем смещение для резкости
      y: -offsetY * 40,
    });

    setPosition({ x: mouseX, y: mouseY });
  };

  const handleClick = () => {
    window.location.href = "https://drive.google.com/file/d/1FizTso9ZKKUooa-Rl6n0Sz6khVYuJCa1/view?usp=sharing"; // Вставь свою ссылку
  };
  return (
    <div id="recentProjects" className="font-ppneue flex flex-col w-[85%] items-center mt-[68px]">
      <div className="flex flex-col max-w-[1200px] w-full justify-between items-center">
        <h3 className="font-medium text-[84px] leading-[92px]">Recent projects</h3>
        <p className="font-book text-[22px] leading-[30px] mt-6">
          Custom B2C, B2B and eCommerce solutions
          <br />
          optimized for traffic, engagement and conversion
        </p>

        <div className="mt-16">
          <ProjectCard {...projects[0]} />
        </div>

        <div className="flex flex-row gap-[18px] mt-7 items-center">
          <ProjectCard {...projects[1]} />
          <ProjectCard {...projects[2]} />
        </div>

        <div className="flex flex-row gap-[18px] mt-7">
          <div className="flex flex-col gap-[18px] items-center">
            <ProjectCard {...projects[3]} />
            <ProjectCard {...projects[6]} />
            <ProjectCard {...projects[8]} />
          </div>
          <div className="flex flex-col gap-[18px] items-center">
            <ProjectCard {...projects[4]} />
            <ProjectCard {...projects[5]} />
            <ProjectCard {...projects[7]} />
            <div className="relative mx-auto mt-10">
      {/* Картинка с быстрым эффектом движения */}
      <motion.img
        src={metall} // Укажи свою картинку
        alt="Metall Project"
        className="w-full relative transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        animate={{
          x: moveDirection.x,
          y: moveDirection.y,
        }}
        transition={{
          type: "spring",
          stiffness: 200, // Увеличено для быстрой реакции
          damping: 8, // Меньше, чтобы быстро останавливаться
          duration: 0.15, // Быстрее анимация
        }}
      />

      {/* Текст по центру */}
      <div 
  className="pointer-events-none absolute inset-x-0 top-1/2 transform -translate-y-1/2 
  text-white text-[34px] font-book whitespace-nowrap text-center w-full"
>
  View all works
</div>

      {/* Кастомный курсор */}
      {visible && (
        <div
          className="absolute w-16 h-16 bg-black rounded-full opacity-80 pointer-events-none"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      )}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}