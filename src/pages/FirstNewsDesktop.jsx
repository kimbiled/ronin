import NewsArticleDesktopTemplate from '../components/desktop/NewsArticleDesktopTemplate';
import n4 from '../assets/desktop/n4.svg';

const article = {
  title: 'Inclusive Design Made Simple',
  description:
    'Inclusive design isn’t just a buzzword; it’s a necessity in today’s digital-first world. By ensuring your designs are accessible, you create products that work for everyone, regardless of their abilities or limitations. But what does "inclusive design" really mean? Let’s break it down',
  date: 'Jan 1, 2025',
  readTime: '2 min read',
  image: n4,
  showSectionNumbers: false,
  sections: [
    {
      id: 'inclusive-design',
      title: 'What is Inclusive Design?',
      paragraphs: [
        'Inclusive design is about creating experiences that are usable by the widest range of people, from those with visual impairments to those navigating websites with assistive technologies. It’s not just about compliance—it’s about empathy and understanding user needs.',
      ],
    },
    {
      id: 'key-principles',
      title: 'Key Principles of Inclusive Design:',
      paragraphs: [
        'Flexibility: Your design should adapt to diverse user needs. Think responsive layouts, scalable fonts, and voice command compatibility.',
        'Clarity: Avoid unnecessary complexity. Simple navigation and clear typography benefit everyone.',
        'Accessibility: Use tools like contrast checkers and ARIA roles to ensure your designs are accessible to people with disabilities.',
      ],
    },
    {
      id: 'why-it-matters',
      title: 'Why It Matters:',
      paragraphs: [
        'Studies show that inclusive websites not only improve user satisfaction but also boost SEO rankings. Search engines prioritize websites that are accessible, making inclusive design a win-win for both users and businesses.',
        'Don’t let your design leave anyone behind. Learn practical steps to make your projects more inclusive—because great design is for everyone.',
      ],
    },
  ],
};

const FirstNewsDesktop = () => (
  <NewsArticleDesktopTemplate article={article} />
);

export default FirstNewsDesktop;
