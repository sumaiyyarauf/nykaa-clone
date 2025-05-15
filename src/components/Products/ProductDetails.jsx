import { useState } from 'react';

const ProductDetails = () => {
  const product = {
    name: 'Gajra Gang',
    description: 'Frida Farida Pink Chiffon Tie Dye Kaftan GGFFKAF01 (Free Size)',
    rating: 3.0,
    reviews: 5,
    price: 1800,
    originalPrice: 2999,
    discount: 40,
    modelDetails: 'Model Height is 5.9 ft and is wearing a size XS',
    images: [
      'https://images-static.nykaa.com/media/catalog/product/8/9/8905017818947_1.jpg',
      'https://images-static.nykaa.com/media/catalog/product/8/9/8905017818947_2.jpg',
      'https://images-static.nykaa.com/media/catalog/product/8/9/8905017818947_3.jpg',
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6 bg-white rounded-md shadow-md">
 
      <div className="flex flex-col items-center gap-2">

        <div className="flex flex-col gap-2 overflow-y-auto max-h-72">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className={`w-20 h-20 object-cover cursor-pointer rounded-md ${
                selectedImage === img ? 'border-2 border-pink-500' : 'border'
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-80 h-96 object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-blue-600 text-sm mt-1">BESTSELLER | ONLY ON NYKAA</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{product.rating} ★</span>
          <p className="text-gray-500">Based on {product.reviews} ratings</p>
        </div>

        <div className="text-2xl font-semibold text-green-600">₹{product.price} <span className="text-lg line-through text-gray-400">₹{product.originalPrice}</span> <span className="text-green-500">({product.discount}% Off)</span></div>
        <p className="text-gray-500">Inclusive of all taxes</p>

        <div className="border rounded-md p-3 bg-gray-100 text-sm">
          <p className="font-semibold">MODEL DETAILS</p>
          <p>{product.modelDetails}</p>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="w-1/2 py-2 text-gray-800 border border-gray-400 rounded-md hover:bg-gray-100 transition">
            Add to Wishlist
          </button>
          <button className="w-1/2 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
