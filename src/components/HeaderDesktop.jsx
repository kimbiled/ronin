import logo from '../assets/desktop/LogoDesktop.svg';
import { useLocation } from "react-router-dom";

const HeaderDesktop = () => {
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      // 🔹 Если уже на главной, просто скроллим
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    } else {
      // 🔹 Если на другой странице, сохраняем ID и переходим на главную
      sessionStorage.setItem("scrollTo", id);
      window.location.href = "/";
    }
  };

  return (
    <div className="font-ppneue w-full p-8 bg-white flex justify-between items-center z-50">
      <a href="/" className="flex items-center">
        <img src={logo} alt="logo" />
      </a>

      <nav className="hidden lg:flex gap-12 text-[#090C21] text-lg font-book cursor-pointer">
        <a href="/" className='hover:text-gray-500 ease'>Home</a>
        <a className='hover:text-gray-500 ease' onClick={() => handleNavigation("about-us")}>About Us</a>
        <a className='hover:text-gray-500 ease' onClick={() => handleNavigation("what-we-do")}>What We Do</a>
        <a className='hover:text-gray-500 ease' onClick={() => handleNavigation("recentProjects")}>Our Works</a>
        <a className='hover:text-gray-500 ease' onClick={() => handleNavigation("form-section")}>Contact Us</a>
      </nav>

      <a href="#contact" className="border border-[#090C21] flex items-center justify-center rounded-[12px] text-lg font-medium w-[140px] h-12 transition-all duration-200 
                   hover:bg-[#F2F6FE] active:bg-[#000000] active:text-[#FFFFFF] focus:border-dotted">
    Let’s talk!
</a>
    </div>
  );
};

export default HeaderDesktop;