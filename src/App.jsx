
import { Route, Routes} from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import About from "./pages/about/About";
import Sale from "./pages/sale/Sale";
import Features from './pages/features/Features'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'





function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/sale" element={<Sale/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>
    
   
        
    </>
  );
}

export default App;




