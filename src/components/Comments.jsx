import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "They completely transformed our customer portal into an intuitive and beautiful platform. The team’s creativity and ability to deliver under tight deadlines were remarkable",
    name: "James Patel",
    title: "Digital Product Lead, Arcadia Insights",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "Their work exceeded our expectations! We saw a significant improvement in user engagement and satisfaction.",
    name: "Sarah Johnson",
    title: "CEO, TechFlow",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    text: "The best experience we’ve had working with a design and development team. Highly recommended!",
    name: "Michael Smith",
    title: "Founder, Startup XYZ",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center mt-12 mb-12">
      {/* Slider */}
      <div className="flex w-full max-w-lg overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-full p-6 bg-blue-100 rounded-2xl shadow-lg">
              <p className="text-lg font-medium">{t.text}</p>
              <div className="flex items-center mt-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex mt-4 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${current === i ? "bg-blue-500 w-6" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
