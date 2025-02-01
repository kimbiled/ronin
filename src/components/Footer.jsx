import foot from '../assets/icons/footer.png'

export default function Footer() {
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
              <a href="#" className="hover:underline text-lg">Dribbble</a>
              <a href="#" className="hover:underline text-lg">Behance</a>
              <a href="#" className="hover:underline text-lg">Instagram</a>
            </div>
  
            {/* Menu */}
            <div className="flex flex-col gap-4">
              <p className="text-[#637695] font-book">Menu</p>
              <a href="#" className="hover:underline text-[34px] font-book">About Us</a>
              <a href="#" className="hover:underline text-[34px] font-book">What We Do</a>
              <a href="#" className="hover:underline text-[34px] font-book">Our Works</a>
              <a href="#" className="hover:underline text-[34px] font-book">Contact Us</a>
            </div>
          </div>
  
          {/* Разделительная линия */}
          <hr className="border-t border-black border-opacity-10 mb-4 mt-6" />
  
          {/* Контактная информация */}
          <div className="flex flex-col gap-2 font-book">
            <p className="text-[#637695]">Get in touch</p>
            <a href="mailto:hi@ronindsgn.com" className="">hi@ronindsgn.com</a>
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