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
    { title: "Instagram", href: "https://www.instagram.com/ronin.dsgn/" },
    { title: "Dribbble", href: "#", disabled: true }, // Добавлен флаг disabled
    { title: "Behance", href: "#", disabled: true },  // Добавлен флаг disabled
  ];

  const menuLinks = [
    { title: "About Us", href: "#about-us" },
    { title: "What We Do", href: "#what-we-do" },
    { title: "Our Works", href: "#recentProjects" },
    { title: "Contact Us", href: "#form-section" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.position = "static";
    }
  
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.position = "static";
    };
  }, [isMenuOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
                  onClick={() => window.location.href = "/"}
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
        className={`text-lg leading-[28px] font-book ${
          link.disabled ? "disabled-link" : ""
        }`}
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
        className="text-[34px] font-ppneue font-book leading-[44px]"
        onClick={(e) => {
          e.preventDefault(); // Останавливаем стандартный переход
          setIsMenuOpen(false); // Закрываем меню

          const targetId = link.href.replace("#", ""); // Получаем ID блока
          const isHomePage = window.location.pathname === "/"; // Проверяем, находимся ли мы на главной

          if (!isHomePage) {
            sessionStorage.setItem("scrollTo", targetId); // Сохраняем ID в sessionStorage
            window.location.href = "/"; // Переходим на главную
          } else {
            setTimeout(() => {
              const element = document.getElementById(targetId);
              if (element) {
                const offset = 100; // Отступ для фиксированного хедера
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: elementPosition, behavior: "smooth" });
              }
            }, 100);
          }
        }}
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
                  <a href="mailto:hi@ronindsgn.com" className="text-white ">hi@ronindsgn.com</a>
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
   className={`fixed top-0 left-0 right-0 w-full px-3 bg-white transition-all duration-200 z-50 
    ${isScrolled ? 'py-3 rounded-[48px] border-[0.5px] border-gray-400 top-6 sm20:w-[300px] sm75:w-[345px] sm25:w-[400px] mx-auto' : 'py-4'}`}initial={{ opacity: 0, y: -20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.2, ease: "easeOut" }}
 >
   <div className="flex items-center justify-between w-full">
     {/* Логотип и бургер-меню в одном блоке */}
     <div className="flex items-center gap-[14px]">
       <button onClick={toggleMenu}> 
         <img src={burger} alt="Menu" className="h-10 w-10" />
       </button>
       <div>
         <a href="/">
           <img src={logo} alt="Logo" width={34} height={28} />
         </a>
       </div>
     </div>

     {/* Кнопка в отдельном блоке */}
     <button
  className="border border-[#1261FC] text-[#1261FC] font-medium px-6 py-2 rounded-[48px] sm20:h-12"
  onClick={(e) => {
    e.preventDefault(); // Останавливаем стандартное поведение
    const isHomePage = window.location.pathname === "/"; // Проверяем, на главной ли мы

    if (!isHomePage) {
      sessionStorage.setItem("scrollTo", "form-section"); // Сохраняем ID в sessionStorage
      window.location.href = "/"; // Редирект на главную
    } else {
      setTimeout(() => {
        const element = document.getElementById("form-section");
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: elementPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }}
>
  Let’s chat!
</button>
   </div>
 </motion.div>
      )}
    </div>
  );
};

export default Header;
