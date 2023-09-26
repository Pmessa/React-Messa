import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemsDetails = () => {

 

  const [products, setProducts] = useState([]);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "products", itemId);

    getDoc(item)
      .then((snapshot) => {
        setProducts({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => {
        console.log(error);
      })
    
  }, [itemId])

  return (

    <ItemDetailContainer DetalleProducto={products} />

  );
};

export default ItemsDetails;

