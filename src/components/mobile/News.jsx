import { useNavigate } from 'react-router-dom';
import FAQ from './Faq';
import { useEffect, useState } from 'react';
import n1 from '../../assets/desktop/n1.webp';
import n2 from '../../assets/desktop/n2.webp';
import n3 from '../../assets/desktop/n3.webp';
import n4 from '../../assets/desktop/n4.svg';
import n5 from '../../assets/desktop/n5.svg';
import n6 from '../../assets/desktop/n6.svg';
import orange from '../../assets/mobile/orangeArrow.png';
const News = () => {
  const navigate = useNavigate();
  const [showAllNews, setShowAllNews] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Прокрутка вверх
  }, []);

  const featuredArticles = [
    {
      id: 'ui-design-trust',
      route: '/news/desktop/ui-design-trust',
      category: 'Trust',
      title: ['How Good UI Design', 'Builds Trust'],
      date: 'Jan 14, 2026',
      readTime: '2 min read',
      image: n4,
    },
    {
      id: 'website-design-conversion',
      route: '/news/desktop/website-design-conversion',
      category: 'Conversion',
      title: ['Website Design That Turns', 'Visitors Into Clients'],
      date: 'Mar 20, 2026',
      readTime: '3 min read',
      image: n5,
    },
    {
      id: 'ux-strategy-first',
      route: '/news/desktop/ux-strategy-first',
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
      title: ['The Future of UX:', 'Emerging Trends to Watch in 2025'],
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
    navigate(article.route || `/news/${article.id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="font-ppneue flex flex-col w-full rounded-3xl h-auto bg-[#090C21]">
      <div className="flex flex-col mx-auto gap-8 w-[85%] mb-12">
        <p className="text-white font-medium text-[40px] mt-16">
          Featured News
        </p>
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`pb-8 ${
                index !== articles.length - 1
                  ? 'border-b border-white border-opacity-10'
                  : ''
              }`}
            >
              {/* Изображение */}
              <div className="w-full h-[160px] rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title.join(' ')}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Категория */}
              <p className="text-[#9CA3AF] text-sm mt-4 font-book">
                {article.category}
              </p>

              {/* Заголовок */}
              <h2 className="text-white text-[25px] font-medium leading-tight mt-4">
                {article.title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              {/* Дата и время чтения */}
              <div className="flex flex-row justify-between items-center mt-[18px]">
                <div className="flex flex-row gap-2 text-[#9CA3AF] text-sm font-book">
                  <p>{article.date}</p>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Кнопка "Read More" */}
                <div
                  className="flex flex-row items-center gap-2 cursor-pointer"
                  onClick={() => openArticle(article)}
                >
                  <p className="text-[#F9A826] text-sm font-book">Read More</p>
                  <img src={orange} alt="Arrow" className="w-[14px] h-[10px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAllNews && (
          <button
            type="button"
            onClick={() => setShowAllNews(true)}
            className="mx-auto flex h-12 w-40 items-center justify-center rounded-lg bg-white text-base font-book text-[#1261FC]"
          >
            See all news
          </button>
        )}

        {/* FAQ */}
        <FAQ />
      </div>
    </div>
  );
};

export default News;
