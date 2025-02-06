import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqData = [
  {
    question: "What are your core services as a UX and brand design studio?",
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
        We work under <span className="text-[#B6E4FF] font-book">three engagement models</span>: <span className="text-[#B6E4FF] font-book">time & materials, fixed fee, and retainer</span>. 
        After <span className="text-[#B6E4FF] font-book">discovery sessions and project briefings</span>, we recommend the most suitable model and provide a customized proposal with a timeline and cost estimate.
        <br /><br />
        Our goal is to deliver solutions that align with each partner’s <span className="text-[#B6E4FF] font-book">specific needs and budget</span>, ensuring the <span className="text-[#B6E4FF] font-book">best possible outcome</span> for their projects.
      </>
    )
  },
  {
    question: "What sets Ronin apart from other design agencies?",
    answer: (
      <>
        In a competitive market of <span className="text-[#B6E4FF] font-book">top-tier UX and branding agencies</span>, 
        we stand out by prioritizing partnerships built on <span className="text-[#B6E4FF] font-book">trust and mutual growth</span>. 
        Your success is our success, and we go beyond delivering exceptional design to ensure <span className="text-[#B6E4FF] font-book">long-term impact</span>.
        <br /><br />
        When you work with us, you collaborate directly with a <span className="text-[#B6E4FF] font-book">dedicated team</span> deeply invested in your goals. 
        Our <span className="text-[#B6E4FF] font-book">cofounders oversee every project</span>, while a <span className="text-[#B6E4FF] font-book">design director</span> ensures top-quality work through detailed reviews and hands-on involvement.
        <br /><br />
        We emphasize <span className="text-[#B6E4FF] font-book">clear communication</span> and <span className="text-[#B6E4FF] font-book">transparency</span>, 
        combining the <span className="text-[#B6E4FF] font-book">agility of startup experience</span> with the structured management of enterprise projects.
        <br /><br />
        Unlike traditional agencies, we <span className="text-[#B6E4FF] font-book">unite branding and product expertise under one roof</span>, 
        delivering <span className="text-[#B6E4FF] font-book">seamless solutions</span> that align with your brand and provide exceptional user experiences.
        <br /><br />
        Our designs are built to <span className="text-[#B6E4FF] font-book">scale with your business</span>, offering <span className="text-[#B6E4FF] font-book">lasting value</span>. 
        Many of our projects remain effective for years, demonstrating our commitment to creating <span className="text-[#B6E4FF] font-book">future-proof products</span> that grow with you.
      </>
    ),
  },
  {
    question: "Are you open to working with startups?",
    answer: (
      <>
        We work with clients of <span className="text-[#B6E4FF] font-book">all sizes</span>, from startups to enterprise-level organizations.
        <br /><br />
        Our expertise lies in helping startups <span className="text-[#B6E4FF] font-book">transform their ideas into reality</span> 
        through <span className="text-[#B6E4FF] font-book">innovative design</span> and <span className="text-[#B6E4FF] font-book">technology</span>. 
        We also specialize in <span className="text-[#B6E4FF] font-book">scaling products</span> and marketing efforts to reach <span className="text-[#B6E4FF] font-book">new markets</span> and audiences.
        <br /><br />
        For example, we designed the game <span className="text-[#B6E4FF] font-book">HashCats</span>, which has <span className="text-[#B6E4FF] font-book">over 900,000 users</span>, 
        and the Web3 platform <span className="text-[#B6E4FF] font-book">Orbital7</span>, now exceeding <span className="text-[#B6E4FF] font-book">100,000 users</span>. 
        These projects demonstrate our ability to create <span className="text-[#B6E4FF] font-book">engaging, scalable products</span> that drive growth.
        <br /><br />
        We frequently help <span className="text-[#B6E4FF] font-book">SaaS startups</span> prepare for enterprise clients by <span className="text-[#B6E4FF] font-book">revamping their brand, product, and marketing site</span>. 
        Whether you're launching a new idea or entering new markets, we offer <span className="text-[#B6E4FF] font-book">tailored solutions</span> to meet your goals.
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
        <br /><br />
        Our team is well-versed in <span className="text-[#B6E4FF] font-book">managing projects across time zones</span>, ensuring 
        <span className="text-[#B6E4FF] font-book"> smooth communication and timely delivery</span>.
        <br /><br />
        Over the past <span className="text-[#B6E4FF] font-book">6 years</span>, we’ve worked with clients from diverse regions, perfecting a 
        <span className="text-[#B6E4FF] font-book"> remote-first approach</span> that adapts to various time zones and cultural contexts.
        <br /><br />
        Whether it’s <span className="text-[#B6E4FF] font-book">scheduling meetings</span> or coordinating <span className="text-[#B6E4FF] font-book">project milestones</span>, 
        we prioritize <span className="text-[#B6E4FF] font-book">efficient communication</span> and <span className="text-[#B6E4FF] font-book">seamless collaboration</span>.
        <br /><br />
        This global experience has not only enhanced our <span className="text-[#B6E4FF] font-book">understanding of international markets</span> 
        but also enabled us to deliver solutions tailored to our clients’ unique needs, wherever they are.
      </>
    ),
  },
  {
    question: "Can you assist us in redesigning our B2B/enterprise software?",
    answer: (
      <>
        We are one of the few agencies specializing in <span className="text-[#B6E4FF] font-book">enterprise UX design</span> and the 
        <span className="text-[#B6E4FF] font-book"> digital transformation</span> of legacy business software.
        <br /><br />
        With years of experience, we have refined our process to <span className="text-[#B6E4FF] font-book">revitalize B2B platforms</span>, delivering 
        <span className="text-[#B6E4FF] font-book"> scalable and user-centric solutions</span>.
        <br /><br />
        Using an <span className="text-[#B6E4FF] font-book">ultra-collaborative process</span> and a <span className="text-[#B6E4FF] font-book">design thinking approach</span>, 
        we create <span className="text-[#B6E4FF] font-book">consumer-grade experiences</span> for business users.
        <br /><br />
        Our focus on <span className="text-[#B6E4FF] font-book">scalability and longevity</span> ensures continuity by equipping in-house teams with 
        <span className="text-[#B6E4FF] font-book">robust design systems</span>, enabling seamless evolution and growth.
        <br /><br />
        We often operate as an <span className="text-[#B6E4FF] font-book">independent unit</span> within the organizational structure, bringing 
        <span className="text-[#B6E4FF] font-book"> agility and fresh perspectives</span> to navigate complex hierarchies efficiently.
        <br /><br />
        This approach allows us to deliver <span className="text-[#B6E4FF] font-book">innovative solutions</span> tailored to the needs of enterprise clients.
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
              <img src="./images/icons/arrow-up.png" className="w-6 h-6" alt="arrowUp" />
            ) : (
              <img src="./images/icons/arrow-down2.png" className="w-6 h-6" alt="arrowDown" />
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