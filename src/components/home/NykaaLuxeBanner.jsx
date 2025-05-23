
const NykaaLuxeBanner = () => {
  const products = [
    {
      id: 1,
      name: "Yves Saint Laurent The Inks Blur Liquid Lipstick",
      size: "5.5ml",
      price: "₹4000",
      img: "https://images-static.nykaa.com/media/catalog/product/a/d/ad0b50c5056446641418_2.jpg",
    },
    {
      id: 2,
      name: "Yves Saint Laurent The Inks Vinyl Cream Liquid Lipstick",
      size: "5.5ml",
      price: "₹4000",
      img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/b/1/b13841c5060542728485.jpg",
    },
    {
      id: 3,
      name: "Yves Saint Laurent The Inks Blur Liquid Lipstick",
      size: "5.5ml",
      price: "₹4000",
      img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/b/1/b13841cCHAAA00000372.jpg",
    },
    {
      id: 4,
      name: "Yves Saint Laurent The Inks Vinyl Cream Liquid Lipstick",
      size: "5.5ml",
      price: "₹4000",
      img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/f/8f5d9215056446651868_1.jpg",
    },
    {
      id: 5,
      name: "Yves Saint Laurent The Inks Blur Liquid Lipstick",
      size: "5.5ml",
      price: "₹4000",
      img: "https://images-static.nykaa.com/media/catalog/product/c/f/cf1bc815056446651394_1.jpg",
    },
    {
      id: 6,
      name: "Yves Saint Laurent The Inks Blur Liquid Lipstick",
      size: "5.5ml",
      price: "₹4000",
      img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/f/cf1bc815056446651851_1.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* HDFC Banner */}
      <div className="bg-gradient-to-r from-[#fce4ec] to-[#f8bbd0] p-4 flex items-center justify-between">
        <img src="https://images-static.nykaa.com/uploads/939b2174-140b-433d-8982-1098fc118342.jpg?tr=cm-pad_resize,w-1800" alt="" />
      </div>

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('https://images.pexels.com/photos/8558548/pexels-photo-8558548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">Meet the new Liquid Icons</h2>
          <p className="text-white text-lg">YSL The Inks Blur & Vinyl Cream Finishes</p>
        </div>
        <div className="absolute top-8 left-10">
          <h1 className="text-white text-4xl font-extrabold italic tracking-widest">NYKAA <span className="font-normal">LUXE</span></h1>
          <p className="text-white text-sm">150+ Cult Favourite Brands</p>
        </div>
      </div>

      {/* Product Cards Scroll Section */}
      <div className="py-8 px-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
        <div className="inline-flex gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[180px] bg-white rounded-xl shadow-sm p-3 border"
            >
              <div className="text-xs text-gray-500 mb-2 font-semibold">NEW</div>
              <img
                src={product.img}
                alt={product.name}
                className="h-36 w-auto object-contain mx-auto mb-3"
              />
              <h3 className="text-sm font-medium text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.size}</p>
              <p className="text-base font-semibold mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NykaaLuxeBanner;
