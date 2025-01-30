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
      "/images/icons/i2.png",
      "/images/icons/i2.png",
      "/images/icons/i2.png",
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
      "/images/icons/i3.png",
      "/images/icons/i3.png",
      "/images/icons/i3.png",
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
      "/images/icons/i4.png",
      "/images/icons/i4.png",
      "/images/icons/i4.png",
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
      "/images/icons/i5.png",
      "/images/icons/i5.png",
      "/images/icons/i5.png",
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
      "/images/icons/i6.png",
      "/images/icons/i6.png",
      "/images/icons/i6.png",
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
      "/images/icons/i7.png",
      "/images/icons/i7.png",
      "/images/icons/i7.png",
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
        <div className="font-ppneue flex flex-col w-[85%] mx-auto gap-8">
        {/* Заголовок */}
        <div className="flex flex-col text-center mt-12 items-center">
          <p className="sm25:text-[40px] sm75:text-[40px] font-medium sm20:text-[36px]">Recent projects</p>
          <p className="sm25:text-base sm75:text-[15px] sm20:text-[13px] sm75:w-[330px] sm20:w-[300px] sm25:w-[360px] text-[#090C21] font-book">
            Custom B2C, B2B, and eCommerce solutions optimized for traffic,
            engagement, and conversion
          </p>
        </div>
  
        {/* Список проектов */}
        {profiles.map((item, index) => (
          <ProjectItem key={item.id} profile={item.profile} avatars={item.avatars} isLast={index === profiles.length - 1} />
        ))}

        <div className="flex flex-col items-center">
            <button className=" bg-[#1261FC] text-white rounded-lg w-40 h-12">
                    View all works
            </button>
        </div>
      </div>
    );
};
  
export default Projects;
