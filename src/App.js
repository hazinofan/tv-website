import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./components/ProductDetails";
import FreeTrial from "./pages/FreeTrial";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop ";
import Layout from "./components/Layout"; // New component to handle Navbar/Footer visibility
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/produits" element={<Layout><Products /></Layout>} />
          <Route path="/produits/:name" element={<Layout><ProductDetails /></Layout>} />
          <Route path="/test-gratuit" element={<Layout><FreeTrial /></Layout>} />
          <Route path="/blogs" element={<Layout><Blog /></Layout>} />
          <Route path="/blogs/:id" element={<Layout><BlogPage /></Layout>} />
          <Route path="/checkout" element={<Checkout />} /> {/* No Layout to hide Navbar/Footer */}
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/termes-et-conditions" element={<Layout><TermsAndConditions /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
