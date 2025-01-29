export default function Footer() {
    return (
      <footer className="flex flex-col mx-auto gap-8 w-[85%] mb-12 bg-white items-center mt-40">
        <div className="flex flex-col gap-8">
          {/* Логотип */}
          <div className="mx-auto">
            <img src="./images/icons/footer.png" alt="footer" className=""/>  
          </div> {/* Место для лого */}
  
          {/* Заголовок и описание */}
          <div>
            <h2 className="text-[40px] font-medium">Let’s Talk</h2>
            <p>Global web design agency</p>
          </div>
  
          {/* Социальные сети и меню */}
          <div className="flex justify-between">
            {/* Social */}
            <div className="flex flex-col gap-6">
              <p className="text-[#637695]">Social</p>
              <a href="#" className="hover:underline">Dribbble</a>
              <a href="#" className="hover:underline">Behance</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
  
            {/* Menu */}
            <div className="flex flex-col gap-4">
              <p className="text-[#637695] text-sm">Menu</p>
              <a href="#" className="hover:underline text-[34px] font-medium">About Us</a>
              <a href="#" className="hover:underline text-[34px] font-medium">What We Do</a>
              <a href="#" className="hover:underline text-[34px] font-medium">Our Works</a>
              <a href="#" className="hover:underline text-[34px] font-medium">Contact Us</a>
            </div>
          </div>
  
          {/* Разделительная линия */}
          <hr className="border-t border-black border-opacity-10 mb-4 mt-6" />
  
          {/* Контактная информация */}
          <div className="flex flex-col gap-2">
            <p className="text-[#637695]">Get in touch</p>
            <a href="mailto:hi@ronindsgn.com" className="">hi@ronindsgn.com</a>
          </div>
  
          {/* Политика и копирайт */}
          <div className="flex flex-col gap-1 text-xs">
            <p>Privacy Policy & Cookies</p>
            <p className="text-[#637695]">©2019-2025 Ronin Design Agency</p>
          </div>
        </div>
      </footer>
    );
  }