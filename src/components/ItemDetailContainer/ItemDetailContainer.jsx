import React from 'react';
import { Button } from "react-bootstrap"

import './ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount';

import ListGroup from 'react-bootstrap/ListGroup';



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
      <ListGroup>
      <ListGroup.Item><h2>{DetalleProducto.description}</h2></ListGroup.Item>
      <ListGroup.Item>{DetalleProducto.detail}</ListGroup.Item>
      <ListGroup.Item><p className='$'><span>$</span></p>{DetalleProducto.price}</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
      </div>
      <ItemCount />
      { stock > 5 ? <strong>Producto Disponible</strong> : <strong>Ultimas unidades!</strong>}
      <Button className="btn-success" onClick={()=> setStock(stock - 1)}>Agregar al Carrito</Button>
    </div>
    )
  }
export default ItemDetailContainer
