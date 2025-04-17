const Navbar = () => {
    return (
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
        <div className="text-pink-600 text-2xl font-bold">NYKAA</div>
  
        <div className="hidden md:flex gap-5 text-sm">
          <span>Categories</span>
          <span>Brands</span>
          <span>Luxe</span>
          <span>Nykaa Fashion</span>
          <span>Beauty Advice</span>
        </div>
  
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search on Nykaa"
            className="border rounded-full px-3 py-1 text-sm focus:outline-none"
          />
  
          <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm ml-2">
            Sign in
          </button>
  
          {/* SVG for shopping bag */}
          <div className="ml-3">
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
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  