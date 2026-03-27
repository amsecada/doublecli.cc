import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyKAR from './pages/CaseStudyKAR';
import CaseStudyDevOpsEngine from './pages/CaseStudyDevOpsEngine';
import CaseStudyIRSVisibility from './pages/CaseStudyIRSVisibility';
import CaseStudyAppirioDX from './pages/CaseStudyAppirioDX';
import Resources from './pages/Resources';
import BookCall from './pages/BookCall';
import Products from './pages/Products';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/restoring-trust-commercial-data-after-acquisition" element={<CaseStudyKAR />} />
        <Route path="/case-studies/scalable-devops-delivery-engine" element={<CaseStudyDevOpsEngine />} />
        <Route path="/case-studies/federal-system-user-experience-visibility" element={<CaseStudyIRSVisibility />} />
        <Route path="/case-studies/enterprise-product-adoption-system" element={<CaseStudyAppirioDX />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
    </div>
  );
}

export default App;
