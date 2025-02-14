import { useState, useEffect } from "react";
import jedi from "../assets/desktop/jedi.svg";
import closeIcon from "../assets/desktop/closeIcon.svg";
import unverified from "../assets/desktop/unverified.svg";
import verify from "../assets/desktop/Icon.png";
import successIcon from "../assets/icons/Icon.png"; 

const CallModal = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // 🔒 **Блокируем скролл при открытии модалки**
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !validateEmail(email) || !isChecked) {
      setIsEmailValid(validateEmail(email));
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setIsChecked(false);
  };

  return (
    <div className="font-ppneue fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white max-w-[390px] w-full rounded-[24px] shadow-lg relative flex flex-col p-6">
        
        {/* Кнопка закрытия */}
        <img
          src={closeIcon}
          alt="Close"
          className="absolute top-6 right-6 cursor-pointer w-8 h-8"
          onClick={onClose}
        />

        {submitted ? (
          <StepFinal onReset={handleReset} onClose={onClose} />
        ) : (
          <>
            <h2 className="text-[40px] font-medium leading-[48px] text-center">
              <span className="text-[#1261FC]">Let's </span>Schedule
            </h2>

            {/* Фото профиля */}
            <div className="flex justify-center mt-2">
              <img src={jedi} alt="JediKuna" className="w-12 h-12" />
            </div>

            <p className="text-[#637695] text-center text-base mt-2">
              Get answers to your questions and see how Ronin can streamline your design and development.
            </p>

            {/* Форма */}
            <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-base font-medium text-[#090C21]">Full Name</label>
                <input
                  type="text"
                  className="w-full border-b border-[#9CA3AF] p-2 mt-2 bg-transparent text-[#637695] focus:outline-none"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-base font-medium text-[#090C21] flex justify-between">
                  Your Email <span className="text-[#9CA3AF] text-sm">*Required field</span>
                </label>
                <input
                  type="email"
                  className={`w-full border-b p-2 mt-2 bg-transparent text-[#637695] focus:outline-none ${
                    isEmailValid ? "border-[#9CA3AF]" : "border-red-600"
                  }`}
                  placeholder="johndoe@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                />
                {!isEmailValid && <p className="text-red-500 text-sm mt-1">Invalid email format</p>}
              </div>

              <button
                type="submit"
                className={`py-3 rounded-lg text-lg font-medium cursor-pointer mt-6 transition-all ${
                  email.trim() && isEmailValid && isChecked ? "bg-[#1261FC] text-white" : "bg-[#C0D6FB] text-white"
                }`}
              >
                Submit the request
              </button>
            </form>

            {/* Чекбокс */}
            <div className="flex items-center mt-6 cursor-pointer mb-6" onClick={() => setIsChecked(!isChecked)}>
              <img src={isChecked ? verify : unverified} alt="Checkbox" className="w-6 h-6" />
              <p className="text-sm text-[#637695] ml-3">
                I accept the <span className="text-blue-600 underline">Terms and Conditions</span> and{" "}
                <span className="text-blue-600 underline">Privacy Policy</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// 🔥 **Финальный шаг "Thank You!"**
const StepFinal = ({ onReset, onClose }) => {
  return (
    <div className="relative font-ppneue flex flex-col w-[95%] mx-auto gap-2 text-center items-center h-full justify-center">
      <div className="w-12 h-12">
        <img src={successIcon} alt="icon" />
      </div>

      <p className="text-[40px] font-medium text-[#1261FC]">Thank You!</p>

      <p className="text-sm font-medium mt-2">
        Your email is already in our priority mailbox
      </p>
      <p className="text-sm font-book">We will contact you very soon</p>

      <button
        onClick={onReset}
        className="mt-6 text-[#1261FC] text-sm flex items-center gap-2"
      >
        Send again →
      </button>
    </div>
  );
};

export default CallModal;