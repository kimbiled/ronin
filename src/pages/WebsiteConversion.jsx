import NewsArticleMobileTemplate from '../components/mobile/NewsArticleMobileTemplate';
import n2 from '../assets/desktop/n2.webp';

const article = {
  title: 'Website Design That Turns Visitors Into Clients',
  description:
    'A website is more than a digital business card. It should explain your value, guide visitors through your offer, and make it easy for them to take the next step.',
  date: 'Mar 20, 2026',
  readTime: '3 min read',
  image: n2,
  sections: [
    {
      id: 'first-impression-matters',
      title: 'First Impression Matters',
      paragraphs: [
        'The first screen of your website should quickly explain who you are, what you do, and why it matters. If visitors need too much time to understand your offer, they are more likely to leave.',
        'A strong hero section combines clear messaging, clean visuals, and a simple call to action.',
      ],
    },
    {
      id: 'clear-structure',
      title: 'Clear Structure',
      paragraphs: [
        'Good website design is built around the user’s journey. Each section should have a purpose: introduce the service, explain the benefits, show proof, and invite the visitor to contact you.',
        'When the structure is clear, the website feels easier to explore.',
      ],
    },
    {
      id: 'strong-visual-hierarchy',
      title: 'Strong Visual Hierarchy',
      paragraphs: [
        'Not every element should compete for attention. Headlines, images, buttons, and text blocks need a clear order. Visual hierarchy helps users scan the page quickly and understand the most important information first.',
      ],
    },
    {
      id: 'conversion-focused-design',
      title: 'Conversion-Focused Design',
      paragraphs: [
        'A well-designed website doesn’t pressure users. It simply removes friction.',
        'Clear buttons, short contact forms, strong service descriptions, and trust-building details can help turn visitors into real clients.',
      ],
    },
  ],
};

export default function WebsiteConversion() {
  return <NewsArticleMobileTemplate article={article} />;
}
