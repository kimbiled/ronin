import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/desktop/LogoDesktop.svg';
import { useLocation } from 'react-router-dom';

const calendarUrl = 'https://calendar.app.google/nYhyEheWC7yKt57y8';

const HeaderDesktop = () => {
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setIsCompact(false);
      } else if (currentScrollY > lastScrollY.current) {
        setIsCompact(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsCompact(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="h-[120px] w-full">
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-center font-ppneue">
        <div
          className={`flex w-full max-w-[790px] origin-top items-center justify-center gap-[11px] px-4 py-[39px] transition-all duration-300 ease-out ${
            isCompact ? 'scale-[0.9]' : 'scale-100'
          }`}
        >
          <a
            href="/"
            className="flex h-[43px] w-[43px] items-center justify-center rounded-lg bg-[#F7F7F6] p-[11px]"
          >
            <img src={logo} alt="logo" />
          </a>

          <nav className="hidden h-[43px] flex-1 cursor-pointer items-center justify-around rounded-lg bg-[#F7F7F6] px-[55px] text-[16px] font-book text-[#090C21] lg:flex">
            <button
              onClick={() => handleNavigation('services')}
              className="hover:text-gray-500 duration-300 ease-in-out cursor-pointer bg-transparent border-none"
            >
              Services
            </button>
            <button
              className="hover:text-gray-500 duration-300 ease-in-out cursor-pointer bg-transparent border-none"
              onClick={() => handleNavigation('recentProjects')}
            >
              Works
            </button>
            <button
              className="hover:text-gray-500 duration-300 ease-in-out cursor-pointer bg-transparent border-none"
              onClick={() => handleNavigation('about')}
            >
              About
            </button>
            <button
              className="hover:text-gray-500 duration-300 ease-in-out cursor-pointer bg-transparent border-none"
              onClick={() => handleNavigation('blog')}
            >
              Blog
            </button>
          </nav>

          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[43px] w-[135px] items-center justify-center rounded-lg bg-[#3B6DFF] text-[16px] text-white transition hover:brightness-95 active:brightness-90"
          >
            Book a call
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
