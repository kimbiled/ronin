import { useState } from "react";
import { motion } from "framer-motion";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFinal from "./StepFinal";
import emailjs from "@emailjs/browser";

import done from '../assets/mobile/done.png'
import active from '../assets/mobile/active.svg'
import ncompleted from '../assets/mobile/n-completed.png'

const steps = [1, 2, 3, 4];

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    interest: "",
    budget: "",
    description: "",
  });

  const sendEmail = async () => {
    try {
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        interest: formData.interest,
        budget: formData.budget,
        description: formData.description,
      };
  
      await emailjs.send(
        "service_ayzyi48",   // ID сервиса из EmailJS
        "template_dmc3j3e",   // ID шаблона письма
        templateParams,
        "RnF6odRZ4qCdyyFwC"     // Публичный ключ
      );
  
   
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const sendToTelegram = async () => {
    const botToken = "7355943041:AAE3_n0Z9UOHXoYnNoujt48GqRZCJ9NtJB4"; // 🔹 Токен из BotFather
    const chatId = "-1002469634234"; // 🔹 ID чата, куда отправлять сообщения
  
    const text = `📩 Новый запрос на проект!\n\n👤 Имя: ${formData.fullName}\n📧 Email: ${formData.email}\n🖼️ Interest: ${formData.interest}\n💰 Budget: ${formData.budget}\n📃 Description: ${formData.description}`;
  
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
  
      console.log("Сообщение отправлено в Telegram!");
    } catch (error) {
      console.error("Ошибка при отправке в Telegram:", error);
    }
  };

  const nextStep = () => {
    if (canProceed) {
      setCurrentStep((prev) => prev + 1);
      setCanProceed(false); // Сброс перед следующим шагом
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      await sendEmail(); 
      await sendToTelegram();
      setIsSubmitted(true); 
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1); // Сбрасываем процесс
  };

  return (
    <div id="form-section" className=" font-ppneue flex flex-col w-[85%] mx-auto gap-8 h-[650px]">
      {!isSubmitted ? (
        <>
          <div>
            <p className="text-[40px] font-medium leading-[48px]">
              <span className="text-[#1261FC]">Let's</span> create<br /> together
            </p>
            <p className="font-book mt-2">Got a project? Let's bring it to life<br /> with design and innovation</p>
          </div>

          {/* Step Progress Indicator */}
          <div className="flex w-[95%] items-center justify-between ">
            {steps.map((step, index) => {
              const isCompleted = step < currentStep;
              const isActive = step === currentStep;

              return (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`flex items-center justify-center rounded-full ${
                      isActive ? "sm25:w-11 sm25:h-11 sm75:w-10 sm75:h-10 sm20:w-8 sm20:h-8 mx-1" : isCompleted ? "sm25:w-8 sm25:h-8 sm75:w-8 sm75:h-8 sm20:w-7 sm20:h-7" : "sm25:w-8 sm25:h-8 sm75:w-8 sm75:h-8 sm20:w-7 sm20:h-7"
                    }`}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={
                        isCompleted
                          ? done
                          : isActive
                          ? active
                          : ncompleted
                      }
                      alt={`Step ${step}`}
                      className="w-full h-full"
                    />
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.div
                      className="h-[1px] sm25:w-[70px] sm75:w-[57px] sm20:w-[48px] sm60:w-[64px] sm80:w-[68px]"
                      animate={{ backgroundColor: isCompleted ? "#3b82f6" : "#D4E0ED" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="mt-5">
            {currentStep === 1 && <StepOne onComplete={setCanProceed} onNext={nextStep} setFormData={setFormData}/>}
            {currentStep === 2 && <StepTwo onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep} setFormData={setFormData}/>}
            {currentStep === 3 && <StepThree onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep} setFormData={setFormData}/>}
            {currentStep === 4 && <StepFour onPrev={prevStep} onSubmit={handleSubmit} setFormData={setFormData}/>}
          </div>
        </>
      ) : (
        <StepFinal onReset={handleReset} />
      )}
    </div>
  );
}