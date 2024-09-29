import React from 'react';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import { SidebarProvider } from './components/SideBarContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop ';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './components/CartContext';
import Checkout from './pages/Checkout';
import FreeTrial from './pages/FreeTrial';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import Example from './pages/Example';
import WhatsAppButton from './components/WhatsAppButton';

const AppContent = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/checkout';
  const hideWhatsapp = location.pathname === '/checkout'

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <main className="flex-grow">
      {!hideWhatsapp && <WhatsAppButton />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/example" element={<Example />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </main>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white flex flex-col h-screen">
      <Router>
        <ScrollToTop />
        <SidebarProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </SidebarProvider>
      </Router>
    </div>
  );
}
