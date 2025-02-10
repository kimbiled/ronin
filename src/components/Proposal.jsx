import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tick from '../assets/mobile/tick.png'
import question from '../assets/mobile/question.svg'
import arrowright from '../assets/mobile/arrow-right.svg'
import magic from '../assets/mobile/magic.png'
import star from '../assets/mobile/star.png'
const Proposal = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const handleClose = (event) => {
        if (!event.target || !(event.target instanceof Element)) return; // Проверка на null и правильный тип
        if (!event.target.closest(".popup-container")) {
          setIsVisible(false);
        }
      };
        
        document.addEventListener("click", handleClose);
        document.addEventListener("scroll", handleClose);
    
        return () => {
          document.removeEventListener("click", handleClose);
          document.removeEventListener("scroll", handleClose);
        };
      }, []);

    return (
        <div className="font-ppneue flex flex-col w-[90%] mx-auto rounded-xl gap-8">
        {/* Заголовок */}
            <div className="flex flex-col text-center mt-12 items-center gap-2">
                <p className="sm25:text-[40px] sm75:text-[40px] sm20:text-[36px] font-medium leading-[48px]"><span className="text-[#1261FC]">Strong team</span> of<br />
                A-tier specialists</p>
                <p className="font-book text-[#090C21] sm20:w-[300px] sm20:text-base sm25:text-base sm75:text-base sm75:w-[340px] sm25:w-[400px] leading-[24px]">
                Hire a team of pros, pay the cost of one employee
                </p>
            </div>
            <div className="flex flex-col rounded-[24px] h-auto"
        style={{
            background: "radial-gradient(271.63% 217.5% at 169.59% -28.68%, #22AFFF 0%, #1261FC 100%)"
          }}
        >
            <div className="flex flex-col items-center">
                <div className="relative bg-white rounded-[18px] sm20:w-[260px] sm75:w-[300px] sm25:w-[340px] h-36 mt-10">
                    <div>
                        <img src={star} alt="star"  className="w-12 h-12 absolute top-[-22px] left-5"/>
                    </div>
                    <div className="inline-block popup-container">
      {/* Иконка вопроса */}
      <img
        src={question}
        alt="question"
        className="w-6 h-6 absolute top-[14px] right-[14px] opacity-50 cursor-pointer"
        onMouseEnter={() => setIsVisible(true)} // Открывает при ховере (для ПК)
        onClick={(e) => {
          e.stopPropagation(); // Блокируем закрытие при клике на саму иконку
          setIsVisible(!isVisible);
        }}
      />

      {/* Pop-up с плавной анимацией */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-10 right-4 w-[297px] h-[98px] p-4 rounded-lg bg-[#090C21] text-[#FFFFFF] shadow-lg popup-container text-center text-xs font-book flex flex-row items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Блокируем закрытие при клике внутри попапа
          >
            We are limited by the number of our talents. We don't chase quantity, but prefer engagement and commitment. Same as you
          </motion.div>
        )}
      </AnimatePresence>
    </div>
                    <div className="flex flex-col p-4">
                       <div className="flex flex-row gap-3 items-center font-book">
                            <p className="text-[34px]">2/5</p>
                            <p className="text-lg">client slots available</p>
                       </div>
                       <div className="w-42 font-book">
                            <p className="text-xs">We don't chase after quantity,<br />
                            but rather great results</p>
                       </div>
                    </div>
                </div>
                {/* splicer */}
                <div className="flex flex-row w-52 justify-between">
                    <div className="h-1 w-16 bg-white"></div>
                    <div className="h-1 w-16 bg-white"></div>
                </div>
                <div className="relative bg-white rounded-[18px] sm20:w-[260px] sm75:w-[300px] sm25:w-[340px] h-96">
                    <div className="mt-4 flex flex-col p-4">
                       <div className="flex flex-row mb-3 items-center sm20:w-[250px] sm75:w-[250px] sm25:w-[250px] ">
                            <p className="text-[34px] font-medium leading-[38px]">Each plan contains</p>
                       </div>
                       <div className="flex flex-col gap-3 mt-3 font-book">
                            <div className="flex flex-row gap-2 rounded-2xl sm20:w-[208px] sm75:w-[238px] sm25:w-[238px] p-1 h-8 bg-[#F7F7F6] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p className="sm75:text-sm sm25:text-sm sm20:text-xs">2-3 business days delivery time</p>
                            </div>
                            <div className="flex flex-row gap-2 rounded-2xl sm20:w-[142px] sm75:w-[157px] sm25:w-[157px] p-1 h-8 bg-[#F7F7F6] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Whole team input</p>
                            </div>
                            <div className="flex flex-row gap-2 rounded-2xl sm20:w-[138px] sm75:w-[157px] sm25:w-[157px] p-1 h-8 bg-[#F7F7F6] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Unlimited brands</p>
                            </div>
                            <div className="flex flex-row gap-2 rounded-2xl sm20:w-[148px] sm75:w-[164px] sm25:w-[164px] p-1 h-8 bg-[#F7F7F6] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Unlimited revisions</p>
                            </div>
                            <div className="flex flex-row gap-2 rounded-2xl sm20:w-[166px] sm75:w-[186px] sm25:w-[186px] p-1 h-8 bg-[#F7F7F6] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Satisfaction guarantee</p>
                            </div>

                       </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-6 items-center text-white p-8">
                <div className="flex flex-col gap-1 w-full ">
                    <div className=" flex flex-row justify-between items-center">
                        <h5 className="font-medium text-[25px]">No hiring fee</h5>
                        <img src={magic} alt="magic" className="h-6 w-6 brightness-125" />
                    </div>
                    <div className="border-b-[1px] pb-6 border-b-[#FFFFFF2E]">
                        <p className="opacity-70 font-medium">We’re ready to get started right now,<br/>
                        as long as we have open spots</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full mt-6">
                    <div className=" flex flex-row justify-between items-center">
                        <h5 className="font-medium text-[25px]">No interviews</h5>
                        <img src={magic} alt="magic" className="h-6 w-6 brightness-125"/>
                    </div>
                    <div className="border-b-[1px] pb-6 border-b-[#FFFFFF2E]">
                        <p className="opacity-70 font-medium">Forget the endless search for<br/>
                        the best. We're already here</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full mt-6">
                    <div className=" flex flex-row justify-between items-center">
                        <h5 className="font-medium text-[25px]">No extra hassle</h5>
                        <img src={magic} alt="magic" className="h-6 w-6 brightness-125"/>
                    </div>
                    <div>
                        <p className="opacity-70 font-medium">Get near in-house experience<br/>
                        without having to think of benefits when hiring employees</p>
                    </div>
                </div>    
            </div>

            <div className="bg-white hover:bg-gray-100 rounded-xl sm20:w-[260px] sm75:w-[300px] sm25:w-[340px] h-12 mx-auto mb-6 flex flex-col items-center justify-center">
  <div className="flex flex-row items-center gap-2" 
  onClick={() => {
    const element = document.getElementById("form-section");
    if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
}}>
    <p className="font-medium">Get Proposal</p>
    <img
      src={arrowright}
      alt="arrow-right"
      
    />
  </div>
</div>
            </div>
      </div>
    );
};
  
export default Proposal;
