import NewsArticleDesktopTemplate from '../components/desktop/NewsArticleDesktopTemplate';
import b3 from '../assets/desktop/b3.png';

const article = {
  title: 'Why You Need a Design System',
  description:
    'Ever find yourself re-creating the same buttons, colors, and layouts for every project? That’s where a design system comes in. It’s a game-changer for teams looking to streamline workflows, save time, and deliver consistent results',
  date: 'Jan 22, 2025',
  readTime: '3 min read',
  image: b3,
  showSectionNumbers: false,
  sections: [
    {
      id: 'design-system',
      title: 'What is a Design System?',
      paragraphs: [
        'A design system is a centralized library of components, guidelines, and standards that help your team maintain consistency across all projects. It’s like having a blueprint for your entire product',
      ],
    },
    {
      id: 'benefits',
      title: 'The Benefits of a Design System:',
      paragraphs: [
        '1. Consistency Across Products: A design system ensures every button, font, and layout feels cohesive, strengthening your brand identity',
        '2. Faster Development: With ready-to-use components, designers and developers can focus on innovation rather than reinventing the wheel',
        '3. Better Collaboration: Design systems bridge the gap between designers, developers, and stakeholders, ensuring everyone’s on the same page',
      ],
    },
    {
      id: 'getting-started',
      title: 'How to Get Started:',
      paragraphs: [
        '· Audit your existing designs and identify reusable elements',
        '· Create a shared library of components with tools like Figma or Sketch',
        '· Document guidelines for spacing, typography, and interaction states to keep everyone aligned',
      ],
    },
    {
      id: 'work-smarter',
      title: 'Ready to work smarter, not harder?',
      paragraphs: [
        'Start building your design system today and transform the way you create digital products!',
      ],
    },
  ],
};

const ThirdNewsDesktop = () => (
  <NewsArticleDesktopTemplate article={article} />
);

export default ThirdNewsDesktop;
