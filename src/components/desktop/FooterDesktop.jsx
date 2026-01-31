import foot from '../../assets/icons/footer.png';
import { useLocation } from 'react-router-dom';

const FooterDesktop = () => {
  const location = useLocation();

  const links = [
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms and Conditions', url: '/terms-and-conditions' },
    { label: 'Cookie Policy', url: '/cookie-policy' },
  ];

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const handleNavigation = (id, e) => {
    e.preventDefault(); // 🔹 Отключаем стандартный переход по ссылке

    if (location.pathname === '/') {
      // 🔹 Если уже на главной, просто скроллим
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else {
      // 🔹 Если на другой странице, сохраняем ID и переходим на главную
      sessionStorage.setItem('scrollTo', id);
      window.location.href = '/';
    }
  };

  return (
    <footer className="font-ppneue flex flex-col w-[85%] items-center mt-[70px] mb-20">
      <div className="flex flex-row max-w-[1200px] w-full justify-between">
        <div className="flex flex-col justify-between w-full gap-24">
          {/* Левая часть */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-6">
              <h2 className="text-[84px] font-medium leading-[92px]">
                Let’s Talk
              </h2>
              <a
                href="mailto:hi@ronindsgn.com"
                className="text-[34px] text-black leading-[44px] font-book hover:text-gray-500 duration-500 ease-in-out"
              >
                hi@ronindsgn.com
              </a>
              <p className="text-[#9CA3AF] font-book text-[18px]">
                Get your first task done
                <br /> for free in 24 hours
              </p>
            </div>

            {/* Правая часть */}
            <div className="flex flex-row gap-16">
              {/* Menu */}
              <div className="flex flex-col gap-7">
                <p className="text-[#9CA3AF] text-[22px] font-book">Menu</p>
                <a
                  onClick={() => handleNavigation('services')}
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 duration-300 ease-in-out cursor-pointer"
                >
                  Services
                </a>
                <a
                  onClick={() => handleNavigation('recentProjects')}
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 duration-300 ease-in-out cursor-pointer"
                >
                  Works
                </a>
                <a
                  onClick={() => handleNavigation('development')}
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 duration-300 ease-in-out cursor-pointer"
                >
                  Development
                </a>
                <a
                  onClick={() => handleNavigation('about')}
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 duration-300 ease-in-out cursor-pointer"
                >
                  About
                </a>
                <a
                  onClick={() => handleNavigation('form-section')}
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 duration-300 ease-in-out cursor-pointer"
                >
                  Blog
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-7">
                <p className="text-[#9CA3AF] text-[22px] font-book">Social</p>
                <a
                  href="https://www.instagram.com/ronin.dsgn/"
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.behance.net/ronindsgn"
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer"
                >
                  Behance
                </a>
                <a
                  href="/"
                  className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer disabled-link"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>

          {/* Лого и копирайт */}
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col items-center gap-4">
              <img src={foot} alt="footer" className="w-[164px]" />
              <p className="text-[#9CA3AF] text-lg font-book">
                © Ronin Design 2025
              </p>
            </div>

            <div className="flex flex-row gap-12">
              {links.map((link, index) => (
                <p
                  key={index}
                  onClick={() => handleRedirect(link.url)}
                  className="text-[#9CA3AF] text-lg hover:text-black cursor-pointer transition duration-300"
                >
                  {link.label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
