import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import CallModal from './CallModal';

import item1 from '../assets/desktop/item1.png';
import item2 from '../assets/desktop/item2.png';
import item3 from '../assets/desktop/item3.png';
import item4 from '../assets/desktop/item4.png';

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

const Content = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div
        className=" font-ppneue flex flex-col mx-auto gap-8 w-[90%]"
        id="about-us"
      >
        <div className="flex flex-col gap-3 ">
          <div className="max-w-[95px] w-full h-[30px] rounded-lg border-[1px] border-[#1261FC] flex items-center justify-center px-2 py-1">
            <p className="text-sm">Our Services</p>
          </div>
          <h3 className="font-medium text-[40px] leading-[48px]">
            <span className="text-[#1261FC]">
              All you want, <br />
            </span>
            delivered on time
          </h3>
          <h5 className="leading-[23px] max-w-[330px] w-full">
            from logo and website design
            <br />
            to a SaaS platform or mobile app
          </h5>
        </div>

        <div>
          {services.map((service, index) => (
            <div key={index} className="py-5">
              <div className="group">
                <summary
                  className="flex cursor-pointer list-none items-center gap-2 font-medium"
                  onClick={() => handleToggle(index)}
                >
                  <span
                    className={`text-[20px] transition-all leading-[125%] text-[#090C21] hover:text-gray-500 duration-300 ease-in-out`}
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
                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="mt-3  overflow-hidden max-w-[345px] w-full"
                    >
                      <div className="flex flex-wrap gap-2">
                        {service.description.map((item, idx) => (
                          <div
                            key={idx}
                            className="h-8 bg-[#F7F7F6] px-[15px] py-[5px] rounded flex items-center rounded-full"
                          >
                            <p className="text-[#090C21] font-book text-sm">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      <motion.img
                        src={service.img}
                        alt={service.title}
                        className="w-36 h-36 mt-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      />

                      {/* {service.button && (
                        <motion.button
                          className="text-white font-medium h-12 w-52 rounded-lg bg-[#1261FC] mt-4"
                          onClick={() => setIsModalOpen(true)}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: 0.1,
                          }} // Добавляем небольшую задержку
                        >
                          Book a quick session
                        </motion.button>
                      )} */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <CallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </>
  );
};

export default Content;
