const HeroSection = () => {
    return (
      <div className="bg-white px-6 py-8">
        <h2 className="text-xl text-pink-600 font-semibold mb-4 text-center">
          Real MVPs At The Party
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="https://images.pexels.com/photos/20903471/pexels-photo-20903471/free-photo-of-all-day-matte-foundation-by-nykka-commercial-photo.jpeg" alt="Best in Beauty" className="rounded-xl shadow-md" />
          <img src="https://images.pexels.com/photos/29401618/pexels-photo-29401618/free-photo-of-elegant-display-of-luxury-perfume-bottles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cherry Girl Makeup" className="rounded-xl shadow-md" />
          <img src="https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Free Gifts" className="rounded-xl shadow-md" />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  