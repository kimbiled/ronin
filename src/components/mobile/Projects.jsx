import ProjectItem from './ProjectItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import antix1 from '../../assets/mobile/1-1.webp';
import antix2 from '../../assets/mobile/1-2.webp';
import antix3 from '../../assets/mobile/1-3.webp';
import antix4 from '../../assets/mobile/1-4.webp';
import antix5 from '../../assets/mobile/1-5.webp';
import hash1 from '../../assets/desktop/2-1.webp';
import hash2 from '../../assets/desktop/2-2.webp';
import hash3 from '../../assets/desktop/2-3.webp';
import hash4 from '../../assets/desktop/2-4.webp';
import hash5 from '../../assets/desktop/2-5.webp';
import aqua1 from '../../assets/mobile/3-1.webp';
import aqua2 from '../../assets/desktop/3-2.webp';
import aqua3 from '../../assets/desktop/3-3.webp';
import aqua4 from '../../assets/desktop/3-4.webp';
import crypto1 from '../../assets/desktop/4-1.webp';
import crypto2 from '../../assets/desktop/4-2.webp';
import crypto3 from '../../assets/desktop/4-3.webp';
import crypto4 from '../../assets/desktop/4-4.webp';
import crypto5 from '../../assets/desktop/4-5.webp';
import crypto6 from '../../assets/desktop/4-6.webp';
import berg1 from '../../assets/mobile/5-1.webp';
import berg2 from '../../assets/desktop/5-2.webp';
import berg3 from '../../assets/desktop/5-3.webp';
import berg4 from '../../assets/desktop/5-4.webp';
import sharique1 from '../../assets/desktop/6-1.webp';
import sharique2 from '../../assets/desktop/6-2.webp';
import sharique3 from '../../assets/desktop/6-3.webp';
import sharique4 from '../../assets/desktop/6-4.webp';
import orbital1 from '../../assets/mobile/7-1.webp';
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
import one1 from '../../assets/mobile/10-1.webp';
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
import school1 from '../../assets/mobile/16-1.webp';
import school2 from '../../assets/mobile/16-2.webp';
import school3 from '../../assets/mobile/16-3.webp';
import pocketbroker1 from '../../assets/desktop/17-1.webp';

import usa from '../../assets/desktop/usa.svg';
import uk from '../../assets/desktop/uk.svg';
import australia from '../../assets/desktop/australia.svg';
import qatar from '../../assets/desktop/qatar.svg';
import kz from '../../assets/desktop/kz.svg';

