import { useState } from "react";

export default function StepFour({ onPrev, onSubmit }) {
  const [description, setDescription] = useState("");

  return (
    <div className="font-ppneue flex flex-col w-[95%] mx-auto gap-6">
      {/* Заголовок */}
      <p className="font-medium text-black">Tell us more about your project</p>

      {/* Текстовое поле для описания */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border-b border-gray-300 focus:outline-none resize-none text-lg"
        placeholder="Something about your great idea"
        rows="1"
      />

      {/* Кнопки "Go Back" и "Submit" */}
      <div className="flex justify-between items-center mt-6 mb-12">
        <button
          onClick={onPrev}
          className="text-[#1261FC] flex items-center text-sm font-medium"
        >
          ← Go back
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-3 text-sm font-medium rounded-lg bg-[#1261FC] text-white hover:bg-blue-700 transition-all h-12 sm25:w-[180px] sm75:w-[170px] sm20:w-[160px]"
        >
          Submit the request
        </button>
      </div>
    </div>
  );
}