import { useState, useRef, useEffect } from "react";
import preloaderVideo from "../assets/desktop/1080_1920.mp4";

export default function Preloader({ onComplete }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.load(); // Гарантированно загружаем видео

            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => console.log("Автовоспроизведение началось"))
                    .catch(() => {
                        console.log("Автовоспроизведение заблокировано, ждем взаимодействия");
                        video.muted = true;
                        video.play();
                    });
            }

            video.onended = () => {
                setIsPlaying(false);
                if (onComplete) onComplete();
            };
        }
    }, []);

    return (
        isPlaying && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#090C21] flex-col z-50">
                <video
                    ref={videoRef}
                    src={preloaderVideo}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="w-screen h-screen object-cover"
                />
                <div className="absolute bottom-16 text-[#637695] text-xs font-book">
                    © Ronin Design 2025
                </div>
            </div>
        )
    );
}