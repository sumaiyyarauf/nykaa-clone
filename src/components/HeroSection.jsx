import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const HeroSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollContainer = scrollRef.current;
    const scrollAmount = 320; 

    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const heroData = [
    {
      img: "https://images-static.nykaa.com/creatives/5fc79a88-167c-4dfa-98ea-f4d784834c2c/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Best in Beauty",
    },
    {
      img: "https://images-static.nykaa.com/creatives/16b1612d-3394-44c1-8603-f5b60f034d0d/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Cherry Girl Makeup",
    },
    {
      img: "https://images-static.nykaa.com/creatives/ef76e5cc-d19d-40f8-b2c1-8678d4ec15b5/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Free Gifts",
    },
    {
      img: "https://images-static.nykaa.com/creatives/f8aa6a7b-b506-4cf2-adf5-f9b67ff36e1b/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Free Gifts",
    },
    {
      img: "https://images-static.nykaa.com/creatives/b415731f-2562-493d-a410-383b0cbfd789/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Free Gifts",
    },
    {
      img: "https://images-static.nykaa.com/creatives/d84a5dac-620e-46f9-8fae-d0df823d009a/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Free Gifts",
    },
  ];

  return (
    <div className="bg-white px-6 py-8 relative">
      <img className="" src="https://images-static.nykaa.com/uploads/357dd6c4-3331-4373-a842-bf3ba09dd6ef.jpg?tr=cm-pad_resize,w-1800" alt="" />

      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-pink-100 transition-all"
      >
        <ChevronLeft className="w-5 h-5 text-pink-600" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-pink-100 transition-all"
      >
        <ChevronRight className="w-5 h-5 text-pink-600" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll space-x-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onWheel={(e) => e.preventDefault()}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {heroData.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[300px] max-w-sm flex-shrink-0 rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
