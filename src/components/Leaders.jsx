
import { useEffect, useState } from "react";
const Leaders = () => {
    const [counter, setCounter] = useState(829);

    useEffect(() => {
      const start = 829;
      const end = 859;
      let currentValue = start;
  
      const updateCounter = () => {
        if (currentValue < end) {
          currentValue++;
          setCounter(currentValue);
  
          // Увеличиваем задержку с каждым шагом
          const delay = 50 + Math.pow(currentValue - start, 2); // Чем ближе к концу, тем дольше
          setTimeout(updateCounter, delay);
        }
      };
  
      updateCounter(); // Запускаем обновление
    }, []);

    return (
        <div className="font-ppneue flex flex-col w-[85%] mx-auto gap-8">
            <div className="flex flex-col text-center mt-12 items-center">
                <p className="sm25:text-[40px] sm75:text-[40px] sm20:text-[36px] font-medium leading-[48px]"><span className="text-[#1261FC]">Trusted </span>by<br />
                Industry Leaders </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-row justify-around w-full items-center">
                    <img src="./images/icons/l1.png" alt="leader1" className="w-[50px] h-[50px]"/>
                    <img src="./images/icons/l2.png" alt="leader2" className="w-[110px] h-16"/>
                    <img src="./images/icons/l3.png" alt="leader3" className="w-[50px] h-[50px]"/>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-3 items-center sm20:w-[150px] sm75:w-[175px] sm25:w-[200px]">
                        <img src="./images/icons/l4.png" alt="leader4" className="w-[90px] h-[53px]"/>
                        <p className="text-sm">Top-Rated Agency</p>
                        <img src="./images/icons/Stars.png" alt="stars" className="w-14 h-2"/>
                    </div>
                    <div className="bg-[#F7F7F6] h-auto sm75:w-[175px] rounded-lg sm25:w-[200px] sm20:w-[150px] flex flex-col items-center justify-center">
                     <p className="text-[38px]">{counter}</p>
                        <p className="text-sm text-center">Projects completed
                        successfuly</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaders;
