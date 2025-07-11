import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CallModal from "./CallModal"; // Импортируем модальное окно

import item1 from '../assets/desktop/item1.png'
import item2 from '../assets/desktop/item2.png'
import item3 from '../assets/desktop/item3.png'
import item4 from '../assets/desktop/item4.png'
import phone from '../assets/mobile/phone.png'
const services = [
  {
    title: "Content Marketing",
    description:
      "Social posts, ad banners, content plans, video editing, and YouTube thumbnails — all tailored to grow your brand",
    img: item1,
  },
  {
    title: "Website Design",
    description:
      "Tailored websites that deliver results. From UI/UX to development, we create stunning, functional platforms that engage users and drive conversions",
    img: item2,
  },
  {
    title: "Branding",
    description:
      "Logotypes, brand guidelines, pitch decks, and corporate reports — we craft identities that make your business stand out",
    img: item3,
  },
  {
    title: "Custom Request",
    description:
      "Have a unique project in mind? Let's discuss it and create a tailored solution that meets your specific needs",
    img: item4,
    button: true,
  },
];

const Content = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модального окна

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

        <div className=" font-ppneueflex flex-col mx-auto gap-8 w-[90%]"
        id="about-us">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-medium text-[40px] leading-[48px]">
              <span className="text-[#1261FC]">Design </span>That<br/> Drives Growth
            </h3>
            <h5 className="leading-[23px] max-w-[330px] w-full">
              With over <span className="font-medium">800 projects and 6 years of experience,</span> we deliver tailored solutions that help brands succeed
            </h5>
          </div>

          <div className="grid  mb-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="py-5">
                <div className="group">
                  <summary
                    className="flex cursor-pointer list-none items-center gap-2 font-medium"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="text-[20px] font-medium">
                      {service.title}
                    </span>
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
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
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mt-3  overflow-hidden max-w-[345px] w-full"
    >
      <p className="font-book">{service.description}</p>
      
      <motion.img
        src={service.img}
        alt={service.title}
        className="w-36 h-36 mt-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {service.button && (
        <motion.button
          className="text-white font-medium h-12 w-52 rounded-lg bg-[#1261FC] mt-4"
          onClick={() => setIsModalOpen(true)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }} // Добавляем небольшую задержку
        >
          Book a quick session
        </motion.button>
      )}
    </motion.div>
  )}
</AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Модальное окно */}
      <CallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Content;