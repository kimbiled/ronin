const logos = [
    { src: "./images/icons/berg.png", alt: "berg", height: "h-[28px]" },
    { src: "./images/icons/disney.png", alt: "disney", height: "h-[32px]" },
    { src: "./images/icons/forbes.png", alt: "forbes", height: "h-[21px]" },
    { src: "./images/icons/gorilla.png", alt: "gorilla", height: "h-[41px]" },
    { src: "./images/icons/bigroup.png", alt: "bigroup", height: "h-[31px]" },
    { src: "./images/icons/jusanbank.png", alt: "jusanbank", height: "h-[31px]" },
    { src: "./images/icons/gold.png", alt: "gold", height: "h-[38px]" },
    { src: "./images/icons/weproject.png", alt: "weporject", height: "h-9" },
    { src: "./images/icons/capital.png", alt: "capital", height: "h-[20px]" },
    { src: "./images/icons/motiva.png", alt: "motiva", height: "h-[38px]" },
    { src: "./images/icons/astanahub.png", alt: "astanahub", height: "h-[27px]" },
    { src: "./images/icons/team.png", alt: "team", height: "h-[40px]" },
  ];

const Hero = () => {
    return (
        <div className="font-ppneue flex flex-col w-[85%] mx-auto gap-8">
            <div>
                <img src="./images/icons/wrapper.png" alt="wrapper" className="w-full h-full" />
            </div>
            <div className="text-center flex flex-col gap-2">
                <h1 className="font-medium text-[25px] leading-[30px]">
                    Web design and Content<br /> That Skyrocket Your Business
                </h1>
                <p className="text-[#9CA3AF] font-book">
                    Get your first task done for free in 24 hours
                </p>
            </div>
            <div className="flex gap-4 flex-row justify-around font-medium">
                <button className=" bg-[#1261FC] text-white rounded-lg w-48 h-12">
                    View Portfolio
                </button>
                <button className="bg-transparent border border-[#1261FC] text-[#1261FC] rounded-lg w-48 h-12">
                    Get a Proposal
                </button>
            </div>
            <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-row font-book">
                    <div className="flex flex-row gap-2 rounded-2xl sm20:w-[140px] sm75:w-[168px] sm25:w-[168px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                        <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Unlimited requests</p>
                    </div>
                    <div className="flex flex-row gap-2 rounded-2xl sm20:w-[140px] sm75:w-[168px] sm25:w-[168px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                        <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Fixed monthly fee</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 rounded-2xl sm25:w-52 sm20:w-[180px] sm75:w-52 p-1 h-8 bg-[#F7F7F6] items-center">
                    <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                    <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Pause or cancel any time</p>
                </div>
            </div>
            <div className="overflow-hidden whitespace-nowrap py-4">
                <div className="flex items-center animate-scroll gap-8 w-[116px]">
                    {[...logos, ...logos].map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className={`w-auto ${logo.height}`} // Фиксируем ширину, высота сохраняется пропорциональной
                    />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
