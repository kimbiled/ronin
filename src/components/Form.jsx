import { act, useState } from "react";
import { motion } from "framer-motion";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFinal from "./StepFinal";

import done from '../assets/mobile/done.png'
import active from '../assets/mobile/active.svg'
import ncompleted from '../assets/mobile/n-completed.png'

const steps = [1, 2, 3, 4];

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [canProceed, setCanProceed] = useState(false);

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

  const handleSubmit = () => {
    setIsSubmitted(true); // Показываем StepFinal
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
            {currentStep === 1 && <StepOne onComplete={setCanProceed} onNext={nextStep} />}
            {currentStep === 2 && <StepTwo onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep} />}
            {currentStep === 3 && <StepThree onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep} />}
            {currentStep === 4 && <StepFour onPrev={prevStep} onSubmit={handleSubmit} />}
          </div>
        </>
      ) : (
        <StepFinal onReset={handleReset} />
      )}
    </div>
  );
}