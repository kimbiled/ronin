import { useState } from "react";
import { motion } from "framer-motion";
import StepOneDesktop from "./StepOneDesktop";
import StepTwoDesktop from "./StepTwoDesktop";
import StepThreeDesktop from "./StepThreeDesktop";
import StepFourDesktop from "./StepFourDesktop";
import StepFinalDesktop from "./StepFinalDesktop";
import done from '../assets/desktop/done.png'
import active from '../assets/desktop/active.svg'
import ncompleted from '../assets/desktop/n-completed.png'
import emailjs from "@emailjs/browser";


const FormDesktop = () => {
    const steps = [1, 2, 3, 4];
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
    <div id="form-section" className="font-ppneue flex flex-col w-[85%] items-center justify-center h-[800px]">
      <div className="mt-[100px] flex flex-row max-w-[1200px] w-full justify-between">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col">
                    <p className="font-medium leading-[92px] text-[84px]"><span className="text-[#1261FC]">Let's </span>create<br />
                    together </p>
                    <p className="font-book text-[22px] leading-[30px] mt-6">Got a project? Let's bring it to life with design<br/>
                    and innovation</p>
                </div>
                <div className="flex flex-col mt-6 ">
                    <p className="font-book  leading-[24px] text-[22px] text-[#9CA3AF]">Contact us</p>
                    <a className="font-book text-[22px] leading-[22px] mt-3" href="mailto:hi@ronindsgn.com">hi@ronindsgn.com</a>
                </div>
            </div>
                <div id="form-section" className=" font-ppneue flex flex-col max-w-[550px] w-full justify-between">
                      {!isSubmitted ? (
                        <div className="flex flex-col justify-between gap-12">                
                          {/* Step Progress Indicator */}
                          <div className="flex items-center justify-between ">
                            {steps.map((step, index) => {
                              const isCompleted = step < currentStep;
                              const isActive = step === currentStep;
                
                              return (
                                <div key={step} className="flex items-center">
                                  <motion.div
                                    className={`flex items-center justify-center rounded-full ${
                                      isActive ? "w-11 h-11 mx-1" : isCompleted ? "w-7 h-7" : "w-7 h-7"
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
                                      className="h-[1px] w-[139px]"
                                      animate={{ backgroundColor: isCompleted ? "#3b82f6" : "#D4E0ED" }}
                                      transition={{ duration: 0.5 }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                
                          {/* Step Content */}
                          <div className="">
                            {currentStep === 1 && <StepOneDesktop onComplete={setCanProceed} onNext={nextStep} setFormData={setFormData} />}
                            {currentStep === 2 && <StepTwoDesktop onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep}  setFormData={setFormData} />}
                            {currentStep === 3 && <StepThreeDesktop onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep}  setFormData={setFormData} />}
                            {currentStep === 4 && <StepFourDesktop onPrev={prevStep} onSubmit={handleSubmit}  setFormData={setFormData} />}
                          </div>
                        </div>
                      ) : (
                        <StepFinalDesktop onReset={handleReset} />
                      )}
                    </div>
      </div>
    </div>
  );
};

export default FormDesktop;