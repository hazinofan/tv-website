import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { admin } = useContext(AuthContext);
  return admin ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <WhatsAppButton
            phoneNumber="447453930081"
            message="Hello, I would like to get more information about your services."
          />
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
      </div>
    </AuthProvider>
  );
}

export default App;
