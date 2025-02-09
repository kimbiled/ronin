import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FAQDesktop from './FaqDesktop';

import n1 from "../assets/desktop/n1.svg";
import n2 from "../assets/desktop/n2.svg";
import n3 from "../assets/desktop/n3.svg";
import orangearrow from '../assets/desktop/orangeArrow.png'

const NewsDesktop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Прокрутка вверх
  }, []);

  const articles = [
    {
      id: "inclusive-design",
      category: "Accessibility",
      title: ["Inclusive Design", "Made Simple"],
      date: "Jan 1, 2025",
      readTime: "2 min read",
      image: n1
    },
    {
      id: "ux-trends-2025",
      category: "Trends",
      title: ["The Future of UX: Emerging", " Trends to Watch in 2025"],
      date: "Jan 4, 2025",
      readTime: "2 min read",
      image:n2
    },
    {
      id: "design-system-need",
      category: "Scalable Design",
      title: ["Why You Need a", "Design System"],
      date: "Jan 22, 2025",
      readTime: "3 min read",
      image: n3
    },
  ];
  return (
    <section className="font-ppneue w-full bg-[#090C21] h-auto">
         <div className="flex flex-col w-[85%] items-center mt-20 mx-auto">
            <div className="mt-[100px] flex flex-col max-w-[1200px] w-full justify-between gap-12">
              <p className="text-white font-medium leading-[92px] text-[84px] ">Featured News</p>
              <div className="flex flex-col gap-16 w-full mx-auto">
  {articles.map((article, index) => (
    <div
      key={article.id}
      className={`pb-8 ${
        index !== articles.length - 1 ? "border-b border-white border-opacity-10" : ""
      }`}
    >
      <div className="flex flex-row gap-10">
        {/* Изображение справа */}
        <div>
          <img
            src={article.image}
            alt={article.title.join(" ")}
          />
        </div>

        {/* Текст слева */}
        <div className="flex flex-col justify-between">
          {/* Категория */}
          <div>
              <p className="text-[#9CA3AF] font-book">{article.category}</p>
              <h2 className="text-white text-[44px] font-medium leading-[54px] mt-2">
                {article.title.map((line, i) => (
                  <span key={i} className="block">
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
              onClick={() => {
                navigate(`/news/desktop/${article.id}`);
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
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
    </div>
  ))}
</div>
            </div>
            <FAQDesktop />
        </div>
    </section>
  )
}

export default NewsDesktop;
