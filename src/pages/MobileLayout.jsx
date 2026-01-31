import Header from '../components/mobile/Header';
import Hero from '../components/mobile/Hero';
import Content from '../components/mobile/Content';
import Review from '../components/mobile/Review';
import Projects from '../components/mobile/Projects';
import Proposal from '../components/mobile/Proposal';
import Leaders from '../components/mobile/Leaders';
import Comments from '../components/mobile/Comments';
import Form from '../components/mobile/Form';
import News from '../components/mobile/News';
import Footer from '../components/mobile/Footer';

import c1 from '../assets/desktop/c1.svg';
import c2 from '../assets/desktop/c2.svg';
import c3 from '../assets/desktop/c3.svg';
import c4 from '../assets/desktop/c4.svg';
import c5 from '../assets/desktop/c5.svg';

const MobileLayout = () => {
  const OPTIONS = { loop: true };
  const testimonials = [
    {
      text: 'We had a tight deadline for a 3D project, and they delivered ahead of schedule. The quality of their work added a whole new level of professionalism to our presentation',
      name: 'Ethan Reynolds',
      job: 'Head of Marketing',
      company: 'PrimePath Systems',
      avatar: c1,
    },
    {
      text: 'They completely transformed our customer portal into an intuitive and beautiful platform. The team’s creativity and ability to deliver under tight deadlines were remarkable.',
      name: 'James Patel',
      job: 'Digital Product Lead',
      company: 'Arcadia Insights',
      avatar: c2,
    },
    {
      text: 'Our project required a mix of branding, UX design, and app development. They handled every aspect with precision, delivering a cohesive digital experience that’s now central to our business',
      name: 'Emily Novak',
      job: 'Project Manager',
      company: 'Lumio Group',
      avatar: c3,
    },
    {
      text: 'The team delivered a visually stunning and highly functional website for our brand. Their expertise in UX/UI design made navigation effortless, and our customers love the new look!',
      name: 'Hiroshi Tanaka',
      job: 'Lead Designer',
      company: 'Kaito Innovations',
      avatar: c4,
    },
    {
      text: 'From concept to execution, they exceeded our expectations. Their innovative approach and attention to detail made our digital campaign a huge success, attracting more clients than we anticipated',
      name: 'Daniel Hughes',
      job: 'Marketing Director',
      company: 'Visionary Solutions',
      avatar: c5,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8">
      <Header />
      <Hero />
      <Content />
      <Projects />
      <Review />
      <Proposal />
      <Leaders />
      <Comments slides={testimonials} options={OPTIONS} />
      {/* <StickyBanner /> */}
      <Form />
      <News />
      <Footer />
    </div>
  );
};

export default MobileLayout;
