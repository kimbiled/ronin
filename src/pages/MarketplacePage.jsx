import HeaderProfile from "../components/HeaderProfile"
import SidebarMarketplace from "../components/SidebarMarketplace";
import MarketPlace from "../components/MarketPlace";
import React, { useState, useEffect } from "react";
// sm25:hidden sm20:hidden sm75:hidden
const MarketplacePage = () => {
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
            <MarketPlace />
          </div>
        ) : (
          // Версия для десктопа
          <>
            <div>
              <SidebarMarketplace />
            </div>
            <div className="flex flex-col w-full">
              <HeaderProfile />
              <MarketPlace />
            </div>
          </>
        )}
      </div>
    )
}

export default MarketplacePage;