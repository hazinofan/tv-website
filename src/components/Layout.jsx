import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  // Only hide Navbar and Footer on the checkout page
  const hideNavbarAndFooter = location.pathname === '/checkout';

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

export default Layout;
