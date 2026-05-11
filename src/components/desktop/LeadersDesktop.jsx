import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import berg from '../../assets/desktop/berg.png';
import disney from '../../assets/desktop/disney.png';
import forbes from '../../assets/desktop/forbes.png';
import gorilla from '../../assets/desktop/gorilla.png';
import bigroup from '../../assets/desktop/bigroup.png';
import jusanbank from '../../assets/desktop/jusanbank.png';
import gold from '../../assets/desktop/gold.png';
import weproject from '../../assets/desktop/weproject.png';
import capital from '../../assets/desktop/capital.png';
import motiva from '../../assets/desktop/motiva.png';
import astanahub from '../../assets/desktop/astanahub.png';
import bgCard from '../../assets/desktop/bgCard.webp';
import doneIcon from '../../assets/desktop/doneIcon.svg';
import groupIcon from '../../assets/desktop/groupIcon.svg';
import workIcon from '../../assets/desktop/workIcon.svg';

const logos = [
  { src: berg, alt: 'berg', height: 'h-[31px]' },
  { src: disney, alt: 'disney', height: 'h-[30px]' },
  { src: forbes, alt: 'forbes', height: 'h-[24px]' },
  { src: gorilla, alt: 'gorilla', height: 'h-[42px]' },
  { src: bigroup, alt: 'bigroup', height: 'h-[30px]' },
  { src: jusanbank, alt: 'jusanbank', height: 'h-[30px]' },
  { src: gold, alt: 'gold', height: 'h-[38px]' },
  { src: weproject, alt: 'weproject', height: 'h-[30px]' },
  { src: capital, alt: 'capital', height: 'h-[28px]' },
  { src: motiva, alt: 'motiva', height: 'h-[30px]' },
  { src: astanahub, alt: 'astanahub', height: 'h-[32px]' },
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
    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_4px_18px_rgba(15,23,42,0.06)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#EEF0F3] bg-white">
        <img src={src} alt={alt} className="h-6 w-6 object-contain" />
      </div>
    </div>
  );
}

export default function LeadersDesktop() {
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
      { threshold: 0.35 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="font-ppneue flex w-[85%] flex-col items-center"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="text-center text-[96px] font-medium leading-[104px] text-[#080B1F]">
          Why <span className="text-[#1261FC]">choose us?</span>
        </h2>

        <div className="mt-[88px] grid h-[520px] w-full grid-cols-[1fr_1.24fr_1fr] gap-[18px]">
          <div className="flex h-full flex-col gap-[18px]">
            <div className="relative flex h-[212px] flex-col overflow-hidden rounded-[24px] bg-[#F4F4F5] p-[34px]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[52px] font-medium leading-[58px] text-[#080B1F]">
                    100+
                  </p>
                  <p className="mt-2 text-[22px] font-book leading-[28px] text-[#080B1F]">
                    5-star reviews
                  </p>
                </div>
                <IconSlot src={groupIcon} alt="Group" />
              </div>

              <div className="absolute bottom-[28px] left-0 right-0 overflow-hidden">
                <div className="flex w-max items-center gap-12 opacity-40 animate-scroll">
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

            <div className="relative flex h-[290px] flex-col justify-between rounded-[24px] bg-[#F4F4F5] p-[34px]">
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

              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[44px] font-medium leading-[58px] text-[#080B1F]">
                    2/5
                  </p>
                  <p className="mt-2 text-[20px] font-book leading-[28px] text-[#080B1F]">
                    Client slots available
                  </p>
                </div>
                <IconSlot src={workIcon} alt="Work" />
              </div>
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-[24px] bg-[#1261FC] p-[34px] text-white">
            <img
              src={bgCard}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative z-10">
              <h3 className="max-w-[430px] text-[44px] font-medium leading-[44px]">
                Strong team of
                <br />
                A-tier specialists
              </h3>
              <p className="mt-3 max-w-[390px] text-[20px] font-book leading-[26px]">
                Hire a team of pros, pay the cost of one employee
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col gap-[18px]">
            <div className="flex h-[150px] items-center justify-between rounded-[24px] bg-[#F4F4F5] p-[34px]">
              <div>
                <p className="text-[52px] font-medium leading-[58px] text-[#080B1F]">
                  859
                </p>
                <p className="mt-2 text-[22px] font-book leading-[28px] text-[#080B1F]">
                  Completed projects
                </p>
              </div>
              <IconSlot src={doneIcon} alt="Done" />
            </div>

            <div className="flex h-[352px] flex-col rounded-[24px] bg-[#F4F4F5] p-[34px]">
              <h3 className="text-[28px] font-medium leading-[46px] text-[#080B1F]">
                Fixed monthly fee
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {feeItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-[5px] text-[17px] font-book leading-[22px] text-[#272B3A] shadow-[inset_0_0_0_1px_rgba(8,11,31,0.04)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
