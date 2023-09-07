import React from 'react';
import { useParams } from 'react-router-dom'
import { ProductsData } from '../json/ProductsData'

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Category = () => {

  const { categoryId } = useParams();
  console.log(categoryId)

  const filter = ProductsData.filter((item)=> item.categoria === categoryId);
  return (
       <ItemListContainer  ProductsData={filter}/>
      );
  };

export default Category;
