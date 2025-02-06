import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from '../assets/icons/logo.png';
import logoBurger from '../assets/icons/LogoBurger.png';
import close from '../assets/icons/close.png';
import burger from '../assets/icons/burger.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const socialLinks = [
    { title: "Dribbble", href: "#" },
    { title: "Behance", href: "#" },
    { title: "Instagram", href: "https://www.instagram.com/ronin.dsgn/" },
  ];

  const menuLinks = [
    { title: "About Us", href: "#" },
    { title: "What We Do", href: "#" },
    { title: "Our Works", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="font-ppneue relative h-32 text-white flex flex-col items-center w-full">
      {/* Меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#090C21] text-white z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col justify-between h-full px-4 py-4">
              {/* Логотип и кнопка закрытия */}
              <div className="flex justify-between items-center">
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img
                    src={logoBurger}
                    alt="logo"
                    width={34}
                    height={28}
                  />
                </motion.div>
                <motion.button
                  className="text-2xl p-2 focus:outline-none"
                  onClick={toggleMenu}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                >
                  <img
                    src={close}
                    alt="close"
                    className="h-10 w-10"
                  />
                </motion.button>
              </div>

              <div className="flex flex-row justify-between">
                {/* Социальные ссылки */}
                <div>
                  <motion.h2
                    className="text-base text-[#637695] mb-4 leading-[22px] font-book"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
                  >
                    Social
                  </motion.h2>
                  <ul className="space-y-6">
                    {socialLinks.map((link, index) => (
                      <motion.li
                        key={link.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <a
                          href={link.href}
                          className=" text-lg leading-[28px] font-book"
                        >
                          {link.title}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Основное меню */}
                <div>
                  <motion.h2
                    className="text-base text-[#637695] mb-4 font-book leading-[22px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
                  >
                    Menu
                  </motion.h2>
                  <ul className="space-y-6">
                    {menuLinks.map((link, index) => (
                      <motion.li
                        key={link.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.8 + index * 0.1,
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <a
                          href={link.href}
                          className="text-[34px]  font-ppneue font-book leading-[44px]"
                        >
                          {link.title}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Футер */}
              <motion.div
                className="text-base text-gray-400 flex flex-row justify-between mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              >
                <div className="font-book">
                  <p>Get in touch</p>
                  <p className="text-white">hi@ronindsgn.com</p>
                </div>
                <div className="text-xs flex flex-col gap-3 font-book mt-[2px]">
                  <p className="text-white">Privacy Policy & Cookies</p>
                  <p>© Ronin Design 2025</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Заголовок и кнопка меню */}
      {!isMenuOpen && (
      <motion.div
      className="fixed top-0 left-0 w-full px-4 py-4 bg-white transition-all duration-300 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-center w-full relative">
        {/* Логотип слева */}
        <motion.div
          className="absolute left-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <a href="/">
            <img src={logo} alt="logo" width={34} height={28} />
          </a>
        </motion.div>

        {/* Кнопка в центре */}
        <motion.button
          className="border-[1px] border-[#1261FC] text-[#1261FC] font-medium w-[138px] h-12 pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-[8px] "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut"}}
          onClick={() => {
            const element = document.getElementById("form-section");
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: elementPosition, behavior: "smooth" });
            }
        }}
        >
          Let’s chat!
        </motion.button>

        {/* Бургер-меню справа */}
        <motion.button
          className="absolute right-0"
          onClick={toggleMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img src={burger} alt="menu" className="h-10 w-10" />
        </motion.button>
      </div>
    </motion.div>
      )}
    </div>
  );
};

export default Header;
