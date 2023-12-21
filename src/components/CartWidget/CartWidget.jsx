import { useContext } from "react";
import "./CartWidget.css";
import 'animate.css';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { cartItems } = useContext(CartContext)


  return (
    <div className="cart-widget">

      <div className="cartWidgetLink">
        <Link to="/item/itemId"><img src="../../../public/cart-tr.png" alt="cartImg" />
        </Link>
        
        <strong className="animate__animated animate__bounce animate__delay-5s animate__slower animate__infinite cantCarrito cartNumber">{cartItems}</strong>
      </div>

    </div>


  )
}
export default CartWidget;