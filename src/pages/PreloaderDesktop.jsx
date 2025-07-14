import { useState, useRef, useEffect } from "react";
import preloaderVideo from "../assets/desktop/1920_1080_.mp4";

export default function PreloaderDesktop({ onComplete }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.load(); // Гарантированно загружаем видео

            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then()
                    .catch(() => {
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
                <div className="absolute bottom-16 text-[#637695] text-lg font-book">
                    © Ronin Design 2025
                </div>
            </div>
        )
    );
}