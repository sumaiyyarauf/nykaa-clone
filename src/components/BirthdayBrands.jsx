const BirthdayBrands = () => {
    const brandData = [
      {
        title: "Up To 35% Off",
        subtitle: "Shop Now →",
        img: "https://images.pexels.com/photos/9620360/pexels-photo-9620360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual URL
      },
      {
        title: "New Launch Alert",
        subtitle: "Shop Now →",
        img: "https://images.pexels.com/photos/25355739/pexels-photo-25355739/free-photo-of-cosmetics-spread-out-in-front-of-a-mirror-and-candelabra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace
      },
      {
        title: "Upto 30% Off",
        subtitle: "Shop Now →",
        img: "https://images.pexels.com/photos/12616235/pexels-photo-12616235.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace
      },
    ];
  
    return (
      <div className="w-full bg-white py-6 px-4">
        {/* Top Banner */}
        <div className="bg-pink-500 text-white rounded-md px-4 py-3 mb-6 flex items-center justify-between">
          <div className="text-lg font-semibold">
            <span className="text-yellow-200">Extra 20% Off</span>{" "}
            On Your First App Purchase
          </div>
          <button className="bg-lime-300 text-black font-bold px-4 py-1 rounded-full text-sm shadow">
            USE CODE EXTRA20%
          </button>
        </div>
  
        {/* Section Title */}
        <div className="text-center mb-6 relative">
          {/* Balloon Icons (decorative only, can be styled or animated) */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/4319/4319074.png"
            alt="balloon"
            className="w-6 h-6 absolute left-2 top-1"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-pink-600">
            Brands Bringing Their Birthday Best
          </h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4319/4319074.png"
            alt="balloon"
            className="w-6 h-6 absolute right-2 top-1"
          />
        </div>
  
        {/* Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {brandData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
                <p className="text-pink-500 text-sm font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BirthdayBrands;
  