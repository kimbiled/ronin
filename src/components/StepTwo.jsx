import { useState, useEffect } from "react";

export default function StepTwo({ onNext, onPrev, onComplete }) {
  const [selectedInterest, setSelectedInterest] = useState("");

  const interests = [
    { label: "UX/UI Design", width: "w-[117px]", height: "h-[34px]" },
    { label: "Web Development", width: "w-[146px]", height: "h-[34px]" },
    { label: "Branding", width: "w-[90px]", height: "h-[34px]" },
    { label: "Maintenance", width: "w-[114px]", height: "h-[34px]" },
    { label: "Other", width: "w-[70px]", height: "h-[34px]" },
  ];

  useEffect(() => {
    onComplete(true); // Позволяет переходить
  }, [onComplete]);

  const handleSelect = (label) => {
    setSelectedInterest((prev) => (prev === label ? "" : label)); // Если уже выбрано — снимаем выделение
  };
  
  return (
    <div className="font-ppneue flex flex-col w-[95%] mx-auto gap-6">
      {/* Заголовок */}
      <p className="font-medium text-black">I'm interested in...</p>

      {/* Выбор интересов */}
      <div className="flex flex-wrap gap-4">
        {interests.map(({ label, width, height }) => (
          <button
            key={label}
            onClick={() => handleSelect(label)}
            
            className={`${width} ${height} border rounded-full text-sm font-book flex items-center justify-center transition-all ${
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
          className="text-[#1261FC] flex items-center text-sm font-medium"
        >
          ← Go back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 font-medium rounded-lg bg-[#1261FC] text-white hover:bg-blue-700 transition-all h-12 sm25:w-[170px] sm25:w-[170px] sm25:w-[170px]"
        >
          {selectedInterest ? "Next step" : "Skip step"}
        </button>
      </div>
    </div>
  );
}