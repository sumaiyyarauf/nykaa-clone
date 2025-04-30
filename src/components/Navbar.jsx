import { useState } from "react";
import nykaa from "../assets/logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">

        <div className="flex items-center gap-2">
          <img className="h-12 sm:h-16" src={nykaa} alt="Nykaa Logo" />
        </div>

        <div className="hidden md:flex gap-5 text-sm text-gray-700 font-medium relative">
          <span className="hover:text-pink-600 cursor-pointer">Categories</span>

          <div
            className="relative"
            onMouseEnter={() => setShowBrands(true)}
            onMouseLeave={() => setShowBrands(false)}
          >
            <span className="hover:text-pink-600 cursor-pointer">Brands</span>

            {showBrands && (
              <div className="absolute top-full left-0 bg-white border shadow-lg p-4 w-[800px] flex flex-col gap-4 z-50">
                <div className="grid grid-cols-4 gap-4">
                  <img src="https://images-static.naikaa.com/media/wysiwyg/2024/wishcare-v1.png" alt="L'Oreal" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png" alt="Lakme" className="h-10" />
                  <img src="https://images-static.naikaa.com/media/wysiwyg/uiTools/2023-10/Lakme_118x55pxls.png" alt="Nivea" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/nykaa-cosmetics.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/mac.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/huda-beauty.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Biotique_new.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/natural-logo.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/FacesCanadaa.png" alt="" className="h-10" />
                  <img src="https://images-static.naikaa.com/media/wysiwyg/uiTools/2024-9/TFS-logo-1.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/colorbar-logoforui.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/nyx_New.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/LOTUS-HERBALS.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/2019/niveaa.png" alt="" className="h-10" />
                  <img src="https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/clinique.png" alt="" className="h-10" />

                </div>
              </div>
            )}
          </div>

          <span className="hover:text-pink-600 cursor-pointer">Luxe</span>
          <span className="hover:text-pink-600 cursor-pointer">Nykaa Fashion</span>
          <span className="hover:text-pink-600 cursor-pointer">Beauty Advice</span>
        </div>

        {/* Right: Search, Sign in, Bag, Hamburger */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search on Nykaa"
            className="hidden sm:block border rounded-full px-3 py-1 text-sm focus:outline-none w-32 sm:w-48 lg:w-64"
          />

          <button
            onClick={() => setShowLogin(true)}
            className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm hidden sm:block"
          >
            Sign in
          </button>

          {/* Bag Icon */}
          <div className="p-2 rounded-full hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 10-8 0v4M5 8h14l1 13H4L5 8z"
              />
            </svg>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm text-gray-700 bg-white shadow">
          <span className="hover:text-pink-600 cursor-pointer">Categories</span>
          <span className="hover:text-pink-600 cursor-pointer">Brands</span>
          <span className="hover:text-pink-600 cursor-pointer">Luxe</span>
          <span className="hover:text-pink-600 cursor-pointer">Nykaa Fashion</span>
          <span className="hover:text-pink-600 cursor-pointer">Beauty Advice</span>
          <input
            type="text"
            placeholder="Search on Nykaa"
            className="border rounded-full px-3 py-1 text-sm focus:outline-none mt-2"
          />
          <button
            onClick={() => setShowLogin(true)}
            className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm mt-2 w-fit"
          >
            Sign in
          </button>
        </div>
      )}

      {/* Login/Signup Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-start justify-center pt-28">
          <div className="bg-white rounded-lg shadow-xl w-80 p-4 relative">
            {/* Close */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-lg font-semibold text-gray-800">Login / Create Account</h2>
            <p className="text-sm text-gray-600 mt-1 mb-4">
              Register now and get <span className="font-semibold text-pink-600">1000 Nykaa reward points instantly!</span>
            </p>

            <button className="w-full bg-pink-600 text-white py-2 rounded-md mb-3 text-sm font-medium flex justify-between items-center px-3">
              Sign in with Mobile / Email <span>→</span>
            </button>

            <button className="w-full border py-2 rounded-md text-sm font-medium flex justify-center items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                className="h-4 w-4"
              />
              Google
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
