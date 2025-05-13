import { Link } from 'react-router-dom';
import TopBanner from '../home/TopBanner';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MakeupProducts = () => {

  const products = [
    {
      title: 'Lakme Forever Matte Liquid Lip Color, 16Hr Lipstick, Lightweight',
      price: '₹279',
      mrp: '₹429',
      discount: '35% Off',
      offer: 'New Packaging',
      tag: 'NYKAA_WALI_SHAADI',
      rating: '4.3',
      reviews: '125019',
      label1: 'NEW PACKAGING',
      image: 'https://images-static.nykaa.com/media/catalog/product/0/0/0060d708901030758942-new_2.jpg?tr=w-344,h-344,cm-pad_resize',
      link: '/product/1'
    },
    {
      title: 'Maybelline New York Sensational Liquid Matte',
      price: '₹365',
      mrp: '₹429',
      discount: '15% Off',
      offer: 'Get Complimentary Product',
      tag: 'FEATURED BESTSELLER',
      rating: '4.5',
      reviews: '99278',
      label1: 'NUDE NUANCE',
      label2: 'TRY ON',
      image: 'https://images-static.nykaa.com/media/catalog/product/a/3/a398c606902395739647-newadd_2.jpg?tr=w-344,h-344,cm-pad_resize',
      link: '/product/2'
    },
    {
      title: 'Nykaa Cosmetics Matte-ilicious Lip Crayon Lipstick',
      price: '₹400',
      mrp: '₹799',
      discount: '50% Off',
      offer: 'Enjoy Complimentary Gift',
      tag: 'FEATURED BESTSELLER',
      rating: '4.6',
      reviews: '99278',
      label1: 'Light Nude',
      label2: 'FREE SHARPNER',
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/6/26b4f6a8908020868674-1.jpg',
      link: '/product/3'
    },
  ];

  return (
    <>
    <TopBanner />
    <Navbar />
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className="block bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <div className="text-blue-600 text-xs font-semibold mb-1">{product.tag}</div>
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover rounded"
              />
              {product.label1 && (
                <span className="absolute top-2 right-2 bg-black text-white text-xs py-1 px-2 rounded">
                  {product.label1}
                </span>
              )}
              {product.label2 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs py-1 px-2 rounded">
                  {product.label2}
                </span>
              )}
            </div>
            <h3 className="font-semibold mt-2 text-gray-800">{product.title}</h3>
            <p className="text-gray-600 text-sm mt-1">
              MRP: <span className="line-through">{product.mrp}</span> {product.price}
              <span className="text-green-600"> {product.discount}</span>
            </p>
            <p className="text-pink-600 text-sm">{product.offer}</p>
            <div className="flex items-center mt-1">
              <span className="text-yellow-500">★ {product.rating}</span>
              <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <Footer/>

    </>
  );
};

export default MakeupProducts;
