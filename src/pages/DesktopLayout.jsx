import HeaderDesktop from '../components/HeaderDesktop';
import HeroDesktop from '../components/HeroDesktop';
import ContentDesktop from '../components/ContentDesktop';
import CompanyDesktop from '../components/CompanyDesktop';
import ReviewDesktop from '../components/ReviewDesktop';
import ProjectsDesktop from '../components/ProjectsDesktop';
import ProposalDesktop from '../components/ProposalDesktop';
import LeadersDesktop from '../components/LeadersDesktop';
import CommentsDesktop from '../components/CommentsDesktop';
import FormDesktop from '../components/FormDesktop';
import NewsDesktop from '../components/NewsDesktop';
import FooterDesktop from '../components/FooterDesktop';
import CookieBanner from '../components/CookieBanner';
import HeroVideo from '../components/HeroVideo';

const DesktopLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <HeaderDesktop />
        <HeroDesktop />
        <HeroVideo src="/videos/hero.mp4" poster="/images/hero-poster.jpg" />
        <ContentDesktop />
        <CompanyDesktop />
        <ReviewDesktop />
        <ProjectsDesktop />
        <ProposalDesktop />
        <LeadersDesktop />
        <CommentsDesktop />
        <FormDesktop />
        <NewsDesktop />
        <FooterDesktop />
      </div>

      {/* Переносим CookieBanner ВНЕ основного контейнера */}
      <CookieBanner />
    </>
  );
};

export default DesktopLayout;
