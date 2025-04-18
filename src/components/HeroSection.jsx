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
    <div>
      

      <div className="block sm:hidden w-full">

<div className="">
  <img src="https://images-static.nykaa.com/uploads/4e649d68-c3bf-45c3-b1b5-bebaf729d556.gif" alt="" />

  {/* Category Icons */}
  <div className="grid grid-cols-4 ">
    <div className="">
      <img src="https://images-static.nykaa.com/uploads/72f4e1f5-bbce-4fce-b7d4-a0488cbfd9fc.jpg?tr=cm-pad_resize,w-225" alt="New" className="" />
    </div>

    <div className="">
      <img src="https://images-static.nykaa.com/uploads/bd03dc2f-d434-40e4-847d-bdebd91b4321.png?tr=cm-pad_resize,w-225" alt="Makeup" className="" />
    </div>

    <div className="">
      <img src="https://images-static.nykaa.com/uploads/62cd9a73-d5f9-46bb-81e6-5b8cea781e22.png?tr=cm-pad_resize,w-225" alt="Skincare" className="" />
    </div>

    <div className="">
      <img src="https://images-static.nykaa.com/uploads/98d90801-03d4-4a49-9421-7214f17b76cc.png?tr=cm-pad_resize,w-225" alt="Haircare" className="" />
    </div>
  </div>
  <img className="rounded-b-xl w-full" src="https://images-static.nykaa.com/uploads/5ef3d3cc-d36a-4958-8e21-c6720ef199b1.gif" alt="" />
</div>



<div className="bg-pink-50 py-3 px-4 flex flex-col items-center justify-between">
 <img className="rounded-md" src="https://images-static.nykaa.com/uploads/0439a945-29dc-478e-915a-8e2f8619227e.jpg?tr=cm-pad_resize,w-900" alt="" />
 <img className="rounded-md" src="https://images-static.nykaa.com/uploads/655a4b4f-618f-4caf-83fd-c276ca800e7e.jpg?tr=cm-pad_resize,w-900" alt="" />
</div>

<div className="bg-pink-100 py-3 px-4 text-sm">
  <p className="text-gray-600 mb-1">
    Ends In: <span className="font-semibold text-black">02h 56m 08s</span>
  </p>
  <div className="flex justify-between items-center">
    <div className="text-center">
      <h3 className="text-pink-700 font-bold text-base">UP TO 35% OFF</h3>
      <p className="text-xs">On Entire Range</p>
    </div>
    <p className="text-lg font-serif">LAKMĒ</p>
  </div>
</div>

</div>



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

    </div>
  );
};

export default HeroSection;
