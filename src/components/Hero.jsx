const Hero = () => {
    return (
        <div className="flex flex-col w-[85%] mx-auto gap-8">
            <div>
                <img src="./images/icons/wrapper.png" alt="wrapper" className="w-full h-full" />
            </div>
            <div className="text-center flex flex-col gap-2">
                <h1 className="font-medium text-[25px]">
                    Web design and Content That Skyrocket Your Business
                </h1>
                <p className="text-[#9CA3AF]">
                    Get your first task done for free in 24 hours
                </p>
            </div>
            <div className="flex gap-4 flex-row justify-around">
                <button className=" bg-[#1261FC] text-white rounded-lg w-48 h-12">
                    View Portfolio
                </button>
                <button className="bg-transparent border border-[#1261FC] text-[#1261FC] rounded-lg w-48 h-12">
                    Get a Proposal
                </button>
            </div>
            <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-row">
                    <div className="flex flex-row gap-2 rounded-2xl sm20:w-[148px] sm75:w-[168px] sm25:w-[168px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                        <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Unlimited requests</p>
                    </div>
                    <div className="flex flex-row gap-2 rounded-2xl sm20:w-[148px] sm75:w-[168px] sm25:w-[168px] p-1 h-8 bg-[#F7F7F6] items-center">
                        <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                        <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Fixed monthly fee</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 rounded-2xl sm25:w-52 sm20:w-[192px] sm75:w-52 p-1 h-8 bg-[#F7F7F6] items-center">
                    <img src="./images/icons/Icon.png" alt="Icon"  className="h-6 w-6"/>
                    <p className="sm75:text-sm sm25:text-sm sm20:text-xs">Pause or cancel any time</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <img src="./images/icons/berg.png" alt="berg" width={100} height={35}/>
                <img src="./images/icons/disney.png" alt="disney" width={70} height={28}/>
                <img src="./images/icons/forbes.png" alt="forbes" width={70}/>
            </div>
        </div>
    );
};

export default Hero;
