import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import antix1 from '../../assets/desktop/1-1.webp';
import antix2 from '../../assets/desktop/1-2.webp';
import antix3 from '../../assets/desktop/1-3.webp';
import antix4 from '../../assets/desktop/1-4.webp';
import antix5 from '../../assets/desktop/1-5.webp';
import hash1 from '../../assets/desktop/2-1.webp';
import hash2 from '../../assets/desktop/2-2.webp';
import hash3 from '../../assets/desktop/2-3.webp';
import hash4 from '../../assets/desktop/2-4.webp';
import hash5 from '../../assets/desktop/2-5.webp';
import aqua1 from '../../assets/desktop/3-1.webp';
import aqua2 from '../../assets/desktop/3-2.webp';
import aqua3 from '../../assets/desktop/3-3.webp';
import aqua4 from '../../assets/desktop/3-4.webp';
import crypto1 from '../../assets/desktop/4-1.webp';
import crypto2 from '../../assets/desktop/4-2.webp';
import crypto3 from '../../assets/desktop/4-3.webp';
import crypto4 from '../../assets/desktop/4-4.webp';
import crypto5 from '../../assets/desktop/4-5.webp';
import crypto6 from '../../assets/desktop/4-6.webp';
import berg1 from '../../assets/desktop/5-1.webp';
import berg2 from '../../assets/desktop/5-2.webp';
import berg3 from '../../assets/desktop/5-3.webp';
import berg4 from '../../assets/desktop/5-4.webp';
import sharique1 from '../../assets/desktop/6-1.webp';
import sharique2 from '../../assets/desktop/6-2.webp';
import sharique3 from '../../assets/desktop/6-3.webp';
import sharique4 from '../../assets/desktop/6-4.webp';
import orbital1 from '../../assets/desktop/7-1.webp';
import orbital2 from '../../assets/desktop/7-2.webp';
import orbital3 from '../../assets/desktop/7-3.webp';
import orbital4 from '../../assets/desktop/7-4.webp';
import dunes1 from '../../assets/desktop/8-1.webp';
import dunes2 from '../../assets/desktop/8-2.webp';
import dunes3 from '../../assets/desktop/8-3.webp';
import dunes4 from '../../assets/desktop/8-4.webp';
import degen1 from '../../assets/desktop/9-1.webp';
import degen2 from '../../assets/desktop/9-2.webp';
import degen3 from '../../assets/desktop/9-3.webp';
import degen4 from '../../assets/desktop/9-4.webp';
import degen5 from '../../assets/desktop/9-5.webp';
import one1 from '../../assets/desktop/10-1.webp';
import one2 from '../../assets/desktop/10-2.webp';
import one3 from '../../assets/desktop/10-3.webp';
import one4 from '../../assets/desktop/10-4.webp';
import glen1 from '../../assets/desktop/11-1.webp';
import glen2 from '../../assets/desktop/11-2.webp';
import glen3 from '../../assets/desktop/11-3.webp';
import glen4 from '../../assets/desktop/11-4.webp';
import motiva1 from '../../assets/desktop/12-1.webp';
import motiva2 from '../../assets/desktop/12-2.webp';
import motiva3 from '../../assets/desktop/12-3.webp';
import skygen1 from '../../assets/desktop/13-1.webp';
import skygen2 from '../../assets/desktop/13-2.webp';
import skygen3 from '../../assets/desktop/13-3.webp';
import skygen4 from '../../assets/desktop/13-4.webp';
import dexe1 from '../../assets/desktop/14-1.webp';
import dexe2 from '../../assets/desktop/14-2.webp';
import dexe3 from '../../assets/desktop/14-3.webp';
import dexe4 from '../../assets/desktop/14-4.webp';
import cephla1 from '../../assets/desktop/15-1.webp';
import cephla2 from '../../assets/desktop/15-2.webp';
import cephla3 from '../../assets/desktop/15-3.webp';
import school1 from '../../assets/desktop/16-1.webp';
import school2 from '../../assets/desktop/16-2.webp';
import school3 from '../../assets/desktop/16-3.webp';
import pocketbroker1 from '../../assets/desktop/17-1.webp';
import p11 from '../../assets/desktop/p11.svg';
import p22 from '../../assets/desktop/p22.svg';
import p33 from '../../assets/desktop/p33.svg';
import p55 from '../../assets/desktop/p55.svg';
import p77 from '../../assets/desktop/p77.svg';

