const BirthdayHeadliners = () => {
    const products = [
      {
        name: "KUMKUMADI",
        img: "https://images-static.nykaa.com/uploads/42838dd1-73f0-4a7e-8e6c-8465286496f8.jpg?tr=cm-pad_resize,w-450", 
      },
      {
        name: "URJASARA - ONLY AT NYKAA",
        img: "https://images-static.nykaa.com/uploads/580dc0c6-5825-43ae-b675-9c6ca1c74371.jpg?tr=cm-pad_resize,w-450",
      },
      {
        name: "AMARRUPA",
        img: "https://images-static.nykaa.com/uploads/30eedd65-6f65-4297-9d58-2362095a1e55.jpg?tr=cm-pad_resize,w-450", 
      },
    ];
  
    return (
      <div className="w-full px-4 rounded-t-3xl">
        <div className="flex justify-center items-center mb-4 relative">
         <img src="https://images-static.nykaa.com/uploads/b1370219-0ab9-40f5-9870-b67b5bb506c9.jpg?tr=cm-pad_resize,w-1800" alt="" />
         
        </div>
  
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg mb-10">
          <div className="relative">
            <img
              src="https://images-static.nykaa.com/uploads/4baa7915-49fa-4b34-894c-59ff3fc9800c.jpg?tr=cm-pad_resize,w-1800"
              alt="Kama Ayurveda"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 text-white bg-black bg-opacity-20">
              <div className="flex justify-between items-start">
               
                <span className="text-white font-semibold text-sm tracking-widest">
                  NEW LAUNCH
                </span>
                <button className="mt-6 w-fit bg-white text-pink-600 px-6 py-2 rounded-full font-medium text-sm shadow hover:bg-pink-100 transition-all">
                Shop Now →
              </button>
              </div>
              
              
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <h3 className="text-sm font-semibold text-gray-800 py-3 px-2">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BirthdayHeadliners;
  