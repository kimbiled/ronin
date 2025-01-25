import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const navigate = useNavigate()
    const goToMyTokens = () =>{
        navigate("/profile")
    }
    const toggleMenu = (menu) => {
      setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    };
  return (
    <div className="fonts-mono h-full bg-[#0A1330]">
        <aside className="bg-[#0A1330] text-[#AEB9E1] flex flex-col border border-[#343B4F] rounded-lg h-full 2xl:h-[950px] xl:h-[950px] 2xl:w-[300px] xl40:w-[260px] overflow-hidden">
      {/* Return to site */}
        <div className="p-4 relative">
            <a href="https://degenai.ai/ " className="flex flex-row items-center space-x-2 text-sm text-white mb-3 mt-4 fonts-mono">
                <span>←</span>
                <span>Return to site</span>
            </a>
            {/* Нижняя граница */}
            <div className="absolute bottom-0 w-[85%] h-[1px] bg-[#FFFFFF] opacity-20"></div>
        </div>


      {/* User Info */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex flex-row items-center gap-4">
            <img
            src="./images/icons/verde.png"
            alt="User Avatar"
            className="w-12 h-12"
            />
            <div>
            <p className="text-white font-bold">Axel Verde</p>
            <p className="text-sm">Account settings</p>
            </div>
        </div>
        <div className="flex flex-row items-center ">
            <span className="text-2xl">›</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-4">
        {/* Dashboard */}
        <div className="group flex items-center justify-between hover:text-[#CB3CFF] h-[40px]">
          <div className="flex items-center space-x-2">
            <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:fill-[#CB3CFF] fill-[#AEB9E1]"
                    >
                    <path d="M0 6.93356C0 6.51284 0.181487 6.11217 0.498755 5.83245L6.01055 0.973002C6.57464 0.475674 7.42536 0.475674 7.98945 0.973002L13.5012 5.83245C13.8185 6.11217 14 6.51284 14 6.93356V13.1259C14 13.94 13.3337 14.6 12.5118 14.6H1.4882C0.666291 14.6 0 13.94 0 13.1259V6.93356Z" />
                </svg>
            <p className="group-hover:text-[#CB3CFF]">Dashboard</p>
          </div>
          <span className="group-hover:text-[#CB3CFF] text-2xl">›</span>
        </div>

        {/* My Tokens */}
        <div>
        <div className="group flex items-center justify-between hover:text-[#CB3CFF]  h-[40px]"
        onClick={goToMyTokens}>
            <div className="flex items-center space-x-2">
                {/* SVG Иконка */}
                <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-[#AEB9E1] group-hover:text-[#CB3CFF]"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00357 0.600006C7.51784 0.600006 7.93473 1.0169 7.93473 1.53117V2.00222C8.36312 2.00237 8.7873 2.08682 9.18308 2.25076C9.57923 2.41485 9.93917 2.65536 10.2424 2.95856C10.5456 3.26175 10.7861 3.6217 10.9502 4.01784C11.1142 4.41398 11.1987 4.83857 11.1987 5.26735C11.1987 5.78162 10.7818 6.19851 10.2675 6.19851C9.75327 6.19851 9.33637 5.78162 9.33638 5.26735C9.33638 5.08313 9.30009 4.90072 9.22959 4.73052C9.1591 4.56032 9.05577 4.40568 8.9255 4.27542C8.79524 4.14515 8.6406 4.04182 8.4704 3.97133C8.3002 3.90083 8.11779 3.86455 7.93357 3.86455H5.833C5.46095 3.86455 5.10414 4.01234 4.84107 4.27542C4.57799 4.53849 4.43019 4.8953 4.43019 5.26735C4.43019 5.6394 4.57799 5.99621 4.84107 6.25928C5.10414 6.52236 5.46095 6.67016 5.833 6.67016H8.40036C9.26633 6.67016 10.0968 7.01416 10.7092 7.62649C11.3215 8.23882 11.6655 9.06932 11.6655 9.93528C11.6655 10.8013 11.3215 11.6317 10.7092 12.2441C10.0968 12.8564 9.26633 13.2004 8.40036 13.2004H7.93473V13.6688C7.93473 14.1831 7.51784 14.6 7.00357 14.6C6.48931 14.6 6.07241 14.1831 6.07241 13.6688V13.2004H5.5996C4.73364 13.2004 3.90314 12.8564 3.29081 12.2441C2.67848 11.6317 2.33447 10.8013 2.33447 9.93528C2.33447 9.42102 2.75137 9.00412 3.26563 9.00412C3.7799 9.00412 4.1968 9.42102 4.1968 9.93528C4.1968 10.3073 4.34459 10.6641 4.60767 10.9272C4.87075 11.1903 5.22756 11.3381 5.5996 11.3381H6.96485C6.97769 11.3376 6.9906 11.3373 7.00357 11.3373C7.01654 11.3373 7.02945 11.3376 7.0423 11.3381H8.40036C8.77241 11.3381 9.12922 11.1903 9.3923 10.9272C9.65537 10.6641 9.80317 10.3073 9.80317 9.93528C9.80317 9.56324 9.65537 9.20643 9.3923 8.94335C9.12922 8.68027 8.77241 8.53248 8.40036 8.53248H5.833C4.96703 8.53248 4.13653 8.18848 3.5242 7.57615C2.91187 6.96382 2.56787 6.13332 2.56787 5.26735C2.56787 4.40138 2.91187 3.57089 3.5242 2.95856C4.13653 2.34622 4.96703 2.00222 5.833 2.00222H6.07241V1.53117C6.07241 1.0169 6.48931 0.600006 7.00357 0.600006Z"
                />
                </svg>
                {/* Текст */}
                <p className="group-hover:text-[#CB3CFF]">My Tokens</p>
            </div>
            {/* Стрелка */}
            <span className="group-hover:text-[#CB3CFF] text-2xl">›</span>
        </div>
        </div>

        {/* Marketplace */}
        <div className="group flex items-center justify-between hover:text-[#CB3CFF]  h-[40px]">
                        <div className="flex items-center space-x-2">
                            {/* SVG Иконка */}
                            <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current text-[#AEB9E1] group text-[#CB3CFF]"
                                >
                                <path d="M11.6067 11.4919L10.0232 3.59132C10.0012 3.38778 9.90406 3.19961 9.75055 3.06326C9.59704 2.9269 9.39811 2.85206 9.19229 2.85323H8.27773C8.17712 2.27373 7.87392 1.74819 7.42164 1.36938C6.96936 0.990573 6.39709 0.782837 5.8058 0.782837C5.21452 0.782837 4.64224 0.990573 4.18996 1.36938C3.73769 1.74819 3.43449 2.27373 3.33387 2.85323H2.41931C2.2135 2.85206 2.01457 2.9269 1.86105 3.06326C1.70754 3.19961 1.61037 3.38778 1.58837 3.59132L0.00487428 11.4919C-0.00778301 11.6087 0.00427698 11.7269 0.0402788 11.8388C0.0762807 11.9507 0.135428 12.0538 0.213917 12.1416C0.292144 12.2286 0.388008 12.2982 0.495199 12.3456C0.60239 12.3931 0.718477 12.4175 0.835818 12.4171H10.7758C10.8931 12.4175 11.0092 12.3931 11.1164 12.3456C11.2236 12.2982 11.3195 12.2286 11.3977 12.1416C11.4762 12.0538 11.5353 11.9507 11.5713 11.8388C11.6073 11.7269 11.6194 11.6087 11.6067 11.4919ZM5.8058 1.60577C6.17647 1.60647 6.53646 1.72925 6.82956 1.95494C7.12266 2.18062 7.33235 2.4965 7.42588 2.85323H4.18572C4.27925 2.4965 4.48895 2.18062 4.78204 1.95494C5.07514 1.72925 5.43513 1.60647 5.8058 1.60577Z" />
                            </svg>
            
                            {/* Текст */}
                            <p className="group text-[#CB3CFF]">Marketplace</p>
                        </div>
                        {/* Стрелка */}
                        <span className="group text-[#CB3CFF] text-2xl">›</span>
                    </div>
                    
                    {/* Submenu */}
                    <div className="ml-6 mt-2 space-y-2 fonts-mono">
                            <a
                                
                                className="block text-sm text-white relative 2xl:w-[225px] xl40:w-[200px] h-[40px] bg-[#081028] border border-[#081028] rounded-md">
                                <span
                                className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#CB3CFF] rounded-md"
                                ></span>
                                <span className="pl-4 flex items-center h-full">Explore</span>
                            </a>
                            
                            {/* Остальные элементы без линии */}
                            <a
                                
                                className="block text-sm text-[#AEB9E1] hover:text-white w-[225px] h-[40px]">
                                <span className="pl-4 flex items-center h-full">Auctions</span>
                            </a>
                            <a
                                
                                className="block text-sm text-[#AEB9E1] hover:text-white w-[225px] h-[40px]">
                                <span className="pl-4 flex items-center h-full">Top Sellers</span>
                            </a>
                            <a
                                
                                className="block text-sm text-[#AEB9E1] hover:text-white w-[225px] h-[40px]">
                                <span className="pl-4 flex items-center h-full">Categories</span>
                            </a>
                            <a
                                
                                className="block text-sm text-[#AEB9E1] hover:text-white w-[225px] h-[40px]">
                                <span className="pl-4 flex items-center h-full">Search</span>
                            </a>
                    </div>

        {/* My Collection */}
        <div className="group flex items-center justify-between hover:text-[#CB3CFF]  h-[40px]">
            <div className="flex items-center space-x-2">
                {/* SVG Иконка */}
                <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-[#AEB9E1] group-hover:text-[#CB3CFF]"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00357 0.600006C7.51784 0.600006 7.93473 1.0169 7.93473 1.53117V2.00222C8.36312 2.00237 8.7873 2.08682 9.18308 2.25076C9.57923 2.41485 9.93917 2.65536 10.2424 2.95856C10.5456 3.26175 10.7861 3.6217 10.9502 4.01784C11.1142 4.41398 11.1987 4.83857 11.1987 5.26735C11.1987 5.78162 10.7818 6.19851 10.2675 6.19851C9.75327 6.19851 9.33637 5.78162 9.33638 5.26735C9.33638 5.08313 9.30009 4.90072 9.22959 4.73052C9.1591 4.56032 9.05577 4.40568 8.9255 4.27542C8.79524 4.14515 8.6406 4.04182 8.4704 3.97133C8.3002 3.90083 8.11779 3.86455 7.93357 3.86455H5.833C5.46095 3.86455 5.10414 4.01234 4.84107 4.27542C4.57799 4.53849 4.43019 4.8953 4.43019 5.26735C4.43019 5.6394 4.57799 5.99621 4.84107 6.25928C5.10414 6.52236 5.46095 6.67016 5.833 6.67016H8.40036C9.26633 6.67016 10.0968 7.01416 10.7092 7.62649C11.3215 8.23882 11.6655 9.06932 11.6655 9.93528C11.6655 10.8013 11.3215 11.6317 10.7092 12.2441C10.0968 12.8564 9.26633 13.2004 8.40036 13.2004H7.93473V13.6688C7.93473 14.1831 7.51784 14.6 7.00357 14.6C6.48931 14.6 6.07241 14.1831 6.07241 13.6688V13.2004H5.5996C4.73364 13.2004 3.90314 12.8564 3.29081 12.2441C2.67848 11.6317 2.33447 10.8013 2.33447 9.93528C2.33447 9.42102 2.75137 9.00412 3.26563 9.00412C3.7799 9.00412 4.1968 9.42102 4.1968 9.93528C4.1968 10.3073 4.34459 10.6641 4.60767 10.9272C4.87075 11.1903 5.22756 11.3381 5.5996 11.3381H6.96485C6.97769 11.3376 6.9906 11.3373 7.00357 11.3373C7.01654 11.3373 7.02945 11.3376 7.0423 11.3381H8.40036C8.77241 11.3381 9.12922 11.1903 9.3923 10.9272C9.65537 10.6641 9.80317 10.3073 9.80317 9.93528C9.80317 9.56324 9.65537 9.20643 9.3923 8.94335C9.12922 8.68027 8.77241 8.53248 8.40036 8.53248H5.833C4.96703 8.53248 4.13653 8.18848 3.5242 7.57615C2.91187 6.96382 2.56787 6.13332 2.56787 5.26735C2.56787 4.40138 2.91187 3.57089 3.5242 2.95856C4.13653 2.34622 4.96703 2.00222 5.833 2.00222H6.07241V1.53117C6.07241 1.0169 6.48931 0.600006 7.00357 0.600006Z"
                />
                </svg>
                {/* Текст */}
                <p className="group-hover:text-[#CB3CFF]">My Collection</p>
            </div>
            {/* Стрелка */}
            <span className="group-hover:text-[#CB3CFF] text-2xl">›</span>
        </div>

        {/* Community */}
        <div className="group flex items-center justify-between hover:text-[#CB3CFF]  h-[40px]">
            <div className="flex items-center space-x-2">
                {/* SVG Иконка */}
                <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-[#AEB9E1] group-hover:text-[#CB3CFF]"
                    >
                    <path d="M13.5918 2.56226C13.3185 2.02757 12.9233 1.5646 12.4382 1.21068C11.9531 0.856756 11.3916 0.621788 10.7989 0.524722C10.2063 0.427656 9.5992 0.471209 9.02651 0.651868C8.45382 0.832528 7.9316 1.14524 7.50196 1.56478L7.0003 2.01977L6.51614 1.57645C6.08616 1.15026 5.56078 0.832705 4.98356 0.650105C4.40634 0.467505 3.79391 0.425122 3.19704 0.526468C2.60353 0.61861 2.0407 0.851503 1.55562 1.20568C1.07053 1.55985 0.677287 2.02501 0.408763 2.56226C0.0474406 3.26817 -0.0789514 4.07103 0.0480133 4.85381C0.174978 5.63658 0.548661 6.35834 1.11458 6.91384L6.58031 12.5487C6.63472 12.6052 6.69996 12.6501 6.77212 12.6808C6.84428 12.7114 6.92189 12.7272 7.0003 12.7272C7.07871 12.7272 7.15631 12.7114 7.22848 12.6808C7.30064 12.6501 7.36588 12.6052 7.42029 12.5487L12.8802 6.92551C13.448 6.36883 13.8233 5.64538 13.9513 4.86055C14.0793 4.07572 13.9534 3.27052 13.5918 2.56226Z" />
                </svg>

                {/* Текст */}
                <p className="group-hover:text-[#CB3CFF]">Community</p>
            </div>
            {/* Стрелка */}
            <span className="group-hover:text-[#CB3CFF] text-2xl">›</span>
        </div>

        {/* FAQ */}
        <div className="group flex items-center justify-between hover:text-[#CB3CFF]  h-[40px]">
            <div className="flex items-center space-x-2">
                {/* SVG Иконка */}
                <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-[#AEB9E1] group-hover:text-[#CB3CFF]"
                    >
                    <path d="M6 0.599976C4.40968 0.603147 2.88539 1.23631 1.76086 2.36084C0.63633 3.48537 0.00317115 5.00965 0 6.59998V11.658C0 11.9078 0.0992461 12.1474 0.275905 12.3241C0.452565 12.5007 0.692166 12.6 0.942 12.6H6C7.5913 12.6 9.11742 11.9678 10.2426 10.8426C11.3679 9.7174 12 8.19127 12 6.59998C12 5.00868 11.3679 3.48255 10.2426 2.35733C9.11742 1.23212 7.5913 0.599976 6 0.599976Z" />
                </svg>
                {/* Текст */}
                <p className="group-hover:text-[#CB3CFF]">FAQ</p>
            </div>
            {/* Стрелка */}
            <span className="group-hover:text-[#CB3CFF] text-2xl">›</span>
        </div>
        <div className="border-t border-[#1A233A] mb-12">
      <div className="group flex items-center justify-between hover:text-[#CB3CFF]  h-[40px] xl40:mt-8">
            <div className="flex items-center space-x-2">
                {/* SVG Иконка */}
                <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-[#AEB9E1] group-hover:text-[#CB3CFF]"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.25557 0.199951C4.97943 0.199951 4.75557 0.423809 4.75557 0.699951V3.31543L2.49251 2.00859C2.25338 1.87049 1.94761 1.95242 1.80956 2.19158L0.0674076 5.20972C-0.0706419 5.44887 0.011303 5.7547 0.250437 5.89279L2.51349 7.19964L0.250328 8.50655C0.011194 8.64464 -0.0707512 8.95047 0.0672983 9.18963L1.80945 12.2078C1.9475 12.4469 2.25327 12.5288 2.49241 12.3908L4.75557 11.0838V13.7C4.75557 13.9761 4.97942 14.2 5.25557 14.2H8.73972C9.01587 14.2 9.23972 13.9761 9.23972 13.7V11.0838L11.5063 12.3927C11.7454 12.5308 12.0512 12.4489 12.1892 12.2097L13.9314 9.19158C14.0694 8.95242 13.9875 8.6466 13.7484 8.50851L11.4818 7.19964L13.7482 5.89084C13.9874 5.75274 14.0693 5.44692 13.9313 5.20776L12.1891 2.18963C12.0511 1.95047 11.7453 1.86854 11.5062 2.00663L9.23972 3.31544V0.699951C9.23972 0.423809 9.01587 0.199951 8.73972 0.199951H5.25557ZM6.99907 9.07251C8.03318 9.07251 8.87149 8.23403 8.87149 7.19971C8.87149 6.16539 8.03318 5.3269 6.99907 5.3269C5.96497 5.3269 5.12666 6.16539 5.12666 7.19971C5.12666 8.23403 5.96497 9.07251 6.99907 9.07251Z"
                    />
                </svg>

                {/* Текст */}
                <p className="group-hover:text-[#CB3CFF]">Settings</p>
            </div>
            {/* Стрелка */}
            <span className="group-hover:text-[#CB3CFF] text-2xl">›</span>
        </div>
      </div>
      </nav>
      {/* Settings */}
    </aside>
    </div>
  );
};

export default Sidebar;
