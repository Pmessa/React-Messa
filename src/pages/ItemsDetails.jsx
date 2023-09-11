import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { ProductsData } from '../json/ProductsData';


const ItemsDetails = () => {

const {itemId} = useParams();
console.log(itemId)

const detalleId = ProductsData.filter((item) =>  item.id === (itemId));
  return (

    <ItemDetailContainer ItemDetailContainer = {detalleId}/>
  );
};

export default ItemsDetails;

