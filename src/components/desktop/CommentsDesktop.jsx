import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import c1 from '../../assets/desktop/c1.svg';
import c2 from '../../assets/desktop/c2.svg';
import c3 from '../../assets/desktop/c3.svg';
import c4 from '../../assets/desktop/c4.svg';
import c5 from '../../assets/desktop/c5.svg';
import comment from '../../assets/desktop/comment.svg';

const testimonials = [
  {
    image: c1,
    name: 'Ethan Reynolds',
    position: 'Head of Marketing · PrimePath Systems',
    text: 'We had a tight deadline for a 3D project, and they delivered ahead of schedule. The quality of their work added a whole new level of professionalism to our presentation',
  },
  {
    image: c2,
    name: 'James Patel',
    position: 'Digital Product Lead · Arcadia Insights',
    text: 'They completely transformed our customer portal into an intuitive and beautiful platform. The team’s creativity and ability to deliver under tight deadlines were remarkable',
  },
  {
    image: c3,
    name: 'Emily Novak',
    position: 'Project Manager · Lumio Group',
    text: 'Our project required a mix of branding, UX design, and app development. They handled every aspect with precision, delivering a cohesive digital experience that’s now central to our business',
  },
  {
    image: c4,
    name: 'Hiroshi Tanaka',
    position: 'Lead Designer · Kaito Innovations',
    text: 'The team delivered a visually stunning and highly functional website for our brand. Their expertise in UX/UI design made navigation effortless, and our customers love the new look!',
  },
  {
    image: c5,
    name: 'Daniel Hughes',
    position: 'Marketing Director · Visionary Solutions',
    text: 'From concept to execution, they exceeded our expectations. Their innovative approach and attention to detail made our digital campaign a huge success, attracting more clients than we anticipated',
  },
];

export default function CommentsDesktop() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isUserInteraction, setIsUserInteraction] = useState(false);

  useEffect(() => {
    if (isUserInteraction) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isUserInteraction]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setIsUserInteraction(true);
    setTimeout(() => setIsUserInteraction(false), 30000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="mt-[180px] flex h-[520px] w-full items-center bg-[#EAF8FF] font-ppneue">
      <div className="mx-auto grid w-[85%] max-w-[1200px] grid-cols-[0.94fr_1fr] items-center gap-[92px]">
        <h2 className="text-[84px] font-medium leading-[82px] text-[#080B1F]">
          <span className="text-[#1261FC]">Trusted</span> by
          <br />
          product teams
        </h2>

        <div className="flex flex-col">
          <img
            src={comment}
            alt=""
            className="mb-5 h-[48px] w-[69px] object-contain"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <p className="max-w-[620px] text-[24px] font-book leading-[36px] text-[#242938]">
                {currentTestimonial.text}
              </p>
              <h3 className="mt-8 text-[38px] font-medium leading-[44px] text-[#080B1F]">
                {currentTestimonial.name}
              </h3>
              <p className="mt-3 text-[24px] font-book leading-[30px] text-[#7588A5]">
                {currentTestimonial.position}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center gap-4">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  className={`relative flex shrink-0 items-center justify-center rounded-full transition duration-300 ${
                    isActive ? 'h-[72px] w-[72px]' : 'h-[49px] w-[49px]'
                  }`}
                  onClick={() => handleSelect(index)}
                >
                  <img
                    src={testimonial.image}
                    alt=""
                    className={`h-full w-full rounded-full object-cover transition duration-300 ${
                      isActive
                        ? 'ring-[4px] ring-[#1261FC]'
                        : 'brightness-[70%] hover:brightness-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
