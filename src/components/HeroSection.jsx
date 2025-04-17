const HeroSection = () => {
  const heroData = [
    {
      img: "https://images.pexels.com/photos/20903471/pexels-photo-20903471/free-photo-of-all-day-matte-foundation-by-nykka-commercial-photo.jpeg",
      alt: "Best in Beauty",
    },
    {
      img: "https://images.pexels.com/photos/29401618/pexels-photo-29401618/free-photo-of-elegant-display-of-luxury-perfume-bottles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Cherry Girl Makeup",
    },
    {
      img: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Free Gifts",
    },
  ];

  return (
    <div className="bg-white px-6 py-8">
      <h2 className="text-xl text-pink-600 font-semibold mb-6 text-center">
        Real MVPs At The Party
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {heroData.map((item, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-md group">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-pink-600 px-5 py-2 rounded-full font-medium text-sm shadow hover:bg-pink-100 transition-all">
              Shop Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
