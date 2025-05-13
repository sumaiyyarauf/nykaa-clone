import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Luxury = [
  {
    id: 1,
    title: "JUICY LIPS",
    desc: "Glossy balms for a dewy shine & plump lips",
    img: "/images/juicy-lips.png",
    reverse: false,
  },
  {
    id: 2,
    title: "SELF-SPOILING ESSENTIALS",
    desc: "Top-to-toe indulgences that bring the spa to your space",
    img: "/images/self-spoiling.png",
    reverse: true,
  },
  {
    id: 3,
    title: "BALLETCORE",
    desc: "Flushed cheeks, brushed brows & sheer coverage perfection",
    img: "/images/balletcore.png",
    reverse: false,
  },
  {
    id: 4,
    title: "SCALPCARE RITUALS",
    desc: "Nourish, wash and treat for healthier hair",
    img: "/images/scalpcare.png",
    reverse: true,
  },
  {
    id: 5,
    title: "REPAIR YOUR HAIR",
    desc: "Rejuvenate, Replenish, and Restore your hair health",
    img: "/images/repair-hair.png",
    reverse: false,
  },
];

export default function HotDemandSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white py-6">
      <h2 className="text-center text-2xl font-bold mb-4">IN HOT DEMAND</h2>
      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-10 bg-white rounded-full shadow p-2"
        >
          <ArrowLeft />
        </button>

        <div
          ref={sliderRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide px-8"
        >
          <div className="flex gap-4">
            {Luxury.map((card) => (
              <div
                key={card.id}
                className="min-w-[200px] max-w-[200px] bg-gray-100 rounded-lg shadow-md overflow-hidden"
              >
                {!card.reverse ? (
                  <>
                    <img src={card.img} alt={card.title} className="w-full h-36 object-cover" />
                    <div className="p-3">
                      <h3 className="text-sm font-semibold">{card.title}</h3>
                      <p className="text-xs mt-1">{card.desc}</p>
                      <p className="text-blue-500 text-sm mt-2">Read More →</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold">{card.title}</h3>
                      <p className="text-xs mt-1">{card.desc}</p>
                      <p className="text-blue-500 text-sm mt-2">Read More →</p>
                    </div>
                    <img src={card.img} alt={card.title} className="w-full h-36 object-cover" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-10 bg-white rounded-full shadow p-2"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
