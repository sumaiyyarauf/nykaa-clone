import TopBanner from "../components/home/TopBanner";
import Navbar from "../components/Navbar";
import CategoryLinks from "../components/CategoryLinks";
import LuxeHome from "../components/Luxe/LuxeHome";
import LuxeSection from "../components/Luxe/LuxeSection";
import BeautyInFocus from "../components/Luxe/BeautyInFocus";
import HotDemand from "../components/Luxe/HotDemand";
import Luxury from "../components/Luxe/Luxury";


import Footer from "../components/Footer";
const LuxePage = () => {
    return (
      <div>
        <TopBanner />
        <Navbar />
        <CategoryLinks />
        <LuxeHome/>
        <LuxeSection/>
        <BeautyInFocus/>
        <HotDemand/>
        <Luxury/>

        <Footer/>
      </div>
    );
  };
  
  export default LuxePage;
  