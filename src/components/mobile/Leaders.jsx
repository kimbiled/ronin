import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import berg from '../../assets/mobile/berg.png';
import disney from '../../assets/mobile/disney.png';
import forbes from '../../assets/mobile/forbes.png';
import gorilla from '../../assets/mobile/gorilla.png';
import bigroup from '../../assets/mobile/bigroup.png';
import jusanbank from '../../assets/mobile/jusanbank.png';
import gold from '../../assets/mobile/gold.png';
import weproject from '../../assets/mobile/weproject.png';
import capital from '../../assets/mobile/capital.png';
import motiva from '../../assets/mobile/motiva.png';
import astanahub from '../../assets/mobile/astanahub.png';
import bgCard from '../../assets/desktop/bgCard.webp';
import doneIcon from '../../assets/desktop/doneIcon.svg';
import groupIcon from '../../assets/desktop/groupIcon.svg';
import workIcon from '../../assets/desktop/workIcon.svg';

const logos = [
  { src: berg, alt: 'berg', height: 'h-[24px]' },
  { src: disney, alt: 'disney', height: 'h-[25px]' },
  { src: forbes, alt: 'forbes', height: 'h-[20px]' },
  { src: gorilla, alt: 'gorilla', height: 'h-[34px]' },
  { src: bigroup, alt: 'bigroup', height: 'h-[25px]' },
  { src: jusanbank, alt: 'jusanbank', height: 'h-[25px]' },
  { src: gold, alt: 'gold', height: 'h-[31px]' },
  { src: weproject, alt: 'weproject', height: 'h-[25px]' },
  { src: capital, alt: 'capital', height: 'h-[22px]' },
  { src: motiva, alt: 'motiva', height: 'h-[31px]' },
  { src: astanahub, alt: 'astanahub', height: 'h-[26px]' },
];

const feeItems = [
  'Unlimited brands & revisions',
  '2-3 business days delivery time',
  'Whole team input',
  'Satisfaction guarantee',
  'Daily presence in your chats and calls',
  'No pauses, no delays, just delivery',
];

function IconSlot({ src, alt }) {
  return (
    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0_4px_18px_rgba(15,23,42,0.06)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#EEF0F3] bg-white">
        <img src={src} alt={alt} className="h-5 w-5 object-contain" />
      </div>
    </div>
  );
}

const Leaders = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const targetProgress = 2 / 5;
  const progressRadius = 46;
  const progressCircumference = 2 * Math.PI * progressRadius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="font-ppneue flex w-[88%] flex-col items-center gap-5"
    >
      <h2 className="text-center text-[40px] font-medium leading-[44px] text-[#080B1F]">
        Why teams
        <br />
        <span className="text-[#1261FC]">choose us?</span>
      </h2>

      <div className="relative flex h-[199px] w-full flex-col overflow-hidden rounded-[22px] bg-[#F4F4F5] p-[30px]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[42px] font-medium leading-[46px] text-[#080B1F]">
              100+
            </p>
            <p className="mt-2 text-[18px] font-book leading-[24px] text-[#080B1F]">
              5-star reviews
            </p>
          </div>
          <IconSlot src={groupIcon} alt="Group" />
        </div>

        <div className="absolute bottom-[28px] left-0 right-0 overflow-hidden">
          <div className="flex w-max items-center gap-10 opacity-40 animate-scroll">
            {[...logos, ...logos].map(({ src, alt, height }, index) => (
              <img
                key={`${alt}-${index}`}
                src={src}
                alt={alt}
                className={`w-auto shrink-0 ${height}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[clamp(410px,132vw,475px)] w-full overflow-hidden rounded-[22px] bg-[#1261FC] p-[clamp(24px,8vw,30px)] text-white">
        <img
          src={bgCard}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[56%_bottom] min-[375px]:object-center"
        />
        <div className="relative z-10">
          <h3 className="text-[clamp(34px,10.5vw,39px)] font-medium leading-[1.05]">
            Strong team
            <br />
            of A-tier
            <br />
            specialists
          </h3>
          <p className="mt-3 max-w-[clamp(240px,78vw,280px)] text-[clamp(16px,4.8vw,18px)] font-book leading-[1.4]">
            Hire a team of pros, pay the cost of one employee
          </p>
        </div>
      </div>

      <div className="flex h-[129px] w-full items-center justify-between rounded-[22px] bg-[#F4F4F5] p-[30px]">
        <div>
          <p className="text-[42px] font-medium leading-[46px] text-[#080B1F]">
            859
          </p>
          <p className="mt-2 text-[18px] font-book leading-[24px] text-[#080B1F]">
            Completed projects
          </p>
        </div>
        <IconSlot src={doneIcon} alt="Done" />
      </div>

      <div className="relative flex h-[258px] w-full flex-col justify-between rounded-[22px] bg-[#F4F4F5] p-[30px]">
        <div className="relative h-[100px] w-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            className="aspect-square h-[100px] w-[100px]"
          >
            <path
              d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM8 50C8 73.196 26.804 92 50 92C73.196 92 92 73.196 92 50C92 26.804 73.196 8 50 8C26.804 8 8 26.804 8 50Z"
              fill="white"
            />
            <motion.circle
              cx="50"
              cy="50"
              r={progressRadius}
              fill="none"
              stroke="#1261FC"
              strokeLinecap="round"
              strokeWidth="8"
              strokeDasharray={progressCircumference}
              initial={{ strokeDashoffset: progressCircumference }}
              animate={{
                strokeDashoffset: isVisible
                  ? progressCircumference * (1 - targetProgress)
                  : progressCircumference,
              }}
              style={{
                rotate: -90,
                transformOrigin: '50% 50%',
              }}
              transition={{ duration: 1.25, ease: 'easeOut' }}
            />
          </svg>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[42px] font-medium leading-[46px] text-[#080B1F]">
              2/5
            </p>
            <p className="mt-2 text-[18px] font-book leading-[24px] text-[#080B1F]">
              Client slots available
            </p>
          </div>
          <IconSlot src={workIcon} alt="Work" />
        </div>
      </div>

      <div className="flex w-full flex-col rounded-[22px] bg-[#F4F4F5] p-[30px]">
        <h3 className="text-[26px] font-medium leading-[34px] text-[#080B1F]">
          Fixed monthly fee
        </h3>
        <div className="mt-5 flex flex-wrap gap-2">
          {feeItems.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-2 py-[4px] text-[14px] font-book leading-[20px] text-[#272B3A] shadow-[inset_0_0_0_1px_rgba(8,11,31,0.04)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
