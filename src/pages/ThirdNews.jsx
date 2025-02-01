import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef } from "react";

import b3 from '../assets/icons/b3.png';
import arrow from '../assets/icons/arrow-right.svg';

const sections = [
  { id: "design-system", title: "What is a Design System?" },
  { id: "benefits", title: "The Benefits of a Design System:" },
  { id: "getting-started", title: "How to Get Started" },
  { id: "work-smarter", title: "Ready to work smarter, not harder?" }
];

const ThirdNews = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 80; // Настроенный отступ для лучшей видимости
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="font-ppneue flex flex-col items-center gap-3">
      <Header />
      <div className="flex flex-col mx-auto w-[85%] text-[#9CA3AF]">
        
        {/* Заголовок */}
        <h1 className="text-[40px] leading-[48px] font-medium text-[#090C21]">
          Why You Need a<br /> Design System
        </h1>

        {/* Введение */}
        <p className="mt-2 text-[#090C21] font-book sm25:w-[365px]">
          Ever find yourself re-creating the same buttons, colors, and layouts for every project? That’s where a design system comes in. It’s a game-changer for teams looking to streamline workflows, save time, and deliver consistent results.
        </p>

        {/* Автор и дата */}
        <div className="mt-2 text-[#9CA3AF] text-xs flex items-center space-x-2">
          <span>By <span className="underline underline-offset-4 text-[#090C21]">Ronin</span></span>
          <span>• Jan 22, 2025</span>
          <span>• 3 min read</span>
        </div>

        {/* Картинка */}
        <div className="mt-6 bg-gray-100 rounded-xl overflow-hidden">
          <img src={b3} alt="Why You Need a Design System" className="w-full" />
        </div>

        {/* Навигация по секциям */}
        <div className="mt-6 flex flex-col">
          {sections.map((section) => (
            <button
              key={section.id}
              className="w-full flex items-center justify-start py-3 text-lg font-medium text-[#090C21] focus:outline-none border-b border-[#090C21] border-opacity-10"
              onClick={() => scrollToSection(section.id)}
            >
              <img src={arrow} alt="arrow" className="mr-2" />
              {section.title}
            </button>
          ))}
        </div>

        {/* Контент секций */}
        <div className="mt-10 text-[#090C21]">
          {/* What is a Design System? */}
          <div ref={(el) => (sectionRefs.current["design-system"] = el)}>
            <h2 className="text-[24px] font-medium">What is a Design System?</h2>
            <p className="mt-2 leading-[24px] font-book">
              A design system is a centralized library of components, guidelines, and standards that help your team maintain consistency across all projects. It’s like having a blueprint for your entire product.
            </p>
          </div>

          {/* The Benefits of a Design System */}
          <div className="mt-10" ref={(el) => (sectionRefs.current["benefits"] = el)}>
            <h2 className="text-[24px] font-medium">The Benefits of<br/> a Design System:</h2>

            <p className="mt-2 leading-[24px] font-book"><span className="font-medium text-lg">1. Consistency Across Products:</span> <br/> A design system ensures every button, font, and layout feels cohesive, strengthening your brand identity.</p>

            <p className="mt-6 leading-[24px] font-book"><span className="font-medium text-lg">2. Faster Development:</span> <br/>With ready-to-use components, designers and developers can focus on innovation rather than reinventing the wheel.</p>

            <p className="mt-6 leading-[24px] font-book"><span className="font-medium text-lg">3. Better Collaboration:</span><br/> Design systems bridge the gap between designers, developers, and stakeholders, ensuring everyone’s on the same page.</p>
          </div>

          {/* How to Get Started */}
          <div className="mt-10" ref={(el) => (sectionRefs.current["getting-started"] = el)}>
            <h2 className="text-[24px] font-medium leading-[34px]" >How to Get Started:</h2>
            <p className="mt-2 leading-[24px] font-book">
              · Audit your existing designs and identify reusable elements.
            </p>
            <p className="mt-2 leading-[24px] font-book">
              · Create a shared library of components with tools like Figma or Sketch.
            </p>
            <p className="mt-2 leading-[24px] font-book">
              · Document guidelines for spacing, typography, and interaction states to keep everyone aligned.
            </p>
          </div>

          {/* Ready to work smarter, not harder? */}
          <div className="mt-10" ref={(el) => (sectionRefs.current["work-smarter"] = el)}>
            <h2 className="text-[24px] font-medium">Ready to work smarter,<br/> not harder?</h2>
            <p className="mt-2 leading-[24px] font-book">
              Start building your design system today and transform the way you create digital products!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThirdNews;