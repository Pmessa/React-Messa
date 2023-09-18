import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
// import { ProductsData } from '../json/ProductsData';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

import { collection, getDocs, getFirestore } from "Firebase/firestore"

const ItemsDetails = () => {

  const [products, setProducts]= useState([]);

  useEffect(()=>{
    //Inicializar la base de datos
    const db = getFirestore();

    //inicializamos la coleccion
    const productsCollection = collection(db, "products");

    //Obtener los datos de la coleccion
    getDocs(productsCollection).then((snapshot) =>{
      setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
    })

  }, [])

const { itemId } = useParams();


const detalleId = products.find((item)=>  item.id == (itemId));
console.log( detalleId )
return (

    <ItemDetailContainer DetalleProducto={detalleId}/>
 
  );
};

export default ItemsDetails;

