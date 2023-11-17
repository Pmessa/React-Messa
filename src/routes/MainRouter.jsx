import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category"; 
import ItemsDetails from "../pages/ItemsDetails";
import NavBar from "../components/NavBar/NavBar";
import Cart from "../pages/Cart";
import Img from "../pages/img";


const MainRouter = () => {
  return (

   
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/img/:itemId" element={<Img />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<ItemsDetails />} />
        <Route path="/Cart/:itemId" element={<Cart />} />
      </Routes>
    </Router>

  );
};

export default MainRouter;
