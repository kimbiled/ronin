import berg from "../assets/desktop/berg.png"
import disney from "../assets/desktop/disney.png"
import forbes from "../assets/desktop/forbes.png"
import gorilla from "../assets/desktop/gorilla.png"
import bigroup from "../assets/desktop/bigroup.png"
import jusanbank from "../assets/desktop/jusanbank.png"
import gold from "../assets/desktop/gold.png"
import weproject from "../assets/desktop/weproject.png"
import capital from "../assets/desktop/capital.png"
import motiva from "../assets/desktop/motiva.png"
import astanahub from "../assets/desktop/astanahub.png"
import team from "../assets/desktop/team.png"


const logos = [
    { src: berg, alt: "berg", height: "h-[47px]" },
    { src: disney, alt: "disney", height: "h-[38px]" },
    { src: forbes, alt: "forbes", height: "h-[25px]" },
    { src: gorilla, alt: "gorilla", height: "h-[63px]" },
    { src: bigroup, alt: "bigroup", height: "h-[40px]" },
    { src: jusanbank, alt: "jusanbank", height: "h-[38px]" },
    { src: gold, alt: "gold", height: "h-[56px]" },
    { src: weproject, alt: "weporject", height: "h-10" },
    { src: capital, alt: "capital", height: "h-[32px]" },
    { src: motiva, alt: "motiva", height: "h-10" },
    { src: astanahub, alt: "astanahub", height: "h-[42px]" },
    { src: team, alt: "astanahub", height: "h-[53px]" },
  ];

const ContentDesktop = () => {
  return (
    <div className="font-ppneue flex flex-col w-[85%] items-center mt-36">
      <div className="grid grid-cols-6 gap-12 justify-center items-center max-w-[1200px] w-full">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`mx-auto ${logo.height} opacity-60 hover:opacity-100 transition-opacity duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentDesktop;
