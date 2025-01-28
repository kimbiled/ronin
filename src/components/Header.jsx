import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  const [prevScrollY, setPrevScrollY] = useState(0); // Previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < prevScrollY) {
        setIsVisible(true); // Scroll up, show the navbar
      } else {
        setIsVisible(false); // Scroll down, hide the navbar
      }
      setPrevScrollY(window.scrollY); // Update the previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);


  const socialLinks = [
    { title: "Dribbble", href: "#" },
    { title: "Behance", href: "#" },
    { title: "Instagram", href: "#" },
  ];

  const menuLinks = [
    { title: "About Us", href: "#" },
    { title: "What We Do", href: "#" },
    { title: "Our Works", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  return (
    <div className="relative h-32 text-white flex flex-col items-center w-full">
      {/* Меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 text-white z-40"
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
                    src="./images/icons/LogoBurger.png"
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
                    src="./images/icons/close.png"
                    alt="close"
                    className="h-10 w-10"
                  />
                </motion.button>
              </div>

              <div className="flex flex-row justify-between">
                {/* Социальные ссылки */}
                <div>
                  <motion.h2
                    className="text-base text-gray-400 mb-4"
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
                          className="hover:text-blue-400 text-lg"
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
                    className="text-base text-gray-400 mb-4"
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
                          className="text-[34px] font-semibold hover:text-blue-400"
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
                className="text-base text-gray-400 flex flex-row justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
              >
                <div>
                  <p>Get in touch</p>
                  <p className="text-white">hi@ronindsgn.com</p>
                </div>
                <div className="text-sm flex flex-col gap-2">
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
              className={`fixed top-0 left-0 w-full px-4 py-4 transition-all duration-300 ${isVisible ? 'opacity-100 bg-white' : 'opacity-0 bg-transparent'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ zIndex: 1000 }} // Ensure navbar stays on top
            >
              <div className="flex justify-between items-center w-full">
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <img
                    src="./images/icons/logo.png"
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
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                >
                  <img
                    src="./images/icons/burger.png"
                    alt="close"
                    className="h-10 w-10"
                  />
                </motion.button>
              </div>
            </motion.div>
      )}
    </div>
  );
};

export default Header;
