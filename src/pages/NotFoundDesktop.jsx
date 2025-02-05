import { Link } from "react-router-dom";
import HeaderDesktop from "../components/HeaderDesktop";
import stared from '../assets/icons/stared.svg'
import FooterDesktop from "../components/FooterDesktop";
const NotFoundDesktop = () => {
  return (
    <div className="font-ppneue flex flex-col items-center justify-between h-screen text-[#090C21] bg-white">
      <HeaderDesktop />

      {/* Основной контент */}
      <div className="flex flex-col items-center text-center text-[#090C21] mt-[200px] mb-[100px]">
        <h1 className="text-[148px] font-medium leading-[100%]">
          Page <br />
          <span className="text-[148px] font-medium leading-[100%]">
            n
            <span className="inline-block px-1 align-middle">
              {/* Тут вставь свое изображение */}
              <img src={stared} alt="stared" className=" w-20 h-20"/>
            </span>
            t 
            found!
          </span>
        </h1>
        <p className="mt-7 font-book text-lg">
          Don’t worry — you’re in good hands.<br />
          Go back to the home page
        </p>

        {/* Кнопка "Back home" */}
        <Link to="/" className="mt-16 font-medium text-lg flex items-center space-x-2 hover:underline">
          <span>Back home</span>
          <span>→</span>
        </Link>
      </div>

      {/* Футер */}
     <FooterDesktop />
    </div>
  );
};

export default NotFoundDesktop;