import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LuxePage from './pages/LuxePage';
import NykaaFashion from './pages/NykaaFashion';
import BeautyAdvisoryPage from './pages/BeautyAdvisoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luxe" element={<LuxePage />} />
        <Route path="/fashion" element={<NykaaFashion />} />
        <Route path="/beauty" element={<BeautyAdvisoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
