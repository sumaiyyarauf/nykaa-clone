// components/Sidebar.js
const Sidebar = () => {
    const filters = ['Brand', 'Price', 'Category', 'Discount', 'Avg Customer Rating', 'Color'];
  
    return (
      <div className="w-64 p-4 bg-gray-100 rounded">
        <div className="mb-4">
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Sort By : Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        {filters.map((filter, index) => (
          <div key={index} className="mb-4">
            <div className="font-semibold">{filter}</div>
            <div className="border-t border-gray-300 mt-2"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Sidebar;
  