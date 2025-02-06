import Lottie from "lottie-react";
import preloaderAnimation from "../assets/desktop/1080_1920_-back.json";

export default function Preloader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#090C21] flex-col">
            <Lottie
                animationData={preloaderAnimation}
                loop={true}
                className="w-screen h-screen object-cover scale-[2.5]" // Увеличиваем размер в 1.5 раза
            />
            <div className="absolute bottom-16 text-[#637695] text-xs font-book">
            © Ronin Design 2025
            </div>
        </div>
    );
}