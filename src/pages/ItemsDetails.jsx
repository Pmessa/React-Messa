import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsData } from '../json/ProductsData';

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const ItemsDetails = () => {

const {itemId} = useParams();

const detalleId = ProductsData.filter((item)=>  item.id === (itemId));
 
return (

    <ItemDetailContainer DetalleProducto={detalleId}/>

  );
};

export default ItemsDetails;

