import { useState } from "react";

const faqData = [
  {
    question: "What are your core services as a UX and brand design studio?",
    answer: `We started as a small team from Central Asia, driven by a passion for crafting exceptional user experiences. Initially, our focus was on UX design for mobile apps and SaaS platforms, but as our clients’ needs evolved, we expanded into a full-service digital studio.

Today, we design and develop everything from marketing websites to enterprise software, mobile apps, and brand systems. Along the way, we’ve added capabilities like motion design, animation, 3D/illustration, and SEO-integrated web development.

From crafting intuitive interfaces to producing stunning visuals, we bring every digital product to life — grounded in strategy, driven by creativity, and built to deliver real results for our clients.`,
  },
  {
    question: "How much do you charge for a design project?",
    answer: "Our pricing depends on the complexity and scope of the project. We offer tailored solutions that fit different budgets and requirements.",
  },
  {
    question: "What sets Ronin apart from other design agencies?",
    answer: "Our approach is deeply rooted in strategy, design thinking, and collaboration, ensuring that our solutions are both innovative and effective.",
  },
  {
    question: "Are you open to working with startups?",
    answer: "Absolutely! We love working with startups and helping them bring their ideas to life with a strong brand identity and user-friendly design.",
  },
  {
    question: "Do you work with clients in different time zones?",
    answer: "Yes, we have experience collaborating with clients from around the world and can adjust our working hours accordingly.",
  },
  {
    question: "Can you assist us in redesigning our B2B/enterprise software?",
    answer: "Yes, we specialize in redesigning complex B2B and enterprise software to improve usability and overall user experience.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full max-w-md  text-white">
      <h2 className="text-[40px] font-medium mb-6">FAQ</h2>
      <div className="flex flex-col divide-y divide-white divide-opacity-10">
        {faqData.map((item, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-[20px] font-medium"
            >
              {item.question}
                {openIndex === index ? <img src="./images/icons/arrow-up.png" className="w-6 h-6" alt="arrowUp"/> : <img src="./images/icons/arrow-down2.png" className="w-6 h-6" alt="arrowDown"/>}
            </button>
            {openIndex === index && (
              <p className="text-gray-300 mt-2 leading-relaxed whitespace-pre-line">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}