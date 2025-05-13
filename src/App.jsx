import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LuxePage from './pages/LuxePage';
import NykaaFashion from './pages/NykaaFashion';
import BeautyAdvisoryPage from './pages/BeautyAdvisoryPage';
import ProductDetails from './components/Products/ProductDetails';
import MakeupProducts from './components/Products/MakeupProducts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luxe" element={<LuxePage />} />
        <Route path="/fashion" element={<NykaaFashion />} />
        <Route path="/beauty" element={<BeautyAdvisoryPage />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/makeup" element={<MakeupProducts />} />
        <Route path="/product/:id" element={<div>Product Details</div>} />
      </Routes>
    </Router>
  );
}

export default App;
