import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import BookCall from './pages/BookCall';
import Products from './pages/Products';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
    </div>
  );
}

export default App;
