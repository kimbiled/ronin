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
      {profiles.map((item, index) => {
        // Определяем иконку (если `stared`, он заменяет `verified`)
        const footerIcon = item.profile.stared
          ? "./images/icons/stared.png"
          : item.profile.verified
          ? "./images/icons/Icon.png"
          : null;

        // Фон меняется для id === 2
        const backgroundColor = item.id === 2 ? "bg-[#F7F7F6] bg-opacity-80 text-black" : "bg-black bg-opacity-80 text-white";

        return (
          <div
            key={item.id}
            className={`w-full p-5 rounded-lg`}
          >
            <div className="relative">
              <ProjectItem avatars={item.avatars} />
              {item.profile.followers && (
                <div className={`font-book absolute bottom-3 sm20:right-2 sm75:right-6 sm25:right-8 ${backgroundColor} 
                pt-[4px] pb-[4px] pl-[4px] pr-[18px] rounded-full flex items-center text-sm w-[155px] h-8 
                ${item.profile.stared ? "w-[150px] bg-opacity-60 font-bold justify-center text-center" : ""}`}>
                
                {footerIcon && <img src={footerIcon} className="w-6 h-6 mr-2" alt="icon" />}
                
                {item.profile.followers}
            </div>
              )}
            </div>
            <div className={`mt-4 text-[#090C21] w-[95%] mx-auto ${index !== profiles.length - 1 ? "border-b border-[#090C21] border-opacity-10 pb-[34px]" : ""}`}>
              <div className="flex flex-row items-center justify-between">
                <p className="font-medium text-[25px]">{item.profile.name}</p>
                <img src={item.profile.location} alt="location" />
              </div>
              <p className="text-sm mt-1 font-book">{item.profile.role}</p>
              <div className="flex gap-2 text-xs text-[#637695] mt-1 font-book">
  {item.profile.tags.map((tag, i) => (
    <div key={i} className="flex items-center">
      <span>{tag}</span>
      {i !== item.profile.tags.length - 1 && (
        <span className="mx-2 text-[#637695]">•</span> // Равный отступ по бокам
      )}
    </div>
  ))}
</div>
            </div>
          </div>
        );
      })}

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
