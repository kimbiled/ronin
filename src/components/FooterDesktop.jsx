import foot from '../assets/icons/footer.png';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const FooterDesktop = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const goPrivacy = () => {
        navigate("/privacy")
         window.scrollTo(0, 0);
    }

    const handleNavigation = (id, e) => {
        e.preventDefault(); // 🔹 Отключаем стандартный переход по ссылке
        
        if (location.pathname === "/") {
            // 🔹 Если уже на главной, просто скроллим
            const element = document.getElementById(id);
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: elementPosition, behavior: "smooth" });
            }
        } else {
            // 🔹 Если на другой странице, сохраняем ID и переходим на главную
            sessionStorage.setItem("scrollTo", id);
            window.location.href = "/";
        }
    };

    return (
        <footer className="font-ppneue flex flex-col w-[85%] items-center mt-[70px] mb-20">
            <div className="flex flex-row max-w-[1200px] w-full justify-between">
                <div className="flex flex-col justify-between w-full gap-24">
                    
                    {/* Левая часть */}
                    <div className='flex flex-row justify-between'>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[84px] font-medium leading-[92px]">Let’s Talk</h2>
                            <a href="mailto:hi@ronindsgn.com" className="text-[34px] text-black leading-[44px] font-book hover:text-gray-500 duration-500 ease-in-out">
                                hi@ronindsgn.com
                            </a>
                            <p className="text-[#9CA3AF] font-book text-[18px]">
                                Get your first task done<br /> for free in 24 hours
                            </p>
                        </div>

                        {/* Правая часть */}
                        <div className="flex flex-row gap-16">

                            {/* Menu */}
                            <div className="flex flex-col gap-7">
                                <p className="text-[#9CA3AF] text-[22px] font-book">Menu</p>
                                <a href="/" onClick={(e) => handleNavigation("about-us", e)} className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer">About Us</a>
                                <a href="/" onClick={(e) => handleNavigation("what-we-do", e)} className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer">What We Do</a>
                                <a href="/" onClick={(e) => handleNavigation("recentProjects", e)} className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer">Our Works</a>
                                <a href="/" onClick={(e) => handleNavigation("form-section", e)} className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer">Contact Us</a>
                            </div>

                            {/* Social */}
                            <div className="flex flex-col gap-7">
                                <p className="text-[#9CA3AF] text-[22px] font-book">Social</p>
                                <a href="https://www.instagram.com/ronin.dsgn/" className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer">Instagram</a>
                                <a href="/" className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer">Behance</a>
                                <a href="/" className="text-[22px] leading-[24px] font-book hover:text-gray-500 cursor-pointer disabled-link">Dribbble</a>
                                
                            </div>
                        </div>
                    </div>

                    {/* Лого и копирайт */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className="flex flex-col items-center gap-4">
                            <img src={foot} alt="footer" className="w-[164px]" />
                            <p className="text-[#9CA3AF] text-lg font-book">© Ronin Design 2025</p>
                        </div>
                        <p className="text-[#9CA3AF] text-lg mt-4 hover:text-black cursor-pointer"
                        onClick={goPrivacy}>Privacy Policy & Cookies</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default FooterDesktop;
