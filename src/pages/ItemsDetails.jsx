import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
// import { ProductsData } from '../json/ProductsData';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemsDetails = () => {

  const [products, setProducts] = useState([]);

  const { itemId } = useParams();

  useEffect(() => {
    //Inicializar la base de datos
    const db = getFirestore();

    //Inicializamos la coleccion
    const item = doc(db, "products", itemId);

    //Obtener los datos del documento
    getDoc(item)
      .then((snapshot) => {
        setProducts({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => {
        console.log(error);
      })
     

  }, [itemId])


  // const detalleId = products.find((item)=>  item.id === (itemId));
  // console.log( detalleId )
  return (

    <ItemDetailContainer DetalleProducto={products} />

  );
};

export default ItemsDetails;

