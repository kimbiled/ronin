import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import star from "../assets/desktop/star.svg"
import tick from "../assets/desktop/tick.png"
import question from "../assets/desktop/question.svg"
const ProposalDesktop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(null);
    useEffect(() => {
        const handleClose = (event) => {
            if (!event.target || !(event.target instanceof Element)) return;
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

    const handleMouseEnter = () => {
      if (timer) clearTimeout(timer); // Очищаем предыдущий таймер
      setIsVisible(true);
    };
  
    const handleMouseLeave = () => {
      const newTimer = setTimeout(() => {
        setIsVisible(false);
      }, 100); // Добавляем задержку в 300 мс перед исчезновением
      setTimer(newTimer);
    };

    return (
        <div id="what-we-do" className="font-ppneue flex flex-col w-[85%] items-center mt-20">
            <div className="mt-[100px] flex flex-row max-w-[1200px] w-full justify-between">
                <div className="w-[833px] h-[633px] bg-[#1261FC] rounded-[24px] flex flex-col justify-between">
                    <div className="p-12 flex flex-col gap-6 mb-22">
                        <h3 className="font-medium text-[84px] leading-[92px] text-white">Strong team of <br/>
                        A-tier specialists</h3>
                        <p className="font-book text-[34px] leading-[44px] text-white opacity-70">Hire a team of pros, pay the cost<br/>
                        of one employee</p>
                    </div>
                    <div className="w-[833px] h-[201px] bg-[#266FFF] rounded-[24px] flex items-center justify-between p-12 gap-[19px] text-white">
      {/* Первый блок */}
      <div className="flex flex-col items-start w-[240px] h-[108px] gap-2">
        <h5 className="text-[28px] leading-[34px] font-medium">No hiring fee</h5>
        <p className="leading-[22x] font-book">We’re ready to get started right now, as long as we have open spots</p>
      </div>
      
      {/* Разделительная линия */}
      <div className="h-[75px] w-[1px] bg-black opacity-30"></div>
      
      {/* Второй блок */}
      <div className="flex flex-col items-start w-[196px] h-[108px] gap-2">
        <h5 className="text-[28px] leading-[34px] font-medium">No interviews</h5>
        <p className="tleading-[22x] font-book">Forget the endless search for the best. We're already here</p>
      </div>
      
      {/* Разделительная линия */}
      <div className="h-[75px] w-[1px] bg-black opacity-30"></div>
      
      {/* Третий блок */}
      <div className="flex flex-col items-start w-[222px] h-[108px] gap-2">
        <h5 className="text-[28px] leading-[34px] font-medium">No extra hassle</h5>
        <p className="tleading-[22x] font-book">Get near in-house experience without having to think of benefits when hiring employees</p>
      </div>
    </div>
                </div>

                <div className="flex flex-col items-center">
                <div className="relative bg-[#F7F7F6] rounded-[18px] w-[350px] h-[204px]">
                    <div>
                        <img src={star} alt="star"  className="w-16 h-16 absolute top-[-22px] left-8"/>
                    </div>
                    <div className="inline-block popup-container">
      {/* Иконка вопроса */}
      <img
        src={question}
        alt="question"
        className="w-6 h-6 absolute top-3 right-4 hover:opacity-80 cursor-pointer"
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
            className="absolute top-10 w-[340px] right-[5px] h-40 pl-[48px] pr-[48px] pt-[24px] pb-[24px] rounded-lg bg-[#090C21] text-[#FFFFFF] shadow-lg popup-container text-center text-lg font-book flex flex-row items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
            onMouseEnter={handleMouseEnter} // Если навелись обратно – не исчезает
            onMouseLeave={handleMouseLeave} // Если убрали – начнет исчезать// Блокируем закрытие при клике внутри попапа
          >
            We are limited by the number of our talents. We don't chase quantity, but prefer engagement and commitment. Same as you
          </motion.div>
        )}
      </AnimatePresence>
    </div>
                    <div className="flex flex-col p-8 gap-3">
                       <div className="flex flex-row gap-3 items-center font-book text-[#090C21]">
                            <p className="text-[44px] leading-[44px]">2/5</p>
                            <p className="text-[20px]">client slots available</p>
                       </div>
                       <div className="font-book">
                            <p className="text-[20px] leading-[26px]">We don't chase after quantity,<br />
                            but rather great results</p>
                       </div>
                    </div>
                </div>
                {/* splicer */}
                <div className="flex flex-row w-52 justify-between">
                    <div className="h-1 w-16 bg-[#F7F7F6]"></div>
                    <div className="h-1 w-16 bg-[#F7F7F6]"></div>
                </div>
                <div className="relative bg-[#F7F7F6] rounded-[18px]  w-[350px] h-[426px]">
                    <div className="mt-4 flex flex-col p-8">
                       <div className="flex flex-row mb-3 items-center sm20:w-[250px] sm75:w-[250px] sm25:w-[250px] ">
                            <p className="text-[34px] font-medium leading-[41px]">Each plan contains</p>
                       </div>
                       <div className="flex flex-col gap-3 mt-3 font-book">
                            <div className="flex flex-row gap-3 rounded-2xl w-[268px] p-1 h-8 bg-[#FFFFFF] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p>2-3 business days delivery time</p>
                            </div>
                            <div className="flex flex-row gap-3 rounded-2xl  w-[176px] p-1 h-8 bg-[#FFFFFF] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p>Whole team input</p>
                            </div>
                            <div className="flex flex-row gap-3 rounded-2xl   w-[171px] p-1 h-8 bg-[#FFFFFF] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p>Unlimited brands</p>
                            </div>
                            <div className="flex flex-row gap-3 rounded-2xl p-1  w-[183px] h-8 bg-[#FFFFFF] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p>Unlimited revisions</p>
                            </div>
                            <div className="flex flex-row gap-3 rounded-2xl p-1  w-[208px] h-8 bg-[#FFFFFF] items-center">
                                <img src={tick} alt="tick"  className="h-6 w-6"/>
                                <p>Satisfaction guarantee</p>
                            </div>

                       </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProposalDesktop;
