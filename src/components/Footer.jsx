import foot from '../assets/icons/footer.png'

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Останавливаем стандартный переход
    const isHomePage = window.location.pathname === "/"; // Проверяем, на главной ли мы

    if (!isHomePage) {
      sessionStorage.setItem("scrollTo", targetId); // Сохраняем ID в sessionStorage
      window.location.href = "/"; // Делаем редирект на главную
    } else {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 100; // Если есть фиксированный хедер
          const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: elementPosition, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <footer className="font-ppneue flex flex-col mx-auto gap-8 w-[85%] mb-12 bg-white items-center mt-40">
      <div className="flex flex-col gap-8">
        {/* Логотип */}
        <div className="mx-auto">
          <img src={foot} alt="footer" className=""/>  
        </div> {/* Место для лого */}

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
            <a href="" className="hover:underline text-lg">Dribbble</a>
            <a href="" className="hover:underline text-lg">Behance</a>
            <a href="https://www.instagram.com/ronin.dsgn/" className="hover:underline text-lg">Instagram</a>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-4">
            <p className="text-[#637695] font-book">Menu</p>
            <a href="/" onClick={(e) => handleScroll(e, "about-us")} className="text-[34px] font-book">About Us</a>
            <a href="/" onClick={(e) => handleScroll(e, "what-we-do")} className="text-[34px] font-book">What We Do</a>
            <a href="/" onClick={(e) => handleScroll(e, "recentProjects")} className="text-[34px] font-book">Our Works</a>
            <a href="/" onClick={(e) => handleScroll(e, "form-section")} className="text-[34px] font-book">Contact Us</a>
          </div>
        </div>

        {/* Разделительная линия */}
        <hr className="border-t border-black border-opacity-10 mb-4 mt-6" />

        {/* Контактная информация */}
        <div className="flex flex-col gap-2 font-book">
          <p className="text-[#637695]">Get in touch</p>
          <a href="mailto:hi@ronindsgn.com" >hi@ronindsgn.com</a>
        </div>

        {/* Политика и копирайт */}
        <div className="flex flex-col gap-3 text-xs font-book">
          <p>Privacy Policy & Cookies</p>
          <p className="text-[#637695]">©2019-2025 Ronin Design Agency</p>
        </div>
      </div>
    </footer>
  );
}