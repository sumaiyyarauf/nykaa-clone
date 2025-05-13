import TopBanner from "../components/home/TopBanner";
import Navbar from "../components/Navbar";
import CategoryLinks from "../components/CategoryLinks";
import HeroSection from "../components/home/HeroSection";
import FlashDealBanner from "../components/home/FlashDealBanner";
import BirthdayHeadliners from "../components/home/BirthdayHeadliners";
import BirthdayBrands from "../components/home/BirthdayBrands";
import FlashDealsSection from "../components/home/FlashDealsSection";
import BeautyRewind from "../components/home/BeautyRewind";
import Footer from "../components/Footer";
import NykaaLuxeBanner from "../components/home/NykaaLuxeBanner";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopBanner />
      <Navbar />
      <CategoryLinks />
      <HeroSection />
      <FlashDealBanner/>
      <BirthdayHeadliners/>
      <BirthdayBrands/>
      <FlashDealsSection/>
      <BeautyRewind/>
      <NykaaLuxeBanner/>
      <Footer/>
      
    </div>
  );
};

export default Home;
