import React, { useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount';

import { Button } from "react-bootstrap"



const ItemDetailContainer = ({DetalleProducto}) => {

  const [stock, setStock] = React.useState(10)
  console.log(stock)

 
  return (
    <div className='DetailContainer' key={DetalleProducto.id}>

      <h1>{DetalleProducto.title}</h1>
    
    <div className='CardContainer'>
      <div className='ImgContainer'>
      <img src={DetalleProducto.img} alt="Imagen del producto" />
      </div>
      <div className='TextTitle'>
      <h3>{DetalleProducto.description}</h3>
      <p>{DetalleProducto.detail}</p>
      
      <div className='PriceContainer'></div>
      <p><span>$</span> {DetalleProducto.price}</p>
      </div>
      </div>
      <ItemCount />
      { stock > 5 ? <strong>Producto Disponible</strong> : <strong>Ultimas unidades!</strong>}
      <Button className="btn-info" onClick={()=> setStock(stock - 1)}>Agregar al Carrito</Button>

    </div>
    )
  }
export default ItemDetailContainer
