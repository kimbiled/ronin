import { motion } from 'framer-motion';

import berg from '../../assets/desktop/berg.png';
import disney from '../../assets/desktop/disney.png';
import forbes from '../../assets/desktop/forbes.png';
import gorilla from '../../assets/desktop/gorilla.png';
import bigroup from '../../assets/desktop/bigroup.png';
import jusanbank from '../../assets/desktop/jusanbank.png';
import gold from '../../assets/desktop/gold.png';
import weproject from '../../assets/desktop/weproject.png';
import capital from '../../assets/desktop/capital.png';
import motiva from '../../assets/desktop/motiva.png';
import astanahub from '../../assets/desktop/astanahub.png';
import team from '../../assets/desktop/team.png';
import cephla from '../../assets/desktop/cephla.svg';
import aqua from '../../assets/desktop/aqua.svg';
import skygen from '../../assets/desktop/skygen.svg';
import alltrust from '../../assets/desktop/alltrust.svg';
import theone from '../../assets/desktop/theone.svg';
import kazakhtourism from '../../assets/desktop/kazakhtourism.svg';
import pocketbroker from '../../assets/desktop/pocketbroker.svg';

const logoRows = [
  [
    { src: berg, alt: 'berg', className: 'h-[47px]' },
    { src: disney, alt: 'disney', className: 'h-[38px]' },
    { src: forbes, alt: 'forbes', className: 'h-[25px]' },
    { src: gorilla, alt: 'gorilla', className: 'h-[63px]' },
    { src: pocketbroker, alt: 'pocketbroker', className: 'h-[72px]' },
  ],
  [
    { src: jusanbank, alt: 'jusanbank', className: 'h-[38px]' },
    { src: gold, alt: 'gold', className: 'h-[56px]' },
    { src: weproject, alt: 'weproject', className: 'h-10' },
    { src: capital, alt: 'capital', className: 'h-[32px]' },
    { src: motiva, alt: 'motiva', className: 'h-10' },
  ],
  [
    { src: astanahub, alt: 'astanahub', className: 'h-[42px]' },
    { src: team, alt: 'team', className: 'h-[53px]' },
    { src: cephla, alt: 'cephla', className: 'h-9' },
    { src: aqua, alt: 'aqua', className: 'h-9' },
    { src: skygen, alt: 'skygen', className: 'h-11' },
  ],
  [
    { src: alltrust, alt: 'alltrust', className: 'h-9' },
    { src: theone, alt: 'theone', className: 'h-9' },
    { src: kazakhtourism, alt: 'kazakhtourism', className: 'h-[78px]' },
    { src: bigroup, alt: 'bigroup', className: 'h-[40px]' },
  ],
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.96, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const ContentDesktop = () => {
  return (
    <div className="font-ppneue mt-36 flex w-full flex-col items-center">
      <motion.div
        className="flex w-[85%] max-w-[1420px] flex-col items-center justify-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="w-full flex items-center gap-6 my-20 mb-4"
          variants={titleVariants}
        >
          <motion.div
            className="h-px flex-1 bg-[#A4B0C2]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: 'right' }}
          />
          <span className="shrink-0 text-[22px] font-medium text-[#A4B0C2]">
            Trusted by 129 clients in 7 countries
          </span>
          <motion.div
            className="h-px flex-1 bg-[#A4B0C2]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        <div className="flex w-full flex-col gap-[74px] pt-[82px]">
          {logoRows.map((row, rowIndex) => (
            <div
              key={`logo-row-${rowIndex}`}
              className={`mx-auto flex w-full items-center justify-between ${
                row.length === 4 ? 'max-w-[960px]' : ''
              }`}
            >
              {row.map((logo) => (
                <motion.div
                  key={logo.alt}
                  className="flex h-[78px] min-w-[160px] items-center justify-center"
                  variants={logoVariants}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.className} max-w-[190px] object-contain opacity-55 grayscale transition duration-300 hover:opacity-80`}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContentDesktop;
