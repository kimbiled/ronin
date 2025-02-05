import { useState, useEffect } from "react";

export default function StepThree({ onNext, onPrev, onComplete }) {
  const [selectedBudget, setSelectedBudget] = useState("");

  const budgets = [
    { label: "≤ $5K", width: "w-[70px]", height: "h-[34px]" },
    { label: "$10-20K", width: "w-[90px]", height: "h-[34px]" },
    { label: "$30-20K", width: "w-[90px]", height: "h-[34px]" },
    { label: "I need a consultation", width: "w-[160px]", height: "h-[34px]" },
  ];

  useEffect(() => {
    onComplete(true); // Разрешаем переход, так как выбор бюджета не обязателен
  }, [onComplete]);

  const handleSelect = (label) => {
    setSelectedBudget((prev) => (prev === label ? "" : label)); // Если уже выбрано — снимаем выделение
  };

  return (
    <div className="font-ppneue flex flex-col w-full mx-auto gap-6">
      {/* Заголовок */}
      <p className="font-medium text-black">Project budget (USD)</p>

      {/* Выбор бюджета */}
      <div className="flex flex-wrap gap-4">
        {budgets.map(({ label, width, height }) => (
          <button
            key={label}
            onClick={() => handleSelect(label)}
            className={`${width} ${height} border rounded-full text-sm font-book flex items-center justify-center transition-all ${
              selectedBudget === label
              ? "border-black text-black bg-white"  // Выбранный элемент
              : "border-[#090C21] border-opacity-10 text-gray-700 hover:bg-gray-100" // Стандартный hover
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Кнопки "Go Back" и "Skip/Next Step" */}
      <div className="flex justify-between items-center mt-6 mb-12">
        <button
          onClick={onPrev}
          className="text-[#1261FC] flex items-center text-sm font-medium"
        >
          ← Go back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 font-medium rounded-lg bg-[#1261FC] text-white hover:bg-blue-700 transition-all h-12 sm25:w-[170px] sm75:w-[160px] sm20:w-[150px]"
        >
          {selectedBudget ? "Next step" : "Skip step"}
        </button>
      </div>
    </div>
  );
}