import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import comment from '../assets/desktop/comment.svg'
import c1 from '../assets/desktop/c1.svg'
import c2 from '../assets/desktop/c2.svg'
import c3 from '../assets/desktop/c3.svg'
import c4 from '../assets/desktop/c4.svg'
import c5 from '../assets/desktop/c5.svg'

const testimonials = [

    {
      image: c1,
      name: "Ethan Reynolds",
      position: "Head of Marketing · PrimePath Systems",
      text: "We had a tight deadline for a 3D project, and they delivered ahead of schedule. The quality of their work added a whole new level of professionalism to our presentation"
    },
    {
      image: c2,
      name: "James Patel",
      position: "Digital Product Lead · Arcadia Insights",
      text: "They completely transformed our customer portal into an intuitive and beautiful platform. The team’s creativity and ability to deliver under tight deadlines were remarkable."
    },
    {
      image: c3,
      name: "Emily Novak",
      position: "Project Manager · Lumio Group",
      text: "Our project required a mix of branding, UX design, and app development. They handled every aspect with precision, delivering a cohesive digital experience that’s now central to our business"
    },
    {
      image: c4,
      name: "Hiroshi Tanaka",
      position: "Lead Designer · Kaito Innovations",
      text: "The team delivered a visually stunning and highly functional website for our brand. Their expertise in UX/UI design made navigation effortless, and our customers love the new look!"
    },
    {
      image: c5,
      name: "Daniel Hughes",
      position: "Marketing Director · Visionary Solutions",
      text: "From concept to execution, they exceeded our expectations. Their innovative approach and attention to detail made our digital campaign a huge success, attracting more clients than we anticipated"
    },
  ];

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteraction, setIsUserInteraction] = useState(false);

  useEffect(() => {
    if (isUserInteraction) return; // Если пользователь выбрал вручную, не меняем автоматически

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000); // 15 секунд на каждого

    return () => clearInterval(interval);
  }, [isUserInteraction, testimonials.length]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setIsUserInteraction(true); // Останавливаем авто-прокрутку после выбора
    setTimeout(() => setIsUserInteraction(false), 30000); // Возобновляем через 30 сек
  };
  return (
    <section className="font-ppneue w-full bg-[#EAF8FF] h-[720px] mt-[180px]">
         <div className="font-ppneue flex flex-col w-[85%] items-center mt-20 mx-auto">
            <div className="flex flex-col max-w-[1200px] w-full justify-between">
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='font-medium text-[84px] leading-[92px]'>
                        <p className='text-[#090C21]'><span className='text-[#1261FC]'>Ronin</span> – a digital<br/>
                        agency that delivers</p>
                    </div>
                    <div>
                        <img src={comment} alt="comment"className="w-[340px] h-auto ml-24" />
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-12 items-start">
      {/* Аватарки */}
      <div className="flex gap-6 relative">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center cursor-pointer"
            animate={index === currentIndex ? { scale: 1.2 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => handleSelect(index)} // Позволяет выбрать отзыв по клику
          >
            {index === currentIndex && (
              <svg
                className="absolute"
                width="110"
                height="110"
                viewBox="0 0 110 110"
              >
                <circle
                  cx="55"
                  cy="55"
                  r="48"
                  stroke="#1261FC"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="301.6"
                  strokeDashoffset="301.6"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="301.6"
                    to="0"
                    dur="15s"
                    repeatCount="1"
                  />
                </circle>
              </svg>
            )}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`${index === currentIndex ? "w-[100px] h-[100px]" : "w-[68px] h-[68px] brightness-120"}`}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Текст */}
      <div className="w-1/2 font-ppneue">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-[475px] font-ppneue"
          >
            <p className="text-[24px] leading-[38px] font-book text-[#090C21] mb-12">
              {testimonials[currentIndex].text}
            </p>
            <h3 className="text-[38px] leading-[44px] font-medium text-[#090C21]">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-[24px] font-book text-[#090C21]">
              {testimonials[currentIndex].position}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
            </div>
        </div>
    </section>
  )
}

export default Comments
