import Header from "../components/Header"
import Hero from "../components/Hero";
import Content from "../components/Content";
import Review from "../components/Review";
import Projects from "../components/Projects";
import Proposal from "../components/Proposal";
import Leaders from "../components/Leaders";
import Carousel from "../components/Comments";
import Form from "../components/Form";
import News from "../components/News";
import Footer from "../components/Footer";

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
         <Carousel />
         <Form />
         <News />
         <Footer />
       </div>
    )
}

export default MobileLayout;