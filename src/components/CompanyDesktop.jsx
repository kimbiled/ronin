import berg from '../assets/desktop/berg.png';
import disney from '../assets/desktop/disney.png';
import forbes from '../assets/desktop/forbes.png';
import gorilla from '../assets/desktop/gorilla.png';
import bigroup from '../assets/desktop/bigroup.png';
import jusanbank from '../assets/desktop/jusanbank.png';
import gold from '../assets/desktop/gold.png';
import weproject from '../assets/desktop/weproject.png';
import capital from '../assets/desktop/capital.png';
import motiva from '../assets/desktop/motiva.png';
import astanahub from '../assets/desktop/astanahub.png';
import team from '../assets/desktop/team.png';
import cephla from '../assets/desktop/cephla.svg';
import aqua from '../assets/desktop/aqua.svg';
import skygen from '../assets/desktop/skygen.svg';
import alltrust from '../assets/desktop/alltrust.svg';
import theone from '../assets/desktop/theone.svg';
import kazakhtourism from '../assets/desktop/kazakhtourism.svg';

const logos = [
  { src: berg, alt: 'berg', height: 'h-[47px]' },
  { src: disney, alt: 'disney', height: 'h-[38px]' },
  { src: forbes, alt: 'forbes', height: 'h-[25px]' },
  { src: gorilla, alt: 'gorilla', height: 'h-[63px]' },
  { src: bigroup, alt: 'bigroup', height: 'h-[40px]' },
  { src: jusanbank, alt: 'jusanbank', height: 'h-[38px]' },
  { src: gold, alt: 'gold', height: 'h-[56px]' },
  { src: weproject, alt: 'weporject', height: 'h-10' },
  { src: capital, alt: 'capital', height: 'h-[32px]' },
  { src: motiva, alt: 'motiva', height: 'h-10' },
  { src: astanahub, alt: 'astanahub', height: 'h-[42px]' },
  { src: team, alt: 'astanahub', height: 'h-[53px]' },
  { src: cephla, alt: 'cephla', height: 'h-9' },
  { src: aqua, alt: 'aqua', height: 'h-9' },
  { src: skygen, alt: 'skygen', height: 'h-11' },
  { src: alltrust, alt: 'alltrust', height: 'h-9' },
  { src: theone, alt: 'theone', height: 'h-9' },
  { src: kazakhtourism, alt: 'kazakhtourism', height: 'h-[78px]' },
];

const ContentDesktop = () => {
  return (
    <div className="font-ppneue flex flex-col w-[85%] items-center mt-36">
      <div className="justify-center items-center max-w-[1200px] w-full flex flex-col gap-12">
        <div className="w-full flex items-center gap-6 my-20 mb-4">
          <div className="flex-1 h-px bg-[#A4B0C2]" />
          <span className="text-[#A4B0C2] text-[22px] font-medium">
            Trusted by 129 clients in 7 countries
          </span>
          <div className="flex-1 h-px bg-[#A4B0C2]" />
        </div>

        <div className="grid grid-cols-6 gap-12 ">
          {logos.map((logo, index) => (
            <div className='h-[105px]'>
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={`mx-auto ${logo.height} opacity-80 hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentDesktop;
