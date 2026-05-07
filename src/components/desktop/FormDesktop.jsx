import { useState } from 'react';
import { motion } from 'framer-motion';
import StepOneDesktop from './StepOneDesktop';
import StepTwoDesktop from './StepTwoDesktop';
import StepThreeDesktop from './StepThreeDesktop';
import StepFourDesktop from './StepFourDesktop';
import StepFinalDesktop from './StepFinalDesktop';
import emailjs from '@emailjs/browser';

const FormDesktop = () => {
  const steps = [1, 2, 3, 4];
  const stepLabels = ['Contacts', 'Service', 'Budget', 'Details'];
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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_FORM_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID,
      );
    } catch (error) {}
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
      className="font-ppneue flex flex-col w-[85%] items-center justify-center h-[800px]"
    >
      <div className="mt-[100px] flex flex-row max-w-[1200px] w-full justify-between">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col">
            <p className="font-medium leading-[92px] text-[84px]">
              <span className="text-[#1261FC]">Let's </span>create
              <br />
              together{' '}
            </p>
            <p className="font-book text-[22px] leading-[30px] mt-6">
              Got a project? Let's bring it to life with design
              <br />
              and innovation
            </p>
          </div>
          <div className="flex flex-col mt-6 ">
            <p className="font-book  leading-[24px] text-[22px] text-[#9CA3AF]">
              Contact us
            </p>
            <a
              className="font-book text-[22px] leading-[22px] mt-3 hover:text-gray-500 duration-500 ease-in-out"
              href="mailto:hi@ronindsgn.com"
            >
              hi@ronindsgn.com
            </a>
          </div>
        </div>
        <div
          id="form-section"
          className=" font-ppneue flex flex-col max-w-[550px] w-full justify-between"
        >
          {!isSubmitted ? (
            <div className="flex flex-col justify-between">
              {/* Step Progress Indicator */}
              <div className="relative mb-12 h-[100px] w-full max-w-[550px] shrink-0">
                {steps.slice(0, -1).map((step, index) => {
                  const leftCircleSize = step === currentStep ? 44 : 28;
                  const rightStep = step + 1;
                  const rightCircleSize = rightStep === currentStep ? 44 : 28;
                  const leftPosition = (index / (steps.length - 1)) * 100;
                  const rightPosition =
                    ((index + 1) / (steps.length - 1)) * 100;
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
                      className="absolute top-[22px] h-[1px]"
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
                      <div className="flex h-11 items-center">
                        <motion.div
                          className="flex items-center justify-center rounded-full bg-white"
                          animate={{
                            height: isActive ? 44 : 28,
                            width: isActive ? 44 : 28,
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <div
                            className={`flex h-full w-full items-center justify-center rounded-full ${
                              isPassedOrActive
                                ? 'border border-[#1261FC] bg-white'
                                : 'bg-[#D4E0ED]'
                            }`}
                          >
                            <div
                              className={`rounded-full ${
                                isPassedOrActive
                                  ? 'h-[11px] w-[11px] bg-[#1261FC]'
                                  : 'h-[8px] w-[8px] bg-white'
                              }`}
                            />
                          </div>
                        </motion.div>
                      </div>
                      <span
                        className={`mt-4 text-center text-[16px] font-book ${
                          isPassedOrActive
                            ? 'text-[#1261FC]'
                            : 'text-[#D4E0ED]'
                        }`}
                      >
                        {stepLabels[index]}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Step Content */}
              <div className="">
                {currentStep === 1 && (
                  <StepOneDesktop
                    onComplete={setCanProceed}
                    onNext={nextStep}
                    setFormData={setFormData}
                  />
                )}
                {currentStep === 2 && (
                  <StepTwoDesktop
                    onComplete={setCanProceed}
                    onNext={nextStep}
                    onPrev={prevStep}
                    setFormData={setFormData}
                  />
                )}
                {currentStep === 3 && (
                  <StepThreeDesktop
                    onComplete={setCanProceed}
                    onNext={nextStep}
                    onPrev={prevStep}
                    setFormData={setFormData}
                  />
                )}
                {currentStep === 4 && (
                  <StepFourDesktop
                    onPrev={prevStep}
                    onSubmit={handleSubmit}
                    setFormData={setFormData}
                  />
                )}
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
