
import FifthSection from "../Sections/PagesSections/HomeSections/FifthSection";
import FinalSection from "../Sections/PagesSections/HomeSections/FinalSection";
import FourthSection from "../Sections/PagesSections/HomeSections/FourthSection";
import HeroSection from "../Sections/PagesSections/HomeSections/Hero";
import SecondSection from "../Sections/PagesSections/HomeSections/SecondSection";
import ThirdSection from "../Sections/PagesSections/HomeSections/ThirdSection";

const Home = () => {
    return (
        <>
            <div>
                <HeroSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection/>
                <FifthSection/>
                <FinalSection/>
            </div>
        </>

    )
}

export default Home;