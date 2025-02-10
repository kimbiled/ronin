import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";
import { useRef } from "react";

import b1 from '../assets/icons/b1.png';
import arrow from '../assets/icons/arrow-right.svg';

const sections = [
  { id: "inclusive-design", title: "What is Inclusive Design?" },
  { id: "key-principles", title: "Key Principles of Inclusive Design" },
  { id: "why-it-matters", title: "Why It Matters" }
];

const FirstNewsDesktop = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 80; // Можно настроить это значение
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div>
        <HeaderDesktop />
        <div className="font-ppneue flex flex-col w-[85%] items-center mt-[68px] mx-auto">
            <div className="flex flex-col max-w-[1200px] w-full justify-between  mb-[168px]">
                <div className="flex flex-col gap-7">
                    <h1 className="text-[64px] leading-[70px] font-medium text-[#090C21]">Inclusive Design<br/> Made Simple</h1>
                    <p className="mt-4 text-[#090C21] font-book text-[24px] leading-[38px]">
                    Inclusive design isn’t just a buzzword; it’s a necessity in today’s digital-first world. By ensuring your designs are accessible, you create products that work for everyone, regardless of their abilities or limitations. But what does "inclusive design" really mean? Let’s break it down</p>
                </div>
                <div className="mt-7 text-[#9CA3AF] flex items-center gap-2">
                    <span>By <span className="underline underline-offset-4 text-[#090C21]">Ronin</span></span>
                    <span>•</span>
                    <span>Jan 1, 2025</span>
                    <span>•</span>
                    <span>2 min read</span>
                </div>
                <div className="mt-6 overflow-hidden">
                    <img src={b1} alt="Abstract Design" className="w-full h-[400px]" />
                </div>

                <div className="flex flex-row gap-12 mt-16">
                <div className="flex flex-col max-w-[335px] w-full sticky top-[100px] self-start h-full sticky">
        {sections.map((section) => (
            <button
                key={section.id}
                className="w-full flex items-center justify-start py-4 text-[22px] font-medium text-[#090C21] focus:outline-none border-b border-[#090C21] border-opacity-10"
                onClick={() => scrollToSection(section.id)}
            >
                <img src={arrow} alt="arrow" className="mr-2" />
                {section.title}
            </button>
        ))}
    </div>
                    <div className="max-w-[985px] w-full flex flex-col gap-[68px]">
                        <div className="text-[#090C21]" ref={(el) => (sectionRefs.current["inclusive-design"] = el)}>
                            <h2 className="text-[44px] font-medium">What is Inclusive Design?</h2>
                            <p className="mt-6 text-[24px] leading-[38px] font-book">
                            Inclusive design is about creating experiences that are usable by the widest range of people, from those with visual impairments to those navigating websites with assistive technologies. It’s not just about compliance—it’s about empathy and understanding user needs.</p>
                        </div>

                        <div className="mt-10 text-[#090C21]" ref={(el) => (sectionRefs.current["key-principles"] = el)}>
                            <h2 className="text-[44px] font-medium">Key Principles of Inclusive Design:</h2>
                            <p className="mt-[18px] text-[24px] leading-[38px]"><span className="font-medium">Flexibility:</span> Your design should adapt to diverse user needs. Think responsive layouts, scalable fonts, and voice command compatibility.</p>
                            <p className="mt-[18px] text-[24px] leading-[38px]"><span className="font-medium">Clarity:</span> Avoid unnecessary complexity. Simple navigation and clear typography benefit<br/> everyone.</p>
                            <p className="mt-[18px] text-[24px] leading-[38px]"><span className="font-medium"> Accessibility:</span> Use tools like contrast checkers and ARIA roles to ensure your designs are accessible to people with disabilities.</p>
                        </div>

                        <div className="mt-10 text-[#090C21]" ref={(el) => (sectionRefs.current["why-it-matters"] = el)}>
                            <h2 className="text-[44px] font-medium">Why It Matters:</h2>
                            <p className="mt-[18px] text-[24px] leading-[38px] font-book">
                            Studies show that inclusive websites not only improve user satisfaction but also boost SEO rankings. Search engines prioritize websites that are accessible, making inclusive design a win-win for both users and businesses.
                            </p>
                            <p className="mt-12 text-[24px] leading-[38px] font-book">
                            Don’t let your design leave anyone behind. Learn practical steps to make your projects more inclusive—because great design is for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDesktop />
        </div>
    </div>
  );
};

export default FirstNewsDesktop;