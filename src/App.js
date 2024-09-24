import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />}  />  
              <Route path="/produits" element={<Products />}  />  
            </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
