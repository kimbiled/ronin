import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";
import { useRef } from "react";

import b2 from '../assets/desktop/b2.png';
import arrow from '../assets/icons/arrow-right.svg';

const sections = [
  { id: "ai-personalization", title: "AI-Driven Personalization" },
  { id: "ar-vr-experiences", title: "Immersive Experiences with AR/VR" },
  { id: "data-driven-design", title: "Data-Driven Design Decisions" },
  { id: "sustainability-ux", title: "Sustainability in UX" },
  { id: "why-trends-matter", title: "Why These Trends Matter" }
];

const SecondNewsDesktop = () => {
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
                    <h1 className="text-[64px] leading-[70px] font-medium text-[#090C21]">The Future of UX:<br /> Emerging Trends to Watch in 2025</h1>
                    <p className="mt-4 text-[#090C21] font-book text-[24px] leading-[38px]">
                    The world of UX design is ever-evolving, and staying ahead of the curve is essential for creating impactful user experiences.</p>
                </div>
                <div className="mt-7 text-[#9CA3AF] flex items-center gap-2">
                    <span>By <span className="underline underline-offset-4 text-[#090C21]">Ronin</span></span>
                    <span>•</span>
                    <span>Jan 4, 2025</span>
                    <span>•</span>
                    <span>2 min read</span>
                </div>
                 <div className="mt-6 overflow-hidden flex flex-row w-full gap-7">
                                    <img src={b2} alt="Abstract Design" className="w-[840px] h-[400px]" />
                                    <div className="flex flex-col max-w-[380px] w-full">
                                    {sections.map((section, index) => (
                    <button
                        key={section.id}
                        className={`w-full flex items-center justify-start py-4 text-[22px] font-medium text-[#090C21] focus:outline-none ${
                            index !== sections.length - 1 ? "border-b border-[#090C21] border-opacity-10" : ""
                        }`}
                        onClick={() => scrollToSection(section.id)}
                    >
                        <img src={arrow} alt="arrow" className="mr-2" />
                        <span className="text-left">
            {section.title.includes(" with") ? (
                <>
                    {section.title.split(" with")[0]} <br /> with {section.title.split(" with")[1]}
                </>
            ) : (
                section.title
            )}
        </span>
                    </button>
                ))}
                        </div>
                                </div>

                <div className="flex flex-row gap-12 mt-16">
                    <div className="max-w-[985px] w-full flex flex-col gap-[40px]">
                        <h4 className="text-[44px] font-medium mb-5 leading-[44px]">
                            As we step into 2025, here are the key UX trends that will shape the industry in the coming year:
                        </h4>
                        <div className="text-[#090C21]" ref={(el) => (sectionRefs.current["ai-personalization"] = el)}>
                            <h2 className="text-[44px] font-medium">1. AI-Driven Personalization</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            Artificial intelligence continues to revolutionize how users interact with digital products. By analyzing user behavior and preferences, AI enables hyper-personalized experiences that feel intuitive and engaging. From dynamic content to tailored recommendations, personalization powered by AI will become a baseline expectation for users </p>
                        </div>
                        <div className="mt-6 text-[#090C21]" ref={(el) => (sectionRefs.current["ar-vr-experiences"] = el)}>
                            <h2 className="text-[44px] font-medium">2. Immersive Experiences with AR/VR</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            Augmented and virtual reality are no longer niche technologies. In 2025, they’ll take center stage in UX design, especially in gaming, e-commerce, and education. Designers will need to craft seamless, immersive interfaces that merge the digital and physical worlds
                            </p>
                            <p className="mt-8 text-[24px] leading-[38px] font-book">
                                As inclusivity becomes a priority, designing for accessibility will be non-negotiable. From color contrast to keyboard navigation, every aspect of UX will need to accommodate diverse user needs, ensuring no one is left behind
                            </p>
                        </div>
                        <div className="mt-6" ref={(el) => (sectionRefs.current["data-driven-design"] = el)}>
                            <h2 className="text-[44px] font-medium">3. Data-Driven Design Decisions</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            With advanced analytics tools, designers can now rely on data to inform their decisions. Metrics like heatmaps, user behavior tracking, and A/B testing will guide design iterations, making user experiences more intuitive and effective
                            </p>
                        </div>
                
                        {/* Sustainability in UX */}
                        <div className="mt-6" ref={(el) => (sectionRefs.current["sustainability-ux"] = el)}>
                            <h2 className="text-[44px] font-medium">4. Sustainability in UX</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            As sustainability becomes a global focus, digital products will follow suit. Designers will look for ways to reduce the energy consumption of websites and apps, prioritize eco-friendly hosting, and highlight sustainable practices through thoughtful design</p>
                        </div>

                        <div className="mt-6" ref={(el) => (sectionRefs.current["why-trends-matter"] = el)}>
                            <h2 className="text-[44px] font-medium">Why These Trends Matter</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            Embracing these trends means not only staying relevant but also meeting user expectations in an increasingly competitive digital landscape.
                            </p>
                            <p className="mt-8 text-[24px] leading-[38px] font-book">
                            By focusing on personalization, inclusivity, and emerging technologies, UX designers can create products that stand out and truly connect with their audiences.
                            </p>
                        </div>

                        <div className="mt-10 text-[#090C21]" ref={(el) => (sectionRefs.current["why-it-matters"] = el)}>
                            <h2 className="text-[44px] font-medium">Why It Matters:</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            Studies show that inclusive websites not only improve user satisfaction but also boost SEO rankings. Search engines prioritize websites that are accessible, making inclusive design a win-win for both users and businesses.
                            </p>
                            <p className="mt-8 text-[24px] leading-[38px] font-book">
                            Don’t let your design leave anyone behind. Learn practical steps to make your projects more inclusive—because great design is for everyone.
                            </p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-[44px] font-medium">Are you ready for 2025?</h2>
                            <p className="mt-4 text-[24px] leading-[38px] font-book">
                            Whether you’re updating your product or building something new, keeping these trends in mind will ensure your UX stays innovative and user-centric. For more insights, follow our blog or get in touch with us directly</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDesktop />
        </div>
    </div>
  );
};

export default SecondNewsDesktop;