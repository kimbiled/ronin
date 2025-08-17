import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import arrowup from '../assets/mobile/arrow-up.png'
import arrowdown from '../assets/mobile/arrow-down2.png'
const faqData = [
  {
    question: "What are your core services as a UX and brand design team?",
    answer: (
      <>
        We started as <span className="text-[#B6E4FF] font-book">a small team from Central Asia</span>, driven by a passion for crafting exceptional user experiences. Initially, our focus was on 
        UX design for mobile apps and SaaS platforms, but as our clients’ needs evolved, we expanded into a full-service digital studio.
        <br /><br />
        Today, we design and develop everything from marketing websites to enterprise software, mobile apps, and brand systems. 
        <span className="text-[#B6E4FF] font-book">Along the way, we’ve added capabilities like motion design, animation, 3D/illustration</span>, and SEO-integrated web development.
        <br /><br />
        <span className="text-[#B6E4FF] font-book"> From crafting intuitive interfaces to producing stunning visuals</span>, we bring every digital product to life — grounded in strategy, creativity, and real results.
      </>
    ),
  },
  {
    question: "How much do you charge for a design project?",
    answer: (
      <>
        We prioritize <span className="text-[#B6E4FF] font-book">flexibility</span> to accommodate our partners' budgets. Our services are offered at a <span className="text-[#B6E4FF] font-book">blended rate</span>, 
        and we collaborate with clients to tailor support based on their financial needs.
        <br /><br />
        <span className="text-[#B6E4FF] font-book">We work under three engagement models: time & materials, fixed fee, and retainer.</span>
        After discovery sessions and project briefings, we recommend the most suitable model and provide a customized proposal with a timeline and cost estimate.
        <br /><br />
        Our goal is to deliver solutions that align with each partner’s specific needs and budget, ensuring the best possible outcome for their projects.
      </>
    )
  },
  {
    question: "What sets Ronin apart from other design agencies?",
    answer: (
      <>
        <span className="text-[#B6E4FF] font-book">
          We’re not an agency — we’re your embedded design department.
        </span>{' '}
        We work inside your business or startup, building long‑term partnerships
        based on trust, transparency, and shared growth. Your goals become ours,
        and every decision we make is driven by your success.
        <br />
        <br />
        <span className="text-[#B6E4FF] font-book">
          When you work with us, you collaborate directly with a dedicated team
          invested in your product.
        </span>
        <br />
        <br />
        We combine the agility of a startup with the structure of an enterprise
        team, uniting branding and product expertise under one roof.{' '}
        <span className="text-[#B6E4FF] font-book">
          This allows us to deliver cohesive solutions that not only look great
          but also work seamlessly for your users.
        </span>
      </>
    ),
  },
  {
    question: "Are you open to working with startups?",
    answer: (
      <>
        We work with clients of all sizes, from startups to enterprise-level organizations.
        <br /><br />
        Our expertise lies in helping startups transform their ideas into reality 
        through innovative design and technology. 
        We also specialize in scaling products and marketing efforts to reach new markets and audiences.
        <br /><br />
        For example,<span className="text-[#B6E4FF] font-book"> we designed the game HashCats, which has over 900,000 users, </span> 
        and the <span className="text-[#B6E4FF] font-book">Web3 platform Orbital7,</span> now exceeding <span className="text-[#B6E4FF] font-book">100,000 users. </span>
        These projects demonstrate our ability to create engaging, scalable products that drive growth.
        <br /><br />
        We frequently help SaaS startups prepare for enterprise clients by revamping their brand, product, and marketing site. 
        Whether you're launching a new idea or entering new markets, we offer tailored solutions to meet your goals.
        <br /><br />
        If you'd like to discuss your project, reach out to us at <a href="mailto:hi@ronindsgn.com" className="text-[#FFA800] font-book">hi@ronindsgn.com</a>. 
        <span className="text-[#B6E4FF] font-book"> Let’s bring your vision to life.</span>
      </>
    ),
  },
  {
    question: "Do you work with clients in different time zones?",
    answer: (
      <>
        We have extensive experience collaborating with clients across the globe, including the 
        <span className="text-[#B6E4FF] font-book"> USA, Europe, Australia, Singapore, Qatar, the UAE, and Indonesia</span>.
        Our team is well-versed in managing projects across time zones, ensuring 
         smooth communication and timely delivery.
        <br /><br />
        <span className="text-[#B6E4FF] font-book">Over the past 6 years</span>, we’ve worked with clients from diverse regions, perfecting a 
         remote-first approach that adapts to various time zones and cultural contexts.
        Whether it’s scheduling meetings or coordinating project milestones, 
        we prioritize efficient communication and seamless collaboration.
        <br /><br />
        <span className="text-[#B6E4FF] font-book">This global experience </span>has not only enhanced our understanding of international markets
        but also enabled us to deliver solutions tailored to our clients’ unique needs, wherever they are.
      </>
    ),
  },
  {
    question: "Can you assist us in redesigning our B2B/enterprise software?",
    answer: (
      <>
        We are one of the few agencies specializing in enterprise<span className="text-[#B6E4FF] font-book"> UX design and the 
        digital transformation</span> of legacy business software.
        With years of experience, we have refined our process to revitalize B2B platforms, delivering 
         scalable and user-centric solutions.
        <br /><br />
        Using an ultra-collaborative process and a design thinking approach, 
        we create consumer-grade experiences for business users.
        <span className="text-[#B6E4FF] font-book"> Our focus on scalability</span> and longevity ensures continuity by equipping in-house teams with 
        robust design systems, enabling seamless evolution and growth.
        <br /><br />
        We often operate as an independent unit within the organizational structure, bringing 
         agility and fresh perspectives to navigate complex hierarchies efficiently.
       
        <span className="text-[#B6E4FF] font-book"> This approach allows us to deliver innovative solutions tailored to the needs of enterprise clients.</span>
      </>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-ppneue flex flex-col w-full max-w-md text-white">
    <h2 className="text-[40px] font-medium mb-6">FAQ</h2>
    <div className="flex flex-col divide-y divide-white divide-opacity-10">
      {faqData.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left text-[20px] font-medium"
          >
            {item.question}
            {openIndex === index ? (
              <img src={arrowup} className="w-6 h-6" alt="arrowUp" />
            ) : (
              <img src={arrowdown} className="w-6 h-6" alt="arrowDown" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-gray-300 mt-2 leading-relaxed whitespace-pre-line font-book overflow-hidden"
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </div>
  );
}