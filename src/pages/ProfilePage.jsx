import HeaderProfile from "../components/HeaderProfile"
import Sidebar from "../components/Sidebar";
import MyTokens from "../components/MyTokens";
import React, { useState, useEffect } from "react";
// sm25:hidden sm20:hidden sm75:hidden
const ProfilePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 425); // Определяем начальное состояние для мобильных устройств

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 425); // Обновляем состояние при изменении размера окна
      };
  
      window.addEventListener("resize", handleResize); // Слушаем изменения размера окна
      return () => window.removeEventListener("resize", handleResize); // Убираем слушатель при размонтировании
    }, []);
    return(
        <div className="flex flex-row">
        {isMobile ? (
          // Мобильная версия
          <div className="w-full">
            <MyTokens />
          </div>
        ) : (
          // Версия для десктопа
          <>
            <div>
              <Sidebar />
            </div>
            <div className="flex flex-col w-full">
              <HeaderProfile />
              <MyTokens />
            </div>
          </>
        )}
      </div>
    )
}

export default ProfilePage;