import { useState, useRef, useEffect } from 'react';

export default function StepOne({ onComplete, onNext, setFormData }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
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
      if (!hasError) {
        emailRef.current.focus();
        hasError = true;
      }
    } else {
      setIsEmailValid(true);
    }

    if (hasError) return;

    setFormData((prev) => ({
      ...prev,
      fullName,
      email,
    }));

    onNext();
  };

  return (
    <div className="font-ppneue flex flex-col w-[100%] mx-auto gap-6">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <label
            className={`font-medium ${isFullNameValid ? 'text-black' : 'text-red-600'}`}
          >
            Full Name
          </label>
          <span
            className={`text-sm font-medium ${isFullNameValid ? 'text-[#9CA3AF] opacity-50' : 'text-red-600'}`}
          >
            *Required field
          </span>
        </div>
        <input
          ref={fullNameRef}
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (e.target.value.trim()) setIsFullNameValid(true);
          }}
          className={`mt-1 p-2 text-gray-900 bg-transparent border-b outline-none ${
            isFullNameValid ? 'border-black border-opacity-10' : 'border-red-600'
          }`}
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <label
            className={`font-medium ${isEmailValid ? 'text-black' : 'text-red-600'}`}
          >
            Your Email*
          </label>
          <span
            className={`text-sm font-medium ${isEmailValid ? 'text-[#9CA3AF] opacity-50' : 'text-red-600'}`}
          >
            {isEmailValid ? '*Required field' : 'Invalid email format'}
          </span>
        </div>
        <input
          ref={emailRef}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (validateEmail(e.target.value)) setIsEmailValid(true);
          }}
          className={`mt-1 p-2 text-gray-900 bg-transparent border-b outline-none ${
            isEmailValid ? 'border-black border-opacity-10' : 'border-red-600'
          }`}
          placeholder="johndoe@example.com"
        />
      </div>
      <button
        onClick={handleNextStep}
        className={`font-medium mt-4 px-4 py-2 sm25:text-base sm75:text-base sm20:text-base rounded-lg mb-12 h-12 sm25:w-[345px] sm75:w-[305px] sm20:w-[260px] transition ${
          fullName.trim() && email.trim() && isEmailValid
            ? 'bg-[#1261FC] hover:bg-blue-600 text-white'
            : 'bg-[#A3C4FD] text-white'
        }`}
      >
        Next step
      </button>
    </div>
  );
}
