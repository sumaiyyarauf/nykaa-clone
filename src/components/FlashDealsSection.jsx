import { useRef } from "react";

const FlashDealsSection = () => {
  const scrollRef = useRef(null);

  const brands = [
    { img: "https://images-static.nykaa.com/uploads/d3ca904a-c751-42a6-ba38-ce6771d08d14.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/62fe2ddc-dbe5-4a53-ab77-fa1c4dd03088.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/11a1e642-ec28-444d-8ccd-a7b2b336d7c0.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/28b6a1c8-ea0e-4fee-b113-1297a9dbf3e6.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/45c2fa48-b0ee-47c5-a9ae-be4f5a681eb3.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/1c4b48d3-3c92-44ad-83cd-89fe15f95222.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/5d43b7fb-78c4-498e-9db9-20905c549260.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/b2c734f5-b26d-4925-85f6-c78c75db61ba.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/28000994-84c3-46bc-8c91-c9a36fb0c81c.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/20bde1bb-37cf-4431-931c-dd3cc429544d.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/7bf9a417-7c83-4668-a385-60e33b1a3546.jpg?tr=cm-pad_resize,w-450" },
    { img: "https://images-static.nykaa.com/uploads/72039439-9ee4-4b25-ac2d-3be8ac260749.jpg?tr=cm-pad_resize,w-450" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white px-4 py-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Just 3 Days To Go</h2>

      <div className="p-6 mb-6">
        <img
          src="https://images-static.nykaa.com/uploads/0a0f773e-a58c-4426-9ace-27a8eb39a26b.gif"
          alt="SPF"
          className="w-full"
        />
      </div>

      <h3 className="text-lg font-bold text-center mb-4">Here Today Gone Tomorrow</h3>

      <div className="relative">

        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          →
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto px-10 py-2 scroll-smooth"
        >
          {brands.map((item, idx) => (
            <div key={idx} className="min-w-[200px]">
              <img
                src={item.img}
                alt={`brand-${idx}`}
                className="w-full h-[200px] object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashDealsSection;
