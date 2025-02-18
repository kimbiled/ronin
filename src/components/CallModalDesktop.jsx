import { useState } from "react";
import jedi from "../assets/desktop/jedi.svg";
import closeIcon from "../assets/desktop/closeIcon.svg";
import unverified from "../assets/desktop/unverified.svg";
import verify from "../assets/desktop/Icon.png";
import successIcon from "../assets/icons/Icon.png"; 
import emailjs from "@emailjs/browser";

const CallModalDesktop = ({ isOpen, onClose }) => {
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

  // ✅ Отправка Email через EmailJS с использованием FormData
  const sendEmail = async () => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);

      await emailjs.sendForm(
        "service_ayzyi48", // ID сервиса EmailJS
        "template_584q8rp", // ID шаблона EmailJS
        formData,
        "RnF6odRZ4qCdyyFwC" // Публичный ключ
      );

      console.log("✅ Email успешно отправлен!");
    } catch (error) {
      console.error("❌ Ошибка отправки Email:", error);
    }
  };


  const sendToTelegram = async () => {
    if (!fullName || !email) {
      console.error("❌ Ошибка: Пустые данные!", fullName, email);
      return;
    }

    const botToken = "7355943041:AAE3_n0Z9UOHXoYnNoujt48GqRZCJ9NtJB4";
    const chatId = "-1002469634234";

    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("text", `🔔 *Новый запрос на быстрый звонок!*\n\n👤 *Имя:* ${fullName}\n📧 *Email:* ${email}`);
    formData.append("parse_mode", "Markdown");

    try {
      console.log("📨 Отправка в Telegram:", fullName, email);
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        body: formData, // Отправляем FormData
      });

      console.log("✅ Сообщение отправлено в Telegram!");
    } catch (error) {
      console.error("❌ Ошибка при отправке в Telegram:", error);
    }
  };

  // ✅ Обработчик формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("✅ Данные перед отправкой:", fullName, email);

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
            <div className="max-w-[720px] w-full pb-[93px] pt-[93px] pl-[100px]">
              <h2 className="text-[84px] font-medium leading-[92px] mb-4 text-[#090C21]">
                <span className="text-[#1261FC]">Let's </span>
                Schedule
                <div className="flex flex-row gap-6 mt-[18px]">
                  <img src={jedi} alt="JediKuna" /> <span>a Call</span>
                </div>
              </h2>
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
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[22px] font-medium text-[#090C21]">Full Name</label>
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
                  <label className="text-[22px] font-medium text-[#090C21] flex justify-between">
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