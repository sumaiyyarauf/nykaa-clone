
const FilterSidebar = () => {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 bg-white p-4 fixed md:static h-full">
      <h2 className="text-xl font-semibold mb-4">Indianwear</h2>
      <div className="space-y-2">
        {['Category', 'Size', 'Brand', 'Price', 'Discount', 'Product Label', 'Launched In'].map((item) => (
          <div key={item} className="border-b py-2">
            <h3 className="text-lg">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
