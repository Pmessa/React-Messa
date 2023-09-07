import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

import { ProductsData } from '../json/ProductsData'


const Home = () => {

  return (
    <ItemListContainer ProductsData={ProductsData} /> 
  );
};


export default Home;
