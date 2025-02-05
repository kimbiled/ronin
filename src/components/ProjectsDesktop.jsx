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

const projects = [
    { image: p1, logo: p11,title:"p1", description: "Website design", description2: " and development", country: "usa", tags: ["Web design", "Development", "WEB3"], highlight: "$5.8M+ Raised", isMain: true, verified: true, badgeImage: verify },
    { image: p2, logo: p22, title:"p2",description: "UX/UI Design", country: "uk", tags: ["Prototyping", "Design System", "Mobile Design"], highlight: "900.000+ Users", verified: true, badgeImage: verify },
    { image: p3, logo: p33, description: "Website development", country: "australia", tags: ["Frontend Development", "Custom Web Solutions", "Web3"] },
    { image: p4, logo: null },
    { image: p5, logo: p55,title:"p5", description: "Social media content", country: "usa", tags: ["Content creation", "Graphic design", "SMM"], highlight: "20M+ Followers", verified: true, badgeImage: verify },
    { image: p6, logo: p66, description: "Website development", country: "australia", tags: ["Frontend Development", "Custom Web Solutions", "Web3"] },
    { image: p7, logo: p77, description: "Branding", country: "qatar", tags: ["Brand Strategy", "Visual Identity", "Fintech"] },
    { image: p8, logo: null, description: "Branding", country: "kz", tags: ["Brand Positioning", "Visual Identity", "Edutech"],},
    { image: p9, logo: p99,title:"p9", description: "Website development", country: "uk", tags: ["Full-Stack Development", "UI/UX", "E-commerce"], highlight: "4.7 Trustpilot", starred: true, badgeImage: star},
  ];

export default function ProjectsDesktop() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });
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
      {/* Изображение */}
      <img
       src={metall}
       alt="Metall Project" 
       className="w-full relative transition-transform duration-300 ease-in-out hover:scale-105"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
      />
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[34px] font-book">
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