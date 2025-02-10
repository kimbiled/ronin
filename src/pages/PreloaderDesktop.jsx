
import { useState } from "react";
import preloaderVideo from "../assets/desktop/1920_1080_.mp4";

export default function Preloader({ onComplete }) {
    const [isPlaying, setIsPlaying] = useState(true);

    const handleVideoEnd = () => {
        setIsPlaying(false);
        if (onComplete) {
            onComplete(); // Можно передать callback, если нужно
        }
    };

    return (
        isPlaying && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#090C21] flex-col">
                <video
                    src={preloaderVideo}
                    autoPlay
                    muted
                    playsInline
                    className="w-screen h-screen object-cover"
                    onEnded={handleVideoEnd} // Когда видео закончится, прелоадер исчезнет
                />
                <div className="absolute bottom-16 text-[#637695] text-lg font-book">
                    © Ronin Design 2025
                </div>
            </div>
        )
    );
}