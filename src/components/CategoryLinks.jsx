const categories = [
    "Makeup", "Skin", "Hair", "Appliances", "Bath & Body", "Natural",
    "Mom & Baby", "Health & Wellness", "Men", "Fragrance",
    "Lingerie & Accessories", "SALE"
  ];
  
  const CategoryLinks = () => {
    return (
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 py-3 border-b bg-white">
        {categories.map((cat, idx) => (
          <span
            key={idx}
            className={`cursor-pointer ${cat === "SALE" ? "text-pink-600 font-bold" : ""}`}
          >
            {cat}
          </span>
        ))}
      </div>
    );
  };
  
  export default CategoryLinks;
  