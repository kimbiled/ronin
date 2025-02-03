import logo from '../assets/desktop/LogoDesktop.svg';

const HeaderDesktop = () => {
  return (
    <div className="font-ppneue w-full p-8 bg-white flex justify-between items-center z-50">

      <a href="/" className="flex items-center">
        <img src={logo} alt="logo" />
      </a>

      <nav className="hidden lg:flex gap-12 text-[#090C21] text-lg font-book">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">What We Do</a>
        <a href="#">Our Works</a>
        <a href="#">Contact Us</a>
      </nav>

      <a href="#contact" className="border border-[#090C21] flex items-center justify-center rounded-[12px] text-lg font-medium w-[140px] h-12">
        Let’s talk!
      </a>
    </div>
  );
};

export default HeaderDesktop;