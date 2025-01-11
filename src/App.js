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

// Function to track user visits
const trackVisit = async (page) => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const { ip } = await response.json();

    await axios.post("https://platinium-backend.onrender.com/api/track", {
      ip,
      userId: localStorage.getItem("userId") || "guest",
      referrer: document.referrer,
      page,
      timeSpent: 0, // Will be updated when user leaves
    });
  } catch (error) {
    console.error("Error tracking visit:", error);
  }
};


// Function to track time spent
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const startTime = Date.now();
    trackVisit(location.pathname);

    return () => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime) / 1000);

      axios.post("https://platinium-backend.onrender.com/api/track", {
        ip: localStorage.getItem("userIp"),
        userId: localStorage.getItem("userId") || "guest",
        page: location.pathname,
        timeSpent,
      });
    };
  }, [location]);
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { admin } = useContext(AuthContext);
  return admin ? children : <Navigate to="/admin/login" />;
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
