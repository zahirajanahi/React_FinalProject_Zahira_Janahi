import { Route, Routes} from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import About from "./pages/about/About";
import Sale from "./pages/sale/Sale";
import Features from './pages/features/Features'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Navbar from "./layouts/navbar";
import ProductDetail from "./pages/shop/ProductDetail";
import { MyProvider } from "./context";
import { Auth } from "./auth/Auth";
import { Register } from "./auth/Register";



function App() {
  const cartItems = [];
  return (
    <>
    <MyProvider>
    <Navbar cartItems={cartItems} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/sale" element={<Sale/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
    
   </MyProvider>
        
    </>
  );
}

export default App;




