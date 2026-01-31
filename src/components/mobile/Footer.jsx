import foot from '../../assets/icons/footer.png';

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Останавливаем стандартный переход
    const isHomePage = window.location.pathname === '/'; // Проверяем, на главной ли мы

    if (!isHomePage) {
      sessionStorage.setItem('scrollTo', targetId); // Сохраняем ID в sessionStorage
      window.location.href = '/'; // Делаем редирект на главную
    } else {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 100; // Если есть фиксированный хедер
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const links = [
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms and Conditions', url: '/terms-and-conditions' },
    { label: 'Cookie Policy', url: '/cookie-policy' },
  ];
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="font-ppneue flex flex-col mx-auto gap-8 w-[85%] mb-12 bg-white items-center mt-40">
      <div className="flex flex-col gap-8">
        {/* Логотип */}
        <div className="mx-auto">
          <img src={foot} alt="footer" className="" />
        </div>{' '}
        {/* Место для лого */}
        {/* Заголовок и описание */}
        <div>
          <h2 className="text-[40px] font-medium">Let’s Talk</h2>
          <p className="font-book">Global web design agency</p>
        </div>
        {/* Социальные сети и меню */}
        <div className="flex justify-between mt-8">
          {/* Social */}
          <div className="flex flex-col gap-6 font-book">
            <p className="text-[#637695]">Social</p>
            <a
              href="https://www.instagram.com/ronin.dsgn/"
              className="hover:underline text-lg"
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/ronindsgn"
              className="hover:underline text-lg"
            >
              Behance
            </a>
            <a href="#" className="hover:underline text-lg disabled-link">
              Dribbble
            </a>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-6">
            <p className="text-[#637695] font-book">Menu</p>
            <a
              href="#"
              onClick={(e) => handleScroll(e, 'services')}
              className="text-lg font-book"
            >
              Services
            </a>
            <a
              href="#"
              onClick={(e) => handleScroll(e, 'recentProjects')}
              className="text-lg font-book"
            >
              Works
            </a>
            <a
              href="#"
              onClick={(e) => handleScroll(e, 'development')}
              className="text-lg font-book"
            >
              Development
            </a>
            <a
              href="#"
              onClick={(e) => handleScroll(e, 'about')}
              className="text-lg font-book"
            >
              About
            </a>
            <a
              href="#"
              onClick={(e) => handleScroll(e, 'form-section')}
              className="text-lg font-book"
            >
              Blog
            </a>
          </div>
        </div>
        <hr className="border-t border-black border-opacity-10 mb-4 mt-6" />
        <div className="flex flex-col gap-2 font-book">
          <p className="text-[#637695]">Get in touch</p>
          <a href="mailto:hi@ronindsgn.com">hi@ronindsgn.com</a>
        </div>
        <div className="flex flex-col gap-3 text-xs font-book">
          <div className="flex flex-col gap-3">
            {links.map((link, index) => (
              <p
                key={index}
                onClick={() => handleRedirect(link.url)}
                className="cursor-pointer text-[#090C21] hover:text-[#1261FC] transition duration-300"
              >
                {link.label}
              </p>
            ))}
          </div>
          <p className="text-[#637695]">©2019-2025 Ronin Design Agency</p>
        </div>
      </div>
    </footer>
  );
}
