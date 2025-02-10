import { useState, useRef, useEffect } from "react";
import preloaderVideo from "../assets/desktop/1080_1920.mp4";

export default function Preloader({ onComplete }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const checkVideoProgress = () => {
            if (videoRef.current) {
                const { currentTime, duration } = videoRef.current;
                if (currentTime > 0 && currentTime >= duration - 0.1) {
                    // Если видео почти доиграло (с небольшим запасом), скрываем прелоадер
                    setIsPlaying(false);
                    if (onComplete) {
                        onComplete();
                    }
                }
            }
        };

        const video = videoRef.current;
        if (video) {
            video.addEventListener("timeupdate", checkVideoProgress);
            return () => video.removeEventListener("timeupdate", checkVideoProgress);
        }
    }, []);

    return (
        isPlaying && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#090C21] flex-col">
                <video
                    ref={videoRef}
                    src={preloaderVideo}
                    autoPlay
                    muted
                    playsInline
                    className="w-screen h-screen object-cover"
                />
                <div className="absolute bottom-16 text-[#637695] text-xs font-book">
                    © Ronin Design 2025
                </div>
            </div>
        )
    );
}