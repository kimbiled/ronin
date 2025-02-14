import useEmblaCarousel from "embla-carousel-react";
import tick from '../assets/mobile/Icon.png'
import star from '../assets/mobile/stared.png'

const ProjectItem = ({ item }) => {
  const [emblaRef] = useEmblaCarousel();

  const footerIcon = item.profile.stared
    ? star
    : item.profile.verified
    ? tick
    : null;

  const backgroundColor = item.id === 2 ? "bg-[#F7F7F6] bg-opacity-80 text-black" : "bg-black bg-opacity-80 text-white";

  return (
    <section className="emblas">
      <div className="emblas__viewport" ref={emblaRef}>
        <div className="emblas__container">
          {item.avatars.map((src, index) => (
            <div className="emblas__slide" key={index}>
              <div className="relative">
                <img src={src} alt={`Avatar ${index}`} className="emblas__slide__image" />

                {/* followers показывается только на активном слайде */}
                {index === 0 && item.profile.followers && (
  <div className={`font-book absolute sm25:bottom-3 sm25:right-3 sm75:bottom-2 sm75:right-2 ${backgroundColor} 
      pt-[4px] pb-[4px]  pr-[18px] pl-[4px] rounded-[100px] flex items-center text-sm w-[155px] h-8 
      ${item.profile.stared ? "w-[135px] bg-opacity-60 font-medium items-center text-center justify-evenly" : ""}`}>
    
    {footerIcon && <img src={footerIcon} className="w-6 h-6 mr-2" alt="icon" />}
    
    {item.profile.followers}
  </div>
)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;