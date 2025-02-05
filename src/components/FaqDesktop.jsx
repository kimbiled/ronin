import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqData = [
  {
    question: "What are your core services as a UX and brand design studio?",
    answer: `We started as a small team from Central Asia, driven by a passion for crafting exceptional user experiences. Initially, our focus was on UX design for mobile apps and SaaS platforms, but as our clients’ needs evolved, we expanded into a full-service digital studio.

Today, we design and develop everything from marketing websites to enterprise software, mobile apps, and brand systems. Along the way, we’ve added capabilities like motion design, animation, 3D/illustration, and SEO-integrated web development.

From crafting intuitive interfaces to producing stunning visuals, we bring every digital product to life — grounded in strategy, driven by creativity, and built to deliver real results for our clients.`,
  },
  {
    question: "How much do you charge for a design project?",
    answer: "We prioritize flexibility to accommodate our partners' budgets. Our services are offered at a blended rate, and we collaborate with clients to tailor support based on their financial needs. We work under three engagement models: time & materials, fixed fee, and retainer. After discovery sessions and project briefings, we recommend the most suitable model and provide a customized proposal with a timeline and cost estimate. Our goal is to deliver solutions that align with each partner’s specific needs and budget, ensuring the best possible outcome for their projects.",
  },
  {
    question: "What sets Ronin apart from other design agencies?",
    answer: "In a competitive market of top-tier UX and branding agencies, we stand out by prioritizing partnerships built on trust and mutual growth. Your success is our success, and we go beyond delivering exceptional design to ensure long-term impact. When you work with us, you collaborate directly with a dedicated team deeply invested in your goals. Our cofounders oversee every project, while a design director ensures top-quality work through detailed reviews and hands-on involvement. We emphasize clear communication and transparency, combining the agility of startup experience with the structured management of enterprise projects. Unlike traditional agencies, we unite branding and product expertise under one roof, delivering seamless solutions that align with your brand and provide exceptional user experiences. Our designs are built to scale with your business, offering lasting value. Many of our projects remain effective for years, demonstrating our commitment to creating future-proof products that grow with you.",
  },
  {
    question: "Are you open to working with startups?",
    answer: "We work with clients of all sizes, from startups to enterprise-level organizations. Our expertise lies in helping startups transform their ideas into reality through innovative design and technology. We also specialize in scaling products and marketing efforts to reach new markets and audiences. For example, we designed the game HashCats, which has over 900,000 users, and the Web3 platform Orbital7, now exceeding 100,000 users. These projects demonstrate our ability to create engaging, scalable products that drive growth. We frequently help SaaS startups prepare for enterprise clients by revamping their brand, product, and marketing site. Whether you're launching a new idea or entering new markets, we offer tailored solutions to meet your goals. If you'd like to discuss your project, reach out to us at hi@ronindsgn.com. Let’s bring your vision to life.",
  },
  {
    question: "Do you work with clients in different time zones?",
    answer: "We have extensive experience collaborating with clients across the globe, including the USA, Europe, Australia, Singapore, Qatar, the UAE, and Indonesia. Our team is well-versed in managing projects across time zones, ensuring smooth communication and timely delivery. Over the past 6 years, we’ve worked with clients from diverse regions, perfecting a remote-first approach that adapts to various time zones and cultural contexts. Whether it’s scheduling meetings or coordinating project milestones, we prioritize efficient communication and seamless collaboration. This global experience has not only enhanced our understanding of international markets but also enabled us to deliver solutions tailored to our clients’ unique needs, wherever they are.",
  },
  {
    question: "Can you assist us in redesigning our B2B/enterprise software?",
    answer: "We are one of the few agencies specializing in enterprise UX design and the digital transformation of legacy business software. With years of experience, we have refined our process to revitalize B2B platforms, delivering scalable and user-centric solutions. Using an ultra-collaborative process and a design thinking approach, we create consumer-grade experiences for business users. Our focus on scalability and longevity ensures continuity by equipping in-house teams with robust design systems, enabling seamless evolution and growth. We often operate as an independent unit within the organizational structure, bringing agility and fresh perspectives to navigate complex hierarchies efficiently. This approach allows us to deliver innovative solutions tailored to the needs of enterprise clients.",
  },
];

export default function FAQDesktop() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-ppneue flex flex-col w-full max-w-[1200px] text-white gap-12 mt-[80px] mb-40">
      <h2 className="text-[84px] font-medium">FAQ</h2>
      <div className="flex flex-col divide-y divide-white divide-opacity-10">
  {faqData.map((item, index) => (
    <div key={index} className="py-4">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex justify-between items-center text-left text-[28px] font-medium pb-12 pt-12"
      >
        {item.question}
        {openIndex === index ? (
          <img src="./images/icons/arrow-up.png" className="w-8 h-7" alt="arrowUp" />
        ) : (
          <img src="./images/icons/arrow-down2.png" className="w-8 h-7" alt="arrowDown" />
        )}
      </button>
      <AnimatePresence>
        {openIndex === index && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-[#FFFFFF] mt-2 leading-[34px] whitespace-pre-line font-book overflow-hidden w-[743px]"
          >
            {item.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>
    </div>
  );
}