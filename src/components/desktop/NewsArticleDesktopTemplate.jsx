import { useRef } from 'react';
import FooterDesktop from './FooterDesktop';
import NewsArticleHeaderDesktop from './NewsArticleHeaderDesktop';
import arrow from '../../assets/icons/arrow-right.svg';

const NewsArticleDesktopTemplate = ({ article }) => {
  const sectionRefs = useRef({});
  const showSectionNumbers = article.showSectionNumbers ?? true;

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (!element) return;

    const offset = 90;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-[#090C21]">
      <NewsArticleHeaderDesktop />

      <main className="font-ppneue mx-auto mt-[74px] flex w-[85%] max-w-[1200px] flex-col">
        <div className="mx-auto w-full max-w-[980px]">
          <h1 className="max-w-[940px] text-[52px] font-medium leading-[62px]">
            {article.title}
          </h1>
          <p className="mt-7 max-w-[920px] text-[20px] font-book leading-[32px] text-[#2E3345]">
            {article.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-[14px] font-book text-[#9CA3AF]">
            <span>By</span>
            <span className="text-[#090C21] underline underline-offset-4">
              Ronin
            </span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="mt-7 flex gap-6">
            <img
              src={article.image}
              alt={article.title}
              className="h-[300px] w-[670px] rounded-[28px] object-cover"
            />

            <aside className="flex w-[300px] shrink-0 flex-col pt-1">
              {article.sections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`flex w-full items-center py-4 text-left text-[17px] font-medium leading-[22px] text-[#090C21] transition duration-300 hover:text-[#1261FC] ${
                    index !== article.sections.length - 1
                      ? 'border-b border-[#090C21]/10'
                      : ''
                  }`}
                >
                  <img src={arrow} alt="" className="mr-2 h-3 w-3" />
                  {section.title}
                </button>
              ))}
            </aside>
          </div>

          <div className="mt-[54px] flex max-w-[940px] flex-col gap-[58px]">
            {article.intro && (
              <section>
                <h2 className="text-[34px] font-medium leading-[42px]">
                  {article.intro.title}
                </h2>
                {article.intro.paragraphs && (
                  <div className="mt-5 flex flex-col gap-8 text-[20px] font-book leading-[32px] text-[#2E3345]">
                    {article.intro.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </section>
            )}

            {article.sections.map((section, index) => (
              <section
                key={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
              >
                <h2 className="text-[34px] font-medium leading-[42px]">
                  {showSectionNumbers ? `${index + 1}. ` : ''}
                  {section.title}
                </h2>
                <div className="mt-5 flex flex-col gap-8 text-[20px] font-book leading-[32px] text-[#2E3345]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {article.ctaTitle && (
              <section className="pt-2">
                <h2 className="text-[34px] font-medium leading-[42px]">
                  {article.ctaTitle}
                </h2>
                <p className="mt-5 text-[20px] font-book leading-[32px] text-[#2E3345]">
                  {article.ctaText}
                </p>
              </section>
            )}
          </div>
        </div>
      </main>

      <div className="mx-auto mt-[180px] flex w-[85%] max-w-[1200px] justify-center">
        <FooterDesktop />
      </div>
    </div>
  );
};

export default NewsArticleDesktopTemplate;
