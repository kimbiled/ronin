import { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import arrow from '../../assets/icons/arrow-right.svg';

export default function NewsArticleMobileTemplate({ article }) {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];

    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-ppneue flex flex-col items-center gap-3">
      <Header />
      <div className="mx-auto flex w-[85%] flex-col text-[#9CA3AF]">
        <h1 className="text-[40px] font-medium leading-[48px] text-[#090C21]">
          {article.title}
        </h1>

        <p className="mt-4 text-[#090C21] font-book sm25:w-[365px]">
          {article.description}
        </p>

        <div className="mt-4 flex items-center space-x-2 text-xs text-[#9CA3AF]">
          <span>
            By{' '}
            <span className="text-[#090C21] underline underline-offset-4">
              Ronin
            </span>
          </span>
          <span>• {article.date}</span>
          <span>• {article.readTime}</span>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-6 flex flex-col">
          {article.sections.map((section) => (
            <button
              key={section.id}
              className="flex w-full items-center justify-start border-b border-[#090C21] border-opacity-10 py-4 text-left text-xl font-medium text-[#090C21] focus:outline-none"
              onClick={() => scrollToSection(section.id)}
            >
              <img src={arrow} alt="arrow" className="mr-2" />
              {section.title}
            </button>
          ))}
        </div>

        <div className="mt-10 text-[#090C21]">
          {article.sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="mt-10 first:mt-0"
            >
              <h2 className="text-[24px] font-medium">{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-4 text-base leading-[24px] font-book"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
