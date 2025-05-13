import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BirthdayBrands = () => {
  const scrollRef = useRef(null);

  const brandData = [
    { img: "https://images-static.nykaa.com/creatives/da1f0d1b-8f82-41dc-8544-59d6ead427fc/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/3bf4dc2a-7e89-461d-ab2f-9f199872aa2d/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/9f4346d3-61b5-470d-9ed2-2696c2231373/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/8d3310fa-8385-4641-b1c2-7c201439149e/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/119f896d-4d3d-4143-8258-0736706f713b/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/2390aa0f-4771-4a15-b862-9cb212807ff4/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/9d19ec83-5e6d-40d6-95ce-5bb78bbbe4a7/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/fef76029-3445-418f-a796-ab26bfb1aa3e/default.jpg?tr=cm-pad_resize,w-900" },
    { img: "https://images-static.nykaa.com/creatives/7d1eebbc-1a33-4a6a-bafe-aeb1fd0d3502/default.jpg?tr=cm-pad_resize,w-900" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-pink-50 py-6 px-4">
      <div className="mb-6">
        <img src="https://images-static.nykaa.com/uploads/dd133d2a-9b0e-411d-ab27-f189fab8cfa0.jpg?tr=cm-pad_resize,w-1800" alt="" />
      </div>

      <div className="text-center mb-6 relative">
        <img src="https://images-static.nykaa.com/uploads/a0e33842-83a4-4ece-9269-f08f43519aa2.jpg?tr=cm-pad_resize,w-1800" alt="" />
      </div>


      <div className="grid grid-cols-1 gap-4 xl:hidden">
        {brandData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={item.img} alt="" className="w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="hidden xl:block relative max-w-6xl mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full hover:bg-pink-100"
        >
          <ChevronLeft className="text-pink-600" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full hover:bg-pink-100"
        >
          <ChevronRight className="text-pink-600" />
        </button>
        
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {brandData.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[300px] rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={item.img} alt="" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <img src="https://images-static.nykaa.com/uploads/e7485a30-22b2-45c1-981c-64da2eef25f5.png?tr=cm-pad_resize,w-1800" alt="" />
      </div>
    </div>
  );
};

export default BirthdayBrands;
