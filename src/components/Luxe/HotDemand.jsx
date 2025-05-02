
const demandItems = [
  {
    img: "https://images-static.nykaa.com/uploads/6b10facc-3b30-49af-82b7-9e63e68537a6.jpg?tr=cm-pad_resize,w-450",
    title: "JUICY LIPS",
    desc: "Glossy balms for a dewy shine & plump lips",
  },
  {
    img: "https://images-static.nykaa.com/uploads/df984e62-635f-4d6e-86d2-8c74d2193f2d.jpg?tr=cm-pad_resize,w-450",
    title: "SELF-SPOILING ESSENTIALS",
    desc: "Top-to-toe indulgences that bring the spa to your space",
  },
  {
    img: "https://images-static.nykaa.com/uploads/23469d47-0545-4efc-a332-9aa60b63ff6b.jpg?tr=cm-pad_resize,w-450",
    title: "BALLETCORE",
    desc: "Flushed cheeks, brushed brows & sheer coverage perfection",
  },
  {
    img: "https://images-static.nykaa.com/uploads/938637c0-a493-45e3-9ff6-f7bf5c4a3fe6.jpg?tr=cm-pad_resize,w-450",
    title: "SCALPCARE RITUALS",
    desc: "Nourish, wash and treat for healthier hair",
  },
  {
    img: "https://images-static.nykaa.com/uploads/b8af8e31-d3f3-40fa-832c-94ad23825d03.jpg?tr=cm-pad_resize,w-450",
    title: "REPAIR YOUR HAIR",
    desc: "Rejuvenate, Replenish, and Restore your hair health",
  },
  {
    img: "https://images-static.nykaa.com/uploads/b8af8e31-d3f3-40fa-832c-94ad23825d03.jpg?tr=cm-pad_resize,w-450",
    title: "REPAIR YOUR HAIR",
    desc: "Rejuvenate, Replenish, and Restore your hair health",
  },
  {
    img: "https://images-static.nykaa.com/uploads/b8af8e31-d3f3-40fa-832c-94ad23825d03.jpg?tr=cm-pad_resize,w-450",
    title: "REPAIR YOUR HAIR",
    desc: "Rejuvenate, Replenish, and Restore your hair health",
  },
];

const HotDemand = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        IN HOT DEMAND
      </h2>

      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {demandItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[220px] max-w-[220px] bg-white rounded-lg shadow-sm flex-shrink-0"
          >
            {index % 2 === 0 ? (
              <>
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-600 mt-2 inline-block hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="p-3">
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-600 mt-2 inline-block hover:underline"
                  >
                    Read More →
                  </a>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-b-lg w-full h-48 object-cover"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDemand;
