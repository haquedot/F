import Banners from "../components/Banners";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import TopSeller from "../components/TopSeller";
import banner_1 from '../assets/images/banner_1.svg'
import Deals from "../components/Deals";
import Cards from "../components/Cards";

function Home() {
    return (
        <>
            <HeroSection />
            <Slider />
            <Banners bannerSrc={banner_1}/>
            <TopSeller/>
            <Deals/>
            <Cards/>
        </>
    )
}

export default Home;