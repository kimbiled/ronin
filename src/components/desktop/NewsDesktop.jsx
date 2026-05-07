import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQDesktop from './FaqDesktop';

import { motion } from 'framer-motion';

import n1 from '../../assets/desktop/n1.webp';
import n2 from '../../assets/desktop/n2.webp';
import n3 from '../../assets/desktop/n3.webp';
import n4 from '../../assets/desktop/n4.svg';
import n5 from '../../assets/desktop/n5.svg';
import n6 from '../../assets/desktop/n6.svg';
import orangearrow from '../../assets/desktop/orangeArrow.png';

const NewsDesktop = () => {
  const navigate = useNavigate();
  const [showAllNews, setShowAllNews] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Прокрутка вверх
  }, []);

  const featuredArticles = [
    {
      id: 'ui-design-trust',
      category: 'Trust',
      title: ['How Good UI Design', 'Builds Trust'],
      date: 'Jan 14, 2026',
      readTime: '2 min read',
      image: n4,
    },
    {
      id: 'website-design-conversion',
      category: 'Conversion',
      title: ['Website Design That Turns', 'Visitors Into Clients'],
      date: 'Mar 20, 2026',
      readTime: '3 min read',
      image: n5,
    },
    {
      id: 'ux-strategy-first',
      category: 'Strategy',
      title: ['From Idea to Product:', 'Why UX Strategy Comes First'],
      date: 'Apr 18, 2026',
      readTime: '2 min read',
      image: n6,
    },
  ];

  const existingArticles = [
    {
      id: 'inclusive-design',
      category: 'Accessibility',
      title: ['Inclusive Design', 'Made Simple'],
      date: 'Jan 1, 2025',
      readTime: '2 min read',
      image: n3,
    },
    {
      id: 'ux-trends-2025',
      category: 'Trends',
      title: ['The Future of UX: Emerging', ' Trends to Watch in 2025'],
      date: 'Jan 4, 2025',
      readTime: '2 min read',
      image: n2,
    },
    {
      id: 'design-system-need',
      category: 'Scalable Design',
      title: ['Why You Need a', 'Design System'],
      date: 'Jan 22, 2025',
      readTime: '3 min read',
      image: n1,
    },
  ];

  const articles = showAllNews
    ? [...featuredArticles, ...existingArticles]
    : featuredArticles;

  const openArticle = (article) => {
    navigate(`/news/desktop/${article.id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="font-ppneue w-full bg-[#090C21] h-auto">
      <div className="flex flex-col w-[85%] items-center mt-20 mx-auto">
        <div className="mt-[100px] flex flex-col max-w-[1200px] w-full justify-between gap-12">
          <p className="text-white font-medium leading-[92px] text-[84px] ">
            Featured News
          </p>
          <div className="flex flex-col gap-16 w-full mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                className={`pb-8 ${
                  index !== articles.length - 1
                    ? 'border-b border-white border-opacity-10'
                    : ''
                } block cursor-pointer`}
                whileHover={{ scale: 1.02 }} // 🚀 Зум при наведении
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                onClick={() => openArticle(article)}
              >
                <div className="flex flex-row gap-10">
                  {/* Изображение справа */}
                  <div>
                    <motion.img
                      src={article.image}
                      alt={article.title.join(' ')}
                      className="w-[530px] h-[300px] cursor-pointer rounded-[16px] object-cover"
                      onClick={() => openArticle(article)}
                    />
                  </div>

                  {/* Текст слева */}
                  <div className="flex flex-col justify-between">
                    {/* Категория */}
                    <div>
                      <p className="text-[#9CA3AF] font-book">
                        {article.category}
                      </p>
                      <h2 className="text-white text-[44px] font-medium leading-[54px] mt-2">
                        {article.title.map((line, i) => (
                          <span
                            key={i}
                            className="block cursor-pointer"
                            onClick={() => openArticle(article)}
                          >
                            {line}
                          </span>
                        ))}
                      </h2>
                    </div>

                    {/* Дата и время чтения */}
                    <div className="flex flex-row justify-between items-center mb-3 w-[320px]">
                      <div className="flex flex-row gap-2 text-[#9CA3AF] font-book">
                        <p>{article.date}</p>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div
                        className="flex flex-row items-center gap-2 cursor-pointer"
                        onClick={() => openArticle(article)}
                      >
                        <p className="text-[#F9A826] font-book">Read More</p>
                        <img
                          src={orangearrow}
                          alt="Arrow"
                          className="w-[14px] h-[10px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {!showAllNews && (
            <button
              type="button"
              onClick={() => setShowAllNews(true)}
              className="mx-auto flex h-[48px] w-[172px] items-center justify-center rounded-[8px] bg-white text-[18px] font-book text-[#1261FC] transition duration-300 hover:bg-white/90"
            >
              See all news
            </button>
          )}
        </div>
        <FAQDesktop />
      </div>
    </section>
  );
};

export default NewsDesktop;
