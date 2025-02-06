import Lottie from "lottie-react";
import preloaderAnimation from "../assets/desktop/1920_1080_back.json";
import { useEffect, useState } from "react";

export default function PreloaderDesktop() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#090C21]">
            <Lottie
                animationData={preloaderAnimation}
                loop={false} // Отключаем бесконечный повтор
                className="w-screen h-screen object-cover scale-[2]"
            />
            <div className="absolute bottom-16 text-[#637695] text-lg font-book">
            © Ronin Design 2025
            </div>
        </div>
    );
}