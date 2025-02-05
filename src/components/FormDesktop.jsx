import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StepOneDesktop from "./StepOneDesktop";
import StepTwoDesktop from "./StepTwoDesktop";
import StepThreeDesktop from "./StepThreeDesktop";
import StepFourDesktop from "./StepFourDesktop";
import StepFinalDesktop from "./StepFinalDesktop";


const FormDesktop = () => {
    const steps = [1, 2, 3, 4];
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
    <div id="form-section" className="font-ppneue flex flex-col w-[85%] items-center justify-center h-[800px]">
      <div className="mt-[100px] flex flex-row max-w-[1200px] w-full justify-between">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col items-center">
                    <p className="font-medium  leading-[92px] text-[84px]"><span className="text-[#1261FC]">Let's </span>create<br />
                    together </p>
                    <p className="font-book text-[22px] leading-[30px] mt-6">Got a project? Let's bring it to life with design<br/>
                    and innovation</p>
                </div>
                <div className="flex flex-col mt-6 ">
                    <p className="font-book  leading-[24px] text-[22px] text-[#9CA3AF]">Contact us</p>
                    <p className="font-book text-[22px] leading-[22px] mt-6">hi@ronindsgn.com</p>
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
                                          ? "./images/icons/done.png"
                                          : isActive
                                          ? "./images/icons/active.svg"
                                          : "./images/icons/n-completed.png"
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
                            {currentStep === 1 && <StepOneDesktop onComplete={setCanProceed} onNext={nextStep} />}
                            {currentStep === 2 && <StepTwoDesktop onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep} />}
                            {currentStep === 3 && <StepThreeDesktop onComplete={setCanProceed} onNext={nextStep} onPrev={prevStep} />}
                            {currentStep === 4 && <StepFourDesktop onPrev={prevStep} onSubmit={handleSubmit} />}
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