import TopBanner from "../components/home/TopBanner";
import Navbar from "../components/Navbar";
import FilterSidebar from '../components/NykaaFashion/FilterSidebar';
import ProductGrid from '../components/NykaaFashion/ProductGrid';
import Footer from "../components/Footer";
import CategoryLinks from "../components/CategoryLinks";
import ChatHelp from "../components/ChatHelp";

const NykaaFashion = () => {
  return (
    <>
    <TopBanner />
    <Navbar />
    <CategoryLinks />
    <ChatHelp/>

    <div className="flex flex-col md:flex-row">

      <div className="hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6">
        <FilterSidebar />
      </div>
  
      <div className="w-full md:w-3/4 lg:w-4/5 xl:w-5/6 p-4 ">
        <ProductGrid />
      </div>
    </div>

    <Footer/>

    </>
  );
};

export default NykaaFashion;
