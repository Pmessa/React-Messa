import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

import "./ItemCount.css"



const ItemCount = () => {
  const [count, setCount] = useState(0);
  const {cartItems, setCartItems} = useContext (CartContext);

const handleAddProduct = ()  =>{

  setCartItems( cartItems + 1)
  setCount(count + 1 )

}
const handleRemoveProduct = ()  =>{

  if (cartItems > 0 ){
    setCartItems(cartItems - 1)
    setCount(count - 1 )

  }


};


  return (
    <div>
      <button  className="btn btn-add" onClick={handleRemoveProduct}>-</button >
      <label>{count}</label>
      <button className="btn btn-remove" onClick={handleAddProduct}>+</button >
    </div>
  )
};

export default ItemCount
