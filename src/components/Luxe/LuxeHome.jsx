import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images-static.nykaa.com/uploads/b4625c2e-e97a-4ab6-978c-59c0278a7fc6.gif',
  'https://images-static.nykaa.com/uploads/77fc0c00-a4d1-4b13-83bf-34fd9d84d101.jpg?tr=cm-pad_resize,w-1800',
  'https://images-static.nykaa.com/uploads/941a8ef1-41d0-4171-87a1-d0d1813d73c2.jpg?tr=cm-pad_resize,w-1800',
  'https://images-static.nykaa.com/uploads/028fd39b-48bd-496c-ac49-5e82df671842.jpg?tr=cm-pad_resize,w-1800',
  'https://images-static.nykaa.com/uploads/ce6ca6ff-a5ba-40cb-b00e-bd51fc3ca750.jpg?tr=cm-pad_resize,w-1800',
  'https://images-static.nykaa.com/uploads/27211a6a-c0bc-4edd-891a-208a4b742fc6.jpg?tr=cm-pad_resize,w-1800',
];

const LuxeHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const startAutoSlide = () => {
    slideInterval.current = setInterval(nextSlide, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div 
      className="relative w-full h-[440px] overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default LuxeHome;
