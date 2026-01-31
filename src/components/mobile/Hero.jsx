import { motion } from 'framer-motion';

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

import first from '../../assets/mobile/h1.png';
import second from '../../assets/mobile/h2.png';
import third from '../../assets/mobile/h3.png';
import four from '../../assets/mobile/h4.png';

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

const avatars = [first, second, third, four];

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
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: index * 0.3,
              }}
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
          Get your first task done for free in 24 hours
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
