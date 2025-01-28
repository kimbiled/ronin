import Header from "../components/Header"
import Hero from "../components/Hero";
import Content from "../components/Content";
import Review from "../components/Review";
import Projects from "../components/Projects";
import Proposal from "../components/Proposal";
import Leaders from "../components/Leaders";
const MobileLayout = () => {
    return(
       <div className="flex flex-col items-center gap-8">
         <Header />
         <Hero />
         <Content />
         <Review />
         <Projects />
         <Proposal />
         <Leaders />
       </div>
    )
}

export default MobileLayout;