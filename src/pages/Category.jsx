import React from 'react';

import { useCollection } from '../hooks/useCollection';
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Category = () => {

  const [productsFiltered, setProductFiltered]= React.useState([]);
  const { categoryId } = useParams();

  const{ data, loading } = useCollection("products")

React.useEffect(() =>{
  const productsFiltered = data.filter((product)=> {
    return product.category === categoryId; })
    setProductFiltered(productsFiltered);
  },[data, categoryId]);

  return (
       loading? <LoaderComponent /> : <ItemListContainer  ProductsData={productsFiltered}/>
      );
  };

export default Category;
