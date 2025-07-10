import ProjectItem from "./ProjectItem";

import ant1 from "../assets/mobile/ant1.png";
import ant2 from "../assets/mobile/ant2.png";
import ant3 from "../assets/mobile/ant3.png";
import ant4 from "../assets/mobile/ant4.png";
import ant5 from "../assets/mobile/ant5.png";
import ant6 from "../assets/mobile/ant6.png";

import cat1 from "../assets/mobile/cat1.png";
import cat2 from "../assets/mobile/cat2.png";
import cat3 from "../assets/mobile/cat3.png";
import cat4 from "../assets/mobile/cat4.png";
import cat5 from "../assets/mobile/cat5.png";

import orb1 from "../assets/mobile/orb1.png";
import orb2 from "../assets/mobile/orb2.png";
import orb3 from "../assets/mobile/orb3.png";
import orb4 from "../assets/mobile/orb4.png";
import orb5 from "../assets/mobile/orb5.png";


import berg1 from "../assets/mobile/berg1.png";
import berg2 from "../assets/mobile/berg2.png";
import berg3 from "../assets/mobile/berg3.png";
import berg4 from "../assets/mobile/berg4.png";

import shar1 from "../assets/mobile/shar1.png";
import shar2 from "../assets/mobile/shar2.png";
import shar3 from "../assets/mobile/shar3.png";
import shar4 from "../assets/mobile/shar4.png";

import dunes1 from "../assets/mobile/dunes1.png"
import dunes2 from "../assets/mobile/dunes2.png"
import dunes3 from "../assets/mobile/dunes3.png"
import dunes4 from "../assets/mobile/dunes4.png"

import glen1 from "../assets/mobile/glen1.png"
import glen2 from "../assets/mobile/glen2.png"
import glen3 from "../assets/mobile/glen3.png"
import glen4 from "../assets/mobile/glen4.png"

import usa from "../assets/desktop/usa.svg"
import uk from "../assets/desktop/uk.svg"
import australia from "../assets/desktop/australia.svg"
import qatar from "../assets/desktop/qatar.svg"


const profiles = [
    {
    id: 1,
    profile: {
      name: "Antix",
      role: "Website design and development",
      tags: ["Web design", "Development", "WEB 3"],
      followers: "$5.8M+ Raised",
      verified: true,
      stared:false,
      location: usa,
    },
    avatars: [
     ant1,
     ant2, 
     ant3, 
     ant4,
     ant5,
     ant6
    ],
  },
  {
    id: 2,
    profile: {
      name: "Dr Berg",
      role: "Social media content",
      tags: ["SMM", "Graphic design", "Content creation"],
      followers: "20M+ Followers",
      verified: true,
      stared: false,
      location: usa,
    },
    avatars: [
      berg1, berg2, berg3, berg4
    ],
  },
  {
    id: 3,
    profile: {
      name: "HashCats",
      role: "UX/UI Design",
      tags: ["Prototyping", "Design System", "Mobile Design"],
      followers: "900.000+ Users",
      verified: true,
      stared: false,
      location: uk,
    },
    avatars: [
      cat1,cat2, cat3, cat4, cat5
    ],
  },
  {
    id: 4,
    profile: {
      name: "Orbital7",
      role: "Website development",
      tags: ["Frontend Development", "Custom Web Solutions", "Web3"],
      followers: "100.000+ Users",
      verified: true,
      stared: false,
      location: australia,
    },
    avatars: [
      orb1,
      orb2,
      orb3,
      orb4,
      orb5,
    ],
  },
  {
    id: 5,
    profile: {
      name: "Sharique",
      role: "Branding",
      tags: ["Brand Strategy", "Visual Identity", "Fintech"],
      followers: false,
      verified: false,
      stared: false,
      location: qatar,
    },
    avatars: [
      shar3,
      shar4,
      shar1,
      shar2,
    ],
  },
  {
    id: 6,
    profile: {
      name: "Glenbotal",
      role: "Website development",
      tags: ["Full-Stack Development", "UI/UX", "E-commerce"],
      followers: "4.7 Trustpilot",
      verified: false,
      stared: true,
      location: uk,
    },
    avatars: [
      glen1,
      glen2,
      glen3,
      glen4
    ],
  },
  {
    id: 7,
    profile: {
      name: "Dunes",
      role: "Website development",
      tags: ["UI/UX", "Visual Identity", "Animations"],
      followers: false,
      verified: false,
      stared: false,
      location: australia,
    },
    avatars: [
      dunes1,
      dunes2,
      dunes3,
      dunes4
    ],
  }
];

const Projects = () => {
    return (
      <div 
      className="font-ppneue flex flex-col items-center w-full mx-auto " id="recentProjects">
      {/* Заголовок */}
      <div className="flex flex-col text-center mt-12 items-center">
        <p className="sm25:text-[40px] sm75:text-[40px] font-medium sm20:text-[36px]">
          Recent projects
        </p>
        <p className="sm25:text-base sm75:text-[15px] sm20:text-[13px] sm75:w-[330px] sm20:w-[300px] sm25:w-[360px] text-[#090C21] font-book">
          Custom B2C, B2B, and eCommerce solutions optimized for traffic,
          engagement, and conversion
        </p>
      </div>

      {/* Список проектов */}
      {profiles.map((item, index) => (
        <>
        <div key={item.id} className="w-full p-5 rounded-lg">
          <ProjectItem item={item} />
        </div>
        <div className="font-ppneue flex flex-row justify-between w-[85%] text-[#090C21]">
          <div className="flex flex-col gap-1">
              <p className="font-medium text-[25px] leading-[30px] ">{item.profile.name}</p>
               <p className="text-[14px] leading-[22px]">{item.profile.role}</p>
                <div className="flex flex-row gap-2 text-xs text-[#637695]">
                    {item.profile.tags.map((detail, i)=>(
                     <div className="flex flex-row gap-2">
                       {i !== 0 && <span className="text-gray-500">•</span>}
                      <p>{detail}</p>
                      </div>
                    ))}
                </div>
          </div>
          <div className="flex flex-col justify-start">
              <img src={item.profile.location} alt="location" />
          </div>
        </div>
         <div className="h-[1px] w-[85%] bg-[#090C21] mt-8 opacity-[8%] rounded mb-4"></div>
        </>
        
      ))}

      {/* Кнопка "View all works" */}
      <div className="flex flex-col items-center">
        <button className="bg-[#1261FC] text-white rounded-lg w-40 h-12">
          <a href="https://drive.google.com/file/d/1FizTso9ZKKUooa-Rl6n0Sz6khVYuJCa1/view?usp=sharing">
            View all works
          </a>
        </button>
      </div>
    </div>
    );
};
  
export default Projects;