//logos
import aqua from '../../assets/desktop/aquaLogo.svg';
import cephla from '../../assets/desktop/сephlaLogo.svg';
import cryptoIndex from '../../assets/desktop/cryptoIdxLogo.svg';
import dunes from '../../assets/desktop/dunesLogo.svg';
import dexe from '../../assets/desktop/dexeLogo.svg';
import motivaLogo from '../../assets/desktop/motivaLogo.svg';
import skygenLogo from '../../assets/desktop/skygenLogo.svg';
import theoneLogo from '../../assets/desktop/oneLogo.svg';
import schoolGame from '../../assets/desktop/schoolGameLogo.svg';
import sharique from '../../assets/desktop/shariqueLogo.svg';
import glenbotal from '../../assets/desktop/glenbotalLogo.svg';
import pocketbroker from '../../assets/desktop/pocketbrokerLogo.svg';

//flags
import australia from '../../assets/desktop/australia.svg';
import kz from '../../assets/desktop/kz.svg';
import uae from '../../assets/desktop/uae.svg';
import uk from '../../assets/desktop/uk.svg';
import usa from '../../assets/desktop/usa.svg';

//ui elements
import metall from '../../assets/desktop/metall.png';
import star from '../../assets/icons/stared.png';
import verify from '../../assets/icons/Icon.png';

const projects = [
  {
    id: 1,
    images: [antix1, antix2, antix3, antix4, antix5],
    logo: p11,
    title: 'Antix',
    flag: uae,
    tags: ['Web Design'],
    highlight: '$5.8M+ Raised',
    badgeImage: verify,
    isWide: true,
    badgeRows: [3],
    highlightAlign: 'right',
  },
  {
    id: null,
    images: [skygen1, skygen2, skygen3, skygen4],
    logo: skygenLogo,
    title: 'Skygen',
    flag: usa,
    tags: ['UX/UI', 'Animations'],
    tagTone: 'light',
    badgeRows: [3],
  },
  {
    id: 2,
    images: [hash1, hash2, hash3, hash4, hash5],
    logo: p22,
    title: 'Hash Cats',
    flag: uk,
    tags: ['Mobile Design'],
    highlight: '900.000+ Users',
    badgeImage: verify,
    badgeRows: [2, 2],
  },
  {
    id: 4,
    images: [crypto1, crypto2, crypto3, crypto4, crypto5, crypto6],
    logo: cryptoIndex,
    title: 'CryptoIndex',
    tags: ['UX/UI', 'Animations'],
    badgeRows: [3],
    isTall: true,
  },
  {
    id: null,
    images: [school1, school2, school3],
    logo: schoolGame,
    title: 'School Game',
    flag: kz,
    tags: ['UX/UI', 'Animations'],
    tagTone: 'light',
    badgeRows: [3],
    badgesPosition: 'top',
  },
  {
    id: null,
    images: [aqua1, aqua2, aqua3, aqua4],
    logo: aqua,
    logoBadgeClass: 'h-4 w-[83px]',
    title: 'Aqua Hair',
    tags: ['UX/UI', 'Animations'],
    tagTone: 'light',
    badgeRows: [3],
  },
  {
    id: 7,
    images: [berg1, berg2, berg3, berg4],
    logo: p55,
    title: 'Dr. Berg',
    flag: usa,
    tags: ['SMM'],
    highlight: '20M+ Followers',
    badgeImage: verify,
    tagTone: 'light',
    badgeRows: [3],
  },
  {
    id: 5,
    images: [degen1, degen2, degen3, degen4, degen5],
    logo: p77,
    title: 'Degen AI',
    flag: australia,
    tags: ['Frontend Development'],
    badgeRows: [2],
  },
  {
    id: 8,
    images: [sharique1, sharique2, sharique3, sharique4],
    logo: sharique,
    title: 'Sharique',
    tags: ['Visual Identity'],
    tagTone: 'light',
    badgeRows: [3],
  },
  {
    id: 6,
    images: [glen1, glen2, glen3, glen4],
    logo: glenbotal,
    title: 'Glenbotal',
    tags: ['UX/UI'],
    highlight: '4.7 Trustpilot',
    badgeImage: star,
    tagTone: 'light',
    badgeRows: [2, 2],
  },
  {
    id: 3,
    images: [orbital1, orbital2, orbital3, orbital4],
    logo: p33,
    title: 'Orbital 7',
    flag: australia,
    tags: ['Frontend Dev', 'Branding'],
    badgeRows: [2],
  },
  {
    id: null,
    images: [dexe1, dexe2, dexe3, dexe4],
    logo: dexe,
    title: 'Dexe',
    tags: ['UX/UI', 'Visual Identity'],
    badgeRows: [3],
  },
  {
    id: null,
    images: [motiva1, motiva2, motiva3],
    logo: motivaLogo,
    logoBadgeClass: 'max-h-[22px] max-w-[94px]',
    title: 'Motiva',
    flag: usa,
    tags: ['UX/UI', 'Visual Identity'],
    tagTone: 'light',
    badgeRows: [3],
    isTall: true,
  },
  {
    id: null,
    images: [one1, one2, one3, one4],
    logo: theoneLogo,
    title: 'The One',
    flag: australia,
    tags: ['UX/UI', 'Visual Identity'],
    badgeRows: [3],
  },
  {
    id: null,
    images: [pocketbroker1],
    logo: pocketbroker,
    title: 'PocketBroker',
    tags: ['Landing Page'],
    badgeRows: [2],
    isTall: true,
  },
  {
    id: 9,
    images: [dunes1, dunes2, dunes3, dunes4],
    logo: dunes,
    title: 'Dunes',
    flag: australia,
    tags: ['Launchpad & Pitcheck Design'],
    badgeRows: [2],
  },
  {
    id: null,
    images: [cephla1, cephla2, cephla3],
    logo: cephla,
    title: 'Cephla',
    tags: ['UX/UI', 'Visual Identity'],
    badgeRows: [3],
  },
];