const profiles = [
  {
    id: 1,
    profile: {
      name: 'Antix',
      role: 'Website design and development',
      tags: ['Web design', 'Development', 'WEB 3'],
      followers: '$5.8M+ Raised',
      verified: true,
      stared: false,
      location: usa,
      badgeTone: 'dark',
    },
    avatars: [antix1, antix2, antix3, antix4, antix5],
  },
  {
    id: null,
    profile: {
      name: 'Skygen',
      role: 'Website development',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: usa,
    },
    avatars: [skygen1, skygen2, skygen3, skygen4],
  },
  {
    id: null,
    profile: {
      name: 'School Game',
      role: 'UX/UI Design',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: kz,
    },
    avatars: [school1, school2, school3],
  },
  {
    id: 2,
    profile: {
      name: 'Hash Cats',
      role: 'UX/UI Design',
      tags: ['Prototyping', 'Design System', 'Mobile Design'],
      followers: '900.000+ Users',
      verified: true,
      stared: false,
      location: uk,
      badgeTone: 'dark',
    },
    avatars: [hash1, hash2, hash3, hash4, hash5],
  },
  {
    id: null,
    profile: {
      name: 'Aqua Hair',
      role: 'Branding',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: qatar,
    },
    avatars: [aqua1, aqua2, aqua3, aqua4],
  },
  {
    id: 4,
    profile: {
      name: 'CryptoIndex',
      role: 'Website development',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: uk,
    },
    avatars: [crypto1, crypto2, crypto3, crypto4, crypto5, crypto6],
  },
  {
    id: 7,
    profile: {
      name: 'Dr Berg',
      role: 'Social media content',
      tags: ['SMM', 'Graphic design', 'Content creation'],
      followers: '20M+ Followers',
      verified: true,
      stared: false,
      location: usa,
      badgeTone: 'light',
    },
    avatars: [berg1, berg2, berg3, berg4],
  },
  {
    id: 5,
    profile: {
      name: 'Degen AI',
      role: 'Website development',
      tags: ['Frontend Development', 'Web3', 'Custom Web Solutions'],
      followers: false,
      verified: false,
      stared: false,
      location: australia,
    },
    avatars: [degen1, degen2, degen3, degen4, degen5],
  },
  {
    id: 8,
    profile: {
      name: 'Sharique',
      role: 'Branding',
      tags: ['Brand Strategy', 'Visual Identity', 'Fintech'],
      followers: false,
      verified: false,
      stared: false,
      location: qatar,
    },
    avatars: [sharique1, sharique2, sharique3, sharique4],
  },
  {
    id: 6,
    profile: {
      name: 'Glenbotal',
      role: 'Website development',
      tags: ['Full-Stack Development', 'UI/UX', 'E-commerce'],
      followers: '4.7 Trustpilot',
      verified: false,
      stared: true,
      location: uk,
      badgeTone: 'dark',
    },
    avatars: [glen1, glen2, glen3, glen4],
  },
  {
    id: null,
    profile: {
      name: 'Motiva',
      role: 'Branding',
      tags: ['UI/UX', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: usa,
    },
    avatars: [motiva1, motiva2, motiva3],
  },
  {
    id: null,
    profile: {
      name: 'Pocket Broker',
      role: 'Website development',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
    },
    avatars: [pocketbroker1],
  },
  {
    id: 3,
    profile: {
      name: 'Orbital 7',
      role: 'Website development',
      tags: ['Frontend Development', 'Custom Web Solutions', 'Web3'],
      followers: '100.000+ Users',
      verified: true,
      stared: false,
      location: australia,
      badgeTone: 'dark',
    },
    avatars: [orbital1, orbital2, orbital3, orbital4],
  },
  {
    id: null,
    profile: {
      name: 'The One',
      role: 'Website development',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: australia,
    },
    avatars: [one1, one2, one3, one4],
  },
  {
    id: null,
    profile: {
      name: 'DeXe',
      role: 'Branding',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: australia,
    },
    avatars: [dexe1, dexe2, dexe3, dexe4],
  },
  {
    id: 9,
    profile: {
      name: 'Dunes',
      role: 'Website development',
      tags: ['Launchpad Design', 'PitchDeck Design', 'Web3'],
      followers: false,
      verified: false,
      stared: false,
      location: australia,
    },
    avatars: [dunes1, dunes2, dunes3, dunes4],
  },
  {
    id: null,
    profile: {
      name: 'Cephla',
      role: 'Website development',
      tags: ['UX/UI', 'Visual Identity', 'Animations'],
      followers: false,
      verified: false,
      stared: false,
      location: qatar,
    },
    avatars: [cephla1, cephla2, cephla3],
  },
];

const preloadImage = (src) => {
  if (!src) {
    return;
  }

  const image = new Image();
  image.decoding = 'async';
  image.src = src;
};

const preloadProjectAssets = () => {
  const imageUrls = new Set();

  profiles.forEach((item) => {
    item.avatars.forEach((avatar) => imageUrls.add(avatar));
    imageUrls.add(item.profile.location);
  });

  imageUrls.forEach(preloadImage);
};

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const preload = () => preloadProjectAssets();

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preload);
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(preload, 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const goPage = (index) => {
    if (!index) {
      return;
    }

    navigate(`/projects/${index}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="font-ppneue flex flex-col items-center w-full mx-auto "
      id="recentProjects"
    >
      <div className="flex flex-col text-center items-center">
        <p className="sm25:text-[40px] sm75:text-[40px] font-medium sm20:text-[36px]">
          Recent projects
        </p>
      </div>

      {profiles.map((item, index) => (
        <>
          <div
            key={item.id}
            className="w-full p-5 rounded-lg"
            onClick={() => goPage(item.id)}
          >
            <ProjectItem item={item} />
          </div>
          <div className="font-ppneue flex flex-row justify-between w-[85%] text-[#090C21]">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-[25px] leading-[30px] ">
                {item.profile.name}
              </p>
              <p className="text-[14px] leading-[22px]">{item.profile.role}</p>
              <div className="flex flex-row gap-2 text-xs text-[#637695]">
                {item.profile.tags.map((detail, i) => (
                  <div className="flex flex-row gap-2">
                    {i !== 0 && <span className="text-gray-500">•</span>}
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            {item.profile.location && (
              <div className="flex flex-col justify-start">
                <img src={item.profile.location} alt="location" />
              </div>
            )}
          </div>
          {index !== profiles.length - 1 && (
            <div className="h-[1px] w-[85%] bg-[#090C21] mt-8 opacity-[8%] rounded mb-4"></div>
          )}
        </>
      ))}

      <div className="flex flex-col items-center mt-7">
        <button className="bg-[#1261FC] text-white rounded-lg w-40 h-12">
          <a href="https://drive.google.com/file/d/15t6fMY4dYh54MsYRphr_bPqehjTpZIZC/view?pli=1">
            View all works
          </a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
