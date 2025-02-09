import preloaderVideo from "../assets/desktop/1920_1080_.mp4";

export default function Preloader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#090C21] flex-col">
            <video
                src={preloaderVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen object-cover scale-[2.5]"
            />
            <div className="absolute bottom-16 text-[#637695] text-xs font-book">
                © Ronin Design 2025
            </div>
        </div>
    );
}