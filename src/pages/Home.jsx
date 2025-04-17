import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import CategoryLinks from "../components/CategoryLinks";
import HeroSection from "../components/HeroSection";
import FlashDealBanner from "../components/FlashDealBanner";
import BirthdayHeadliners from "../components/BirthdayHeadliners";
import BirthdayBrands from "../components/BirthdayBrands";
import FlashDealsSection from "../components/FlashDealsSection";
import BeautyRewind from "../components/BeautyRewind";
import Footer from "../components/Footer";
import NykaaLuxeBanner from "../components/NykaaLuxeBanner";

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
