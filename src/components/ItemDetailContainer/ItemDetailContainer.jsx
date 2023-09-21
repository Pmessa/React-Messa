import React from 'react';
import './ItemDetailContainer.css'


const ItemDetailContainer = ({DetalleProducto}) => {

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
    </div>
    )
  }
export default ItemDetailContainer
