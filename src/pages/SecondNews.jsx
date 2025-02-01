import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef } from "react";

import b2 from '../assets/icons/b2.png';
import arrow from '../assets/icons/arrow-right.svg';

const sections = [
  { id: "ai-personalization", title: "AI-Driven Personalization" },
  { id: "ar-vr-experiences", title: "Immersive Experiences with AR/VR" },
  { id: "data-driven-design", title: "Data-Driven Design Decisions" },
  { id: "sustainability-ux", title: "Sustainability in UX" },
  { id: "why-trends-matter", title: "Why These Trends Matter" }
];

const SecondNews = () => {
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
    <div className="font-ppneue flex flex-col items-center gap-3">
      <Header />
      <div className="flex flex-col mx-auto w-[85%] text-[#9CA3AF]">
        
        {/* Заголовок */}
        <h1 className="text-[40px] leading-[48px] font-medium text-[#090C21]">
          The Future of UX:<br /> Emerging Trends to Watch in 2025
        </h1>

        {/* Введение */}
        <p className="mt-2 text-[#090C21] font-book sm25:w-[365px]">
          The world of UX design is ever-evolving, and staying ahead of the curve is essential for creating impactful user experiences.
        </p>

        {/* Автор и дата */}
        <div className="mt-2 text-[#9CA3AF] text-xs flex items-center space-x-2">
          <span>By <span className="underline underline-offset-4 text-[#090C21]">Ronin</span></span>
          <span>• Jan 4, 2025</span>
          <span>• 2 min read</span>
        </div>

        {/* Картинка */}
        <div className="mt-6 bg-gray-100 rounded-xl overflow-hidden">
          <img src={b2} alt="Future of UX" className="w-full" />
        </div>

        {/* Навигация по секциям */}
        <div className="mt-6 flex flex-col">
          {sections.map((section) => (
            <button
              key={section.id}
              className="w-full flex items-center justify-start py-4 text-xl font-medium text-[#090C21] focus:outline-none border-b border-[#090C21] border-opacity-10"
              onClick={() => scrollToSection(section.id)}
            >
              <img src={arrow} alt="arrow" className="mr-2" />
              {section.title}
            </button>
          ))}
        </div>

        {/* Контент секций */}
        <div className="mt-11 text-[#090C21]">
            <h4 className="font-medium text-[24px] leading-[34px] mb-5">
            As we step into 2025, here are the key UX trends that will shape the industry in the coming year:
            </h4>
          {/* AI-Driven Personalization */}
          <div ref={(el) => (sectionRefs.current["ai-personalization"] = el)}>
            <h2 className="text-lg font-medium">1. AI-Driven Personalization</h2>
            <p className="mt-2 leading-[24px] font-book">
            Artificial intelligence continues to revolutionize how users interact with digital products. By analyzing user behavior and preferences, AI enables hyper-personalized experiences that feel intuitive and engaging. From dynamic content to tailored recommendations, personalization powered by AI will become a baseline expectation for users </p>
          </div>

          {/* AR/VR Experiences */}
          <div className="mt-6" ref={(el) => (sectionRefs.current["ar-vr-experiences"] = el)}>
            <h2 className="text-lg font-medium">2. Immersive Experiences with AR/VR</h2>
            <p className="mt-2 leading-[24px] font-book">
            Augmented and virtual reality are no longer niche technologies. In 2025, they’ll take center stage in UX design, especially in gaming, e-commerce, and education. Designers will need to craft seamless, immersive interfaces that merge the digital and physical worlds
            </p>
            <p className="mt-6 leading-[24px] font-book">
                As inclusivity becomes a priority, designing for accessibility will be non-negotiable. From color contrast to keyboard navigation, every aspect of UX will need to accommodate diverse user needs, ensuring no one is left behind
            </p>
          </div>

          {/* Data-Driven Design */}
          <div className="mt-6" ref={(el) => (sectionRefs.current["data-driven-design"] = el)}>
            <h2 className="text-lg font-medium">3. Data-Driven Design Decisions</h2>
            <p className="mt-2 leading-[24px] font-book">
            With advanced analytics tools, designers can now rely on data to inform their decisions. Metrics like heatmaps, user behavior tracking, and A/B testing will guide design iterations, making user experiences more intuitive and effective
            </p>
        </div>

          {/* Sustainability in UX */}
          <div className="mt-6" ref={(el) => (sectionRefs.current["sustainability-ux"] = el)}>
            <h2 className="text-lg font-medium">4. Sustainability in UX</h2>
            <p className="mt-2 leading-[24px] font-book">
            As sustainability becomes a global focus, digital products will follow suit. Designers will look for ways to reduce the energy consumption of websites and apps, prioritize eco-friendly hosting, and highlight sustainable practices through thoughtful design</p>
          </div>

          {/* Why These Trends Matter */}
          <div className="mt-6" ref={(el) => (sectionRefs.current["why-trends-matter"] = el)}>
            <h2 className="text-[24px] font-medium">Why These Trends Matter</h2>
            <p className="mt-2 leading-[24px] font-book">
              Embracing these trends means not only staying relevant but also meeting user expectations in an increasingly competitive digital landscape.
            </p>
            <p className="mt-6 leading-[24px] font-book">
              By focusing on personalization, inclusivity, and emerging technologies, UX designers can create products that stand out and truly connect with their audiences.
            </p>
          </div>

          {/* Заключение */}
          <div className="mt-6">
            <h2 className="text-[24px] font-medium">Are you ready for 2025?</h2>
            <p className="mt-2 leading-[24px] font-book">
            Whether you’re updating your product or building something new, keeping these trends in mind will ensure your UX stays innovative and user-centric. For more insights, follow our blog or get in touch with us directly</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecondNews;