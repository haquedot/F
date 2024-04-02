import Banners from "../components/Banners";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import TopSeller from "../components/TopSeller";
import banner_1 from '../assets/images/banner_1.svg'

function Home() {
    return (
        <>
            <HeroSection />
            <Slider />
            <Banners bannerSrc={banner_1}/>
            <TopSeller/>
        </>
    )
}

export default Home;