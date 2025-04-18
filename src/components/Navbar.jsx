import { useState } from "react";
import nykaa from "../assets/logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img className="h-12 sm:h-16" src={nykaa} alt="Nykaa Logo" />
        </div>

        {/* Middle: Menu Items (Hidden on mobile) */}
        <div className="hidden md:flex gap-5 text-sm text-gray-700 font-medium">
          <span className="hover:text-pink-600 cursor-pointer">Categories</span>
          <span className="hover:text-pink-600 cursor-pointer">Brands</span>
          <span className="hover:text-pink-600 cursor-pointer">Luxe</span>
          <span className="hover:text-pink-600 cursor-pointer">Nykaa Fashion</span>
          <span className="hover:text-pink-600 cursor-pointer">Beauty Advice</span>
        </div>

        {/* Right: Search, Sign in, Bag */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search on Nykaa"
            className="hidden sm:block border rounded-full px-3 py-1 text-sm focus:outline-none w-32 sm:w-48 lg:w-64"
          />

          <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm hidden sm:block">
            Sign in
          </button>

          {/* Shopping Bag Icon */}
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

          {/* Hamburger Menu (Visible only on mobile) */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
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
          <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm mt-2 w-fit">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
