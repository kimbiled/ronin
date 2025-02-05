import { useState } from "react";

export default function StepFourDesktop({ onPrev, onSubmit }) {
  const [description, setDescription] = useState("");

  return (
    <div className="font-ppneue flex flex-col w-full mx-auto gap-44">
      {/* Заголовок */}
      <div>
      <p className="font-medium text-black text-[22px] mt-[25px]">Tell us more about your project</p>

{/* Текстовое поле для описания */}
<textarea
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  className="w-full p-3 border-b border-gray-300 focus:outline-none resize-none text-lg"
  placeholder="Something about your great idea"
  rows="1"
/>
      </div>

      {/* Кнопки "Go Back" и "Submit" */}
      <div className="flex justify-between items-center mt-6 mb-12">
        <button
          onClick={onPrev}
          className="text-[#1261FC] flex items-center font-medium"
        >
          ← Go back
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-3 text-lg font-medium rounded-lg bg-[#1261FC] text-white hover:bg-blue-700 transition-all h-12 w-[220px]"
        >
          Submit the request
        </button>
      </div>
    </div>
  );
}