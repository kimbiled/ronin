import foot from '../assets/icons/footer.png'
const FooterDesktop = () =>{
    return (
        <footer className="font-ppneue flex flex-col w-[85%] items-center mt-[70px] mb-20">
            <div className="flex flex-row max-w-[1200px] w-full justify-between">
            <div className="flex flex-col justify-between w-full gap-24">
        {/* Левая часть */}
            <div className='flex flex-row justify-between'>
                <div className="flex flex-col gap-6">
                <h2 className="text-[84px] font-medium leading-[92px]">Let’s Talk</h2>
                <a href="mailto:hi@ronindsgn.com" className="text-[34px] text-black leading-[44px] font-book">
                    hi@ronindsgn.com
                </a>
                <p className="text-[#9CA3AF] font-book text-[18px]">Get your first task done<br /> for free in 24 hours</p>
                </div>
        
                {/* Правая часть */}
                <div className="flex flex-row gap-16">
                {/* Menu */}
                <div className="flex flex-col gap-7">
                    <p className="text-[#9CA3AF] text-[22px] font-book">Menu</p>
                    <a href="#" className="text-[22px] leading-[24px] font-book">About Us</a>
                    <a href="#" className="text-[22px] leading-[24px] font-book">What We Do</a>
                    <a href="#" className="text-[22px] leading-[24px] font-book">Our Works</a>
                    <a href="#" className="text-[22px] leading-[24px] font-book">Contact Us</a>
                </div>
        
                {/* Social */}
                <div className="flex flex-col gap-7">
                    <p className="text-[#9CA3AF] text-[22px] font-book">Social</p>
                    <a href="#" className="text-[22px] leading-[24px] font-book">Dribbble</a>
                    <a href="#" className="text-[22px] leading-[24px] font-book">Behance</a>
                    <a href="#" className="text-[22px] leading-[24px] font-book">Instagram</a>
                </div>
                </div>
            </div>

        <div className='flex flex-row justify-between items-center'>
                <div className="flex flex-col items-center gap-4">
                    <img src={foot} alt="footer" className="w-[164px]" />
                    <p className="text-[#9CA3AF] text-lg font-book">© Ronin Design 2025</p>
                </div>
                    
                    <p className="text-[#9CA3AF] text-lg mt-4">Privacy Policy & Cookies</p>
                </div>
              </div>
            </div>
        </footer>
    )
}
export default FooterDesktop;