

const LuxeSection = () => {
  const categories = [
    {img: 'https://images-static.nykaa.com/uploads/ef715c28-0655-48a1-b681-93ddac4adb71.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/4333dd27-7c67-42f2-91e3-01a1ba028045.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/1113bf7d-df27-4685-af0d-7a833c430139.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/82513286-5817-4b0d-b283-5e8209a35145.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/dfd95d18-23f1-43ca-9797-85d4dda4903e.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/754c88e0-f827-44f1-8421-debc8b00a358.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/40f57eb2-ac54-4033-9c0a-43cfa76a1c62.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/22145d3f-1cc4-42fe-8aed-9bc11da76ac3.jpg?tr=cm-pad_resize,w-225' },
    {img: 'https://images-static.nykaa.com/uploads/89b94a1c-e968-43ab-b435-335d15a4dc51.jpg?tr=cm-pad_resize,w-225' },
  ];

  const picks = [
    {img: 'https://images-static.nykaa.com/uploads/bb83736e-0a68-4e91-9fba-37954c9a1393.jpg?tr=cm-pad_resize,w-450' },
    {img: 'https://images-static.nykaa.com/uploads/c6314e56-1bde-40b5-8d3b-cf57c92ba228.jpg?tr=cm-pad_resize,w-450' },
    {img: 'https://images-static.nykaa.com/uploads/b4b567c2-2983-4ed7-8eb9-035df6daa306.jpg?tr=cm-pad_resize,w-450' },
    {img: 'https://images-static.nykaa.com/uploads/87095d48-bfe6-439b-96f9-c8e8f76da7a3.jpg?tr=cm-pad_resize,w-450' },
    {img: 'https://images-static.nykaa.com/uploads/4bf38306-0403-4052-b981-c55715c1907b.jpg?tr=cm-pad_resize,w-450' },
    {img: 'https://images-static.nykaa.com/uploads/beefa602-9b67-4c4a-b588-d810129a6a55.jpg?tr=cm-pad_resize,w-450' },
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {categories.map((item, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <img
                src={item.img}
                className="w-20 h-20 md:w-auto md:h-auto rounded-xl object-cover mx-auto"
              />

            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-center mb-4">EDITORS PICKS</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">
            {picks.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-auto">
                <img
                  src={item.img}
                  className="w-full h-auto max-h-72 md:max-h-96 object-cover rounded-lg"
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxeSection;
