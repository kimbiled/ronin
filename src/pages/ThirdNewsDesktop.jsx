import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";
import { useRef } from "react";

import b3 from '../assets/icons/b3.png';
import arrow from '../assets/icons/arrow-right.svg';

const sections = [
  { id: "design-system", title: "What is a Design System?" },
  { id: "benefits", title: "The Benefits of a Design System:" },
  { id: "getting-started", title: "How to Get Started" },
  { id: "work-smarter", title: "Ready to work smarter, not harder?" }
];

const ThirdNewsDesktop = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 90; // Уменьшенный отступ для лучшей навигации
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
                    <h1 className="text-[64px] leading-[70px] font-medium text-[#090C21]">Why You Need a<br/>
                    Design System</h1>
                    <p className="mt-4 text-[#090C21] font-book text-[24px] leading-[38px]">
                    Ever find yourself re-creating the same buttons, colors, and layouts for every project? That’s where a design system comes in. It’s a game-changer for teams looking to streamline workflows, save time, and deliver consistent results</p>
                </div>
                <div className="mt-7 text-[#9CA3AF] flex items-center gap-2">
                    <span>By <span className="underline underline-offset-4 text-[#090C21]">Ronin</span></span>
                    <span>•</span>
                    <span>Jan 22, 2025</span>
                    <span>•</span>
                    <span>3 min read</span>
                </div>
                <div className="mt-6 overflow-hidden">
                    <img src={b3}  alt="Future of UX" className="w-full h-[400px]" />
                </div>

                <div className="flex flex-row gap-12 mt-16">
                <div className="flex flex-col max-w-[335px] w-full">
    {sections.map((section) => (
        <button
            key={section.id}
            className="w-full flex items-center text-left py-4 text-[22px] font-medium text-[#090C21] focus:outline-none border-b border-[#090C21] border-opacity-10"
            onClick={() => scrollToSection(section.id)}
        >
            <img src={arrow} alt="arrow" className="mr-2 flex-shrink-0" />
            <span className="flex-1">{section.title}</span>
        </button>
    ))}
</div>
                    <div className="max-w-[985px] w-full flex flex-col gap-[40px]">
                        <div className="text-[#090C21]" ref={(el) => (sectionRefs.current["design-system"] = el)}>
                            <h2 className="text-[44px] font-medium">What is a Design System?</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            A design system is a centralized library of components, guidelines, and standards that help your team maintain consistency across all projects. It’s like having a blueprint for your entire product </p>
                        </div>
                        <h4 className="text-[44px] font-medium mb-5 leading-[44px] mt-10"
                        ref={(el) => (sectionRefs.current["benefits"] = el)}>
                        The Benefits of<br/>
                        a Design System:
                        </h4>
                        <div className="text-[#090C21]">
                            <h2 className="text-[44px] font-medium">1.  Consistency Across Products:</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            A design system ensures every button, font, and layout feels cohesive, strengthening your brand identity
                            </p>
                        </div>
                        <div className="mt-4" >
                            <h2 className="text-[44px] font-medium">2.  Faster Development:</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            With ready-to-use components, designers and developers can focus on innovation rather than reinventing the wheel</p>
                        </div>
                
                        {/* Sustainability in UX */}
                        <div className="mt-4" >
                            <h2 className="text-[44px] font-medium">3.  Better Collaboration:</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            Design systems bridge the gap between designers, developers, and stakeholders, ensuring everyone’s on the same page</p>
                        </div>

                        <div className="mt-6" ref={(el) => (sectionRefs.current["getting-started"] = el)}>
                            <h2 className="text-[44px] font-medium">How to Get Started:</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            · Audit your existing designs and identify reusable elements
                            </p>
                            <p className="mt-6 text-[24px] leading-[38px] font-book">
                            · Create a shared library of components with tools like Figma or Sketch
                            </p>
                            <p className="mt-6 text-[24px] leading-[38px] font-book">
                            · Document guidelines for spacing, typography, and interaction states to keep everyone aligned
                            </p>
                        </div>

                        <div className="mt-10 text-[#090C21]" ref={(el) => (sectionRefs.current["work-smarter"] = el)}>
                            <h2 className="text-[44px] font-medium">Ready to work smarter,<br/>
                            not harder?</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            Start building your design system today and transform the way you create digital products!</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDesktop />
        </div>
    </div>
  );
};

export default ThirdNewsDesktop;