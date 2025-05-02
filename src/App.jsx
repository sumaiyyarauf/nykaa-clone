import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LuxePage from './pages/LuxePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luxe" element={<LuxePage />} />
      </Routes>
    </Router>
  );
}

export default App;
