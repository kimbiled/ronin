import logo from '../../assets/desktop/LogoDesktop.svg';
import { useLocation } from 'react-router-dom';
import { scrollToFormSection } from '../../App';
const HeaderDesktop = () => {
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else {
      sessionStorage.setItem('scrollTo', id);
      window.location.href = '/';
    }
  };

  return (
    <div className="font-ppneue w-[60%] p-8 bg-white flex justify-center items-center z-50 gap-[10px]">
      <a
        href="/"
        className="flex items-center justify-center w-10 h-10 bg-[#F7F7F6] rounded-lg p-2"
      >
        <img src={logo} alt="logo" />
      </a>

      <nav className="hidden lg:flex gap-12 text-[#090C21] text-lg font-book cursor-pointer  bg-[#F7F7F6] rounded-lg px-[34px] py-3 h-10 items-center">
        <a href="/" className="hover:text-gray-500 duration-300 ease-in-out">
          Services
        </a>
        <a
          className="hover:text-gray-500 duration-300 ease-in-out "
          onClick={() => handleNavigation('about-us')}
        >
          Works
        </a>
        <a
          className="hover:text-gray-500 duration-300 ease-in-out"
          onClick={() => handleNavigation('what-we-do')}
        >
          Development
        </a>
        <a
          className="hover:text-gray-500 duration-300 ease-in-out"
          onClick={() => handleNavigation('recentProjects')}
        >
          About
        </a>
        <a
          className="hover:text-gray-500 duration-300 ease-in-out"
          onClick={() => handleNavigation('form-section')}
        >
          Blog
        </a>
      </nav>

      <a
        href="#form-section"
        className="bg-[#3B6DFF] text-white rounded-lg px-[34px] py-3 h-10 inline-flex items-center justify-center hover:brightness-95 active:brightness-90 transition"
        onClick={(e) => {
          e.preventDefault();
          const isHomePage = window.location.pathname === '/';

          if (!isHomePage) {
            sessionStorage.setItem('scrollTo', 'form-section');
            window.location.href = '/';
          } else {
            scrollToFormSection();
          }
        }}
      >
        Book a call
      </a>
    </div>
  );
};

export default HeaderDesktop;
