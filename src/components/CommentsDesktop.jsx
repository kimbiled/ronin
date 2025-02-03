import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import comment from '../assets/desktop/comment.svg'
import c1 from '../assets/desktop/c1.svg'
import c3 from '../assets/desktop/c3.svg'
import c4 from '../assets/desktop/c4.svg'
import c5 from '../assets/desktop/c5.svg'

const testimonials = [
    {
      image: c1,
      name: "James Patel",
      position: "Digital Product Lead · Arcadia Insights",
      text: "They completely transformed our customer portal into an intuitive and beautiful platform. The team’s creativity and ability to deliver under tight deadlines were remarkable."
    },
    {
      image: c3,
      name: "Sophia Lee",
      position: "Head of UX · Nexus Solutions",
      text: "The experience was seamless, and their ability to execute complex design projects was impressive. Our product now stands out in the market."
    },
    {
      image: c4,
      name: "Michael Chen",
      position: "CEO · Orion Technologies",
      text: "Their innovative approach to UX/UI design has been a game-changer for our platform. We highly recommend them to any company looking for top-tier design."
    },
    {
      image: c5,
      name: "Anna Roberts",
      position: "Product Manager · Lunar AI",
      text: "They not only delivered a beautiful product but also improved our conversion rates significantly. Truly a team of experts."
    },
    {
      image: c5,
      name: "Anna Roberts",
      position: "Product Manager · Lunar AI",
      text: "They not only delivered a beautiful product but also improved our conversion rates significantly. Truly a team of experts."
    }
  ];

const Comments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000); // 15 секунд на каждого

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="font-ppneue w-full bg-[#EAF8FF] h-[720px] mt-[180px]">
         <div className="font-ppneue flex flex-col w-[85%] items-center mt-20 mx-auto">
            <div className="mt-[55px] flex flex-col max-w-[1200px] w-full justify-between">
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='font-medium text-[84px] leading-[92px]'>
                        <p className='text-[#090C21]'><span className='text-[#1261FC]'>Ronin</span> – a digital<br/>
                        agency that delivers</p>
                    </div>
                    <div>
                        <img src={comment} alt="comment" />
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-12">
      {/* Аватарки */}
      <div className="flex gap-6 relative">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center"
            animate={index === currentIndex ? { scale: 1.2 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
                  strokeDasharray="301.6" // 2 * π * r
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
              className={`rounded-full object-cover border-2 border-transparent ${index === currentIndex ? "w-[100px] h-[100px]" : "w-[68px] h-[68px]"}`}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Текст */}
      <div className="w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-[475px]"
          >
            <p className="text-[24px] leading-[38px] font-book text-[#090C21] mb-12">{testimonials[currentIndex].text}</p>
            <h3 className="text-[38px] leading-[44px] font-medium text-[#090C21]">{testimonials[currentIndex].name}</h3>
            <p className="text-[24px] font-book text-[#090C21]">{testimonials[currentIndex].position}</p>
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
