import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
      <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
      <p className="text-pink-600 font-bold">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
