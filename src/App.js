import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import FreeTrial from "./pages/FreeTrial";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/ScrollToTop ";


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />}  />  
              <Route path="/produits" element={<Products />}  />  
              <Route path="/produits/:name" element={<ProductDetails />}  />  
              <Route path="/test-gratuit" element={<FreeTrial />}  />  
              <Route path="/Blogs" element={<Blog />}  />  
              <Route path="/Blogs/:id" element={<BlogPage />}  />  
            </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
