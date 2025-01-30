export default function StepFinal({ onReset }) {
    return (
      <div className="font-ppneue flex flex-col w-[95%] mx-auto gap-2 text-center items-center mb-12 h-[650px] justify-center">
        {/* Иконка подтверждения */}
        <div className="w-12 h-12">
          <img src="./images/icons/Icon.png" alt="icon" />
        </div>
  
        {/* Заголовок */}
        <p className="text-[40px] font-medium text-[#1261FC]">Thank You!</p>
  
        {/* Описание */}
        <p className="text-sm font-medium mt-2">
          Your email is already in our priority mailbox
        </p>
        <p className="text-sm font-book">We will contact you very soon</p>
  
        {/* Кнопка "Send again" */}
        <button
          onClick={onReset}
          className="mt-6 text-[#1261FC] text-sm flex items-center gap-2"
        >
          Send again →
        </button>
      </div>
    );
  }