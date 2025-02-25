import { useState, useRef } from "react";
import jedi from "../assets/desktop/jedi.svg";
import closeIcon from "../assets/desktop/closeIcon.svg";
import unverified from "../assets/desktop/unverified.svg";
import verify from "../assets/desktop/Icon.png";
import successIcon from "../assets/icons/Icon.png"; 
import emailjs from "@emailjs/browser";
import logoPhone from '../assets/icons/logoPhone.svg';
import stars from '../assets/icons/Stars.png';

const CallModalDesktop = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null); 

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

  // ✅ Отправка Email через EmailJS с использованием FormData
  const sendEmail = async () => {
    try {
    

      await emailjs.sendForm(
       process.env.REACT_APP_EMAILJS_SERVICE_ID,
     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
     process.env.REACT_APP_EMAILJS_USER_ID
      );

     
    } catch (error) {
      console.error("❌ Ошибка отправки Email:", error);
    }
  };


  const sendToTelegram = async () => {
    if (!fullName || !email) {
      console.error("❌ Ошибка: Пустые данные!", fullName, email);
      return;
    }

    const botToken =process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const chatId =process.env.REACT_APP_TELEGRAM_CHAT_ID;

    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("text", `🔔 *Новый запрос на быстрый звонок!*\n\n👤 *Имя:* ${fullName}\n📧 *Email:* ${email}`);
    formData.append("parse_mode", "Markdown");

    try {
     
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        body: formData, // Отправляем FormData
      });

   
    } catch (error) {
     
    }
  };

  // ✅ Обработчик формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

   

    try {
      await sendEmail(); // ✅ Отправляем Email
      await sendToTelegram(); // ✅ Отправляем в Telegram
      setSubmitted(true);
    } catch (error) {
      console.error("❌ Ошибка отправки:", error);
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
    <div className="font-ppneue fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-w-[1200px] h-[600px] w-full rounded-[48px] shadow-lg relative flex flex-row justify-between">
        {submitted ? (
          <StepFinal onReset={handleReset} />
        ) : (
          <>
            {/* Левая часть */}
            <div className="max-w-[720px] w-full pb-[55px] pt-[55px] pl-[69px] flex flex-col gap-7">
              <h2 className="text-[84px] font-medium leading-[92px] mb-4 text-[#090C21]">
                <span className="text-[#1261FC]">Let's </span>
                Schedule
                <div className="flex flex-row gap-6 mt-[18px] items-center">
                  <img src={jedi} alt="JediKuna" className="w-[76px] h-[76px]"/> <span>a Call</span>
                </div>
              </h2>
              <div>
                  <p className="text-[22px] text-[#090C21] leading-[30px] font-book">Get answers to your questions and see how Ronin can<br/> streamline your design and development</p>
                </div>
                                    <div className="flex flex-col items-start">
                                        <p className="mb-6 font-book text-[22px] leading-[24px] text-[#9CA3AF]">Clients trust us</p>
                                        <div className="flex flex-row gap-3">
                                            <div>
                                                <img src={logoPhone} alt="logoPhone" className="w-[60px] h-12" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <img src={stars} alt="stars" className="w-[76px] h-3"/> 
                                                <div className="flex flex-row justify-center gap-2 text-lg font-book">
                                                    <p className="font-book">Rating 4,7</p>
                                                    <span>/</span>
                                                    <span>100+ reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </div>

            {/* Правая часть */}
            <div className="max-w-[480px] w-full h-full bg-[#EAF8FF] rounded-r-[48px] pb-[93px] pt-[93px] pr-[100px] pl-[48px]">
              {/* Кнопка закрытия */}
              <img
                src={closeIcon}
                alt="Close"
                className="absolute top-10 right-10 cursor-pointer w-10 h-10"
                onClick={onClose}
              />

              {/* Форма */}
              <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[22px] font-medium text-[#090C21]">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full border-b border-[#9CA3AF] p-2 mt-2 bg-transparent text-[#637695] focus:outline-none"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-[22px] font-medium text-[#090C21] flex justify-between">
                    Your Email <span className="text-[#9CA3AF] text-sm">*Required field</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border-b border-[#9CA3AF] p-2 mt-2 bg-transparent text-[#637695] focus:outline-none"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <button
                  type="submit"
                  className={`py-3 rounded-lg text-lg font-medium cursor-pointer mt-8 transition-all ${
                    fullName && email && isChecked ? "bg-[#1261FC] text-white" : "bg-[#C0D6FB] text-white"
                  }`}
                >
                  Submit the request
                </button>
              </form>

              {/* Чекбокс */}
              <div className="flex items-center mt-6 cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
                <img src={isChecked ? verify : unverified} alt="Checkbox" className="w-6 h-6" />
                <p className="text-sm text-[#637695] ml-3">
                  I accept the <span className="text-blue-600 underline">Terms and Conditions</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const StepFinal = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center w-full" >
      <img src={successIcon} alt="Success" className="w-11 h-11 mt-10" />
      <h2 className="text-[44px] font-medium text-[#1261FC] leading-[48px] mt-4">Thank You!</h2>
      <p className="text-[22px] leading-[28px] font-medium mt-2">
        Your email is already in our priority mailbox
      </p>
      <p className="text-[22px] leading-[28px] font-book mt-2">We will contact you very soon</p>
      <button onClick={onReset} className="mt-7 text-[#1261FC] text-lg flex items-center gap-2">
        Send again →
      </button>
    </div>
  );
};

export default CallModalDesktop;