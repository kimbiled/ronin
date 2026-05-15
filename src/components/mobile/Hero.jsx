import { motion } from 'framer-motion';

import tick from '../../assets/desktop/Icon.png';
import berg from '../../assets/mobile/berg.png';
import disney from '../../assets/mobile/disney.png';
import forbes from '../../assets/mobile/forbes.png';
import gorilla from '../../assets/mobile/gorilla.png';
import bigroup from '../../assets/mobile/bigroup.png';
import jusanbank from '../../assets/mobile/jusanbank.png';
import gold from '../../assets/mobile/gold.png';
import weproject from '../../assets/mobile/weproject.png';
import capital from '../../assets/mobile/capital.png';
import motiva from '../../assets/mobile/motiva.png';
import astanahub from '../../assets/mobile/astanahub.png';

import r1 from '../../assets/desktop/r1.webp';
import r2 from '../../assets/desktop/r2.webp';
import r3 from '../../assets/desktop/r4.webp';
import r4 from '../../assets/desktop/r5.webp';
import r5 from '../../assets/desktop/r6.webp';

import hero from '../../assets/mobile/footer.png';

const logos = [
  { src: berg, alt: 'berg', height: 'h-[28px]' },
  { src: disney, alt: 'disney', height: 'h-[32px]' },
  { src: forbes, alt: 'forbes', height: 'h-[21px]' },
  { src: gorilla, alt: 'gorilla', height: 'h-[41px]' },
  { src: bigroup, alt: 'bigroup', height: 'h-[31px]' },
  { src: jusanbank, alt: 'jusanbank', height: 'h-[31px]' },
  { src: gold, alt: 'gold', height: 'h-[38px]' },
  { src: weproject, alt: 'weproject', height: 'h-9' },
  { src: capital, alt: 'capital', height: 'h-[20px]' },
  { src: motiva, alt: 'motiva', height: 'h-[38px]' },
  { src: astanahub, alt: 'astanahub', height: 'h-[27px]' },
];

const avatars = [r1, r4, r2, r3, r5];

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
              className="-ml-2 w-16 h-16 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: index * 0.3,
              }}pfrb
            />
          ))}
        </div>

        <div>
          <img src={hero} alt="wrapper" className="w-full h-full" />
        </div>
      </div>

      <div className="text-center flex flex-col gap-2 mt-9">
        <h1 className="font-medium text-[25px] leading-[30px]">
          Your Full Stack Design Team <br />
          for Web3, Fintech and AI
        </h1>
        <p className="text-[#9CA3AF] font-book">
          Your Full Stack Design Team for Fintech, Games and AI
        </p>
      </div>

      <div className="flex gap-2 flex-row justify-around font-medium mt-9">
        <button
          className="bg-[#1261FC] text-white rounded-lg w-48 h-12"
          onClick={() => {
            const element = document.getElementById('recentProjects');
            if (element) {
              const offset = 100;
              const elementPosition =
                element.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
          }}
        >
          View Portfolio
        </button>
        <button
          className="bg-transparent border border-[#1261FC] text-[#1261FC] rounded-lg w-48 h-12"
          onClick={() => {
            const element = document.getElementById('form-section');
            if (element) {
              const offset = 100;
              const elementPosition =
                element.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
          }}
        >
          Get a Proposal
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-4 mt-9 font-book text-[#090C21]">
        <div className="flex flex-row gap-3 rounded-2xl min-w-[166px] p-1 h-8 bg-[#F7F7F6] items-center">
          <img src={tick} alt="Icon" className="h-6 w-6" />
          <p>Unlimited requests</p>
        </div>
        <div className="flex flex-row gap-3 rounded-2xl min-w-[166px] p-1 h-8 bg-[#F7F7F6] items-center">
          <img src={tick} alt="Icon" className="h-6 w-6" />
          <p>Flat monthly fee</p>
        </div>
        <div className="flex flex-row gap-3 rounded-2xl min-w-[226px] p-1 h-8 bg-[#F7F7F6] items-center">
          <img src={tick} alt="Icon" className="h-6 w-6" />
          <p>Pause or cancel any time</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-7">
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10"></div>

        <div className="flex items-center whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div
              className="flex items-center flex-nowrap min-w-max animate-marquee"
              key={i}
            >
              {logos.map(({ src, alt, height }, index) => (
                <div
                  className={`flex-shrink-0 ${
                    alt === 'gorilla' ? 'mx-0' : 'mx-4'
                  }`}
                  key={`${i}-${index}`}
                >
                  <img src={src} alt={alt} className={`w-auto ${height}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
