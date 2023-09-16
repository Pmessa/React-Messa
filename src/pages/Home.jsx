import React, { useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { collection, getDocs, getFirestore } from "Firebase/firestore"
import { ProductsData } from '../json/ProductsData'


const Home = () => {

  useEffect(()=>{
    //Inicializar la base de datos
    const db = getFirestore();

    //inicializamos la coleccion
    const productsCollection = collection(db,"products");

    //Obtener los datos de la coleccion
    getDocs(productsCollection).then((snapshot) =>{
      setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
    })

  }, [])

  return (
    <ItemListContainer ProductsData={ProductsData} /> 
  );
};


export default Home;
