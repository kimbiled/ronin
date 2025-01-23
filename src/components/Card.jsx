import React, { useState } from "react";

const Card = ({ rarity, title, description, icon, gradient, percentage, showRarity }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#0B1739] rounded-md 2xl:w-[360px] xl40:w-[260px] border border-[#7E89AC3D] transition-all duration-300 overflow-hidden cursor-pointer`}
      style={{ background: gradient }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 relative">
        {/* Icon and Text */}
        <div className="flex items-center gap-4">
          <img src={icon} alt={`${title} Icon`} className="w-16 h-16 object-contain" />
          <div className="flex flex-col">
            <p className="text-lg text-white font-semibold leading-tight">{title}</p>
            <p className="text-sm text-[#AEB9E1] mt-1">{rarity}</p>
          </div>
        </div>

        {/* Toggle Icon */}
        <div className="absolute top-4 right-4 text-[#AEB9E1] hover:text-white">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-300 ${isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"} overflow-hidden`}
      >
        {isOpen && (
          <div className="px-4">
            {showRarity && (
              <div className="flex items-center gap-3 mb-4">
                <div className="text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[50px] h-8">
                  {percentage}%
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-[#7E89AC]">Rarity</p>
                  <img src="./images/icons/question.png" alt="Question Icon" className="h-5 w-5" />
                </div>
              </div>
            )}
            <div className="border-t-[1px] border-opacity-30 border-white my-4"></div>
            <p className="text-white text-sm mb-1">Description</p>
            <p className="text-sm text-[#7E89AC] leading-tight">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
