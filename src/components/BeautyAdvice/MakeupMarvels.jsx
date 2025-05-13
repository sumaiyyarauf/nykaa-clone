import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerImages = [
  { id: 1, title: 'Take the Supplement Finder Quiz', image: 'https://images-static.nykaa.com/uploads/7a322e2d-6c52-4fd7-88a4-7d7dd9f50d3f.jpg?tr=cm-pad_resize,w-1800' },
  { id: 2, title: 'Find Your Perfect Match', image: 'https://images-static.nykaa.com/uploads/78917668-4067-4c07-9915-12b58a695c33.jpg?tr=cm-pad_resize,w-1800' },
];

const marvelCards = [
  { id: 1, image: 'https://images-static.nykaa.com/uploads/88c48524-5bc9-436e-bbe1-e799463abd6b.gif' },
  { id: 2, image: 'https://images-static.nykaa.com/uploads/49168925-6aea-4e54-ae89-02a8a3f5a38c.jpg?tr=cm-pad_resize,w-900' },
  { id: 3, image: 'https://images-static.nykaa.com/uploads/88e4f38e-049e-491d-bb61-8562fc60d468.jpg?tr=cm-pad_resize,w-900' },
  { id: 4, image: 'https://images-static.nykaa.com/uploads/218c8959-d577-4af7-8790-aaec17261db1.gif' },
];

const MakeupMarvels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prev) => (prev + 1) % marvelCards.length);
    }, 300);
  };

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prev) => (prev - 1 + marvelCards.length) % marvelCards.length);
    }, 300);
  };

  return (
    <div className="p-4 bg-gray-50">
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Find Your Perfect Match</h2>
        <div className="flex gap-4">
          {bannerImages.map((banner) => (
            <div key={banner.id} className="flex-1 bg-pink-200 rounded overflow-hidden shadow-md">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-20 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <h2 className="text-2xl font-bold mb-2">Makeup Marvels</h2>

        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {marvelCards.map((card) => (
            <div key={card.id} className="w-1/2 flex-shrink-0 p-2">
              <div className="bg-white shadow-md rounded-md overflow-hidden">
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full h-50 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {!isSliding && (
          <>
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-pink-100 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-pink-600" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-pink-100 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-pink-600" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MakeupMarvels;
