import { useState, useEffect } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setIsVisible(false);
    };

    const denyCookies = () => {
        localStorage.setItem("cookiesAccepted", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (

        <div className="font-ppneue flex flex-col w-[85%] items-center mt-[68px]">
    <div className="flex flex-row max-w-[1200px] w-full justify-between relative mx-auto items-center ">
        {/* Фоновый баннер на всю ширину экрана */}
        <div className="z-[9999] fixed bottom-0 left-0 w-full h-[122px] bg-[#EAEAEA] p-4 flex justify-between">
            {/* Контейнер, ограничивающий контент */}
            <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-[496px]">
                <div className="text-[#090C21]">
                    <p className="text-base font-medium">We use cookies</p>
                    <p className="text-sm font-book">
                        To improve site performance, personalize content, and enhance ads.
                    </p>
                </div>
                <div className="flex gap-8 text-[#090C21] font-medium">
                    <button
                        onClick={denyCookies}
                        className="hover:opacity-80 opacity-50"
                    >
                        Deny all
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="bg-[#F7F7F6] pl-[34px] pr-[34px] pt-[8px] pb-[8px] rounded-lg hover:opacity-70 h-12"
                    >
                        Allow all cookies
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}