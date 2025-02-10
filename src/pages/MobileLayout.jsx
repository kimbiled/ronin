import Header from "../components/Header"
import Hero from "../components/Hero";
import Content from "../components/Content";
import Review from "../components/Review";
import Projects from "../components/Projects";
import Proposal from "../components/Proposal";
import Leaders from "../components/Leaders";
import Comments from "../components/Comments";
import Form from "../components/Form";
import News from "../components/News";
import Footer from "../components/Footer";
import StickyBanner from "../components/StickyBanner";

import c1 from "../assets/desktop/c1.svg";
import c2 from "../assets/desktop/c2.svg";
import c3 from "../assets/desktop/c3.svg";
import c4 from "../assets/desktop/c4.svg";
import c5 from "../assets/desktop/c5.svg";

const MobileLayout = () => {
  const OPTIONS = { loop: true }
  const testimonials = [
    {
      text: "We had a tight deadline for a 3D project, and they delivered ahead of schedule. The quality of their work added a whole new level of professionalism to our presentation",
      name: "Ethan Reynolds",
      job: "Head of Marketing",
      company: "PrimePath Systems",
      avatar: c1,
    },
    {
      text: "They completely transformed our customer portal into an intuitive and beautiful platform. The team’s creativity and ability to deliver under tight deadlines were remarkable.",
      name: "James Patel",
      job: "Digital Product Lead",
      company: "Arcadia Insights",
      avatar: c2,
    },
    {
      text: "Our project required a mix of branding, UX design, and app development. They handled every aspect with precision, delivering a cohesive digital experience that’s now central to our business",
      name: "Emily Novak",
      job: "Project Manager",
      company: "Lumio Group",
      avatar: c3,
    },
    {
      text: "The team delivered a visually stunning and highly functional website for our brand. Their expertise in UX/UI design made navigation effortless, and our customers love the new look!",
      name: "Hiroshi Tanaka",
      job: "Lead Designer",
      company: "Kaito Innovations",
      avatar: c4,
    },
    {
      text: "From concept to execution, they exceeded our expectations. Their innovative approach and attention to detail made our digital campaign a huge success, attracting more clients than we anticipated",
      name: "Daniel Hughes",
      job: "Marketing Director",
      company: "Visionary Solutions",
      avatar: c5,
    },
];


const profiles = [
    {
    id: 1,
    profile: {
      name: "Antix",
      role: "Website design and development",
      tags: ["Web design", "Development", "WEB 3"],
      followers: "$5.8M+ Raised",
      verified: true,
      stared:false,
      location: "./images/icons/usa.svg",
    },
    avatars: [
      "/images/icons/i1.png",
      "/images/icons/i1.png",
      "/images/icons/i1.png",
    ],
  },
  {
    id: 2,
    profile: {
      name: "Dr Berg",
      role: "Social media content",
      tags: ["SMM", "Graphic design", "Content creation"],
      followers: "20M+ Followers",
      verified: true,
      stared: false,
      location: "./images/icons/usa.svg",
    },
    avatars: [
      "/images/icons/i2.png",
      "/images/icons/i2.png",
      "/images/icons/i2.png",
    ],
  },
  {
    id: 3,
    profile: {
      name: "HashCats",
      role: "UX/UI Design",
      tags: ["Prototyping", "Design System", "Mobile Design"],
      followers: "900.000+ Users",
      verified: true,
      stared: false,
      location: "./images/icons/uk.svg",
    },
    avatars: [
      "/images/icons/i3.png",
      "/images/icons/i3.png",
      "/images/icons/i3.png",
    ],
  },
  {
    id: 4,
    profile: {
      name: "Orbital7",
      role: "Website development",
      tags: ["Frontend Development", "Custom Web Solutions", "Web3"],
      followers: "100.000+ Users",
      verified: true,
      stared: false,
      location: "./images/icons/australia.svg",
    },
    avatars: [
      "/images/icons/i4.png",
      "/images/icons/i4.png",
      "/images/icons/i4.png",
    ],
  },
  {
    id: 5,
    profile: {
      name: "Sharique",
      role: "Branding",
      tags: ["Brand Strategy", "Visual Identity", "Fintech"],
      followers: false,
      verified: false,
      stared: false,
      location: "./images/icons/qatar.svg",
    },
    avatars: [
      "/images/icons/i5.png",
      "/images/icons/i5.png",
      "/images/icons/i5.png",
    ],
  },
  {
    id: 6,
    profile: {
      name: "Glenbotal",
      role: "Website development",
      tags: ["Full-Stack Development", "UI/UX", "E-commerce"],
      followers: "4.7 Trustpilot",
      verified: false,
      stared: true,
      location: "./images/icons/uk.svg",
    },
    avatars: [
      "/images/icons/i6.png",
      "/images/icons/i6.png",
      "/images/icons/i6.png",
    ],
  },
  {
    id: 7,
    profile: {
      name: "Language learning app",
      role: "Branding",
      tags: ["Brand Positioning", "Visual Identity", "Edutech"],
      followers: false,
      verified: false,
      stared: false,
      location: "./images/icons/kz.svg",
    },
    avatars: [
      "/images/icons/i7.png",
      "/images/icons/i7.png",
      "/images/icons/i7.png",
    ],
  }
];

    return(
       <div className="flex flex-col items-center gap-8">
         <Header />
         <Hero />
         <Content />
         <Review />
         <Projects />
         <Proposal />
         <Leaders />
         <Comments slides={testimonials} options={OPTIONS} />
         {/* <StickyBanner /> */}
         <Form />
         <News />
         <Footer />
       </div>
    )
}

export default MobileLayout;