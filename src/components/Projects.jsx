import ProjectItem from "./ProjectItem";

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
      location: "./images/icons/usa.svg",
    },
    avatars: [
      "/images/icons/i1.png",
      "/images/icons/i1.png",
      "/images/icons/i1.png",
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
      location: "./images/icons/usa.svg",
    },
    avatars: [
      "/images/icons/berg3.svg",
      "/images/icons/berg1.svg",
      "/images/icons/berg2.svg",
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
      location: "./images/icons/uk.svg",
    },
    avatars: [
      "/images/icons/cat3.svg",
      "/images/icons/cat1.svg",
      "/images/icons/cat2.svg",
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
      location: "./images/icons/australia.svg",
    },
    avatars: [
      "/images/icons/orb6.svg",
      "/images/icons/orb1.svg",
      "/images/icons/orb2.svg",
      "/images/icons/orb3.svg",
      "/images/icons/orb4.svg",
      "/images/icons/orb5.svg",
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
      location: "./images/icons/qatar.svg",
    },
    avatars: [
      "/images/icons/shar4.svg",
      "/images/icons/shar1.svg",
      "/images/icons/shar2.svg",
      "/images/icons/shar3.svg",
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
      location: "./images/icons/uk.svg",
    },
    avatars: [
      "/images/icons/glen3.svg",
      "/images/icons/glen1.svg",
      "/images/icons/glen2.svg",
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
      location: "./images/icons/kz.svg",
    },
    avatars: [
      "/images/icons/kz5.svg",
      "/images/icons/kz1.svg",
      "/images/icons/kz2.svg",
      "/images/icons/kz3.svg",
      "/images/icons/kz4.svg",
    ],
  }
];

const Projects = () => {
    const footerIcon = profiles.verified
    ? "./images/icons/Icon.png"
    : profiles.stared
    ? "./images/icons/stared.png"
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
