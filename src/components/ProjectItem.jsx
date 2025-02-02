import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const ProjectItem = ({ avatars, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="emblas">
      <div className="emblas__viewport " ref={emblaRef}>
        <div className="emblas__container">
          {avatars.map((src, index) => (
            <div className="emblas__slide" key={index}>
              <img src={src} alt={`Avatar ${index}`} className="emblas__slide__image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;