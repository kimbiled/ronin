import { useState } from 'react';
import { motion } from 'framer-motion';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFinal from './StepFinal';
import emailjs from '@emailjs/browser';

import done from '../../assets/mobile/done.png';
import active from '../../assets/mobile/active.svg';
import ncompleted from '../../assets/mobile/n-completed.png';

const steps = [1, 2, 3, 4];
const stepLabels = ['Contacts', 'Service', 'Budget', 'Details'];

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    interest: '',
    budget: '',
    description: '',
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
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // ✅ Берем из .env
        process.env.REACT_APP_EMAILJS_FORM_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID,
      );
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const sendToTelegram = async () => {
    const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    const text = `📩 Новый запрос на проект!\n\n👤 Имя: ${formData.fullName}\n📧 Email: ${formData.email}\n🖼️ Interest: ${formData.interest}\n💰 Budget: ${formData.budget}\n📃 Description: ${formData.description}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
    } catch (error) {}
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
      console.error('Ошибка отправки:', error);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1); // Сбрасываем процесс
  };

  return (
    <div
      id="form-section"
      className=" font-ppneue flex flex-col w-[85%] mx-auto gap-8 h-[650px]"
    >
      {!isSubmitted ? (
        <>
          <div>
            <p className="text-[40px] font-medium leading-[48px]">
              <span className="text-[#1261FC]">Let's</span> create
              <br /> together
            </p>
            <p className="font-book mt-2">
              Got a project? Let's bring it to life
              <br /> with design and innovation
            </p>
          </div>

          {/* Step Progress Indicator */}
          <div className="relative h-[74px] w-full">
            {steps.slice(0, -1).map((step, index) => {
              const leftCircleSize = step === currentStep ? 44 : 28;
              const rightStep = step + 1;
              const rightCircleSize = rightStep === currentStep ? 44 : 28;
              const leftPosition = (index / (steps.length - 1)) * 100;
              const rightPosition = ((index + 1) / (steps.length - 1)) * 100;
              const leftEdge =
                index === 0
                  ? `${leftCircleSize}px`
                  : `calc(${leftPosition}% + ${leftCircleSize / 2}px)`;
              const rightEdge =
                index + 1 === steps.length - 1
                  ? `calc(100% - ${rightCircleSize}px)`
                  : `calc(${rightPosition}% - ${rightCircleSize / 2}px)`;
              const isCompleted = step < currentStep;

              return (
                <motion.div
                  key={step}
                  className="absolute top-[22px] z-0 h-[1px]"
                  style={{
                    left: leftEdge,
                    width: `calc(${rightEdge} - (${leftEdge}))`,
                  }}
                  animate={{
                    backgroundColor: isCompleted ? '#1261FC' : '#D4E0ED',
                  }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}

            {steps.map((step, index) => {
              const isCompleted = step < currentStep;
              const isActive = step === currentStep;
              const isPassedOrActive = isActive || isCompleted;
              const position = (index / (steps.length - 1)) * 100;

              return (
                <div
                  key={step}
                  className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
                  style={{
                    left: `${position}%`,
                    transform:
                      index === 0
                        ? 'translateX(0)'
                        : index === steps.length - 1
                          ? 'translateX(-100%)'
                          : 'translateX(-50%)',
                  }}
                >
                  <motion.div
                    className={`z-10 flex h-11 w-11 items-center justify-center rounded-full ${
                      isActive ? 'bg-white' : ''
                    }`}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={isCompleted ? done : isActive ? active : ncompleted}
                      alt={`Step ${step}`}
                      className={isActive ? 'h-11 w-11' : 'h-7 w-7'}
                    />
                  </motion.div>
                  <span
                    className={`mt-2 text-center text-[16px] font-book ${
                      isPassedOrActive ? 'text-[#1261FC]' : 'text-[#D4E0ED]'
                    }`}
                  >
                    {stepLabels[index]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="mt-5">
            {currentStep === 1 && (
              <StepOne
                onComplete={setCanProceed}
                onNext={nextStep}
                setFormData={setFormData}
              />
            )}
            {currentStep === 2 && (
              <StepTwo
                onComplete={setCanProceed}
                onNext={nextStep}
                onPrev={prevStep}
                setFormData={setFormData}
              />
            )}
            {currentStep === 3 && (
              <StepThree
                onComplete={setCanProceed}
                onNext={nextStep}
                onPrev={prevStep}
                setFormData={setFormData}
              />
            )}
            {currentStep === 4 && (
              <StepFour
                onPrev={prevStep}
                onSubmit={handleSubmit}
                setFormData={setFormData}
              />
            )}
          </div>
        </>
      ) : (
        <StepFinal onReset={handleReset} />
      )}
    </div>
  );
}
