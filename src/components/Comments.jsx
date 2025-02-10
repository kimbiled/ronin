import React from 'react'
import { CommentsDot, useDotButton } from './CommentsDot'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import dots from '../assets/icons/dot.svg'
const Comments = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)


  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="font-ppneue embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {slides.map((testimonial, index) => (
  <div className="embla__slide" key={index}>
    <div className="embla__slide__number">
      <div className="relative w-full flex flex-col items-center mt-12 mb-12 overflow-hidden">
        <div className="relative">
          <motion.div className="flex">
            <motion.div className=" rounded-[18px] p-6">
              <img src={dots} alt="caps" className='mb-[18px]'/>
              <p className=" font-book mb-[18px]">{testimonial.text}</p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="rounded-full mr-3 w-[68px] h-[68px]"
                />
                <div>
                  <p className="font-medium text-lg">{testimonial.name}</p>
                  <div className="flex flex-row gap-1 text-[#090C21] text-xs font-book">
                    <p>{testimonial.job}</p>
                    <span>•</span>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
))}
        </div>
      </div>

      <div className="embla__controls">
  <div className="embla__dots">
    {scrollSnaps.map((_, index) => (
      <CommentsDot
        key={index}
        isSelected={index === selectedIndex} // Передаем флаг активности
        onClick={() => onDotButtonClick(index)}
      />
    ))}
  </div>
</div>
    </section>
  )
}

export default Comments
