import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import item1 from '../../assets/desktop/item1.png';
import item2 from '../../assets/desktop/item2.png';
import item3 from '../../assets/desktop/item3.png';
import item4 from '../../assets/desktop/item4.png';
import CallModalDesktop from './CallModalDesktop';
const services = [
  {
    title: 'UX/UI + No-code',
    titleParts: [
      { text: 'UX/UI', weight: 'font-medium' },
      { text: ' + No-code', weight: 'font-book' },
    ],
    description: [
      'Website',
      'Landing page',
      'E-commerce',
      'Mobile app',
      'SaaS',
    ],
    img: item1,
  },
  {
    title: 'Presence',
    description: [
      'Pitch decks',
      'Power point',
      'Digital ads',
      'Email graphics',
      'Infographics',
      'SMM graphics',
      'Amazon Design',
    ],
    img: item2,
  },
  {
    title: 'Branding',
    description: ['Logo', 'Brandbook', 'Illustrations', 'Mockups', 'Icons'],
    img: item3,
  },
  {
    title: 'Outdoor and other',
    description: ['Packaging', 'Stationery', 'Trade show banners'],
    img: item4,
  },
];

const ContentDesktop = () => {
  const [openIndex, setOpenIndex] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="services"
      className="font-ppneue flex flex-col w-[85%] items-center mt-4"
    >
      {/* <div>
        <img src={ready} alt="ready" width={1200} height={500}/>
      </div> */}

      <div className="mt-[100px] flex flex-row max-w-[1200px] w-full justify-between">
        <div className="flex flex-col gap-6">
          <div className="w-36 h-11 px-4 py-2 rounded-lg border-[1px] border-[#1261FC] flex items-center justify-center">
            <p className="text-[20px]">Our services</p>
          </div>
          <h3 className="font-medium text-[84px] leading-[92px] text-[#090C21]">
            <span className="text-[#1261FC]">
              All you want
              <br />
              delivered,{' '}
            </span>
            on time
          </h3>
          <h5 className="font-book text-[22px] leading-[30px] text-[#090C21] opacity-80">
            from logo and website design
            <br /> to a SaaS platform or mobile app
          </h5>
        </div>

        <div className=" space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex py-5 gap-8">
              <div className="w-28 flex items-start justify-center">
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.img
                      src={service.img}
                      alt={service.title}
                      className="flex-shrink-0 w-auto h-auto"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                  )}
                </AnimatePresence>
              </div>

              <div className="w-[373px]">
                <div
                  className="flex cursor-pointer items-center gap-3"
                  onClick={() => handleToggle(index)}
                >
                  <span
                    className={`text-[28px] transition-all leading-[125%] text-[#090C21] hover:text-gray-500 duration-300 ease-in-out`}
                  >
                    {service.titleParts ? (
                      service.titleParts.map((part, i) => (
                        <span key={i} className={part.weight}>
                          {part.text}
                        </span>
                      ))
                    ) : (
                      <span className="font-medium">{service.title}</span>
                    )}
                  </span>
                  <motion.span
                    className="transition-transform"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                  >
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </motion.span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="mt-3 overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2">
                        {service.description.map((item, idx) => (
                          <div
                            key={idx}
                            className="h-8 bg-[#F7F7F6] px-[15px] py-[5px] rounded flex items-center rounded-full"
                          >
                            <p className="text-[#090C21] font-book">{item}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CallModalDesktop
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ContentDesktop;
