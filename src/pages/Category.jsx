import React from 'react';
import {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom'
// import { ProductsData } from '../json/ProductsData'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

import { collection, getDocs, getFirestore } from "firebase/firestore"

const Category = () => {

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

  const { categoryId } = useParams();


  const filtrados = products.filter((item)=> item.category === categoryId);
  return (
       <ItemListContainer  ProductsData={filtrados}/>
      );
  };

export default Category;
