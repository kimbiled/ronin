import { useState } from "react";
import jedi from "../assets/desktop/jedi.svg";
import logoPhone from "../assets/icons/logoPhone.svg";
import stars from "../assets/icons/Stars.png";
import closeIcon from "../assets/desktop/closeIcon.svg";
import unverified from "../assets/desktop/unverified.svg";
import verify from "../assets/desktop/Icon.png";
import successIcon from "../assets/icons/Icon.png"; // Иконка подтверждения

const CallModal = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    let newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!isChecked) {
      newErrors.checkbox = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setIsChecked(false);
    setErrors({});
  };

  return (
    <div className="font-ppneue fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
      <div className="bg-white sm25:max-w-[390px] sm75:max-w-[350px] sm20:max-w-[290px] sm20:h-[750px] sm25:h-[650px] sm75:h-[680px] w-full rounded-[24px] shadow-lg relative flex flex-row justify-between">
        
        {submitted ? (
          <StepFinal onReset={handleReset} onClose={onClose}/>
        ) : (
          <div className="flex flex-col mx-auto">
            {/* Левая часть */}
            <div className=" w-full sm25:max-w-[390px] sm75:max-w-[350px] sm20:max-w-[290px] pl-[24px] pr-[24px] pb-[48px] pt-[48px]">
              <h2 className="text-[40px] font-medium leading-[48px] mb-2 text-[#090C21] text-center">
                <span className="text-[#1261FC]">Let's </span>
                Schedule
                <div className="flex flex-row gap-1 mt-1 flex flex-row items-center justify-center">
                  <img src={jedi} alt="JediKuna" className="w-12 h-12"/> <span>a Call</span>
                </div>
              </h2>
              <p className="font-book text-base leading-[23px] text-center mt-2">
                Get answers to your questions and
                <p>see how Ronin can streamline your </p>
                <p>design and development.</p>
              </p>
            </div>

            {/* Правая часть */}
            <div className="w-full">
              {/* Кнопка закрытия */}
              <img
                src={closeIcon}
                alt="Close"
                className="absolute top-6 right-6 cursor-pointer w-8 h-8"
                onClick={onClose}
              />

              {/* Форма */}
              <form className="flex flex-col gap-6 sm20:p-3 sm75:p-3 sm25:p-0" onSubmit={handleSubmit}>
                <div className="w-full">
                  <label className="text-base font-medium text-[#090C21]">Full Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-[#9CA3AF] p-2 mt-2 bg-transparent text-[#637695] focus:outline-none"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-base font-medium text-[#090C21] flex justify-between">
                    Your Email <span className="text-[#9CA3AF] text-sm">*Required field</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-[#9CA3AF] p-2 mt-2 bg-transparent text-[#637695] focus:outline-none"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <button
                  type="submit"
                  className={`py-3 rounded-lg text-lg font-medium cursor-pointer mt-6 transition-all ${
                    fullName && email && isChecked ? "bg-[#1261FC] text-white" : "bg-[#C0D6FB] text-white"
                  }`}
                >
                  Submit the request
                </button>
              </form>

              {/* Чекбокс с фото */}
              <div className="flex items-center mt-6 sm20:mt-3 cursor-pointer mb-6 sm20:p-3 sm75:p-3 sm25:p-0" onClick={() => setIsChecked(!isChecked)}>
                <img src={isChecked ? verify : unverified} alt="Checkbox" className="w-6 h-6" />
                <p className="text-sm text-[#637695] ml-3 font-book">
                  I accept the <span className="text-blue-600 underline">Terms and Conditions</span>
                  <br /> and <span className="text-blue-600 underline">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Финальный шаг благодарности
const StepFinal = ({ onReset, onClose }) => {
  return (
    <div className="relative font-ppneue flex flex-col w-[95%] mx-auto gap-2 text-center items-center mb-12 sm20:h-[750px] sm25:h-[650px] sm75:h-[680px] justify-center">
        {/* Иконка подтверждения */}
        <img
                src={closeIcon}
                alt="Close"
                className="absolute top-5 right-4 cursor-pointer w-8 h-8"
                onClick={onClose}
              />
        <div className="w-12 h-12">
          <img src="./images/icons/Icon.png" alt="icon" />
        </div>
  
        {/* Заголовок */}
        <p className="text-[40px] font-medium text-[#1261FC]">Thank You!</p>
  
        {/* Описание */}
        <p className="text-sm font-medium mt-2">
          Your email is already in our priority mailbox
        </p>
        <p className="text-sm font-book">We will contact you very soon</p>
  
        {/* Кнопка "Send again" */}
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