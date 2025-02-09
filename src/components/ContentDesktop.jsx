import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CallModal from "./CallModalDesktop";
import ready from "../assets/desktop/ready.svg";
import item1 from "../assets/desktop/i1.svg"
import item2 from "../assets/desktop/i2.svg"
import item3 from "../assets/desktop/i3.svg"
import item4 from "../assets/desktop/i4.svg"
import CallModalDesktop from "./CallModalDesktop";
const services = [
  {
    title: "Content Marketing",
    description:
      "Social posts, ad banners, content plans, video editing, and YouTube thumbnails — all tailored to grow your brand",
    img: item1
  },
  {
    title: "Website Design",
    description:
      "Tailored websites that deliver results. From UI/UX to development, we create stunning, functional platforms that engage users and drive conversions",
    img: item2
  },
  {
    title: "Branding",
    description:
      "Logotypes, brand guidelines, pitch decks, and corporate reports — we craft identities that make your business stand out",
    img: item3
  },
  {
    title: "Custom Request",
    description:
      "Have a unique project in mind? Let's discuss it and create a tailored solution that meets your specific needs",
    img: item4,
    button: true,
  },
];

const ContentDesktop = () => {
  const [openIndex, setOpenIndex] = useState(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="about-us" className="font-ppneue flex flex-col w-[85%] items-center mt-20">
     
      <div>
        <img src={ready} alt="ready" />
      </div>

      
      <div className="mt-[100px] flex flex-row max-w-[1200px] w-full justify-between">
       
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-[84px] leading-[92px] text-[#090C21]">
            <span className="text-[#1261FC]">Design</span> That<br />
            Drives Growth
          </h3>
          <h5 className="font-book text-[22px] leading-[30px] text-[#090C21] opacity-80">
            With over 800 projects and 6 years of experience, we
            <br />
            deliver tailored solutions that help brands succeed
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
                  className="flex-shrink-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
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
                className={`text-[28px] font-medium transition-all leading-[125%] text-[#090C21]`}
              >
                {service.title}
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
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-3 overflow-hidden"
                >
                  <p className="text-[#637695] leading-[30px] font-book text-[22px]">
                    {service.description}
                  </p>
                  {service.button && (
                <button className="text-[#FFFFFF] font-medium h-12 w-[232px] text-lg leading-[22px] rounded-lg bg-[#1261FC] mt-12"
                onClick={() => setIsModalOpen(true)}>
                  Book a quick session
                </button>
              )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
      </div>
      <CallModalDesktop isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContentDesktop;