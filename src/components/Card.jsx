import React, { useState } from "react";

const Card = ({ rarity, title, description, icon, gradient, percentage, showRarity }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#0B1739] rounded-md 2xl:w-[360px] xl40:w-[260px] border border-[#7E89AC3D] cursor-pointer`}
      style={{ background: gradient,
        height: isOpen ? "300px" : "auto",
        
       }}
      
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row justify-center items-center gap-4">
          <img src={icon} alt={`${title} Icon`} className="w-20 h-20" />
          <div className="flex flex-col">
            <p className="text-sm text-[#7E89AC]">{rarity}</p>
            <p className="text-xl text-white">{title}</p>
          </div>
        </div>
        <div className=" relative text-[#AEB9E1] hover:text-white">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-3 h-3 right-2"
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
              className="absolute w-3 h-3 right-2"
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
      {isOpen && (
        <div className="p-4">
          {showRarity && (
            <div className="flex items-center gap-3 mb-4">
              <div className="text-sm bg-[#FFFFFF14] text-[#7E89AC] flex items-center justify-center gap-2 rounded-md border border-[#7E89AC] w-[50px] h-8">
                {percentage}%
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-[#7E89AC]">Rarity</p>
                <img src="./images/icons/question.png" alt="Question Icon" className="h-6 w-6" />
              </div>
            </div>
          )}
          <div className="h-[1px] bg-[#FFFFFF] opacity-20 mb-4"></div>
          <p className="text-white mb-2">Description</p>
          <p className="text-sm text-[#7E89AC]">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;