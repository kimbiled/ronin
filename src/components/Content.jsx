
const Content = () => {
    return (
        <div className="flex flex-col w-full rounded-3xl h-auto"
        style={{
            background: "radial-gradient(271.63% 217.5% at 169.59% -28.68%, #22AFFF 0%, #1261FC 100%)"
          }}
        >
            <div className="flex flex-col  mx-auto gap-8 w-[85%]">
                <div>
                    <img src="./images/icons/phone.png" alt="phone" className="w-full h-full mt-4"/>
                </div>
                <div className="flex flex-col gap-3 text-white">
                    <h3 className="font-medium text-[40px]">Design That
                    Drives Growth</h3>
                    <h5>With over 800 projects and 6 years of experience, we deliver tailored solutions that help brands succeed</h5>
                </div>

                <div class="mt-2 grid text-white">
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center gap-2 font-medium">
                        <span className="text-[20px]">Content Marketing</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-white">Tailored websites that deliver results. From UI/UX to development, we create stunning, functional platforms that engage users and drive conversions
                    </p>
                    <img src="./images/icons/item.png" alt="item" className="w-36 h-36 mt-2"/>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center gap-2 font-medium">
                        <span className="text-[20px]"> Website Design</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-white">Tailored websites that deliver results. From UI/UX to development, we create stunning, functional platforms that engage users and drive conversions
                    </p>
                    <img src="./images/icons/item.png" alt="item" className="w-36 h-36 mt-2"/>
                </details>
            </div>
            <div class="py-5">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center gap-2 font-medium">
                        <span className="text-[20px]">Branding</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-white">Tailored websites that deliver results. From UI/UX to development, we create stunning, functional platforms that engage users and drive conversions
                    </p>
                    <img src="./images/icons/item.png" alt="item" className="w-36 h-36 mt-2"/>
                </details>
            </div>
            <div class="py-5 mb-6">
                <details class="group">
                    <summary class="flex cursor-pointer list-none items-center gap-2 font-medium">
                        <span className="text-[20px]"> Custom Request</span>
                        <span class="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-white">Tailored websites that deliver results. From UI/UX to development, we create stunning, functional platforms that engage users and drive conversions
                    </p>
                    <img src="./images/icons/item.png" alt="item" className="w-36 h-36 mt-2"/>
                </details>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Content;
