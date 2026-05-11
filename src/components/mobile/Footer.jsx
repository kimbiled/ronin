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
      <div className="flex w-full flex-col gap-8">
        {/* Логотип */}
        <div>
          <img src={foot} alt="footer" className="w-full" />
        </div>{' '}
        {/* Место для лого */}
        {/* Заголовок и описание */}
        <div>
          <h2 className="text-[40px] font-medium">Let’s Talk</h2>
          <a href="mailto:hi@ronindsgn.com" className="font-book text-[18px]">
            hi@ronindsgn.com
          </a>
        </div>
        {/* Социальные сети и меню */}
        <div className="mt-8 grid grid-cols-2 gap-12">
          {/* Social */}
          <div className="flex flex-col gap-8 font-book">
            <p className="text-[18px] text-[#637695]">Social</p>
            <a
              href="https://www.instagram.com/ronin.dsgn/"
              className="hover:text-gray-500 text-[18px] leading-[22px]"
            >
              Instagram
            </a>
            <a
              href="https://t.me/jedikuna"
              className="hover:text-gray-500 text-[18px] leading-[22px]"
            >
              Telegram
            </a>
            <a
              href="https://wa.me/77052771150"
              className="hover:text-gray-500 text-[18px] leading-[22px]"
            >
              WhatsApp
            </a>
            <a
              href="https://www.behance.net/ronindsgn"
              className="hover:text-gray-500 text-[18px] leading-[22px]"
            >
              Behance
            </a>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-8">
            <p className="text-[18px] text-[#637695] font-book">Menu</p>
            <button
              onClick={(e) => handleScroll(e, 'services')}
              className="text-[18px] leading-[22px] font-book hover:text-gray-500 transition cursor-pointer text-left"
            >
              Services
            </button>
            <button
              onClick={(e) => handleScroll(e, 'recentProjects')}
              className="text-[18px] leading-[22px] font-book hover:text-gray-500 transition cursor-pointer text-left"
            >
              Works
            </button>
            <button
              onClick={(e) => handleScroll(e, 'about')}
              className="text-[18px] leading-[22px] font-book hover:text-gray-500 transition cursor-pointer text-left"
            >
              About
            </button>
            <button
              onClick={(e) => handleScroll(e, 'blog')}
              className="text-[18px] leading-[22px] font-book hover:text-gray-500 transition cursor-pointer text-left"
            >
              Blog
            </button>
          </div>
        </div>
        <hr className="border-t border-black border-opacity-10 mb-4 mt-6" />
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
          <p className="text-[#637695]">©2019-2026 Ronin Design Agency</p>
        </div>
      </div>
    </footer>
  );
}
