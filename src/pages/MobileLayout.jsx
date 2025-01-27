import Header from "../components/Header"
import Hero from "../components/Hero";
import Content from "../components/Content";
import Review from "../components/Review";
const MobileLayout = () => {
    return(
       <div className="flex flex-col items-center gap-8">
         <Header />
         <Hero />
         <Content />
         <Review />
       </div>
    )
}

export default MobileLayout;