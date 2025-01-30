import FAQ from "./Faq";
const News = () => {
    const articles = [
      {
        category: "Accessibility",
        title: ["Inclusive Design", "Made Simple"],
        date: "Jan 1, 2025",
        readTime: "2 min read",
        image: "./images/icons/b1.png",
      },
      {
        category: "Trends",
        title: ["The Future of UX:", "Emerging Trends to", "Watch in 2025"],
        date: "Jan 4, 2025",
        readTime: "2 min read",
        image: "./images/icons/b2.png",
      },
      {
        category: "Scalable Design",
        title: ["Why You Need a", "Design System"],
        date: "Jan 22, 2025",
        readTime: "3 min read",
        image: "./images/icons/b3.png",
      },
    ];
  
    return (
      <div className="font-ppneue flex flex-col w-full rounded-3xl h-auto bg-[#090C21]">
        <div className="flex flex-col mx-auto gap-8 w-[85%] mb-12">
          <p className="text-white font-medium text-[40px] mt-16">Featured News</p>
          <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`pb-8 ${
                  index !== articles.length - 1 ? "border-b border-white border-opacity-10" : ""
                }`}
              >
                {/* Изображение */}
                <div className="w-full h-[160px] rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title.join(" ")}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                {/* Категория */}
                <p className="text-[#9CA3AF] text-sm mt-4 font-book">{article.category}</p>
  
                {/* Заголовок */}
                <h2 className="text-white text-[25px] font-medium leading-tight mt-4">
                  {article.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
  
                {/* Дата и время чтения */}
                <div className="flex flex-row justify-between items-center mt-4">
                  <p className="text-[#9CA3AF] text-sm font-book">
                    {article.date} • {article.readTime}
                  </p>
  
                  {/* Кнопка "Read More" */}
                  <div className="flex flex-row items-center gap-2">
                    <p className="text-[#F9A826] text-sm font-book">Read More</p>
                    <img src="./images/icons/orangeArrow.png" alt="Arrow" className="w-[14px] h-[10px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* faq */}
          <FAQ />
        </div>
      </div>
    );
  };
  
  export default News;