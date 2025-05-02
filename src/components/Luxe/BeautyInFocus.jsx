
const BeautyInFocus = () => {
  const productSections = [
    {
      img: "https://images-static.nykaa.com/uploads/5f607d5f-bac5-425e-bef8-2c0e50877206.jpg?tr=cm-pad_resize,w-900", // Replace with actual paths
      brand: "LANEIGE",
      title: "Bouncy and Firm Range",
      subtext: "Skincare Routine",
    },
    {
      img: "https://images-static.nykaa.com/uploads/1c50f05f-3ee6-474b-a361-3177de6978b0.jpg?tr=cm-pad_resize,w-900",
      brand: "SOL DE JANEIRO",
      title: "Firms Skin",
      subtext: "1 Sold in 6 Seconds",
    },
    {
      img: "https://images-static.nykaa.com/uploads/70b2de33-5024-43c0-91ad-10ae6a60385c.jpg?tr=cm-pad_resize,w-900",
      brand: "LANCÔME",
      title: "Free Gifts",
      subtext: "New On Nykaa",
    },
    {
      img: "https://images-static.nykaa.com/uploads/cb976bcc-276b-4f8c-8641-b45f1bb185a0.jpg?tr=cm-pad_resize,w-1800",
      brand: "Sulwhasoo",
      title: "No Heat Damage",
      subtext: "3X Straighter Hair in One Stroke",
    },
  ];

  return (
    <div className="bg-white text-center py-8 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">BEAUTY IN FOCUS</h2>

      <div className="max-w-4xl mx-auto mb-4">
        <img
          src="https://images-static.nykaa.com/uploads/5c6fed41-adbd-42c7-a26f-a41eced6501b.jpg?tr=cm-pad_resize,w-900"
          alt="Laneige Banner"
          className="rounded-xl mx-auto"
        />
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mt-4">LANEIGE</h3>
        <p className="text-lg font-medium mt-2">Bouncy and Firm Range</p>
        <p className="text-sm text-gray-500">Skincare Routine</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {productSections.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.img}
              alt={item.brand}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyInFocus;
