export default function StepFinal({ onReset }) {
    return (
      <div className="font-ppneue flex flex-col w-full mx-auto gap-2 text-center items-center mb-12 h-[400px] justify-center">
        {/* Иконка подтверждения */}
        <div className="w-11 h-11 mt-[60px]">
          <img src="./images/icons/Icon.png" alt="icon" />
        </div>
  
        {/* Заголовок */}
        <p className="text-[44px] font-medium text-[#1261FC] leading-[48px]">Thank You!</p>
  
        {/* Описание */}
        <p className="text-[22px] leading-[28px] font-medium mt-2">
          Your email is already in our priority mailbox
        </p>
        <p className="text-[22px] leading-[28px] font-book mt-2">We will contact you very soon</p>
  
        {/* Кнопка "Send again" */}
        <button
          onClick={onReset}
          className="mt-7 text-[#1261FC] text-lg flex items-center gap-2"
        >
          Send again →
        </button>
      </div>
    );
  }