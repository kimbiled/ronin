const Review = () => {
    return (
        <div className="flex flex-col w-[85%] mx-auto mt-8">
            <div className="flex flex-row items-center gap-4">
                <p className="font-medium sm25:text-[38px] sm75:text-[32px] sm20:text-[24px] text-[#1261FC]">100+ 5 Star</p>
                <img src="./images/icons/Stars.png" alt="stars" className="w-32 h-[18px]"/>
            </div>
            <div className="flex flex-row items-center gap-4">
                <p className="font-medium sm25:text-[38px] sm75:text-[32px] sm20:text-[24px] text-[#1261FC]">Reviews</p>
                <img src="./images/icons/portrait.png" alt="portrait" className="w-48 h-11"/>
            </div>
            <div className="flex flex-row items-center gap-4">
                <p className="font-medium sm25:text-[38px] sm75:text-[32px]  sm20:text-[24px] text-[#090C21]">& 859 Completed</p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <button className="h-10 w-48 border border-[#090C21] rounded-md">
                    <img src="./images/icons/antix.png" alt="antix" className="w-16 h-6 mx-auto"/>
                </button>
                <p className="font-medium sm25:text-[38px] sm75:text-[32px]  sm20:text-[24px] text-[#090C21]">Projects</p>
            </div>
        </div>
    );
};

export default Review;
