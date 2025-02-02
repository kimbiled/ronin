import { useState, useRef, useEffect } from "react";

export default function StepOne({ onComplete, onNext }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFullNameTouched, setIsFullNameTouched] = useState(false); // Флаг, нажимали ли кнопку
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    onComplete(fullName.trim() && email.trim());
  }, [fullName, email, onComplete]);

  const handleNextStep = () => {
    let hasError = false;
  
    if (!email.trim()) {
      setIsEmailValid(false);
      emailRef.current.focus(); // Сразу фокусируемся на email, если пустой
      hasError = true;
    }
  
    if (!fullName.trim()) {
      setIsFullNameTouched(true);
      if (!hasError) fullNameRef.current.focus(); // Фокус на fullName только если email заполнен
      hasError = true;
    }
  
    if (hasError) return; // Останавливаем выполнение, если есть ошибки
  
    onNext(); // Переход к следующему шагу
  };

  return (
    <div className="font-ppneue flex flex-col w-[95%] mx-auto gap-6">
      {/* Full Name Input */}
      <div className="flex flex-col">
        <label className="font-medium text-black">Full Name</label>
        <input
          ref={fullNameRef}
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          className={`mt-1 p-2 text-gray-900 bg-transparent border-b-[1px] ${
            isFullNameTouched && !fullName.trim() ? "border-black" : "border-black border-opacity-10"
          } outline-none`}
          placeholder="John Doe"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <label className={`font-medium ${isEmailValid ? "text-black" : "text-red-600"}`}>
            Your Email*
          </label>
          <span className={`text-sm font-medium ${isEmailValid ? "text-[#9CA3AF] opacity-50" : "text-red-600"}`}>
            *Required field
          </span>
        </div>
        <input
          ref={emailRef}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(true);
          }}
          className={`mt-1 p-2 text-gray-600 bg-transparent outline-none ${
            isEmailValid ? "border-b border-gray-300" : "border-b border-red-600"
          }`}
          placeholder="johndoe@example.com"
        />
      </div>

      {/* Next Step Button */}
      <button
        onClick={handleNextStep}
        className={`font-medium mt-4 px-4 py-2 sm25:text-base sm75:text-base sm20:text-base rounded-lg mb-12 h-12 sm25:w-[345px] sm75:w-[305px] sm20:w-[260px] ${
          fullName.trim() && email.trim()
            ? "bg-[#1261FC] hover:bg-blue-600 text-white"
            : "bg-[#A3C4FD] text-white cursor-not-allowed"
        }`}
      >
        Next step
      </button>
    </div>
  );
}