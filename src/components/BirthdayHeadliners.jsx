const BirthdayHeadliners = () => {
    const products = [
      {
        name: "KUMKUMADI",
        img: "https://images.pexels.com/photos/4938449/pexels-photo-4938449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with your image URL
      },
      {
        name: "URJASARA - ONLY AT NYKAA",
        img: "https://images.pexels.com/photos/27363151/pexels-photo-27363151/free-photo-of-woman-hand-holding-vial-of-body-lotion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with your image URL
      },
      {
        name: "AMARRUPA",
        img: "https://images.pexels.com/photos/2994102/pexels-photo-2994102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with your image URL
      },
    ];
  
    return (
      <div className="w-full bg-gradient-to-b from-pink-50 to-white py-6 px-4 rounded-t-3xl">
        {/* Header */}
        <div className="flex justify-center items-center mb-4 relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706175.png"
            alt="cupcake"
            className="w-8 h-8 absolute left-4 top-0"
          />
          <h2 className="text-2xl font-bold text-purple-700 drop-shadow-sm">
            Birthday Headliners
          </h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
            alt="cupcake"
            className="w-8 h-8 absolute right-4 top-0"
          />
        </div>
  
        {/* Hero Banner */}
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg mb-10">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Kama Ayurveda"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 text-white bg-black bg-opacity-20">
              <div className="flex justify-between items-start">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/35/Kama_Ayurveda_Logo.png"
                  alt="Kama Logo"
                  className="h-10"
                />
                <span className="text-white font-semibold text-sm tracking-widest">
                  NEW LAUNCH
                </span>
              </div>
              <div className="mt-20">
                <p className="text-4xl font-light mb-2">
                  98<span className="text-2xl align-top">%</span>
                </p>
                <p className="text-2xl font-light">younger looking skin</p>
              </div>
              <button className="mt-6 w-fit bg-white text-pink-600 px-6 py-2 rounded-full font-medium text-sm shadow hover:bg-pink-100 transition-all">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
  
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <h3 className="text-sm font-semibold text-gray-800 py-3 px-2">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BirthdayHeadliners;
  