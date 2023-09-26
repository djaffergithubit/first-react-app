import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './pages/login-register/LoginRegister';
import SingleProduct from './pages/singleProduct/SingleProduct';
import WishList from './pages/wishList/WishList';
import CartSlide from './components/cartSlide/CartSlide';
import { useSelector } from 'react-redux';
import { selectShow } from './components/Header/ShowSlice';

function App() {
  const showCartSelect = useSelector(selectShow)

  return <div>
    {<Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login-register" element={<LoginRegister/>}/>
        <Route path="/single-product/:productName" element={<SingleProduct />}/>
        <Route path="/Wishlist" element={<WishList/>}/>
        <Route path="/Cart" element={<CartSlide />}/>
      </Routes>
    </Router> }
      {showCartSelect.showCart && <CartSlide />}
  </div>
}

export default App;
