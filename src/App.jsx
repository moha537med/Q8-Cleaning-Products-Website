import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import NotFoundPage from './pages/NotFoundPage';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Public Website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/order" element={<Order />} />

          <Route path="/contact" element={<Contact />} />

          {/* Not Found Page 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;