import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/desktop/LogoDesktop.svg';
import { useLocation } from 'react-router-dom';

const calendarUrl = 'https://calendar.app.google/nYhyEheWC7yKt57y8';

const HeaderDesktop = () => {
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [isCompact, setIsCompact] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  const navItems = [
    { label: 'Services', target: 'services' },
    { label: 'Works', target: 'recentProjects' },
    { label: 'About', target: 'about' },
    { label: 'Blog', target: 'blog' },
  ];

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
    <div className="h-[80px] w-full">
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-center font-ppneue">
        <div
          className={`flex w-fit origin-top items-center justify-center gap-2 px-4 py-[20px] transition-all duration-300 ease-out ${
            isCompact ? 'scale-[0.9]' : 'scale-100'
          }`}
        >
          <a
            href="/"
            className="flex h-10 w-9 items-center justify-center rounded-lg bg-[#F7F7F6] p-[10px]"
          >
            <img src={logo} alt="logo" />
          </a>

          <nav
            className="hidden h-10 w-[387px] cursor-pointer items-center justify-between rounded-lg bg-[#F7F7F6] px-[34px] text-[16px] font-book text-[#090C21] lg:flex"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navItems.map((item) => (
              <button
                key={item.target}
                onMouseEnter={() => setHoveredNav(item.target)}
                onClick={() => handleNavigation(item.target)}
                className={`cursor-pointer border-none bg-transparent transition-colors duration-300 ease-in-out ${
                  hoveredNav && hoveredNav !== item.target
                    ? 'text-[#7F828C]'
                    : 'text-[#090C21]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-[135px] items-center justify-center rounded-lg bg-[#3B6DFF] text-[16px] text-white transition hover:brightness-95 active:brightness-90"
          >
            Book a call
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
