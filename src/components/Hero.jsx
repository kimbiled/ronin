import { motion } from "framer-motion";

const logos = [
    { src: "./images/icons/berg.png", alt: "berg", height: "h-[28px]" },
    { src: "./images/icons/disney.png", alt: "disney", height: "h-[32px]" },
    { src: "./images/icons/forbes.png", alt: "forbes", height: "h-[21px]" },
    { src: "./images/icons/gorilla.png", alt: "gorilla", height: "h-[41px]" },
    { src: "./images/icons/bigroup.png", alt: "bigroup", height: "h-[31px]" },
    { src: "./images/icons/jusanbank.png", alt: "jusanbank", height: "h-[31px]" },
    { src: "./images/icons/gold.png", alt: "gold", height: "h-[38px]" },
    { src: "./images/icons/weproject.png", alt: "weproject", height: "h-9" },
    { src: "./images/icons/capital.png", alt: "capital", height: "h-[20px]" },
    { src: "./images/icons/motiva.png", alt: "motiva", height: "h-[38px]" },
    { src: "./images/icons/astanahub.png", alt: "astanahub", height: "h-[27px]" },
    { src: "./images/icons/team.png", alt: "team", height: "h-[40px]" },
];

const avatars = [
    "/images/icons/1.svg",
    "/images/icons/3.svg",
    "/images/icons/2.svg",
    "/images/icons/4.svg",
];

const Hero = () => {
    return (
        <div className="font-ppneue flex flex-col w-[85%] mx-auto">
            <div className="flex flex-col items-center">
                {/* Аватары с эффектом волны */}
                <div className="flex flex-row items-center ml-2">
                    {avatars.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Avatar${index + 1}`}
                            className="-ml-2 w-16 h-16"
                            animate={{
                                y: [0, -10, 0], // Двигаем вверх и вниз плавно
                            }}
                            transition={{
                                duration: 2, // Один полный цикл вверх-вниз
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: index * 0.3, // Разная задержка для волнового эффекта
                            }}
                        />
                    ))}
                </div>

                <div>
                    <img src="./images/icons/footer.png" alt="wrapper" className="w-full h-full" />
                </div>
            </div>

            <div className="text-center flex flex-col gap-2 mt-9">
                <h1 className="font-medium text-[25px] leading-[30px]">
                    Web design and Content<br /> That Skyrocket Your Business
                </h1>
                <p className="text-[#9CA3AF] font-book">
                    Get your first task done for free in 24 hours
                </p>
            </div>

            {/* Кнопки */}
            <div className="flex gap-2 flex-row justify-around font-medium mt-9">
                <button
                    className="bg-[#1261FC] text-white rounded-lg w-48 h-12"
                    onClick={() => {
                        const element = document.getElementById("recentProjects");
                        if (element) {
                            const offset = 100;
                            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({ top: elementPosition, behavior: "smooth" });
                        }
                    }}
                >
                    View Portfolio
                </button>
                <button
                    className="bg-transparent border border-[#1261FC] text-[#1261FC] rounded-lg w-48 h-12"
                    onClick={() => {
                        const element = document.getElementById("form-section");
                        if (element) {
                            const offset = 100;
                            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({ top: elementPosition, behavior: "smooth" });
                        }
                    }}
                >
                    Get a Proposal
                </button>
            </div>

            {/* Скроллинг логотипов */}
            <div className="relative w-full overflow-hidden mt-7">
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10"></div>

                <motion.div
                    className="flex items-center flex-nowrap"
                    animate={{ x: ["0%", "-100%"] }} // Двигаем логотипы влево
                    transition={{
                        duration: 15, // Двигаем за 15 сек
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={`w-auto ${logo.height} mx-4`}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;