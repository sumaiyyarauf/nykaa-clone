import { useState } from 'react';

const cards = [
  { id: 1, image: 'https://images-static.nykaa.com/uploads/d2fecf5e-704c-4a4e-b391-f5643563cccc.jpeg?tr=cm-pad_resize,w-900' },
  { id: 2, image: 'https://images-static.nykaa.com/uploads/7b38960f-98cd-4c80-919a-440f1fbebbda.jpg?tr=cm-pad_resize,w-900' },
  { id: 3, image: 'https://images-static.nykaa.com/uploads/368a4c54-5f6e-481f-a39c-9aed8612f0f7.jpg?tr=cm-pad_resize,w-900' },
  { id: 4, image: 'https://images-static.nykaa.com/uploads/13c61bc7-0d2c-41d0-86fd-362062912b77.gif' },
];

const BeautyBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Handle Next Slide
  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 300);
  };

  // Handle Previous Slide
  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Banner Image */}
      <div className="w-full h-70 bg-pink-300 flex items-center justify-center mb-4">
        <img
          src="https://images-static.nykaa.com/uploads/d0fbddb9-3a22-4b85-bb50-314eea8a9b41.jpg?tr=cm-pad_resize,w-1800"
          alt="Beauty Guides"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Section */}
      <div className="relative w-full overflow-hidden p-4">
        <h2 className="text-2xl font-bold mb-2">Whats Trending At Nykaa</h2>

        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="w-1/2 flex-shrink-0 p-2">
              <div className="bg-white shadow-md rounded-md overflow-hidden">
                <img
                  src={card.image}
                  className="w-full  object-cover"
                />
               
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Hidden while sliding) */}
        {!isSliding && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
            >
              ❯
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BeautyBanner;
