import TopBanner from "../components/home/TopBanner";
import Navbar from "../components/Navbar";
import BeautyBanner from '../components/BeautyAdvice/BeautyBanner';

import Footer from "../components/Footer";
import MakeupMarvels from "../components/BeautyAdvice/MakeupMarvels";
import CategoryLinks from "../components/CategoryLinks";


const BeautyAdvisoryPage = () => {
  return (
    <div>
         <TopBanner />
         <Navbar />
         <CategoryLinks />
         <BeautyBanner />
         <MakeupMarvels />

         <Footer/>
    </div>
  );
};

export default BeautyAdvisoryPage;
