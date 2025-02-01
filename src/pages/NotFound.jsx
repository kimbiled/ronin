import { Link } from "react-router-dom";
import Header from "../components/Header";
import stared from '../assets/icons/stared.svg'
const NotFound = () => {
  return (
    <div className="font-ppneue flex flex-col items-center justify-between h-screen text-[#090C21] bg-white">
      <Header />

      {/* Основной контент */}
      <div className="flex flex-col items-center text-center text-[#090C21]">
        <h1 className="text-[78px] font-medium leading-[100%]">
          Page <br />
          <span className="text-[78px] font-medium leading-[100%]">
            n
            <span className="inline-block px-1 align-middle">
              {/* Тут вставь свое изображение */}
              <img src={stared} alt="stared" className=" w-12 h-12"/>
            </span>
            t 
            found!
          </span>
        </h1>
        <p className="mt-7 font-book">
          Don’t worry — you’re in good hands.<br />
          Go back to the home page
        </p>

        {/* Кнопка "Back home" */}
        <Link to="/" className="mt-12 font-medium flex items-center space-x-2 hover:underline">
          <span>Back home</span>
          <span>→</span>
        </Link>
      </div>

      {/* Футер */}
      <footer className="pb-16 font-book text-xs ">
        © Ronin Design 2025
      </footer>
    </div>
  );
};

export default NotFound;