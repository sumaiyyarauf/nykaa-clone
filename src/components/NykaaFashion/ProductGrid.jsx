
// Array of product objects with custom images
const products = [
  { title: 'Likha', price: '₹1,750', discount: '65%', label: 'EXPRESS SHIPPING', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/4/3482299DLIKHA00003721_1.jpg?rnd=20200526195200&tr=w-1080', link: '/product/1' },
  { title: 'Gajra Gang', price: '₹1,800', discount: '40%', label: 'BESTSELLER', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/5/15cc33eDGAJRA00006126_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Ganga Fashions', price: '₹4,370', discount: '5%', label: 'BESTSELLER', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/6/1615784ES079B_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Mabish By Sonal Jain', price: '₹2,436', discount: '58%', label: 'BESTSELLER', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/4/a4b5f74TP0528JQPI_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 5', price: '₹2,900', discount: '50%', label: 'NEW ARRIVAL', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/7/17f54b2A911388_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 6', price: '₹3,200', discount: '30%', label: 'TRENDING', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/9/793f562356500R_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 7', price: '₹1,999', discount: '45%', label: 'HOT DEAL', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/d/9d63b09220400_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 8', price: '₹2,499', discount: '60%', label: 'BESTSELLER', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/2/92c7effJ-DN466K_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 9', price: '₹1,300', discount: '20%', label: 'TOP RATED', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/b/cb51f9e4205-SS-1252-19_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 10', price: '₹2,000', discount: '35%', label: 'BESTSELLER', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/9/4917c89SVNBARBIE_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 11', price: '₹3,800', discount: '25%', label: 'LIMITED EDITION', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/1/a1db956LIBAS00000495_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 12', price: '₹4,000', discount: '15%', label: 'NEW ARRIVAL', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/7/17fd541SHEKS10055_SMDR_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 13', price: '₹2,150', discount: '55%', label: 'EXCLUSIVE', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/7/5713f48NK_ADAXX00002764_2.jpg?tr=w-512' },
  { title: 'Product 14', price: '₹1,600', discount: '48%', label: 'BESTSELLER', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/a/ca71719Coords9072_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 15', price: '₹3,100', discount: '18%', label: 'FEATURED', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/5/b51bb3fBITTI605JR_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 16', price: '₹1,900', discount: '40%', label: 'HOT DEAL', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/b/5ba4ae9AHIKA00010575_2.jpg?tr=w-512' },
  { title: 'Product 17', price: '₹2,800', discount: '38%', label: 'TRENDING', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/d/dd7d1daKP-5034OR_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 18', price: '₹4,200', discount: '12%', label: 'NEW ARRIVAL', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/136a506GGBBKS03_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 19', price: '₹1,450', discount: '65%', label: 'DISCOUNTED', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/5/b5f5997DLIKHA00003720_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 20', price: '₹3,900', discount: '28%', label: 'POPULAR', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/6/6650558JPAM_S_0129_1.jpg?rnd=20200526195200&tr=w-512' },
  { title: 'Product 21', price: '₹2,500', discount: '52%', label: 'TRENDING', image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/4/d498bb7WSAT8816_1.jpg?rnd=20200526195200&tr=w-512' },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ml-auto p-4">
      {products.map((product, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-50 object-cover rounded mb-2"
          />
          <div className="mb-2 text-sm font-semibold">{product.label}</div>
          <h3 className="font-medium">{product.title}</h3>
          <p className="text-gray-600">
            {product.price}
            <span className="text-green-600"> {product.discount}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
