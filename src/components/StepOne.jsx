import { useState, useRef, useEffect } from "react";

export default function StepOne({ onComplete, onNext }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    onComplete(fullName.trim() && email.trim() && isEmailValid);
  }, [fullName, email, isEmailValid, onComplete]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNextStep = () => {
    let hasError = false;

    if (!fullName.trim()) {
      setIsFullNameValid(false);
      fullNameRef.current.focus();
      hasError = true;
    } else {
      setIsFullNameValid(true);
    }

    if (!email.trim() || !validateEmail(email)) {
      setIsEmailValid(false);
      if (!hasError) emailRef.current.focus();
      hasError = true;
    } else {
      setIsEmailValid(true);
    }

    if (hasError) return;

    onNext();
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
            setIsFullNameValid(true);
          }}
          className={`mt-1 p-2 text-gray-900 bg-transparent border-b-[1px] outline-none ${
            isFullNameValid ? "border-black border-opacity-10" : "border-red-600"
          }`}
          placeholder="John Doe"
        />
        {!isFullNameValid && <span className="text-red-600 text-sm mt-1">Full Name is required</span>}
      </div>

      {/* Email Input */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <label className={`font-medium ${isEmailValid ? "text-black" : "text-red-600"}`}>
            Your Email*
          </label>
          <span className={`text-sm font-medium ${isEmailValid ? "text-[#9CA3AF] opacity-50" : "text-red-600"}`}>
            {isEmailValid ? "*Required field" : "Invalid email format"}
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
          className={`mt-1 p-2 text-gray-900 bg-transparent outline-none ${
            isEmailValid ? "border-b border-black border-opacity-10" : "border-b border-red-600"
          }`}
          placeholder="johndoe@example.com"
        />
      </div>

      {/* Next Step Button */}
      <button
        onClick={handleNextStep}
        disabled={!fullName.trim() || !email.trim() || !isEmailValid}
        className={`font-medium mt-4 px-4 py-2 sm25:text-base sm75:text-base sm20:text-base rounded-lg mb-12 h-12 sm25:w-[345px] sm75:w-[305px] sm20:w-[260px] transition ${
          fullName.trim() && email.trim() && isEmailValid
            ? "bg-[#1261FC] hover:bg-blue-600 text-white"
            : "bg-[#A3C4FD] text-white cursor-not-allowed"
        }`}
      >
        Next step
      </button>
    </div>
  );
}