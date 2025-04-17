const FlashDealsSection = () => {
    const brands = [
      {
        brand: "Generic",
        discount: "min 25% off",
        tagline: "On Makeup",
        img: "https://images.pexels.com/photos/4110350/pexels-photo-4110350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace
      },
      {
        brand: "MAYBELLINE NEW YORK",
        discount: "upto 40% off",
        tagline: "On Trending Picks",
        img: "https://images.pexels.com/photos/25533534/pexels-photo-25533534/free-photo-of-colorful-lipsticks-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace
      },
      {
        brand: "L'ORÉAL PARIS",
        discount: "upto 35% off",
        tagline: "On Skincare & Haircare",
        img: "https://images.pexels.com/photos/6767774/pexels-photo-6767774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace
      },
      {
        brand: "smashbox",
        discount: "Primer On ₹1500",
        tagline: "3 Free Gifts On Mascara",
        img: "https://images.pexels.com/photos/4841454/pexels-photo-4841454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace
      },
      {
        brand: "LANEIGE",
        discount: "upto 30% off",
        tagline: "For Glowing Skin",
        img: "https://images.pexels.com/photos/15510370/pexels-photo-15510370/free-photo-of-choice-of-cosmetics.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace
      },
      {
        brand: "IKON",
        discount: "Flat 28% Off",
        tagline: "Men’s Picks",
        img: "https://images.pexels.com/photos/31552022/pexels-photo-31552022/free-photo-of-luxury-skincare-cream-with-silk-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace
      },
    ];
  
    return (
      <div className="w-full bg-white px-4 py-6">
        {/* Countdown Text */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">Just 3 Days To Go</h2>
  
        {/* SPF Highlight Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-yellow-100 rounded-lg p-6 mb-6 relative overflow-hidden">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold text-blue-800 mb-2">
              Experience SPF Like never before!
            </p>
            <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-50 transition">
              Mark My Calendar
            </button>
          </div>
          <img
            src="https://images-static.nykaa.com/media/catalog/product/spf-glowscreen.jpg" // Replace
            alt="SPF"
            className="w-full md:w-1/2 mt-4 md:mt-0"
          />
        </div>
  
        {/* Brand Offers */}
        <h3 className="text-lg font-bold text-center mb-4">Here Today Gone Tomorrow</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {brands.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-3 text-center shadow hover:shadow-md transition">
              <img
                src={item.img}
                alt={item.brand}
                className="w-full h-28 object-contain mb-2"
              />
              <h4 className="text-sm font-bold text-gray-800">{item.discount}</h4>
              <p className="text-xs text-gray-500">{item.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FlashDealsSection;
  