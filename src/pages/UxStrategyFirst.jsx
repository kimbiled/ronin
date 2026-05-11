import NewsArticleMobileTemplate from '../components/mobile/NewsArticleMobileTemplate';
import n1 from '../assets/desktop/n1.webp';

const article = {
  title: 'From Idea to Product: Why UX Strategy Comes First',
  description:
    'Before designing screens, it’s important to understand the problem, the user, and the goal of the product. UX strategy helps turn ideas into clear, useful digital experiences.',
  date: 'Apr 18, 2026',
  readTime: '2 min read',
  image: n1,
  sections: [
    {
      id: 'what-is-ux-strategy',
      title: 'What Is UX Strategy?',
      paragraphs: [
        'UX strategy is the foundation of a digital product. It connects business goals with user needs and helps define how the product should work before the visual design begins.',
        'It gives the design process direction instead of relying only on assumptions.',
      ],
    },
    {
      id: 'understanding-the-user',
      title: 'Understanding the User',
      paragraphs: [
        'Good design starts with understanding who will use the product and what they need to achieve.',
        'This can include user research, competitor analysis, journey mapping, and identifying the main problems the product should solve.',
      ],
    },
    {
      id: 'designing-the-flow',
      title: 'Designing the Flow',
      paragraphs: [
        'Before focusing on colors and visuals, designers need to define the user flow. This means understanding how people move from one step to another inside the product.',
        'Clear flows make interfaces easier to use and reduce unnecessary complexity.',
      ],
    },
    {
      id: 'why-strategy-saves-time',
      title: 'Why Strategy Saves Time',
      paragraphs: [
        'Without strategy, teams often redesign the same screens many times. A clear UX foundation helps avoid confusion, align decisions, and create a product that feels more intentional.',
      ],
    },
  ],
};

export default function UxStrategyFirst() {
  return <NewsArticleMobileTemplate article={article} />;
}
