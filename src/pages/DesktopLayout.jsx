import HeaderDesktop from '../components/desktop/HeaderDesktop';
import HeroDesktop from '../components/desktop/HeroDesktop';
import ContentDesktop from '../components/desktop/ContentDesktop';
import CompanyDesktop from '../components/desktop/CompanyDesktop';
import ReviewDesktop from '../components/desktop/ReviewDesktop';
import ProjectsDesktop from '../components/desktop/ProjectsDesktop';
import ProposalDesktop from '../components/desktop/ProposalDesktop';
import LeadersDesktop from '../components/desktop/LeadersDesktop';
import CommentsDesktop from '../components/desktop/CommentsDesktop';
import FormDesktop from '../components/desktop/FormDesktop';
import NewsDesktop from '../components/desktop/NewsDesktop';
import FooterDesktop from '../components/desktop/FooterDesktop';
import CookieBanner from '../components/CookieBanner';
import HeroVideo from '../components/mobile/HeroVideo';

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
