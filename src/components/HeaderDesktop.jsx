import logo from '../assets/desktop/LogoDesktop.svg';

const HeaderDesktop = () => {
  return (
    <div className="font-ppneue w-full p-8 bg-white flex justify-between items-center z-50">

      <a href="/" className="flex items-center">
        <img src={logo} alt="logo" />
      </a>

      <nav className="hidden lg:flex gap-12 text-[#090C21] text-lg font-book cursor-pointer">
        <a href="/" className='hover:text-gray-500 ease' >Home</a>
        <a 
        className='hover:text-gray-500 ease' 
         onClick={() => {
          const element = document.getElementById("about-us");
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
          }
        }}>About Us</a>
        <a 
        href=""
        className='hover:text-gray-500 ease' 
         onClick={() => {
          const element = document.getElementById("what-we-do");
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
          }
        }}>What We Do</a>
        <a href=""
        className='hover:text-gray-500 ease' 
         onClick={() => {
          const element = document.getElementById("recentProjects");
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
          }
        }}>Our Works</a>
        <a href=""
        className='hover:text-gray-500 ease' 
         onClick={() => {
          const element = document.getElementById("form-section");
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
          }
        }}>Contact Us</a>
      </nav>

      <a href="#contact" className="border border-[#090C21] flex items-center justify-center rounded-[12px] text-lg font-medium w-[140px] h-12 transition-all duration-200 
                   hover:bg-[#F2F6FE] active:bg-[#000000] active:text-[#FFFFFF] focus:border-dotted">
    Let’s talk!
</a>
    </div>
  );
};

export default HeaderDesktop;
