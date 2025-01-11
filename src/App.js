import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";

// Import your existing pages and components
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./components/ProductDetails";
import FreeTrial from "./pages/FreeTrial";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop ";
import Layout from "./components/Layout";
import TermsAndConditions from "./components/TermsAndConditions";
import ThankYouPage from "./pages/Thankyou";
import WhatsAppButton from "./components/WhatsAppButton";
import { useContext } from "react";
import "./i18n";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import AdminDashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Reports from "./pages/Reports"; // Import the Reports page

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { admin } = useContext(AuthContext);
  const storedToken = localStorage.getItem("adminToken");

  if (admin === null && !storedToken) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

// Track Mouse Clicks for Heatmaps
function App() {
  useEffect(() => {
    const handleClick = (event) => {
      axios.post("https://platinium-backend.onrender.com/api/click", {
        userId: localStorage.getItem("userId") || "guest",
        page: window.location.pathname,
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Track Scroll Depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      axios.post("https://platinium-backend.onrender.com/api/scroll", {
        userId: localStorage.getItem("userId") || "guest",
        page: window.location.pathname,
        scrollPercentage: scrollPercent,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <WhatsAppButton
          phoneNumber="447453930081"
          message="Hello, I would like to get more information about your services."
        />
        <usePageTracking /> {/* Track page views and time spent */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/produits" element={<Layout><Products /></Layout>} />
          <Route path="/produits/:name" element={<Layout><ProductDetails /></Layout>} />
          <Route path="/test-gratuit" element={<Layout><FreeTrial /></Layout>} />
          <Route path="/blogs" element={<Layout><Blog /></Layout>} />
          <Route path="/blogs/:id" element={<Layout><BlogPage /></Layout>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/termes-et-conditions" element={<Layout><TermsAndConditions /></Layout>} />
          <Route path="/thank-you" element={<ThankYouPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Admin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
