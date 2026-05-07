import { useLocation } from 'react-router-dom';
import foot from '../../assets/icons/footer.png';
import { scrollToFormSection } from '../../App';

const NewsArticleHeaderDesktop = () => {
  const location = useLocation();

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
    <header className="font-ppneue flex w-full justify-center bg-white px-8 py-8">
      <div className="flex w-full max-w-[1440px] items-center justify-between">
        <a href="/" className="block">
          <img src={foot} alt="Ronin" className="w-[96px]" />
        </a>

        <nav className="flex items-center gap-10 text-[16px] font-book text-[#090C21]">
          <a href="/" className="transition duration-300 hover:text-[#1261FC]">
            Home
          </a>
          <button
            type="button"
            onClick={() => handleNavigation('about')}
            className="bg-transparent transition duration-300 hover:text-[#1261FC]"
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => handleNavigation('services')}
            className="bg-transparent transition duration-300 hover:text-[#1261FC]"
          >
            What We Do
          </button>
          <button
            type="button"
            onClick={() => handleNavigation('recentProjects')}
            className="bg-transparent transition duration-300 hover:text-[#1261FC]"
          >
            Our Works
          </button>
          <button
            type="button"
            onClick={() => handleNavigation('form-section')}
            className="bg-transparent transition duration-300 hover:text-[#1261FC]"
          >
            Contact Us
          </button>
        </nav>

        <a
          href="#form-section"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== '/') {
              sessionStorage.setItem('scrollTo', 'form-section');
              window.location.href = '/';
              return;
            }

            scrollToFormSection();
          }}
          className="flex h-[44px] w-[106px] items-center justify-center rounded-[8px] border border-[#090C21]/70 text-[16px] font-book text-[#090C21] transition duration-300 hover:border-[#1261FC] hover:text-[#1261FC]"
        >
          Let’s chat
        </a>
      </div>
    </header>
  );
};

export default NewsArticleHeaderDesktop;
