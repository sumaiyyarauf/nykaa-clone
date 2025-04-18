const BeautyRewind = () => {
    const rewindItems = [
      // {
      //   year: "2025",
      //   title: "Current Obsession? Cherry Makeup",
      //   img: "https://images-static.nykaa.com/uploads/58169b4e-7176-449e-9b39-c3723fb69815.jpg?tr=cm-pad_resize,w-450", // Replace
      // },
      // {
      //   year: "2024",
      //   title: "Aqua Makeup Takes The Spotlight",
      //   img: "https://images-static.nykaa.com/media/catalog/product/aqua-makeup.jpg", // Replace
      // },
      // {
      //   year: "2023",
      //   title: "The Ultimate Hair Care Hero: Rosemary",
      //   img: "https://images-static.nykaa.com/media/catalog/product/rosemary-haircare.jpg", // Replace
      // },
      // {
      //   year: "2022",
      //   title: "The Multi-Tasking Maestro: Tints",
      //   img: "https://images-static.nykaa.com/media/catalog/product/tints.jpg", // Replace
      // },
      // {
      //   year: "2021",
      //   title: "Clean Beauty For The Win",
      //   img: "https://images-static.nykaa.com/media/catalog/product/clean-beauty.jpg", // Replace
      // },


      {
        img: "https://images-static.nykaa.com/uploads/58169b4e-7176-449e-9b39-c3723fb69815.jpg?tr=cm-pad_resize,w-450", 
      },
      {
        img: "https://images-static.nykaa.com/uploads/806e71c7-c4a9-4bf1-92fd-7e7324162deb.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/9b38d744-cae9-4efb-a637-e2617086351d.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/99ff6858-b60e-4e0a-8158-7262eb0b206c.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/ab7feb15-15f5-47b3-a278-fa0f33a85ad9.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/2fc02104-7445-4eab-a193-9d2eb43a9705.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/d0512f2f-1b47-4ba3-846d-82d917da5a1d.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/f8a048cc-0bad-4042-aad4-7ae475d16d3e.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/a233baa1-cdfb-4294-97d1-176e5d60f804.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/a300798d-d717-479f-b90b-63e1bca14231.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/58b0364c-4a20-4477-94e8-dc4715f2122a.jpg?tr=cm-pad_resize,w-450",
      },
      {
        img: "https://images-static.nykaa.com/uploads/7ad686fe-6990-4a5b-bd41-563dbb2fa898.jpg?tr=cm-pad_resize,w-450",
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
              className="flex-shrink-0 w-48 rounded-xl shadow"
            >
              <p className="font-bold text-xl mb-2 text-gray-800">{item.year}</p>
              <img
                src={item.img}
                alt={item.title}
                className=" rounded-xl w-full object-contain "
              />
              <p className="text-sm text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BeautyRewind;
  