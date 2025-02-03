import { useState, useEffect } from "react";

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reviewsElement = document.getElementById("reviews");
    const handleScroll = () => {
      if (reviewsElement) {
        const reviewsTop = reviewsElement.getBoundingClientRect().top;
        setIsVisible(reviewsTop < window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("form-section");
    if (formElement) {
      const offset = 100; // 🔹 Устанавливаем отступ (100px)
      const elementPosition = formElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`font-ppneue fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] h-[85px] rounded-lg p-4 flex justify-between items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        background: "radial-gradient(271.63% 217.5% at 169.59% -28.68%, #22AFFF 0%, #1261FC 100%)"
      }}
    >
      <p className="text-white text-lg font-medium leading-[22px]">Ready to discuss<br/> your project?</p>
      <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md flex items-center w-[142px] h-12 text-sm font-medium justify-center" onClick={scrollToForm}>
        Let’s Chat <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default StickyBanner;