const topRow = ['Skygen', 'School Game'];
const leftColumn = [
  'Hash Cats',
  'CryptoIndex',
  'Aqua Hair',
  'PocketBroker',
  'Degen AI',
  'Orbital 7',
  'Dexe',
];
const rightColumn = [
  'The One',
  'Dr. Berg',
  'Sharique',
  'Motiva',
  'Glenbotal',
  'Dunes',
  'Cephla',
];

function ProjectTile({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;

    if (isHovered && project.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project.images.length,
        );
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  const openProject = () => {
    if (!project.id) {
      return;
    }

    navigate(`/projects/${project.id}`);
    window.scrollTo(0, 0);
  };

  const heightClass = project.isWide
    ? 'h-[520px]'
    : project.isTall
      ? 'h-[790px]'
      : 'h-[530px]';
  const badgesPositionClass =
    project.badgesPosition === 'top' ? 'top-[36px]' : 'bottom-[36px]';
  const tagClass =
    project.tagTone === 'light'
      ? 'border-white/50 bg-[rgba(255,255,255,0.68)] text-black'
      : 'border-white/20 bg-black/30 text-white';
  const badges = [
    ...(project.logo
      ? [
          {
            type: 'logo',
            label: project.title,
            image: project.logo,
            className: project.logoBadgeClass,
          },
        ]
      : [{ type: 'logoText', label: project.title }]),
    ...(project.highlight
      ? [{ type: 'highlight', label: project.highlight }]
      : []),
    ...project.tags.map((tag) => ({ type: 'tag', label: tag })),
  ];

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[48px] bg-transparent ${heightClass} ${
        project.id ? 'cursor-pointer' : ''
      }`}
      style={{ clipPath: 'inset(0 round 48px)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
      onClick={openProject}
    >
      {project.images.map((image, imageIndex) => (
        <motion.img
          key={`${project.title}-${imageIndex}`}
          src={image}
          alt={project.title}
          className="absolute -inset-[3px] h-[calc(100%+6px)] w-[calc(100%+6px)] transform-gpu object-cover"
          animate={{
            opacity: imageIndex === currentImageIndex ? 1 : 0,
            scale: isHovered ? 1.055 : 1.012,
          }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        />
      ))}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-10"
          >
            <div
              className={`absolute left-[38px] right-[38px] flex min-w-0 items-center gap-2 ${badgesPositionClass}`}
            >
              {badges.map((badge) => (
                <span
                  key={`${project.title}-${badge.label}`}
                  className={`inline-flex h-10 shrink-0 items-center rounded-full border px-[18px] py-[4px] whitespace-nowrap text-[18px] leading-[22px] backdrop-blur-xl ${tagClass}`}
                >
                  {badge.type === 'logo' && (
                    <img
                      src={badge.image}
                      alt={badge.label}
                      className={`shrink-0 object-contain ${
                        badge.className || 'max-h-[26px] max-w-[130px]'
                      }`}
                    />
                  )}
                  {badge.type === 'logoText' && badge.label}
                  {badge.type === 'highlight' && (
                    <img
                      src={project.badgeImage}
                      alt=""
                      className="-ml-[12px] mr-2 h-8 w-8 shrink-0"
                    />
                  )}
                  {badge.type !== 'logo' &&
                    badge.type !== 'logoText' &&
                    badge.label}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectsD() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [moveDirection, setMoveDirection] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const metallRef = useRef(null);
  const projectByTitle = Object.fromEntries(
    projects.map((project) => [project.title, project]),
  );

  const handleMouseMove = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const metallRect = metallRef.current?.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    if (metallRect) {
      const centerX = metallRect.left + metallRect.width / 2;
      const centerY = metallRect.top + metallRect.height / 2;
      const offsetX = (e.clientX - centerX) / (metallRect.width / 2);
      const offsetY = (e.clientY - centerY) / (metallRect.height / 2);

      setMoveDirection({
        x: -offsetX * 40,
        y: -offsetY * 40,
      });
    }

    setPosition({ x: mouseX, y: mouseY });
  };

  const handleClick = () => {
    window.location.href =
      'https://drive.google.com/file/d/1FizTso9ZKKUooa-Rl6n0Sz6khVYuJCa1/view';
  };

  return (
    <div
      id="recentProjects"
      className="font-ppneue mt-[68px] flex w-[85%] flex-col items-center"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center">
        <h3 className="text-center text-[84px] font-medium leading-[92px]">
          Recent projects
        </h3>

        <div className="mt-16 grid w-full grid-cols-2 gap-[18px]">
          {topRow.map((projectTitle) => (
            <ProjectTile
              key={projectTitle}
              project={projectByTitle[projectTitle]}
            />
          ))}
        </div>

        <div className="mt-[18px] w-full">
          <ProjectTile project={projectByTitle.Antix} />
        </div>

        <div className="mt-[18px] grid w-full grid-cols-2 gap-[18px]">
          <div className="flex flex-col gap-[18px]">
            {leftColumn.map((projectTitle) => (
              <ProjectTile
                key={projectTitle}
                project={projectByTitle[projectTitle]}
              />
            ))}
          </div>

          <div className="flex flex-col gap-[18px]">
            {rightColumn.map((projectTitle) => (
              <ProjectTile
                key={projectTitle}
                project={projectByTitle[projectTitle]}
              />
            ))}

            <div
              className="relative mx-auto py-24"
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              onMouseMove={handleMouseMove}
            >
              <motion.img
                ref={metallRef}
                src={metall}
                alt="View all works"
                className="relative h-[400px] w-[400px] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
                onClick={handleClick}
                animate={{
                  x: moveDirection.x,
                  y: moveDirection.y,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 8,
                  duration: 0.15,
                }}
              />

              <div className="pointer-events-none absolute inset-x-0 top-1/2 w-full -translate-y-1/2 transform whitespace-nowrap text-center text-[34px] font-book text-white">
                View all works
              </div>
              {visible && (
                <div
                  className="pointer-events-none absolute h-16 w-16 rounded-full bg-black opacity-80"
                  style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
