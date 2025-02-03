const logos = [
    { src: "./images/icons/berg.png", alt: "berg", height: "h-[47px]" },
    { src: "./images/icons/disney.png", alt: "disney", height: "h-[38px]" },
    { src: "./images/icons/forbes.png", alt: "forbes", height: "h-[25px]" },
    { src: "./images/icons/gorilla.png", alt: "gorilla", height: "h-[63px]" },
    { src: "./images/icons/bigroup.png", alt: "bigroup", height: "h-[40px]" },
    { src: "./images/icons/jusanbank.png", alt: "jusanbank", height: "h-[38px]" },
    { src: "./images/icons/gold.png", alt: "gold", height: "h-[56px]" },
    { src: "./images/icons/weproject.png", alt: "weproject", height: "h-10" },
    { src: "./images/icons/capital.png", alt: "capital", height: "h-[32px]" },
    { src: "./images/icons/motiva.png", alt: "motiva", height: "h-10" },
    { src: "./images/icons/astanahub.png", alt: "astanahub", height: "h-[42px]" },
    { src: "./images/icons/team.png", alt: "team", height: "h-[52px]" },
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
