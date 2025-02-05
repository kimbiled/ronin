import { useState, useEffect } from "react";

export default function StepTwoDesktop({ onNext, onPrev, onComplete }) {
  const [selectedInterest, setSelectedInterest] = useState("");

  const interests = [
    { label: "UX/UI Design", width: "w-[191px]", height: "h-[60px]" },
    { label: "Web Development", width: "w-[229px]", height: "h-[60px]" },
    { label: "Branding", width: "w-[157px]", height: "h-[60px]" },
    { label: "Maintenance", width: "w-[187px]", height: "h-[60px]" },
    { label: "Other", width: "w-[132px]", height: "h-[60px]" },
  ];

  useEffect(() => {
    onComplete(true); // Позволяет переходить
  }, [onComplete]);

  const handleSelect = (label) => {
    setSelectedInterest((prev) => (prev === label ? "" : label)); // Если уже выбрано — снимаем выделение
  };

  return (
    <div className="font-ppneue flex flex-col w-full mx-auto gap-6">
      {/* Заголовок */}
      <p className="font-medium text-[22px] text-black mt-[55px]">I'm interested in...</p>

      {/* Выбор интересов */}
      <div className="flex flex-wrap gap-4">
        {interests.map(({ label, width, height }) => (
          <button
            key={label}
            onClick={() => handleSelect(label)}
            className={`${width} ${height} border rounded-full text-lg font-book flex items-center justify-center transition-all ${
              selectedInterest === label
                ? "border-black text-black bg-white"  // Выбранный элемент
                : "border-[#090C21] border-opacity-10 text-gray-700 hover:bg-gray-100" // Стандартный hover
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Кнопки "Go Back" и "Skip Step / Next Step" */}
      <div className="flex justify-between items-center mt-6 mb-12 ">
        <button
          onClick={onPrev}
          className="text-[#1261FC] flex items-center font-medium"
        >
          ← Go back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 font-medium text-lg rounded-lg bg-[#1261FC] text-white hover:bg-blue-700 transition-all h-12 w-[141px]"
        >
          {selectedInterest ? "Next step" : "Skip step"}
        </button>
      </div>
    </div>
  );
}