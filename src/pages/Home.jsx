import React, { useEffect } from 'react'
import { collection, getDocs, getFirestore } from "Firebase/firestore"

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useState } from 'react';


const Home = () => {

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

  return (
    <ItemListContainer ProductsData={products} /> 
  );
};


export default Home;
