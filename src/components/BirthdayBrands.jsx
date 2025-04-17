const BirthdayBrands = () => {
    const brandData = [
      {
       
        img: "https://images-static.nykaa.com/creatives/da1f0d1b-8f82-41dc-8544-59d6ead427fc/default.jpg?tr=cm-pad_resize,w-900", 
      },
      {
        
        img: "https://images-static.nykaa.com/creatives/3bf4dc2a-7e89-461d-ab2f-9f199872aa2d/default.jpg?tr=cm-pad_resize,w-900", 
      },
      {
       
        img: "https://images-static.nykaa.com/creatives/9f4346d3-61b5-470d-9ed2-2696c2231373/default.jpg?tr=cm-pad_resize,w-900", 
      },
    ];
  
    return (
      <div className="w-full bg-pink-50   py-6 px-4">
        {/* Top Banner */}
        {/* <div className="bg-pink-500 text-white rounded-md px-4 py-3 mb-6 flex items-center justify-between">
          <div className="text-lg font-semibold">
            <span className="text-yellow-200">Extra 20% Off</span>{" "}
            On Your First App Purchase
          </div>
          <button className="bg-lime-300 text-black font-bold px-4 py-1 rounded-full text-sm shadow">
            USE CODE EXTRA20%
          </button>
        </div> */}
        <div>
          <img src="https://images-static.nykaa.com/uploads/dd133d2a-9b0e-411d-ab27-f189fab8cfa0.jpg?tr=cm-pad_resize,w-1800" alt="" />
        </div>
  
        <div className="text-center mb-6 relative">
        
         <img src="https://images-static.nykaa.com/uploads/a0e33842-83a4-4ece-9269-f08f43519aa2.jpg?tr=cm-pad_resize,w-1800" alt="" />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {brandData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
                <p className="text-pink-500 text-sm font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-6 relative">
        <img src="https://images-static.nykaa.com/uploads/e7485a30-22b2-45c1-981c-64da2eef25f5.png?tr=cm-pad_resize,w-1800" alt="" />
       </div>
      </div>
    );
  };
  
  export default BirthdayBrands;
  