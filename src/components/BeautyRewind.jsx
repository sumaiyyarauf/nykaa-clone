const BeautyRewind = () => {
    const rewindItems = [
      {
        year: "2025",
        title: "Current Obsession? Cherry Makeup",
        img: "https://images-static.nykaa.com/media/catalog/product/cherry-makeup.jpg", // Replace
      },
      {
        year: "2024",
        title: "Aqua Makeup Takes The Spotlight",
        img: "https://images-static.nykaa.com/media/catalog/product/aqua-makeup.jpg", // Replace
      },
      {
        year: "2023",
        title: "The Ultimate Hair Care Hero: Rosemary",
        img: "https://images-static.nykaa.com/media/catalog/product/rosemary-haircare.jpg", // Replace
      },
      {
        year: "2022",
        title: "The Multi-Tasking Maestro: Tints",
        img: "https://images-static.nykaa.com/media/catalog/product/tints.jpg", // Replace
      },
      {
        year: "2021",
        title: "Clean Beauty For The Win",
        img: "https://images-static.nykaa.com/media/catalog/product/clean-beauty.jpg", // Replace
      },
    ];
  
    return (
      <div className="w-full bg-white px-4 py-8">
        {/* Header Card */}
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          <div className="flex-shrink-0 w-48 bg-pink-100 p-4 rounded-xl text-center shadow">
            <h2 className="text-lg font-bold text-pink-600 mb-1">Beauty <span className="text-pink-700">Rewind</span><br /> with <span className="italic text-black">NYKAA</span></h2>
            <p className="text-sm text-gray-600 mb-3">
              Bringing you iconic products since 2013 so you can relive the biggest beauty moments.
            </p>
            <button className="text-black bg-white border border-gray-300 px-2 py-1 rounded-full text-sm hover:bg-gray-100">➜</button>
          </div>
  
          {rewindItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 bg-gradient-to-b from-pink-100 to-white p-4 rounded-xl text-center shadow"
            >
              <p className="font-bold text-xl mb-2 text-gray-800">{item.year}</p>
              <img
                src={item.img}
                alt={item.title}
                className="h-28 w-full object-contain mb-2"
              />
              <p className="text-sm text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BeautyRewind;
  