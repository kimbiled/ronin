import ProjectItem from "./ProjectItem";


import i1 from '../assets/mobile/i1.png'
import cat1 from "../assets/mobile/cat1.svg";
import cat2 from "../assets/mobile/cat2.svg";
import cat3 from "../assets/mobile/cat3.svg";
import orb1 from "../assets/mobile/orb1.svg";
import orb2 from "../assets/mobile/orb2.svg";
import orb3 from "../assets/mobile/orb3.svg";
import orb4 from "../assets/mobile/orb4.svg";
import orb5 from "../assets/mobile/orb5.svg";
import orb6 from "../assets/mobile/orb6.svg";
import berg1 from "../assets/mobile/berg1.svg";
import berg2 from "../assets/mobile/berg2.svg";
import berg3 from "../assets/mobile/berg3.svg";
import shar1 from "../assets/mobile/shar1.svg";
import shar2 from "../assets/mobile/shar2.svg";
import shar3 from "../assets/mobile/shar3.svg";
import shar4 from "../assets/mobile/shar4.svg";
import kz1 from "../assets/mobile/kz1.svg"
import kz2 from "../assets/mobile/kz2.svg"
import kz3 from "../assets/mobile/kz3.svg"
import kz4 from "../assets/mobile/kz4.svg"
import kz5 from "../assets/mobile/kz5.svg"
import glen1 from "../assets/mobile/glen1.svg"
import glen2 from "../assets/mobile/glen2.svg"
import glen3 from "../assets/mobile/glen3.svg"

import kz from "../assets/desktop/kz.svg"
import usa from "../assets/desktop/usa.svg"
import uk from "../assets/desktop/uk.svg"
import australia from "../assets/desktop/australia.svg"
import qatar from "../assets/desktop/qatar.svg"

import tick from '../assets/mobile/Icon.png'
import star from '../assets/mobile/stared.png'
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
     i1,
     i1,
     i1,
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
      berg3, berg1, berg2
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
      cat3,
      cat1,
      cat2,
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
      orb6,
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
      shar4,
      shar1,
      shar2,
      shar3,
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
      glen3,
      glen1,
      glen2,
    ],
  },
  {
    id: 7,
    profile: {
      name: "Language learning app",
      role: "Branding",
      tags: ["Brand Positioning", "Visual Identity", "Edutech"],
      followers: false,
      verified: false,
      stared: false,
      location: kz,
    },
    avatars: [
      kz5,
      kz1,
      kz2,
      kz3,
      kz4,
    ],
  }
];

const Projects = () => {
    const footerIcon = profiles.verified
    ? tick
    : profiles.stared
    ? star
    : null;

    return (
      <div className="font-ppneue flex flex-col items-center w-full mx-auto " id="recentProjects">
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
        <div key={item.id} className="w-full p-5 rounded-lg">
          <ProjectItem item={item} />
        </div>
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
