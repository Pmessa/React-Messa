import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

import "./ItemCount.css"

import { Button } from "react-bootstrap"

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
      <Button  className="btn-success" onClick={handleRemoveProduct}>-</Button >
      <label>{count}</label>
      <Button className="btn-success" onClick={handleAddProduct}>+</Button >
    </div>
  )
};

export default ItemCount
