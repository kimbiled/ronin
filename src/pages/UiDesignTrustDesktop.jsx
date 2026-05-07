import NewsArticleDesktopTemplate from '../components/desktop/NewsArticleDesktopTemplate';
import n4 from '../assets/desktop/n4.svg';

const article = {
  title: 'How Good UI Design Builds Trust',
  description:
    'A beautiful interface can catch attention, but a trustworthy one keeps users engaged. Good UI design is not only about visuals - it is about clarity, consistency, and helping people feel confident at every step.',
  date: 'Jan 14, 2026',
  readTime: '2 min read',
  image: n4,
  sections: [
    {
      id: 'what-makes-ui-feel-trustworthy',
      title: 'What Makes UI Feel Trustworthy?',
      paragraphs: [
        'Trust starts when users understand what they are looking at. Clean layouts, readable typography, clear buttons, and predictable interactions help people feel in control.',
        'A trustworthy interface does not make users guess. It guides them naturally from one step to the next.',
      ],
    },
    {
      id: 'visual-consistency',
      title: 'Visual Consistency',
      paragraphs: [
        'When colors, spacing, icons, and components follow one clear system, the product feels more professional. Consistency makes the experience smoother and reduces confusion.',
        'Even small details - like button styles, hover states, and form fields - can affect how reliable your product feels.',
      ],
    },
    {
      id: 'clear-user-actions',
      title: 'Clear User Actions',
      paragraphs: [
        'Every screen should answer one simple question: what should the user do next?',
        'Strong visual hierarchy, clear call-to-action buttons, and simple navigation help users move through the product with less effort.',
      ],
    },
    {
      id: 'why-it-matters',
      title: 'Why It Matters',
      paragraphs: [
        'Users often judge a digital product within seconds. If the interface feels messy or unclear, they may leave before understanding the value of your service.',
        'Good UI design builds confidence, improves usability, and helps your brand feel more credible.',
      ],
    },
  ],
  ctaTitle: 'Ready to create an interface users can trust?',
  ctaText:
    'Start with clear, consistent UI design that helps people feel confident from the first click.',
};

const UiDesignTrustDesktop = () => (
  <NewsArticleDesktopTemplate article={article} />
);

export default UiDesignTrustDesktop;
